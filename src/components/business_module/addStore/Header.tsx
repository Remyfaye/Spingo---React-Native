import { View, Text, Image } from "react-native";
import React from "react";
import { left } from "@constants/imports/icons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 55,
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <Image style={{ width: 20, height: 20 }} source={left} />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "600", fontSize: 30 }}>
          Store Information
        </Text>
        <Text>Add a store</Text>
      </View>
    </View>
  );
};

export default Header;
