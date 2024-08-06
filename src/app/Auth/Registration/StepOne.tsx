import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoIcon, TimesIcon } from "@components/Icons";
import { Button, InputField, NumberField } from "@components/Form";
import { useForm } from "react-hook-form";
import { emailReg, numReg, textReg } from "@constants/regex";
import { CountryDTO } from "@constants/typings/generic";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { BizRegStore } from "@store/BizRegStore";
import { router } from "expo-router";
import { mainStyles } from "@styles/styles";
import { COLORS, FONTSIZE } from "@constants/theme";

const StepOne = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryDTO>({
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  });
  const { handleSubmit, control } = useForm({
    defaultValues: BizRegStore.useState((s: any) => s),
  });
  const onSubmit = (data: any) => {
    BizRegStore.update((s: any) => {
      s.firstName = data?.firstName;
      s.lastName = data?.lastName;
      s.emailAddress = data?.emailAddress;
      s.phoneNumber = `${selectedCountry.dial_code.slice(1)}${
        data?.phoneNumber
      }`;
    });
    router.push("/Auth/Registration/StepTwo");
  };
  return (
    <SafeAreaView style={mainStyles.paddingContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View style={mainStyles.flexRowBetween}>
            {/* Icon */}
            <TimesIcon />
            {/* Logo */}
            <LogoIcon />
            {/* Dummy */}
            <View />
          </View>
          {/* Header Desc */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: FONTSIZE.size_24,
                fontWeight: "600",
                textAlign: "center",
                color: COLORS.black,
              }}
            >
              Business Registration
            </Text>
            <Text
              style={[
                mainStyles.smallGrayText,
                { textAlign: "center", paddingHorizontal: 20 },
              ]}
            >
              Create an admin account for Your Business
            </Text>
          </View>
          {/* Form COntent */}
          {/* First Name */}
          <InputField
            name="firstName"
            title="First Name"
            placeholder="First Name"
            control={control}
            rules={{
              required: "First Name is required",
              pattern: {
                value: textReg,
                message: "Only Text Allowed",
              },
            }}
            isTrim
          />
          {/* Last Name */}
          <InputField
            name="lastName"
            title="Last Name"
            placeholder="Last Name"
            control={control}
            rules={{
              required: "Last Name is required",
              pattern: {
                value: textReg,
                message: "Only Text Allowed",
              },
            }}
            isTrim
          />
          {/* Email */}
          <InputField
            name="emailAddress"
            title="Email Address"
            placeholder="Email Address"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: emailReg,
                message: "Invalid Emaill Address",
              },
            }}
            isTrim
          />
          {/* Phone Number */}
          <NumberField
            name="phoneNumber"
            title="Phone Number"
            placeholder="Enter your Phone Number"
            control={control}
            isTrim
            rules={{
              required: "Phone Number is required",
              pattern: {
                value: numReg,
                message: "Invalid Phone Number Address",
              },
            }}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </KeyboardAwareScrollView>
      </ScrollView>
      {/* Button */}
      <Button text="Continue" onPressBtn={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default StepOne;
