import { View, Text } from "react-native";
import React from "react";
import Task from "./Task";
import { star } from "@constants/imports/icons";

const TaskCompletion = () => {
  return (
    <View
      style={{
        padding: 20,
        marginVertical: 30,
        height: 200,
        backgroundColor: "#eee",
        borderRadius: 15,
        shadowOpacity: 0.2,
        shadowRadius: 10,
      }}
    >
      <Text>TaskCompletion</Text>
      <Task title="Add our Store" img={star} />
      <Task title="Add our Store" img={star} />
      <Task title="Add our Store" img={star} />
    </View>
  );
};

export default TaskCompletion;
