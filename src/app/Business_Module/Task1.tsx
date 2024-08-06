import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Bottombar from "@components/Layout/bottombar/Bottombar";
import TaskCompletion from "@components/business_module/tasks/TaskCompletion";

const Task1 = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <View style={{ borderBottomWidth: 0.3, padding: 20 }}>
        <Text style={{ fontWeight: "800" }}>Welcome to Spingo</Text>
        <Image />
      </View>

      {/* body */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "800" }}>
          We're excited to help you start managing your inventory effortlessly!
        </Text>
        <TaskCompletion />
      </View>

      <Bottombar />
    </SafeAreaView>
  );
};

export default Task1;
