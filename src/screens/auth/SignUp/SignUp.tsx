import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Input, useTheme } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, Content, HStack, LinearButton, Text } from "components";
import { Formik } from "formik";
import { signupValidationSchema } from "utils/validation";
import { AuthStackParamList } from "navigation/types";

const SignUpScreen = React.memo(() => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<AuthStackParamList>>();

  const handleSignUp = () => {
    navigate("SignUp", { screen: "BasicInformation" });
  };
  const handleSignUpFacebook = () => {
    navigate("SignUp", { screen: "BasicInformation" });
  };

  return (
    <Formik
      validateOnMount={true}
      validationSchema={signupValidationSchema}
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirm: "",
      }}
      onSubmit={handleSignUp}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => {
        const theme = useTheme();
        const { height, width, top, bottom } = useLayout();
        return (
          <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
              <Text
                uppercase
                category="header"
                center
                marginTop={40}
                marginBottom={52}
              >
                Sign up
              </Text>
              <Input
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                accessoryLeft={<Icon pack="assets" name="user" />}
                style={styles.input}
                caption={errors.username ? errors.username : ""}
              />
              <Input
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                accessoryLeft={<Icon pack="assets" name="lock" />}
                style={styles.input}
                caption={errors.password ? errors.password : ""}
              />
              <Input
                placeholder="Confirm Password"
                value={values.confirm}
                onChangeText={handleChange("confirm")}
                onBlur={handleBlur("confirm")}
                accessoryLeft={<Icon pack="assets" name="lock" />}
                style={styles.input}
                caption={errors.confirm ? errors.confirm : ""}
              />
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
                title="SIGN UP"
                onPress={handleSubmit}
                width={width - 72}
                style={styles.signUp}
                disabled={!isValid}
              />
              <LinearButton
                title="SIGN UP WITH FACEBOOK"
                onPress={handleSignUpFacebook}
                width={width - 72}
              />
            </Content>
            <HStack justify="center" mb={12}>
              <Text>Have an account? </Text>
              <Text status={"info"} uppercase onPress={goBack}>
                Sign in
              </Text>
            </HStack>
          </Container>
        );
      }}
    </Formik>
  );
});

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {},
  content: {},
  input: {
    marginBottom: 14,
    marginHorizontal: 36,
    marginTop: 8,
  },
  signUp: {
    marginBottom: 32,
    marginTop: 24,
  },
});
