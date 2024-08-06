import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { left, times } from "@constants/imports/icons";
import { router } from "expo-router";

const BackIcon = () => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Image source={left} style={{ height: 25, width: 25 }} />
    </TouchableOpacity>
  );
};

export default BackIcon;
