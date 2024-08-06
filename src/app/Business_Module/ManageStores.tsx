import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Bottombar from "@components/Layout/bottombar/Bottombar";
import {
  leftArrow,
  menuV,
  rightArrow,
  star,
  storeLogo,
} from "@constants/imports/icons";
import StoreList from "@components/business_module/manageStores/StoreList";
import { menu } from "@constants/imports/images";
import CustomButton from "@components/Layout/CustomButton";

const ManageStores = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          borderBottomWidth: 0.3,
          padding: 20,
        }}
      >
        <Image source={leftArrow} />
        <Text style={{ fontWeight: "800" }}>Manage stores</Text>
        <Image source={menuV} />
      </View>

      {/* body */}
      <View style={{ padding: 20 }}>
        <StoreList title="Jane’s Store" arrow={rightArrow} logo={storeLogo} />
        <StoreList title="The last price" arrow={rightArrow} logo={storeLogo} />
        <CustomButton
          text="Add Store"
          additionalStyle={{
            position: "static",
            top: 450,
            left: 180,
          }}
        />
      </View>

      <Bottombar />
    </SafeAreaView>
  );
};

export default ManageStores;
