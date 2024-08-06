import { View, Text, Image } from "react-native";
import React from "react";

const Task = ({ title, img }: any) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text>{title}</Text>
      <Image source={img} />
    </View>
  );
};

export default Task;
