import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, InputField, PasswordInput } from "@components/Form";
import { emailReg } from "@constants/regex";
import { useForm } from "react-hook-form";
import { Link, router } from "expo-router";
import { COLORS, FONTSIZE } from "@constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "@context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "@styles/styles";
import { login } from "@services/api/auth";
import { LogoIcon } from "@components/Icons";

const Login = () => {
  const [isRememberMe, setIsRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm();
  const { setAuthUser, setToken, authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      router.push("/Menu/Home");
    }
  }, [authUser]);
  const onSubmit = async (data: any) => {
    setLoading(true);
    let postData = {
      email: data?.emailAddress,
      password: data?.password,
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
    <SafeAreaView style={mainStyles.paddingContainer}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* SPinner */}
        <Spinner visible={loading} color={COLORS.primary} />
        <View style={[mainStyles.containerBetween, { paddingHorizontal: 0 }]}>
          {/* Header */}
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            {/* Logo */}
            <LogoIcon />
            <Text
              style={{
                fontSize: FONTSIZE.size_16,
                fontWeight: "500",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Welcome Back!
            </Text>
            <View />
          </View>
          {/* Content */}
          <View style={{ width: "100%" }}>
            {/* Email */}
            <InputField
              name="emailAddress"
              title="Email Address"
              placeholder="Email Address"
              control={control}
              isTrim
              rules={{
                required: "Email is required",
                pattern: {
                  value: emailReg,
                  message: "Invalid Emaill Address",
                },
              }}
            />
            {/* Password */}
            <PasswordInput
              name="password"
              title="Password"
              placeholder="Enter Password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password Must be atleast 8 Characters",
                },
              }}
            />
            {/* Remember Me and Forgot Passsword */}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Remember ME */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  marginTop: 3,
                  marginBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => setIsRememberMe(!isRememberMe)}
                >
                  {isRememberMe ? (
                    <FontAwesome6
                      name="square-check"
                      size={18}
                      color={COLORS.primary}
                    />
                  ) : (
                    <FontAwesome6
                      name="square"
                      size={18}
                      color={COLORS.spinGray}
                    />
                  )}
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.black,
                    fontWeight: "500",
                  }}
                >
                  Remember Me
                </Text>
              </View>
              {/* Forgot Password */}
              <Link href={"/Auth/Password/ForgotPassword"}>
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.spinGray,
                    fontWeight: "500",
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot Password?
                </Text>
              </Link>
            </View>
            {/* Button */}
            <View style={{ width: "100%", marginTop: 10 }}>
              <Button onPressBtn={handleSubmit(onSubmit)} text="Login" />
            </View>
          </View>
          {/* Don't Have an Account */}
          <Text style={{ textAlign: "center", color: COLORS.black }}>
            Don’t have an Account yet?
            <Link href={"/Auth/Registration/StepOne"}>
              <Text style={{ fontWeight: "600", color: COLORS.primary }}>
                {" Sign Up"}
              </Text>
            </Link>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
