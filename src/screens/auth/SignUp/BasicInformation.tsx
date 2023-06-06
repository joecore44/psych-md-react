import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Icon, Input, Layout, TopNavigation } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import {
  AnimatedAppearance,
  Container,
  Content,
  LinearButton,
  NavigationAction,
  OutlineButton,
  Text,
} from "components";
import { Formik } from "formik";
import SelectGender from "./SelectGender";
import SelectBirthday from "./SelectBirthday";
import SelectHeight from "./SelectHeight";
import SelectWeight from "./SelectWeight";
import { DrawerStackParamList, RootStackParamList } from "navigation/types";

const BasicInformationScreen = React.memo(() => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const ButtonNext = ({ style }: { style?: StyleProp<ViewStyle> }) => {
    return <LinearButton title="NEXT" shadow onPress={_onNext} style={style} />;
  };

  const _onBack = () => {
    if (activeIndex === 0) {
      goBack();
    } else {
      setActiveIndex(0);
    }
  };

  const handleSkip = () => {
    navigate("Drawer", { screen: "Main" });
  };

  const _onNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const _onSubmit = (values: {
    fullname: string;
    gender: string;
    birthday: string;
    weight: string;
    height: string;
  }) => {
    navigate("Drawer", { screen: "Main" });
  };

  return (
    <Formik
      validateOnMount={true}
      initialValues={{
        fullname: "",
        gender: "",
        birthday: "",
        weight: "",
        height: "",
      }}
      onSubmit={_onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        const renderScreen = React.useCallback(() => {
          switch (activeIndex) {
            case 0:
              return (
                <Layout style={styles.container}>
                  <OutlineButton
                    placeholder="Fullname"
                    children={values.fullname}
                    style={styles.outlineButton}
                    onPress={() => {
                      setActiveIndex(1);
                    }}
                  />
                  <OutlineButton
                    placeholder="Birthday"
                    children={values.birthday}
                    style={styles.outlineButton}
                    onPress={() => {
                      setActiveIndex(2);
                    }}
                  />
                  <OutlineButton
                    placeholder="Gender"
                    children={values.gender}
                    style={styles.outlineButton}
                    onPress={() => {
                      setActiveIndex(3);
                    }}
                  />
                  <OutlineButton
                    placeholder="Weight"
                    children={values.weight}
                    style={styles.outlineButton}
                    onPress={() => {
                      setActiveIndex(4);
                    }}
                  />
                  <OutlineButton
                    placeholder="Height"
                    children={values.height}
                    style={styles.outlineButton}
                    onPress={() => {
                      setActiveIndex(5);
                    }}
                  />
                </Layout>
              );
            case 1:
              return (
                <AnimatedAppearance>
                  <Layout style={styles.container}>
                    <Text
                      uppercase
                      category="t4-sb"
                      marginLeft={36}
                      marginBottom={32}
                      children="your name"
                    />
                    <Input
                      style={styles.input}
                      placeholder="Fullname"
                      value={values.fullname}
                      onBlur={handleBlur("fullname")}
                      accessoryLeft={<Icon pack="assets" name="user" />}
                      onChangeText={handleChange("fullname")}
                    />
                    <ButtonNext />
                  </Layout>
                </AnimatedAppearance>
              );
            case 2:
              return (
                <SelectBirthday
                  onChangeValue={handleChange("birthday")}
                  _onNext={_onNext}
                />
              );
            case 3:
              return (
                <SelectGender
                  _onNext={_onNext}
                  onChangeValue={handleChange("gender")}
                />
              );
            case 4:
              return (
                <SelectWeight
                  _onNext={_onNext}
                  onChangeValue={handleChange("weight")}
                />
              );
            case 5:
              return (
                <SelectHeight
                  _onNext={() => setActiveIndex(0)}
                  onChangeValue={handleChange("height")}
                />
              );
            default:
              return null;
          }
        }, [activeIndex, values]);
        return (
          <Container style={styles.container}>
            <TopNavigation
              accessoryLeft={
                <NavigationAction marginLeft={16} onPress={_onBack} />
              }
              title="Create an account"
              accessoryRight={
                <Text marginRight={16} status="info" onPress={handleSkip}>
                  Skip
                </Text>
              }
            />
            <Content contentContainerStyle={styles.content}>
              {renderScreen()}
            </Content>
            {activeIndex === 0 && (
              <LinearButton
                onPress={handleSubmit}
                title="SUBMIT"
                style={styles.buttonSubmit}
              />
            )}
          </Container>
        );
      }}
    </Formik>
  );
});

export default BasicInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 48,
    flexGrow: 1,
  },
  input: {
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  outlineButton: {
    marginBottom: 24,
    marginHorizontal: 32,
  },
  buttonSubmit: {
    marginBottom: 24,
  },
});
