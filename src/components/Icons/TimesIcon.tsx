import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { times } from "@constants/imports/icons";
import { router } from "expo-router";

const TimesIcon = () => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Image source={times} style={{ height: 25, width: 25 }} />
    </TouchableOpacity>
  );
};

export default TimesIcon;
