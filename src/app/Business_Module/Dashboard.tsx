import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { btn } from "@constants/imports/images";
import Bottombar from "@components/Layout/bottombar/Bottombar";
import Content from "@components/business_module/dashboard/Content";
import Header from "@components/business_module/dashboard/Header";
import Hero from "@components/business_module/dashboard/Hero";

const Dashboard = () => {
  return (
    <View style={{}}>
      <View style={{ padding: 20, height: 100 }}>
        <Header />
        <Hero />
        <Content />
      </View>
      <Bottombar />
    </View>
  );
};

export default Dashboard;
