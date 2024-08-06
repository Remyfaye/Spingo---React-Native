import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomLink, SliderComponent } from "@/components/generic";
import { COLORS } from "@constants/theme";
import Bottombar from "@components/Layout/bottombar/Bottombar";
const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <SliderComponent />
      <View style={{ paddingHorizontal: 20, marginBottom: 20, marginTop: 40 }}>
        {/* <CustomLink path="Auth/Login" text="Login" /> */}
        <CustomLink path="Business_Module/Dashboard" text="Dashboard" />
        {/* <CustomLink path="Business_Module/AddStore" text="AddStore" /> */}
        {/* <CustomLink path="Business_Module/Task1" text="Task one" /> */}
        {/* <CustomLink path="Business_Module/ManageStores" text="Manage Stores" /> */}
        <CustomLink path="Auth/Registration/StepOne" text="Sign up" outlined />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: COLORS.white,
  },
});
