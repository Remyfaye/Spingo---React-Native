import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Button from "./Button";
import {
  five,
  four,
  inventory,
  one,
  three,
  two,
} from "@constants/imports/images";

const Bottombar = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          borderTopWidth: 0.3,
          padding: 20,
          position: "relative",
          top: 720,
          gap: 50,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button image={one} link="Business_Module/ManageStores" />
        <Button image={two} link="Business_Module/AddStore" />
        <Button image={three} link="Business_Module/ManageStores" />
        <Button image={four} link="Business_Module/AddStore" />
        <Button image={five} link="Business_Module/ManageStores" />
      </View>
    </SafeAreaView>
  );
};

export default Bottombar;
