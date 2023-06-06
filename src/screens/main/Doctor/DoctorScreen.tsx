import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useBoolean, useDrawer, useLayout } from "hooks";

import { Container, Header, HStack, NavigationAction } from "components";
import { DATA_DOCTOR } from "constants/data";
import keyExtractor from "utils/keyExtractor";
import { ResultItem } from "elements";
import { IDoctorProps } from "constants/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DrawerStackParamList } from "navigation/types";
import { Icon, Input } from "@ui-kitten/components";

const DoctorScreen = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { toggleDrawer } = useDrawer();
  const { top } = useLayout();

  const [showSearch, { on, off, toggle }] = useBoolean(false);
  const [data, setData] = React.useState(DATA_DOCTOR);
  const ListEmptyScreen = React.useCallback(() => {
    return <></>;
  }, []);
  const renderItem = React.useCallback(({ item }: { item: IDoctorProps }) => {
    return (
      <ResultItem
        item={item}
        onPressList={handlePressMap}
        onPressCall={handlePressCall}
        onPressMessage={handlePressMessage}
      />
    );
  }, []);

  const handlePressCall = () => {
    navigate("CallScreen");
  };
  const handlePressMessage = () => {
    navigate("ChatScreen");
  };
  const handlePressMap = () => {
    navigate("MapDoctorScreen");
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      {showSearch ? (
        <HStack level="7" style={{ paddingTop: top }} itemsCenter>
          <Input
            placeholder="Type something..."
            style={styles.input}
            size="small"
            autoFocus
            onBlur={off}
            status="primary"
            accessoryRight={<Icon pack="assets" name="search" />}
          />
        </HStack>
      ) : (
        <Header
          title="Doctor"
          accessoryLeft={
            <NavigationAction
              icon="menu"
              onPress={toggleDrawer}
              status="white"
            />
          }
          accessoryRight={
            <NavigationAction status="white" icon="doctorSearch" onPress={on} />
          }
        />
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyScreen}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
});

export default DoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 24,
    paddingBottom: 60,
  },
  input: {
    flex: 1,
    marginBottom: 12,
    marginHorizontal: 24,
  },
});
