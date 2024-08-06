import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Footer, Header } from "@components/Layout";
import { mainStyles } from "@styles/styles";
import Spinner from "react-native-loading-spinner-overlay";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Spinner visible={loading} /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}
      >
        <Header />
      </ScrollView>
      {/* Footer */}
      <Footer active="home" />
    </SafeAreaView>
  );
};

export default Home;
