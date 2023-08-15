import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Icon,
  Input,
  StyleService,
  useStyleSheet,
  useTheme,
  Modal,
  Layout,
} from "@ui-kitten/components";
import { useLayout, useModal } from "hooks";

import {
  Container,
  Content,
  Header,
  HStack,
  LinearButton,
  NavigationAction,
  Text,
} from "components";
import { DrugsDetails } from "elements";
import { navigate } from "navigation/RootNavigation";
import { DATA_DRUGS } from "constants/data";

const AddDrugsScreen = React.memo(() => {
  const theme = useTheme();
  const { width, top, bottom, height } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const { modalRef, show, hide } = useModal();
  return (
    <Container style={styles.container}>
      <Header
        title="Add Medication"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.camera}>
          <Icon pack="assets" name="camera" />
        </TouchableOpacity>
        <Input placeholder="Medication Name" style={styles.input} />
        <Input placeholder="Dosage" style={styles.input} />
        <Input placeholder="Unit" style={styles.input} />
        <Input placeholder="Appearance" style={styles.input} />
        <Input placeholder="Information" style={styles.input} />
      </Content>
      <LinearButton
        title="SUBMIT"
        style={styles.buttonSubmit}
        shadow
        onPress={show}
      />
      <Modal ref={modalRef} style={styles.modal}>
        <Layout level="1" style={{ width: width, minHeight: height }}>
          <HStack pt={top + 12} pl={16} pb={12} level="7">
            <TouchableOpacity
              onPress={() => {
                navigate("DrugsList");
                hide();
              }}
              style={{ zIndex: 100 }}
            >
              <Icon
                pack="assets"
                name="back"
                style={{ tintColor: theme["text-white-color"], zIndex: 100 }}
              />
            </TouchableOpacity>
            <Text
              category="t4-sb"
              center
              status="white"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 8,
              }}
            >
              {"Amoxicillin"}
            </Text>
          </HStack>
          <Content contentContainerStyle={styles.contentModal}>
            <DrugsDetails data={DATA_DRUGS[0]} />
          </Content>
        </Layout>
      </Modal>
    </Container>
  );
});

export default AddDrugsScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 32,
  },
  camera: {
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "text-placeholder-color",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 32,
  },
  input: {
    marginBottom: 24,
  },
  buttonSubmit: {
    marginBottom: 12,
  },
  modal: {
    flex: 1,
  },
  contentModal: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
});
