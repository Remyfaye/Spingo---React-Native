import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import {
  analytics,
  btn,
  explore,
  inventory,
  sales,
} from "@constants/imports/images";
import CustomComponent from "./CustomComponent";

const Content = () => {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View style={{ marginVertical: 40 }}>
        <Text style={{ fontWeight: "800" }}>Dashboard</Text>
        <Text style={{ marginTop: 13, marginBottom: 25, fontWeight: "600" }}>
          Manage Your Stores and Track Performance
        </Text>

        <CustomComponent
          img1={inventory}
          img2={explore}
          text1="inventory"
          text2="Expenses"
        />
        <CustomComponent
          img1={sales}
          img2={analytics}
          text1="Sales"
          text2="Analytics"
        />
      </View>
      <Image
        style={{ position: "static", left: 305, bottom: -150 }}
        source={btn}
      />
    </SafeAreaView>
  );
};

export default Content;
