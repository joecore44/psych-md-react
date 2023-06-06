import React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Container, Header, NavigationAction, Text } from "components";
import { DATA_DOCTOR, DATA_HOSPITAL } from "constants/data";
import { IDoctorProps, IHospitalsProps, ServiceKey } from "constants/types";
import keyExtractor from "utils/keyExtractor";
import { ResultItem } from "elements";
import { DrawerStackParamList } from "navigation/types";

const ResultFindScreen = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const route = useRoute();

  const [data, setData] = React.useState<IDoctorProps[] | IHospitalsProps[]>();
  React.useEffect(() => {
    // @ts-ignore
    route?.params.type === ServiceKey.FindDoctor
      ? setData(DATA_DOCTOR)
      : setData(DATA_HOSPITAL);
  }, [route.params]);
  //   @ts-ignore
  const lastWord = route?.params.type.split(" ").pop();

  const ListHeaderComponent = () => {
    return (
      <Text marginTop={24} marginBottom={16}>
        Found {data && data.length} {lastWord.toLowerCase()}s near New York
      </Text>
    );
  };
  const ListEmptyScreen = React.useCallback(() => {
    return <></>;
  }, []);
  const handlePress = () => {};
  const renderItem = React.useCallback(
    ({ item }: { item: IDoctorProps | IHospitalsProps }) => {
      return (
        <ResultItem
          item={item}
          onPressList={handlePressMap}
          onPressCall={handlePressCall}
          onPressMessage={handlePressMessage}
        />
      );
    },
    []
  );
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
      <Header
        accessoryLeft={<NavigationAction status="white" />}
        title={lastWord}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyScreen}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
});

export default ResultFindScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
});
