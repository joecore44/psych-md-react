import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { HStack, Text } from "components";
import { IDoctorProps, OnlineStatusEnum } from "constants/types";
import { Avatar, Icon, useTheme } from "@ui-kitten/components";
import { useLayout } from "hooks";

const DoctorItem = memo(({ item }: { item: IDoctorProps }) => {
  const { width } = useLayout();
  const getOnlStatus = () => {
    switch (item.status) {
      case OnlineStatusEnum.Online:
        return "#F33333";
      case OnlineStatusEnum.Offline:
        return "#696969";
      case OnlineStatusEnum.JustLeave:
        return "#4F6DE6";
      default:
        break;
    }
  };
  const maxWidth = 136 * (width / 375);
  const theme=useTheme()
  return (
    <View style={styles.container}>
      <HStack mh={12} mb={16} itemsCenter>
        <View style={[styles.status, { backgroundColor: getOnlStatus() }]} />
        <HStack itemsCenter>
          <Icon pack="assets" name="star" style={styles.star} />
          <Text category="s2" marginLeft={4}>
            {item.rate.rateStar}
          </Text>
        </HStack>
      </HStack>
      <Avatar source={{ uri: item.avatar.path }} style={styles.avatar} />
      <Text
        category="t5-sb"
        marginTop={16}
        maxWidth={maxWidth - 32}
        numberOfLines={1}
        center
        marginHorizontal={16}
      >
        {item.name}
      </Text>
      <Text
        category="s2"
        status="platinum"
        maxWidth={maxWidth - 32}
        numberOfLines={1}
        marginHorizontal={16}
        center
        marginBottom={24}
      >
        {item.industry}
      </Text>
      <HStack>
        <HStack
          level="7"
          style={[styles.button, { borderBottomLeftRadius: 8 }]}
          itemsCenter
        >
          <Icon pack="assets" name="phone" style={[styles.icon,{tintColor:theme['text-white-color']}]} />
        </HStack>
        <HStack
          style={[styles.button, { borderBottomRightRadius: 8 }]}
          itemsCenter
        >
          <Icon pack="assets" name="message" style={[styles.icon,{tintColor:theme['text-info-color']}]} />
        </HStack>
      </HStack>
    </View>
  );
});

export default DoctorItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginRight: 24,
    borderRadius: 8,
  },
  star: {
    width: 12,
    height: 12,
  },
  status: {
    width: 16,
    height: 16,
    borderRadius: 99,
  },
  avatar: {
    marginHorizontal: 26,
    alignSelf: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    width: 16,
    height: 16,
    marginVertical: 6,
  },
});
