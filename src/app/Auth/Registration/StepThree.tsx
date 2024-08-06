import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "@components/Icons";
import { Button, InputField } from "@components/Form";
import { Controller, useForm } from "react-hook-form";
import { COLORS, FONTSIZE } from "@constants/theme";
import { Picker } from "@react-native-picker/picker";
import { BizRegStore } from "@store/BizRegStore";
import { router } from "expo-router";
import { mainStyles } from "@styles/styles";
import { Country as CountryType, ICountry, State } from "country-state-city";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const StepThree = () => {
  const { handleSubmit, control, watch, getValues } = useForm({
    defaultValues: BizRegStore.useState((s: any) => s),
  });
  const [stateData, setStateData] = useState([]);

  function extractCountryNames() {
    return CountryType.getAllCountries().map((country) => country.name);
  }
  let countryData = extractCountryNames();
  function getStateByCountryName(): void {
    const temp: ICountry | undefined = CountryType.getAllCountries().find(
      (c) => c.name === getValues("country")
    );
    let tempState = State.getStatesOfCountry(temp?.isoCode).map(
      (state) => state.name
    );
    setStateData(tempState as any);
  }
  useEffect(() => {
    getStateByCountryName();
  }, [getValues, watch("country")]);
  const onSubmit = (data: any) => {
    BizRegStore.update((s: any) => {
      s.country = data?.country;
      s.state = data?.state;
      s.city = data?.city;
      s.address = data?.address;
    });
    router.push("/Auth/Registration/PasswordSetup");
  };

  return (
    <SafeAreaView style={mainStyles.paddingContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View style={[mainStyles.flexRowBetween, { marginBottom: 20 }]}>
            {/* Icon */}
            <BackIcon />
            {/* Logo */}
            <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.black }}>
              Step 3/3
            </Text>
            {/* Dummy */}
            <View />
          </View>
          {/* Form Content */}
          <View>
            {/* Country */}
            <View style={mainStyles.selectContainer}>
              <Text style={mainStyles.inputTitle}>{"Country"}</Text>
              <Controller
                control={control}
                name="country"
                rules={{
                  required: "Country is required",
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
                          label={"Select Country"}
                          value={""}
                          color={COLORS.spinGray}
                          style={mainStyles.selectItem}
                        />
                        {countryData.map((item, index) => (
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
              />
            </View>
            {/* State */}
            <View style={mainStyles.selectContainer}>
              <Text style={mainStyles.inputTitle}>{"State"}</Text>
              <Controller
                control={control}
                name="state"
                rules={{
                  required: "State is required",
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
                          label={"Select Select"}
                          value={""}
                          color={COLORS.spinGray}
                          style={mainStyles.selectItem}
                        />
                        {stateData.map((item, index) => (
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
              />
            </View>
            {/* City */}
            <InputField
              name="city"
              title="City"
              placeholder="City"
              control={control}
              rules={{
                required: "City is required",
              }}
            />
            {/* Address */}
            <InputField
              name="address"
              title="Address"
              placeholder="Address"
              control={control}
              rules={{
                required: "Address is required",
              }}
            />
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

export default StepThree;
