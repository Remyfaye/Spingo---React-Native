import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { bell, dp, menu } from "@constants/imports/images";

const Header = () => {
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={menu} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "800",
            }}
          >
            Welcome Jane
          </Text>
          <Image source={bell} />
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            source={dp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
