import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { COLORS } from "@constants/theme";

interface Props {
  otp: string;
  setOtp: (otp: string) => void;
}

const SplitField: React.FC<Props> = ({ setOtp }) => {
  const [inputValues, setInputValues] = useState<string[]>(["", "", "", ""]);
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);
  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    const newOtp = newInputValues.join("");
    setOtp(newOtp);
  };

  const handleBackspace = (index: number, value: string) => {
    if (value === "" && index > 0) {
      const newInputValues = [...inputValues];
      newInputValues[index - 1] = "";
      setInputValues(newInputValues);
      inputRefs.current[index - 1].focus();

      const newOtp = newInputValues.join("");
      setOtp(newOtp);
    } else if (value === "" && index === 0) {
      setInputValues(["", ...inputValues.slice(0, -1)]);
      inputRefs.current[index].focus();

      const newOtp = ["", ...inputValues.slice(0, -1)].join("");
      setOtp(newOtp);
    }
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    try {
      if (/^\d{4}$/.test(text)) {
        const temp = text
          .toString()
          .split("")
          .map((digit) => digit.toString());
        setInputValues(temp);
        setOtp(text);
      } else {
        Alert.alert(
          "Invalid OTP",
          "Please Copy the 4 digit Pin sent to your Email"
        );
      }
    } catch (error: any) {
      Alert.alert("Error", error);
    }
    setShowTooltip(false);
  };
  return (
    <View style={styles.container}>
      {inputValues.map((value, index) => (
        <View key={index}>
          {/* {showTooltip && index === 0 && (
            <TouchableOpacity style={styles.tooltip} onPress={fetchCopiedText}>
              <Text style={styles.tooltipText}>Paste Code</Text>
            </TouchableOpacity>
          )} */}
          <TouchableOpacity
            style={styles.inputContainer}
            onPressIn={() => setShowTooltip(true)}
          >
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleInputChange(index, text)}
              onKeyPress={({ nativeEvent }) =>
                nativeEvent.key === "Backspace" && handleBackspace(index, value)
              }
              ref={(ref) => (inputRefs.current[index] = ref as any)}
              contextMenuHidden={true}
              onPressIn={() => setShowTooltip(true)}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    margin: 4,
    textAlign: "center",
    fontSize: 25,
    height: 50,
    width: 50,
    paddingTop: Platform.OS === "ios" ? 0 : 8,
  },
  tooltip: {
    position: "absolute",
    top: -30,
    left: 30,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 100,
  },
  tooltipText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

export default SplitField;
