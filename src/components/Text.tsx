import React from "react";
import { TextStyle } from "react-native";
import { Text, TextProps } from "@ui-kitten/components";
import { EvaStatus } from "@ui-kitten/components/devsupport";

export interface MyTextProps extends TextProps {
  style?: TextStyle;
  category?:
    | "header"
    | "header-b"
    | "header-sb"
    | "t1"
    | "t1-b"
    | "t2"
    | "t2-b"
    | "t2-sb"
    | "t3"
    | "t3-b"
    | "t3-sb"
    | "t4"
    | "t4-b"
    | "t4-sb"
    | "t5"
    | "t5-b"
    | "t5-sb"
    | "s1"
    | "s1-sb"
    | "s1-b"
    | "s2"
    | "c1"
    | "label";

  status?: EvaStatus;

  children?: any;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  opacity?: number;
  maxWidth?: number;
  fontSize?: number;
  lineHeight?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  none?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  underline?: boolean;
  line_through?: boolean;
  bold?: boolean;
  italic?: boolean;
}

export default React.forwardRef(
  (
    {
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      marginVertical,
      marginHorizontal,
      opacity,
      uppercase,
      lowercase,
      capitalize,
      none,
      left,
      right,
      center,
      underline,
      line_through,
      bold,
      italic,
      category = "t5",
      status,
      children,
      maxWidth,
      style,
      ...rest
    }: MyTextProps,
    ref
  ) => {
    let textAlign: "left" | "center" | "right" | "auto" | "justify" | "left";

    left
      ? (textAlign = "left")
      : right
      ? (textAlign = "right")
      : center
      ? (textAlign = "center")
      : (textAlign = "left");

    let textTransform: "uppercase" | "lowercase" | "capitalize" | "none";

    uppercase
      ? (textTransform = "uppercase")
      : lowercase
      ? (textTransform = "lowercase")
      : capitalize
      ? (textTransform = "capitalize")
      : none
      ? (textTransform = "none")
      : (textTransform = "none");

    let fontWeight:
      | "bold"
      | "normal"
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
    bold ? (fontWeight = "bold") : (fontWeight = "normal");

    let textDecorationLine:
      | "none"
      | "underline"
      | "line-through"
      | "underline line-through";
    underline
      ? (textDecorationLine = "underline")
      : line_through
      ? (textDecorationLine = "line-through")
      : (textDecorationLine = "none");

    let fontStyle: "normal" | "italic";
    italic ? (fontStyle = "italic") : (fontStyle = "normal");

    const getLineHeight = () => {
      switch (category) {
        case "header":
          return 48;
        case "header-b":
          return 48;
        case "header-sb":
          return 48;
        case "t1":
          return 42;
        case "t1-b":
          return 42;
        case "t2":
          return 36;
        case "t2-b":
          return 36;
        case "t3":
          return 32;
        case "t3-b":
          return 30;
        case "t3-sb":
          return 30;
        case "t4":
          return 27;
        case "t4-b":
          return 27;
        case "t4-sb":
          return 27;
        case "t5":
          return 25;
        case "t5-b":
          return 25;
        case "t5-sb":
          return 24;
        default:
          return 25;
      }
    };
    return (
      <Text
        ref={ref as any}
        category={category}
        status={status}
        style={[
          {
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginVertical: marginVertical,
            marginHorizontal: marginHorizontal,
            opacity: opacity,
            textAlign: textAlign,
            maxWidth: maxWidth,
            lineHeight: getLineHeight(),
            textTransform: textTransform,
            textDecorationLine: textDecorationLine,
            fontWeight: fontWeight,
            fontStyle: fontStyle,
          },
          style,
        ]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
);
