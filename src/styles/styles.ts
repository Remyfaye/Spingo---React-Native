import { COLORS, FONTSIZE } from "@constants/theme";
import { Platform, StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        height: '100%',
    },
    paddingContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        height: '100%',
        padding: 20
    },
    containerBetween: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    centeredContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center"
    },
    flexRowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
    },
    inputTitle: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.spinGray,
    },
    selectContainer: {
        width: "100%",
    },
    selectBox: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        paddingVertical: Platform.OS === "ios" ? 5 : 2,
    },
    selectItem: {
        fontSize: FONTSIZE.size_16,
    },
    heading: {
        color: "black",
        fontSize: FONTSIZE.size_24,
        fontWeight: '600',
        marginTop: 10
    },
    text: {
        color: "black",
        fontWeight: '400',
        fontSize: FONTSIZE.size_16,
        marginVertical: 18,
    },
    smallGrayText: {
        fontWeight: '400',
        fontSize: FONTSIZE.size_14,
        color: COLORS.spinGray
    }
});

export { mainStyles }