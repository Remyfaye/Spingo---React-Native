import { View, Text, Image } from "react-native";
import React from "react";
import { inventory } from "@constants/imports/images";

const CustomComponent = ({ text1, text2, img1, img2 }: any) => {
  return (
    <View
      style={{
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image source={img1} />
        <Text style={{ fontWeight: "900" }}>{text1}</Text>
      </View>

      <View
        style={{
          marginRight: 50,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={img2} />
        <Text style={{ fontWeight: "900" }}>{text2}</Text>
      </View>
    </View>
  );
};

export default CustomComponent;
