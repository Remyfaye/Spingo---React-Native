import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "@constants/theme";

interface ButtonProps {
  text: string; // Use lowercase for primitive types
  color?: string; // Use lowercase for primitive types
  onPressBtn: () => void | any;
  width?: number; // Use lowercase for primitive types
  bgColor?: string;
  transparent?: boolean;
  isBorder?: boolean;
  isDisabled?: boolean | undefined;
  outlined?: boolean | undefined;
  borderColor?: string | undefined;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onPressBtn,
  width,
  bgColor,
  transparent,
  isBorder,
  isDisabled,
  outlined,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressBtn}
      disabled={isDisabled}
      style={{
        width: width ? width : "100%",
        backgroundColor: bgColor
          ? bgColor
          : transparent
          ? "transparent"
          : outlined
          ? "white"
          : COLORS.primary,
        opacity: isDisabled ? 0.5 : 1,
        borderRadius: 100,
        padding: FONTSIZE.size_18,
        borderWidth: isBorder ? 1.5 : outlined ? 1.5 : 0,
        borderColor: borderColor
          ? borderColor
          : outlined
          ? COLORS.primary
          : color,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: color ? color : outlined ? COLORS.primary : "white",
          fontSize: FONTSIZE.size_18,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
