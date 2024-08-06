import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
} from "react-native";
import { Controller } from "react-hook-form";
import { COLORS, FONTSIZE } from "@constants/theme";

interface InputProps {
  control: any;
  name: string;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
  title: string;
  type?: any;
  maxLength?: number;
  defaultValue?: string;
  isTrim?: boolean;
}

const InputField: React.FC<InputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  title,
  type,
  maxLength,
  defaultValue,
  isTrim,
}) => {
  let keyboard = type ? type : "default";
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={{ marginVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FONTSIZE.size_14,
                color: COLORS.spinGray,
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={isTrim ? value?.trim() : value}
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
              defaultValue={defaultValue}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={COLORS.gray}
              keyboardType={keyboard}
              maxLength={maxLength ? maxLength : undefined}
              returnKeyType="done"
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: COLORS.spinGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  input: {
    fontSize: 16,
    paddingVertical: Platform.OS === "ios" ? 20 : 12,
  },
});

export default InputField;
