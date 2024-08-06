import { View, Text, Image } from "react-native";
import React from "react";
import { star } from "@constants/imports/icons";

const StoreList = ({ title, logo, arrow }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderWidth: 0.4,
        padding: 10,
        borderRadius: 10,
        borderColor: "#00A6FB",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: 10,
          flexDirection: "row",
        }}
      >
        <Image source={logo} />
        <Text
          style={{
            fontWeight: "800",
          }}
        >
          {title}
        </Text>
      </View>
      <Image source={arrow} />
    </View>
  );
};

export default StoreList;
