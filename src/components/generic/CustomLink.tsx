import React from "react";
import { Text, Pressable } from "react-native";
import { COLORS, FONTSIZE } from "@constants/theme";
import { Link } from "expo-router";

interface CustomLinkProps {
  text: string; // Use lowercase for primitive types
  color?: string; // Use lowercase for primitive types
  path: string; // Use lowercase for primitive types
  width?: number; // Use lowercase for primitive types
  bgColor?: string;
  transparent?: boolean;
  isBorder?: boolean;
  isDisabled?: boolean | undefined;
  outlined?: boolean | undefined;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  text,
  color,
  path,
  width,
  bgColor,
  transparent,
  isBorder,
  isDisabled,
  outlined,
}) => {
  return (
    <Link href={`/${path}` as any} asChild>
      <Pressable
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
          borderColor: outlined ? COLORS.primary : color,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: color ? color : outlined ? COLORS.primary : "white",
            fontSize: FONTSIZE.size_18,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </Pressable>
    </Link>
  );
};

export default CustomLink;
