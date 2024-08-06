import { View, Text } from "react-native";
import React from "react";

const LogoComponent = () => {
  return (
    <View style={{}}>
      <Text> Logo (Optional)</Text>
      <View
        style={{
          marginTop: 15,
          borderWidth: 0.2,
          height: 200,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#aaa", margin: "auto" }}>Upload image</Text>
      </View>
    </View>
  );
};

export default LogoComponent;
