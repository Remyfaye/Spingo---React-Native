import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, PasswordInput } from "@components/Form";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { BizRegStore } from "@store/BizRegStore";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS, FONTSIZE } from "@constants/theme";
import { showMessage } from "react-native-flash-message";
import { register } from "@services/api/auth";
import Spinner from "react-native-loading-spinner-overlay";
import { mainStyles } from "@styles/styles";

const PasswordSetup = () => {
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: BizRegStore.useState((s: any) => s),
  });
  const onSubmit = async (data: any) => {
    if (!terms || !marketing) {
      showMessage({
        message: `Both Boxes Must be Checked`,
        type: "danger",
      });
    } else if (data?.password !== data?.confirmpassword) {
      // Throw an Error
      showMessage({
        message: "Passwords Does not Match",
        type: "danger",
      });
    } else {
      BizRegStore.update((s: any) => {
        s.password = data?.password;
      });
      setLoading(true);
      let postData = {
        businessName: getValues("businessName"),
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
        emailAddress: getValues("emailAddress"),
        phoneNumber: getValues("phoneNumber"),
        password: data?.password,
        address: getValues("address"),
        state: getValues("state"),
        city: getValues("city"),
        country: getValues("country"),
        referral: "",
        industry: getValues("industry"),
        logo: "",
        subPlan: "BASIC",
      };
      try {
        await register(postData);
        showMessage({
          message: `Registration Successful`,
          type: "success",
        });
        router.push({
          pathname: `/Auth/Registration/VerifyEmail`,
          params: {
            email: getValues("emailAddress"),
          },
        });
      } catch (error: any) {
        showMessage({
          message: `${error}`,
          type: "danger",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={mainStyles.paddingContainer}>
      <Spinner visible={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View
            style={[
              mainStyles.containerBetween,
              { marginBottom: 5, marginTop: 20 },
            ]}
          >
            <Text style={[mainStyles.heading, { textAlign: "center" }]}>
              Hey, {getValues().businessName}
            </Text>
            <Text style={[mainStyles.smallGrayText, { textAlign: "center" }]}>
              Set up your Password
            </Text>
          </View>
          {/* Form COntent */}
          <View style={{ width: "100%", marginTop: 10 }}>
            {/* Password */}
            <PasswordInput
              name="password"
              title="Password"
              placeholder="Enter Password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password Must be atleast 6 Characters",
                },
              }}
            />
            {/* Confirm Password */}
            <PasswordInput
              name="confirmpassword"
              title="Confirm Password"
              placeholder="Confirm Your Password"
              control={control}
              rules={{
                required: "Confirm Password is required",
                minLength: {
                  value: 6,
                  message: "Confirm Password Must be atleast 6 Characters",
                },
              }}
            />
            {/* CheckBoxes */}
            <View style={{ marginTop: 20 }}>
              {/* Terms and Condition */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 6,
                  marginTop: 3,
                  marginBottom: 10,
                }}
              >
                <TouchableOpacity onPress={() => setTerms(!terms)}>
                  {terms ? (
                    <FontAwesome6
                      name="square-check"
                      size={20}
                      color={COLORS.primary}
                    />
                  ) : (
                    <FontAwesome6
                      name="square"
                      size={20}
                      color={COLORS.spinGray}
                    />
                  )}
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: FONTSIZE.size_12,
                    color: COLORS.black,
                    paddingRight: 20,
                  }}
                >
                  By proceeding, you agree to our main services agreement, user{" "}
                  <Text style={{ color: COLORS.primary }}>
                    terms and conditions
                  </Text>
                  , as well as our{" "}
                  <Text style={{ color: COLORS.primary }}>
                    {" "}
                    privacy and cookie policies.{" "}
                  </Text>
                </Text>
              </View>
              {/* Marketing */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 6,
                  marginTop: 3,
                  marginBottom: 10,
                }}
              >
                <TouchableOpacity onPress={() => setMarketing(!marketing)}>
                  {marketing ? (
                    <FontAwesome6
                      name="square-check"
                      size={20}
                      color={COLORS.primary}
                    />
                  ) : (
                    <FontAwesome6
                      name="square"
                      size={20}
                      color={COLORS.spinGray}
                    />
                  )}
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: FONTSIZE.size_12,
                    paddingRight: 20,
                    color: COLORS.black,
                  }}
                >
                  By proceeding, you consent to receive marketing communications
                  and promotional materials from us. You can opt out at any time
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      {/* Button */}
      <Button text="Create" onPressBtn={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default PasswordSetup;
