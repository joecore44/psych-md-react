import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  LinearButton,
  NavigationAction,
  Text,
} from "components";
import { InputCodeOtp } from "elements";

const VerifyScreen = React.memo(() => {
  const [code, setCode] = React.useState("");
  return (
    <Container style={styles.container}>
      <NavigationAction marginLeft={16} marginTop={8} />
      <Content contentContainerStyle={styles.content}>
        <Text category="t1" center marginBottom={8}>
          Verify Email
        </Text>
        <Text status="platinum" center marginHorizontal={32}>
          We just need your registered Email to send you password reset
          intruction
        </Text>
        <InputCodeOtp
          style={styles.enterCode}
          {...{ code, setCode }}
          codeLength={4}
          autoFocus
        />
        <LinearButton title="Verify" style={styles.buttonVerify} />
        <Text center status="platinum" underline>
          Resend
        </Text>
      </Content>
    </Container>
  );
});

export default VerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
  },
  buttonVerify: {
    marginVertical: 32,
  },
  enterCode: {
    flexDirection: "row",
  },
});
