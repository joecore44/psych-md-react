import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { HStack, Text, VStack } from "components";
import { IUserProps } from "constants/types";
import dayjs from "dayjs";
import { Avatar, Icon, Layout } from "@ui-kitten/components";
import { shadowStyle } from "style/globalStyle";

export interface InsurancesItemProps {
  title: string;
  user: IUserProps;
  dateEffective: Date;
  groupId: string;
  enrolleeId: string;
  plan: string;
}

const InsurancesItem = ({ item }: { item: InsurancesItemProps }) => {
  const { title, user, dateEffective, groupId, plan, enrolleeId } = item;
  const Field = ({ label, value }: { label: string; value: string }) => {
    return (
      <VStack mr={32}>
        <Text status="platinum" category="t5">
          {label}
        </Text>
        <Text category="t4">{value}</Text>
      </VStack>
    );
  };
  return (
    <Layout style={styles.container} level="1">
      <HStack level="8" itemsCenter justify="flex-start" pv={12} pl={12}>
        <Avatar
          source={{
            uri: "https://user-images.githubusercontent.com/87011701/190127799-bd6593c4-ed23-4fe6-8221-0c99b7ebc03a.png",
          }}
          size="tiny"
        />
        <Text category="t5-sb" status="platinum" marginLeft={12}>
          {title}
        </Text>
      </HStack>
      <TouchableOpacity activeOpacity={0.7} style={styles.editButton}>
        <Icon pack="assets" name="edit" />
      </TouchableOpacity>
      <VStack pl={12} mt={12}>
        <Field label="Fullname" value={user.name} />
        <HStack mt={12}>
          <Field label="Enrollee" value={enrolleeId} />
          <Field label="Group #" value={groupId} />
        </HStack>
        <HStack mt={12}>
          <Field
            label="Date Effective"
            value={dayjs(dateEffective).format("MM/YYYY")}
          />
          <Field label="Plan" value={plan} />
        </HStack>
      </VStack>
    </Layout>
  );
};

export default InsurancesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...shadowStyle.shadowBtn,
    borderRadius: 10,
    paddingBottom: 16,
    marginBottom: 24,
  },
  editButton: {
    position: "absolute",
    top: 36,
    right: 24,
    backgroundColor: "#4B66EA",
    padding: 10,
    borderRadius: 99,
  },
});
