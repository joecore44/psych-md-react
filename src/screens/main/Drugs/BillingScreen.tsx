import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Input } from "@ui-kitten/components";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  HStack,
  LinearButton,
  NavigationAction,
  Text,
  VStack,
} from "components";
import dayjs from "dayjs";

const BillingScreen = React.memo(() => {
  const { width } = useLayout();
  const {bottom}=useLayout();
  const refFlatList = React.useRef<FlatList>(null);
  const [activeItem, setActiveItem] = React.useState(DATA[0]);
  React.useEffect(() => {
    refFlatList.current?.scrollToItem({
      item: activeItem,
      animated: true,
      viewPosition: 0.5,
    });
  }, [activeItem, refFlatList]);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Billing"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.content}>
        <FlatList
          horizontal
          data={DATA}
          contentContainerStyle={styles.contentCreditCard}
          showsHorizontalScrollIndicator={false}
          ref={refFlatList}
          renderItem={({ item }) => {
            const isActive = item === activeItem;
            return (
              <TouchableOpacity
                style={[
                  styles.card,
                  {
                    width: 300 * (width / 375),
                    backgroundColor: isActive ? "#ECBC3A" : "#969696",
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => {
                  setActiveItem(item);
                }}
              >
                <HStack>
                  <Text category="t3" status="white">
                    VISA
                  </Text>
                  <Text style={{ color: "#FFFFFF80" }} category="t5-sb">
                    debit
                  </Text>
                </HStack>
                <Text status="white" style={styles.textNumber}>
                  {item.cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
                </Text>
                <HStack itemsCenter>
                  <Text status="white" category="t4-sb">
                    {item.userName}
                  </Text>
                  <Text status="white">
                    {dayjs(item.expDate).format("MM/YYYY")}
                  </Text>
                </HStack>
              </TouchableOpacity>
            );
          }}
        />
        <VStack mh={16} mt={40}>
          <Input placeholder="Fullname" style={styles.input} />
          <Input placeholder="Address" style={styles.input} />
          <HStack>
            <Input
              placeholder="City"
              style={[styles.input, { marginRight: 16 }]}
            />
            <Input placeholder="Zipcode" style={styles.input} />
          </HStack>
          <HStack>
            <Input
              placeholder="State"
              style={[styles.input, { marginRight: 16 }]}
            />
            <Input placeholder="County" style={styles.input} />
          </HStack>
        </VStack>
      </Content>
      <LinearButton title="PAY NOW" style={{ marginBottom: bottom + 8 }} />
    </Container>
  );
});

export default BillingScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECBC3A",
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
  },
  container: {
    flex: 1,
  },
  textNumber: {
    fontFamily: "Poppins-Regular",
    fontSize: 22,
    lineHeight: 33,
    marginTop: 16,
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  content: {
    paddingTop: 32,
  },
  contentCreditCard: {
    paddingLeft: 16,
  },
  input: {
    flex: 1,
    marginBottom: 24,
  },
});
const DATA = [
  {
    id: "1a",
    type: "visa",
    cardNumber: "1234 5678 9012 3456",
    userName: "John Bill",
    expDate: new Date(2024, 12),
  },
  {
    id: "1aa",
    type: "visa",
    cardNumber: "1234 5678 9012 3456",
    userName: "John Bill",
    expDate: new Date(2024, 12),
  },
  {
    id: "1aax",
    type: "visa",
    cardNumber: "1234 5678 9012 3456",
    userName: "John Bill",
    expDate: new Date(2024, 12),
  },
];
