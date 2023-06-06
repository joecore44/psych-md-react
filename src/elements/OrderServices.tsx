import React from "react";
import { View, StyleSheet } from "react-native";

import { HStack, IDivider, Text, VStack } from "components";
import { Layout } from "@ui-kitten/components";
import { shadowStyle } from "style/globalStyle";

interface ServiceListProps {
  name: string;
  time: string;
  price: number;
}
interface OrderServicesProps {
  services: ServiceListProps[];
}

const OrderServices = ({ services }: OrderServicesProps) => {
  return (
    <Layout style={styles.container} level="1">
      <Text category="t4-sb" marginBottom={16}>
        Order Services
      </Text>
      <IDivider />
      {services.map((service, i) => (
        <View key={i} style={styles.children}>
          <HStack mb={16}>
            <VStack>
              <Text category="t5" status="platinum">
                {service.name}
              </Text>
              <Text category="s1" status="info">
                {service.time}
              </Text>
            </VStack>
            <Text category="t1">${service.price}</Text>
          </HStack>
          <IDivider />
        </View>
      ))}
      <HStack>
        <Text category="s1-sb">Total</Text>
        <Text category="s1-sb">
          {services.reduce((a, b) => a + b.price, 0)}
        </Text>
      </HStack>
    </Layout>
  );
};

export default OrderServices;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    ...shadowStyle.shadow,
    borderRadius: 8,
  },
  children: {
    paddingVertical: 16,
  },
});
