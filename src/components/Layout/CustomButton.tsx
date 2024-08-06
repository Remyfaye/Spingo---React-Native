import { View, Text } from "react-native";
import React from "react";

const CustomButton = ({ additionalStyle, text }: any) => {
  return (
    <View
      style={{
        borderRadius: 50,
        backgroundColor: "#00A6FB",
        width: "50%",
        padding: 20,
        height: 61,
        ...additionalStyle,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>{text}</Text>
    </View>
  );
};

export default CustomButton;
