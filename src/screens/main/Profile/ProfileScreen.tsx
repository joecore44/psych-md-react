import React from "react";
import { StyleSheet, View } from "react-native";
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
  ResultsChart,
} from "components";
import { DATA_USER } from "constants/data";
import { shadowStyle } from "style/globalStyle";
import { ProfileButton } from "elements";
import { DrawerStackParamList } from "navigation/types";
import { LineChart } from "react-native-chart-kit";

const ProfileScreen = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>(); 
  const { width } = useLayout();
  const { openDrawer } = useDrawer();

  const user = DATA_USER[0];
  const widthItem = 114 * (width / 375);
  const progressTitles = [
    "Testosterone",
    "FREE T",
    "Hematocrit",
  ];
  const progressValues = [
    780,
    240,
    36,
  ];

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
        logo={true}
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
        <VStack style={styles.results} level="1">
        <ResultsChart
          titles={progressTitles}
          results={progressValues}
          backgroundColor="#ff4000"
          backgroundOpacity={0.6}
        />
         
        </VStack>

        <ProfileButton
          title="Goals"
          icon="goal"
          onPress={handleGoalSettings}
        />
        <ProfileButton
          title="Physician Visits"
          icon="heart"
          onPress={handleDoctorFavorites}
        />
        <ProfileButton
          title="Insurance"
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
  
  results: {
    
    
    borderRadius: 8,
    ...shadowStyle.shadowBtn,
  },
});
