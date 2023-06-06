import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

import {
  Container,
  Content,
  Header,
  LinearButton,
  NavigationAction,
} from "components";

const IndicatorTestInput = React.memo(() => {
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        title="Weight"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Input placeholder="Date" style={styles.input} />
        <Input placeholder="Time" style={styles.input} />
        <Input placeholder="Weight" style={styles.input} />
        <LinearButton title="BOOK APPOINTMENT" />
      </Content>
    </Container>
  );
});

export default IndicatorTestInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 24,
  },
  content: {
    marginHorizontal: 32,
    marginTop: 40,
  },
});
