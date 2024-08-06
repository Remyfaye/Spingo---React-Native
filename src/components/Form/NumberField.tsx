import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import countries from "@constants/data/countries.json";
import { CountryDTO } from "@constants/typings/generic";
import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";
import { Controller } from "react-hook-form";
import { COLORS, FONTSIZE } from "@constants/theme";

interface NumberFieldProps {
  control: any;
  name: string;
  rules?: object;
  placeholder: string;
  title: string;
  defaultValue?: string;
  isTrim?: boolean;
  selectedCountry: CountryDTO;
  setSelectedCountry: any;
}

const NumberField: React.FC<NumberFieldProps> = ({
  control,
  name,
  rules = {},
  defaultValue,
  selectedCountry,
  setSelectedCountry,
  placeholder,
  title,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] =
    useState<CountryDTO[]>(countries);
  const handleSearch = (text: string) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().startsWith(text.toLowerCase())
    );
    setSearchQuery(text);
    setFilteredCountries(filtered);
  };
  return (
    <View style={{ marginBottom: 10, marginTop: 15 }}>
      <Text
        style={{
          fontSize: FONTSIZE.size_14,
          color: COLORS.spinGray,
        }}
      >
        {title}
      </Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[
                styles.container,
                { borderColor: error ? "red" : "#e8e8e8" },
              ]}
            >
              {/* Country Select */}
              <TouchableOpacity
                style={{
                  width: "25%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                onPress={() => setShowModal(true)}
              >
                {/* Flag */}
                <CountryFlag
                  isoCode={selectedCountry.code.toLowerCase()}
                  size={14}
                  style={{ margin: 0 }}
                />
                <Text
                  style={{
                    fontSize: FONTSIZE.size_16,
                    color: COLORS.black,
                    marginLeft: 3,
                    marginTop: 2,
                  }}
                >
                  {selectedCountry.dial_code.slice(1)}
                </Text>
                <Entypo name="chevron-small-down" size={22} color="black" />
              </TouchableOpacity>
              {/* Vertical Divider */}
              <View
                style={{
                  width: 1,
                  height: "60%",
                  backgroundColor: COLORS.white,
                }}
              />
              {/* Input Field */}
              <TextInput
                value={value?.trimEnd()}
                placeholder={placeholder}
                keyboardType="numeric"
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                style={styles.input}
                onChangeText={(text) => {
                  // Check if the first character entered is zero and the text length is 1
                  if (text.length === 1 && text.charAt(0) === "0") {
                    // If it's zero, set the input value to an empty string
                    onChange("");
                  } else {
                    // Remove any non-numeric characters from the input
                    const numericValue = text.replace(/[^0-9]/g, "");
                    // Update the input value with only numeric characters
                    onChange(numericValue);
                  }
                }}
                onBlur={onBlur}
                defaultValue={defaultValue}
                placeholderTextColor={COLORS.spinGray}
              />
            </View>
            {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {error.message || "Error"}
              </Text>
            )}
          </>
        )}
      />
      {/* Modal */}
      <Modal visible={showModal}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <View style={{ paddingTop: Platform.OS === "ios" ? 30 : 10 }} />
          {/*  */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 1,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <FontAwesome6 name="times-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* Search Input Container */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              borderWidth: 1,
              borderColor: COLORS.gray,
              borderRadius: 6,
              marginBottom: 20,
            }}
          >
            <AntDesign
              name="search1"
              size={25}
              color={COLORS.spinGray}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Search Country ..."
              onChangeText={handleSearch}
              value={searchQuery}
              placeholderTextColor={COLORS.spinGray}
              style={{
                color: COLORS.spinGray,
                fontSize: FONTSIZE.size_14,
                paddingVertical: Platform.OS === "ios" ? 12 : 6,
              }}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredCountries.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedCountry(item);
                  setShowModal(false);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginVertical: 10,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: FONTSIZE.size_14,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: FONTSIZE.size_14,
                  }}
                >
                  {item.dial_code}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    borderColor: COLORS.spinGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: "73%",
    fontSize: FONTSIZE.size_16,
    paddingVertical: Platform.OS === "ios" ? 20 : 12,
    color: COLORS.spinGray,
    marginLeft: 5,
    paddingLeft: 5,
  },
});

export default NumberField;
