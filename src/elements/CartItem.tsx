import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLayout } from "hooks";
import { HStack, Text, VStack } from "components";
import { IDrugsProps } from "constants/types";
import { shadowStyle } from "style/globalStyle";

interface CartItemProps {
  drugs: IDrugsProps;
  amount: number;
}
const CartItem = React.memo(({ item }: { item: CartItemProps }) => {
  const { width } = useLayout();
  const [amount, setAmount] = React.useState(item.amount);
  const increAmount = () => {
    setAmount(amount + 1);
  };
  const decreAmount = () => {
    setAmount(amount - 1);
  };
  return (
    <HStack level="1" style={styles.item} justify="flex-start" mb={16}>
      <Image
        source={{ uri: item.drugs.image.path }}
        style={{ width: 80, height: 80, borderRadius: 12, marginRight: 16 }}
      />
      <VStack flexOne>
        <Text category="t5-sb" numberOfLines={2} maxWidth={215 * (width / 375)}>
          {item.drugs.name}
        </Text>
        <HStack>
          <Text category="t4" status="info">
            ${item.drugs.price.toFixed(2)}
          </Text>
          <HStack>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={amount === 0}
              onPress={decreAmount}
            >
              <Text category="t4" status={amount === 0 ? "platinum" : "info"}>
                -
              </Text>
            </TouchableOpacity>
            <Text category="t4" marginHorizontal={12}>
              {amount}
            </Text>
            <Text category="t4" status="info" onPress={increAmount}>
              +
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
});

export default CartItem;

const styles = StyleSheet.create({
  item: {
    ...shadowStyle.shadowFade,
    borderRadius: 8,
    padding: 16,
  },
});
