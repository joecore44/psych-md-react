import React from "react";
import { Image, StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";
import { useLayout } from "hooks";

import { HStack, Text, VStack } from "components";
import { shadowStyle } from "style/globalStyle";

interface DrugsDetailsProps {
  image: {
    path: string;
  };
  price: number;
  information: {
    title: string;
    describer: string;
  }[];
}
const DrugsDetails = ({ data }: { data: DrugsDetailsProps }) => {
  const { width, height } = useLayout();
  return (
    <VStack>
      <Image
        source={{
          uri: data.image.path,
        }}
        style={{
          width: width - 60,
          height: 200 * (height / 812),
          alignSelf: "center",
          borderRadius: 4,
          marginBottom: 24,
        }}
      />
      {data.information.map((info, i) => {
        return (
          <VStack key={i} mb={24} style={styles.information} level="1">
            <HStack ml={8} itemsCenter mb={4}>
              <Text category="t4-sb">{info.title}</Text>
              <Icon pack="assets" name="expand" />
            </HStack>
            <Text marginLeft={8} category="s1">
              {info.describer}
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
};

export default DrugsDetails;

const styles = StyleSheet.create({
  information: {
    ...shadowStyle.shadowFade,
    padding: 16,
    borderRadius: 8,
  },
});
