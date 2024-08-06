import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Iconify } from "react-native-iconify";
import { COLORS } from "@constants/theme";
import { useAuthContext } from "@context/AuthContext";

const Header = () => {
  const { authUser } = useAuthContext();
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* SideBar */}
      <TouchableOpacity>
        <Iconify icon="cil:hamburger-menu" size={30} color={COLORS.black} />
      </TouchableOpacity>
      {/* Search, Notification, Profile */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity>
          <Iconify
            icon="iconamoon:search-thin"
            size={25}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Iconify icon="ph:bell-light" size={25} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: COLORS.primary,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
              marginTop: 3,
            }}
          >
            {`${authUser?.firstName?.slice(0, 1)}${authUser?.lastName?.slice(
              0,
              1
            )}`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
