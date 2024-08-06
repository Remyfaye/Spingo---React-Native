import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "@components/Icons";
import { Button, InputField } from "@components/Form";
import { Controller, useForm } from "react-hook-form";
import { COLORS, FONTSIZE } from "@constants/theme";
import { Picker } from "@react-native-picker/picker";
import { BizRegStore } from "@store/BizRegStore";
import { router } from "expo-router";
import { mainStyles } from "@styles/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const StepTwo = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: BizRegStore.useState((s: any) => s),
  });
  const industries = [
    "Retail",
    "Hospitality",
    "Education",
    "Healthcare",
    "Real estate",
    "Legal",
    "Transportation and logistics",
    "Finance",
    "Construction",
    "Technology",
    "Consulting",
    "Beauty and Wellness",
    "Agriculture",
    "Other",
  ];
  const onSubmit = (data: any) => {
    BizRegStore.update((s: any) => {
      s.businessName = data?.businessName;
      s.industry = data?.industry;
    });
    router.push("/Auth/Registration/StepThree");
  };

  return (
    <SafeAreaView style={mainStyles.paddingContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View style={mainStyles.flexRowBetween}>
            {/* Icon */}
            <BackIcon />
            {/* Logo */}
            <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.black }}>
              Step 2/3
            </Text>
            {/* Dummy */}
            <View />
          </View>
          {/* Form Content */}
          <View>
            {/* Business Name */}
            <InputField
              name="businessName"
              title="Business Name"
              placeholder="Business Name"
              control={control}
              rules={{
                required: "Business Name is required",
              }}
            />
            {/* Industry */}
            <View style={mainStyles.selectContainer}>
              <Text style={mainStyles.inputTitle}>{"Industry"}</Text>
              <Controller
                control={control}
                rules={{
                  required: "Industry is required",
                }}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <View
                      style={[
                        mainStyles.selectBox,
                        { borderColor: error ? "red" : "#e8e8e8" },
                      ]}
                    >
                      <Picker
                        selectedValue={value}
                        onValueChange={(value) => {
                          onChange(value);
                        }}
                      >
                        <Picker.Item
                          label={"Select Industry"}
                          value={""}
                          color={COLORS.spinGray}
                          style={mainStyles.selectItem}
                        />
                        {industries.map((item, index) => (
                          <Picker.Item
                            label={item}
                            value={item}
                            key={index}
                            color={"black"}
                            style={mainStyles.selectItem}
                          />
                        ))}
                      </Picker>
                    </View>
                    {error && (
                      <Text style={{ color: "red", alignSelf: "stretch" }}>
                        {error.message || "Error"}
                      </Text>
                    )}
                  </>
                )}
                name="industry"
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <View>
        {/* Button */}
        <Button text="Continue" onPressBtn={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

export default StepTwo;
