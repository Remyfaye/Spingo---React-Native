import { View, Text } from "react-native";
import React from "react";
import FormField from "./FormField";
import DropdownComponent from "./DropdownComponent";

const FormComponent = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <FormField title="Company/ Business Name" />
      <FormField title="Email" />
      <FormField title="Industry" />
      {/* <DropdownComponent /> */}
      <FormField title="Company/ Business Phone number" />
      <FormField title="Country" />
    </View>
  );
};

export default FormComponent;
