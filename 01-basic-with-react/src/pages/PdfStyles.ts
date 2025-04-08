import {Font, StyleSheet} from "@react-pdf/renderer";

Font.register({
  family: "notoSans",
  fonts: [
    {src: "/fonts/NotoSansBengali-Regular.ttf", fontWeight: "normal"},
    {src: "/fonts/NotoSansBengali-Medium.ttf", fontWeight: "medium"},
    {src: "/fonts/NotoSansBengali-SemiBold.ttf", fontWeight: "semibold"},
    {src: "/fonts/NotoSansBengali-Bold.ttf", fontWeight: "bold"},
  ],
});

Font.register({
  family: "notoSerif",
  fonts: [
    {src: "/fonts/noto/NotoSerifBengali-Regular.ttf", fontWeight: "normal"},
    {src: "/fonts/noto/NotoSerifBengali-Medium.ttf", fontWeight: "medium"},
    {src: "/fonts/noto/NotoSerifBengali-SemiBold.ttf", fontWeight: "semibold"},
    {src: "/fonts/noto/NotoSerifBengali-Bold.ttf", fontWeight: "bold"},
  ],
});
Font.register({
  family: "shiliguri",
  fonts: [
    {src: "/public/fonts/shiliguri/HindSiliguri-Regular.ttf", fontWeight: "normal"},
    {src: "/public/fonts/shiliguri/HindSiliguri-Medium.ttf", fontWeight: "medium"},
    {src: "/public/fonts/shiliguri/HindSiliguri-SemiBold.ttf", fontWeight: "semibold"},
    {src: "/public/fonts/shiliguri/HindSiliguri-Bold.ttf", fontWeight: "bold"},
  ],
});

const emerald = "#059669";
const grayLight = "#374151";
const grayDark = "#1f2937";
const borderColor = "#e5e7eb";

// Create styles
export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: grayLight,
    fontFamily: "shiliguri",
    padding: 50,
    fontSize: 11,
  },
  fontSans:{fontFamily:"notoSans"},
  fontSerif:{fontFamily:"notoSerif"},
  fontShiliguri:{fontFamily:"shiliguri"},
  summary: {backgroundColor: "#ecfdf5", border: "1px", borderColor: "#a7f3d0", paddingVertical: "14px", paddingHorizontal: "16px", borderRadius:"6px"},
  textXs: {fontSize: 11, },
  textSm: {fontSize: 12},
  textBase: {fontSize: 16,  },
  fontBold: {fontWeight: 700},
  fontSemibold: {fontWeight: 600},
  fontMedium: {fontWeight: 500},
  fontNormal: {fontWeight: 400},
  textGrayLight: {color: grayLight},
  textGrayDark: {color: grayDark},
  textEmerald: {color: emerald},
  roundedMd: {borderRadius: 4},
  borderBottom: {borderBottom: 1, borderColor: borderColor, },
  flexBetween: {flexDirection: "row", justifyContent: "space-between"},
  marginTop: {marginTop: 16},
  marginBottom: {marginBottom: 16},
  paddingBottom :{paddingBottom:16},
  imgSize: {width: 65, height: 65},
  flex: {flexDirection: "row"},
  itemsCenter: {alignItems: "center"},
  justifyCenter: {justifyContent: "center"},
  justifyBetween: {justifyContent: "space-between"},
  gap12: {gap: 12},
});
