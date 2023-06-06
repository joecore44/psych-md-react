import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDrawer, useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  IDivider,
  NavigationAction,
  Text,
  VStack,
} from "components";
import { DATA_USER } from "constants/data";
import { shadowStyle } from "style/globalStyle";
import { ProfileButton } from "elements";
import { DrawerStackParamList } from "navigation/types";

const ProfileScreen = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { width } = useLayout();
  const { openDrawer } = useDrawer();

  const user = DATA_USER[0];
  const widthItem = 114 * (width / 375);
  const GoalItem = React.useCallback(() => {
    return (
      <VStack style={{ width: widthItem }} mt={24}>
        <Text marginLeft={16} status="platinum">
          Goal
        </Text>
        <Text marginLeft={16} marginBottom={16} category="t2">
          108
          <Text category="s2" status="platinum">
            bmp
          </Text>
        </Text>
      </VStack>
    );
  }, []);
  const handleInsurances = () => {
    navigate("InsurancesScreen");
  };
  const handleGoalSettings = () => {
    navigate("GoalSettings");
  };
  const handleDoctorFavorites = () => {
    navigate("DoctorsFavorites");
  };
  return (
    <Container useSafeArea={false} style={styles.container}>
      <Header
        title="User Profile"
        accessoryLeft={
          <NavigationAction status="white" onPress={openDrawer} icon="menu" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <VStack mb={24} itemsCenter>
          <Avatar source={{ uri: user.avatar.path }} size="giant" />
          <Text category="t4-b" marginTop={12}>
            {user.name}
          </Text>
        </VStack>
        <VStack style={styles.fieldGoal} level="1">
          <GoalItem />
          <IDivider
            appearance="primary"
            style={{ position: "absolute", left: widthItem }}
          />
          <GoalItem />
          <GoalItem />
          <IDivider />
          <GoalItem />
          <GoalItem />
          <IDivider
            appearance="primary"
            style={{ position: "absolute", right: widthItem }}
          />
          <GoalItem />
        </VStack>

        <ProfileButton
          title="Goal Settings"
          icon="goal"
          onPress={handleGoalSettings}
        />
        <ProfileButton
          title="Doctor Favorites"
          icon="heart"
          onPress={handleDoctorFavorites}
        />
        <ProfileButton
          title="Insurances"
          icon="user"
          onPress={handleInsurances}
        />
      </Content>
    </Container>
  );
});

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  fieldGoal: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 8,
    ...shadowStyle.shadowBtn,
  },
});
