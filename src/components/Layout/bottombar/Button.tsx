import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Button = ({ image, link }: any) => {
  return (
    <View>
      <TouchableOpacity>
        <Link href={link}>
          {" "}
          <Image source={image} />
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
