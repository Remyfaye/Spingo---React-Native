import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { star } from "@constants/imports/icons";

const FormField = ({ title }: any) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
        <Text>{title}</Text>
        <Image source={star} />
      </View>
      <TextInput
        style={{
          marginTop: 10,
          borderRadius: 10,
          height: 55,
          borderWidth: 0.2,
          padding: 10,
        }}
      />
    </View>
  );
};

export default FormField;
