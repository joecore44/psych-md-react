import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox, Icon, Input} from '@ui-kitten/components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useBoolean, useLayout} from 'hooks';

import {Container, Content, HStack, LinearButton, Text} from 'components';
import {Formik} from 'formik';
import {loginValidationSchema} from 'utils/validation';
import {AuthStackParamList, RootStackParamList} from 'navigation/types';

interface FormValues {
  username: string;
  password: string;
}

const LoginScreen = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {width} = useLayout();
  const [checkedSaveEmail, {toggle}] = useBoolean(false);

  const handleLogin = (values: FormValues) => {
    navigation.navigate('Drawer', {screen: 'Main'});
  };
  const handleForgotPassword = () => {
    navigate('ForgotPassword');
  };
  const handleSignUp = () => {
    navigate('SignUp', {screen: 'SignUpScreen'});
  };

  return (
    <Formik
      validateOnMount={true}
      validationSchema={loginValidationSchema}
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={handleLogin}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => {
        return (
          <Container style={styles.container}>
            <Content>
              <Text category="header" center marginBottom={60} marginTop={80}>
                SIGN IN
              </Text>
              <Input
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                accessoryLeft={<Icon pack="assets" name="user" />}
                style={styles.input}
                caption={errors.username ? errors.username : ' '}
              />
              <Input
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                accessoryLeft={<Icon pack="assets" name="lock" />}
                style={styles.input}
                caption={errors.password ? errors.password : ' '}
              />
              <HStack mh={44} mb={40}>
                <HStack justify="flex-start">
                  <CheckBox
                    checked={checkedSaveEmail}
                    onChange={toggle}
                    children={'Remember me'}
                  />
                </HStack>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleForgotPassword}>
                  <Icon pack="assets" name="forgotPassword" />
                </TouchableOpacity>
              </HStack>
              <LinearButton
                title={'SIGN IN'}
                width={width - 72}
                shadow
                onPress={handleSubmit}
                style={styles.buttonLogin}
                disabled={!isValid}
              />
              <LinearButton
                title={'SIGN IN WITH FACEBOOK'}
                width={width - 72}
                shadow
              />
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 14,
    marginHorizontal: 36,
    marginTop: 8,
  },
  buttonLogin: {
    marginBottom: 32,
  },
});
