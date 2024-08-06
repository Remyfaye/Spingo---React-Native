import { Image } from "react-native";
import React from "react";
import { logo } from "@constants/imports/icons";

const LogoIcon = () => {
  return <Image source={logo} style={{ height: 50, width: 50 }} />;
};

export default LogoIcon;
