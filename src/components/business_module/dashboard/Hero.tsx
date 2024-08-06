import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { arrow, five, two } from "@constants/imports/images";

const Hero = () => {
  return (
    <SafeAreaView>
      <View>
        {/* dropdown */}
        <View
          style={{
            borderColor: "#00A6FB",
            borderWidth: 0.5,
            borderRadius: 10,
            padding: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>All Stores</Text>
          <Image source={arrow} />
        </View>

        <View style={{ marginVertical: 20, flexDirection: "row" }}>
          <View
            style={{
              width: 187,
              borderRadius: 5,
              borderWidth: 0.3,
              borderColor: "#00A6FB",
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#dddddd",
            }}
          >
            <Image source={two} />
            <View>
              <Text style={{ fontWeight: "900", marginVertical: 10 }}>
                Current Stock
              </Text>
              <Text>30</Text>
            </View>
          </View>
          <View
            style={{
              width: 187,
              borderRadius: 5,
              borderWidth: 0.3,
              borderColor: "#00A6FB",
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#dddddd",
            }}
          >
            <Image source={five} />
            <View>
              <Text style={{ fontWeight: "900", marginVertical: 10 }}>
                Total sales
              </Text>
              <Text>₦850,000</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hero;
