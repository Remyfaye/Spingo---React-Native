import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Controller } from "react-hook-form";
import { COLORS } from "../../constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { mainStyles } from "@styles/styles";

interface PasswordInputProps {
  control: any;
  name: string;
  rules?: object;
  placeholder: string;
  title: string;
  type?: any;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  title,
  type,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
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
          <Text style={mainStyles.inputTitle}>{title}</Text>
          <View
            style={[
              styles.container,
              {
                borderColor: error ? "red" : "#e8e8e8",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={!isShowPassword}
              placeholderTextColor={COLORS.spinGray}
              keyboardType={keyboard}
            />
            <View style={{}}>
              {isShowPassword ? (
                <TouchableOpacity onPress={() => setIsShowPassword(false)}>
                  <Feather name="eye-off" size={20} color={COLORS.black} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setIsShowPassword(true)}>
                  <Feather name="eye" size={20} color={COLORS.black} />
                </TouchableOpacity>
              )}
            </View>
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
    backgroundColor: COLORS.white,
    width: "100%",
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  input: {
    fontSize: 16,
    paddingVertical: Platform.OS === "ios" ? 20 : 12,
  },
});

export default PasswordInput;
