import { View, Text } from "react-native";
import React, { useState } from "react";
import { LogoIcon, SuccessIcon } from "@components/Icons";
import { login } from "@services/api/auth";
import { router } from "expo-router";
import { Button } from "@components/Form";
import { useAuthContext } from "@context/AuthContext";
import { useForm } from "react-hook-form";
import { BizRegStore } from "@store/BizRegStore";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";
import { mainStyles } from "@styles/styles";
import { FONTSIZE } from "@constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const SuccessVerification = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser, setToken } = useAuthContext();
  const { getValues } = useForm({
    defaultValues: BizRegStore.useState((s: any) => s),
  });
  const onSubmit = async () => {
    setLoading(true);
    let postData = {
      email: getValues("emailAddress"),
      password: getValues("password"),
    };
    try {
      let res = await login(postData);
      const user = res?.user;
      const token = res?.token;
      await AsyncStorage.setItem("user", JSON.stringify(user));
      await AsyncStorage.setItem("token", token);
      setAuthUser(user);
      setToken(token);
      router.push({
        pathname: `/Menu/Home`,
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
  return (
    <SafeAreaView
      style={[
        mainStyles.containerBetween,
        { alignItems: "center", paddingTop: 20 },
      ]}
    >
      <Spinner visible={loading} />
      {/* Header */}
      <LogoIcon />
      {/* Content */}
      <View>
        <SuccessIcon />
        <Text
          style={{
            textAlign: "center",
            fontSize: FONTSIZE.size_18,
            marginTop: 20,
          }}
        >
          Verification Successful!
        </Text>
      </View>
      {/* Button (Click to Login) */}
      <Button text="Continue" isDisabled={false} onPressBtn={onSubmit} />
    </SafeAreaView>
  );
};

export default SuccessVerification;
