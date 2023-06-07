import { Dimensions, StyleSheet } from "react-native";

export const shadowStyle = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(29, 30, 44, 0.8)",
    shadowOffset: {
      width: 8,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  shadowBtn: {
    shadowColor: "rgba(29, 30, 44, .4)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.48,
    shadowRadius: 2.0,
    elevation: 12,
  },
  shadowFade: {
    shadowColor: "rgba(29, 30, 44, 0.4)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.48,
    shadowRadius: 12.0,
    elevation: 12,
  },
  shadowIndicator: {
    shadowColor: "rgba(130, 160, 246, 12)",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 2,
    shadowRadius: 12.0,
    elevation: 12,
  },
});
export const globalStyle = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  wrapView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  itemsCenter: {
    alignItems: "center",
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  absoluteBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -10,
  },
  fitBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  backdropStyle: {
    backgroundColor: "rgba(30, 31, 32, 0.86)",
    flex: 1,
  },
  //Border
  border12: {
    borderRadius: 12,
  },
  border16: {
    borderRadius: 16,
  },
  topBorder16: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomBorder16: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topBorder24: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomBorder24: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  topBorder28: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  bottomBorder28: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  //margin , padding
  padH24: {
    paddingHorizontal: 24,
  },
  padH16: {
    paddingHorizontal: 16,
  },
  marV16: {
    marginVertical: 16,
  },
  marH24: {
    marginHorizontal: 24,
  },
  padH32: {
    paddingHorizontal: 32,
  },
  marH32: {
    marginHorizontal: 32,
  },
  padV24: {
    paddingVertical: 24,
  },
  marV24: {
    marginVertical: 24,
  },
  padV32: {
    paddingVertical: 32,
  },
  marV32: {
    marginVertical: 32,
  },
  // Other
  fillScreen: {
    width: "100%",
    height: "100%",
  },
  //flex
  flexSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexDirection: {
    flexDirection: "row",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  //icon
  icon8: {
    width: 8,
    height: 8,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  icon20: {
    width: 20,
    height: 20,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  icon32: {
    width: 32,
    height: 32,
  },
  icon40: {
    width: 40,
    height: 40,
  },
});
