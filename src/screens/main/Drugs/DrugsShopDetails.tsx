import React from "react";
import { StyleSheet } from "react-native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  LinearButton,
  NavigationAction,
  Text,
} from "components";
import { DrugsDetails } from "elements";
import { navigate } from "navigation/RootNavigation";
import { DATA_DRUGS } from "constants/data";

const DrugsShopDetails = React.memo(() => {
  const { bottom } = useLayout();
  const handleBuy = () => {
    navigate("CartListScreen");
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Amoxicillin"
        accessoryLeft={<NavigationAction status="white" />}
        accessoryRight={
          <NavigationAction status="white" icon="shopBag" onPress={handleBuy} />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Text category="header-sb" status="info" marginBottom={12}>
          ${DATA_DRUGS[0].price.toFixed(2)}
        </Text>
        <DrugsDetails data={DATA_DRUGS[0]} />
      </Content>
      <LinearButton
        title="BUY NOW"
        onPress={handleBuy}
        style={{ bottom: 12 + bottom, position: "absolute", left: 0, right: 0 }}
      />
    </Container>
  );
});

export default DrugsShopDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
});
