import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";
import { useLayout } from "hooks";

import { Container, Header, HStack, NavigationAction, Text } from "components";
import { IDrugsProps } from "constants/types";
import { DATA_DRUGS } from "constants/data";
import { shadowStyle } from "style/globalStyle";
import { CartItem } from "elements";
import { navigate } from "navigation/RootNavigation";

const CartListScreen = React.memo(() => {
  const { bottom } = useLayout();

  const handleCheckout = () => {navigate('BillingScreen')};
  const renderItem = ({
    item,
  }: {
    item: { drugs: IDrugsProps; amount: number };
  }) => {
    return <CartItem item={item} />;
  };
  const total = 257;
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Shopping Cart"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={DATA_CART_LIST}
        renderItem={renderItem}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}
      />
      <Layout style={[styles.bottom, { paddingBottom: bottom + 8 }]} level="1">
        <HStack justify="flex-start" itemsCenter>
          <Text category="t4-sb" status="platinum" marginRight={4}>
            Total:
          </Text>
          <Text category="t3-sb" status="info">
            ${total.toFixed(2)}
          </Text>
        </HStack>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCheckout}
          style={styles.buttonCheckout}
        >
          <Text category="t4" uppercase status="white">
            check out
          </Text>
        </TouchableOpacity>
      </Layout>
    </Container>
  );
});

export default CartListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  bottom: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 16,
    ...shadowStyle.shadowFade,
  },
  buttonCheckout: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#4B66EA",
    borderRadius: 99,
  },
});
const DATA_CART_LIST = [
  {
    drugs: DATA_DRUGS[0],
    amount: 2,
  },
  {
    drugs: DATA_DRUGS[1],
    amount: 2,
  },
  {
    drugs: DATA_DRUGS[2],
    amount: 2,
  },
];
