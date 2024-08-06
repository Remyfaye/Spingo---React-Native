import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { COLORS } from "@constants/theme";
import { Link } from "expo-router";
import { Iconify } from "react-native-iconify";
import { StyleSheet } from "react-native";

interface FooterProps {
  active: string;
}

const Footer: React.FC<FooterProps> = ({ active }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderTopColor: COLORS.black,
        borderTopWidth: 0.5,
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    >
      {/* Home */}
      <Link href="/Menu/Home" asChild>
        <TouchableOpacity style={styles.cont}>
          <Iconify
            icon="mage:home-3"
            size={25}
            color={active === "home" ? COLORS.primary : COLORS.black}
          />
          {active === "home" && <Text style={styles.text}>home</Text>}
        </TouchableOpacity>
      </Link>

      {/* Livestock */}
      <Link href="/Menu/LiveStock" asChild>
        <TouchableOpacity style={styles.cont}>
          <Iconify
            icon="emojione-monotone:chicken"
            size={25}
            color={active === "livestock" ? COLORS.primary : COLORS.black}
          />
          <Text
            style={[
              styles.text,
              {
                color: active === "livestock" ? COLORS.primary : COLORS.black,
              },
            ]}
          >
            livestock
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Feeding */}
      <Link href="/Menu/Feeding" asChild>
        <TouchableOpacity style={styles.cont}>
          <Iconify
            icon="ph:bowl-food-light"
            size={25}
            color={active === "feeding" ? COLORS.primary : COLORS.black}
          />
          <Text
            style={[
              styles.text,
              {
                color: active === "feeding" ? COLORS.primary : COLORS.black,
              },
            ]}
          >
            Feeding
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Housing */}
      <Link href="/Menu/Housing" asChild>
        <TouchableOpacity style={styles.cont}>
          <Iconify
            icon="hugeicons:house-01"
            size={25}
            color={active === "housing" ? COLORS.primary : COLORS.black}
          />
          <Text
            style={[
              styles.text,
              {
                color: active === "housing" ? COLORS.primary : COLORS.black,
              },
            ]}
          >
            housing
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Transactions */}
      <Link href="/Menu/Transactions" asChild>
        <TouchableOpacity style={styles.cont}>
          <Iconify
            icon="bi:arrow-left-right"
            size={25}
            color={active === "transactions" ? COLORS.primary : COLORS.black}
          />
          <Text
            style={[
              styles.text,
              {
                color:
                  active === "transactions" ? COLORS.primary : COLORS.black,
              },
            ]}
          >
            transactions
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 11,
    textTransform: "capitalize",
    marginTop: 5,
  },
});
