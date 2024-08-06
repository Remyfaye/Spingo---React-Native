import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { showMessage } from "react-native-flash-message";
import {
  activateAccount,
  sendEmailOTP,
  verifyEmailOTP,
} from "@services/api/auth";
import Spinner from "react-native-loading-spinner-overlay";
import { COLORS, FONTSIZE } from "@constants/theme";
import { Button, SplitField } from "@components/Form";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { resetPassword } from "@constants/imports";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "@styles/styles";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const params = useLocalSearchParams();

  const { email } = params;
  useEffect(() => {
    sendOTP();
  }, [email]);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isCounting) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => Math.max(prevCountdown - 1, 0));
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isCounting]);
  useEffect(() => {
    if (countdown === 0) {
      setIsCounting(false);
    } else {
      setIsCounting(true);
    }
  }, [countdown]);
  useEffect(() => {
    if (otp.length === 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [otp]);
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const sendOTP = async () => {
    setLoading(true);
    try {
      const res = await sendEmailOTP(email as any);
      setCountdown(300);
      setIsCounting(true);
      showMessage({
        message: `${res?.message}`,
        type: "success",
      });
    } catch (error: any) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleOTPChange = (newOtp: string) => {
    setOtp(newOtp);
  };
  const onVerifyOTP = async () => {
    setLoading(true);
    let postData = {
      email: email as string,
      otp,
    };
    try {
      await verifyEmailOTP(postData);
      await activateAccount(email as string);
      router.push("/Auth/Registration/SuccessVerification");
    } catch (error: any) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={mainStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Spinner visible={loading} />
          <View>
            {/* Header */}
            <View style={innerStyles.headerCont}>
              <Image
                source={resetPassword}
                resizeMode="contain"
                style={{ height: 220, width: 220, marginBottom: 20 }}
              />
              <Text style={[mainStyles.heading, { textAlign: "center" }]}>
                Verify your email
              </Text>
              <Text
                style={[
                  mainStyles.text,
                  {
                    textAlign: "center",
                    marginVertical: 10,
                    fontSize: 14,
                    fontWeight: "500",
                  },
                ]}
              >
                An OTP has been sent to your email
              </Text>
              <Text
                style={{
                  color: COLORS.spinGray,
                }}
              >
                {email}
              </Text>
            </View>
            {/* COntent */}
            <View style={{ marginBottom: 100 }}>
              {/* Input Field */}
              <View style={{ marginBottom: 5 }}>
                <SplitField otp={otp} setOtp={handleOTPChange} />
              </View>
              {/* Coundown */}
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "500" }}>
                  Didn't receive any code?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    disabled={isCounting}
                    onPress={sendOTP}
                    style={{ opacity: isCounting ? 0.4 : 1 }}
                  >
                    <Text
                      style={{
                        fontWeight: "600",
                        color: COLORS.primary,
                        textAlign: "center",
                        marginLeft: 5,
                      }}
                    >
                      Resend code{" "}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      innerStyles.resendText,
                      { fontWeight: "600", color: COLORS.spinGray },
                    ]}
                  >{`${
                    isCounting ? `in ${formatTime(countdown)} mins` : ""
                  }`}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Submit */}
          <Button
            text="Continue"
            isDisabled={disabled}
            onPressBtn={onVerifyOTP}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyEmail;

const innerStyles = StyleSheet.create({
  headerCont: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  resendText: {
    color: COLORS.gray,
    fontSize: FONTSIZE.size_14,
    textAlign: "center",
  },
});
