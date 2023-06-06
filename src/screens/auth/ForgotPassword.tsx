import React from "react";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import { Icon, Input, TopNavigation, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import { useLayout } from "hooks";
import { Container, Content, LinearButton, Text, HStack } from "components";
import NavigationAction from "components/NavigationAction";
import { requestResetPasswordValidation } from "utils/validation";
import { navigate } from "navigation/RootNavigation";

const ForgotPasswordScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const handleSendEmail = () => {
   navigate('VerifyScreen')
  };
  const handleResend = () => {};
  const handleSignUp = () => {};

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={requestResetPasswordValidation}
      onSubmit={handleSendEmail}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <Container style={styles.container}>
            <TopNavigation
              accessoryLeft={<NavigationAction marginLeft={16} />}
            />
            <Content>
              <Text category="t1" center marginBottom={8} marginTop={52}>
                Forgot Password
              </Text>
              <Text
                category="t5"
                center
                marginHorizontal={32}
                marginBottom={48}
              >
                We just need your registered Email to send you password reset
                instruction
              </Text>
              <Input
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                accessoryLeft={<Icon pack="assets" name="mail" />}
                style={styles.input}
                caption={errors.email ? errors.email : ""}
              />
              <LinearButton
                onPress={handleSubmit}
                title="Send Email"
                width={width - 72}
                shadow
              />
              <Text
                status={"info"}
                center
                marginTop={24}
                onPress={handleResend}
              >
                Resend
              </Text>
            </Content>
            <HStack justify="center" mb={12}>
              <Text>Don't have an account? </Text>
              <Text uppercase status="info" onPress={handleSignUp}>
                Sign up
              </Text>
            </HStack>
          </Container>
        );
      }}
    </Formik>
  );
});

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 32,
    marginHorizontal: 32,
  },
});
