import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "@components/business_module/addStore/Header";
import LogoComponent from "@components/business_module/addStore/LogoComponent";
import FormComponent from "@components/business_module/addStore/form/FormComponent";

const AddStore = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <Header />
        <LogoComponent />
        <FormComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddStore;
