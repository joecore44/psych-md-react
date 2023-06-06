import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Container, Header, NavigationAction, Text } from "components";
import { DATA_DOCTOR } from "constants/data";
import { ResultItem } from "elements";
import keyExtractor from "utils/keyExtractor";
import { IDoctorProps } from "constants/types";

const DoctorsFavorites = React.memo(() => {
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
  const ListEmptyScreen = React.useCallback(() => {
    return <></>;
  }, []);

  const handlePressMap = () => {};
  const handlePressCall = () => {};
  const handlePressMessage = () => {};
  return (
    <Container useSafeArea={false}>
      <Header
        title="Doctor Favorites"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyScreen}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
});

export default DoctorsFavorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
});
const DATA = DATA_DOCTOR;
