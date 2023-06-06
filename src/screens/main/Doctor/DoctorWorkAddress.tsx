import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Icon, useTheme } from "@ui-kitten/components";

import {
  Container,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";
import keyExtractor from "utils/keyExtractor";
import { shadowStyle } from "style/globalStyle";

interface IWorkAddressProps {
  id: string;
  name: string;
  location: string;
  distance: string;
}

const DoctorWorkAddress = React.memo(() => {
  const theme = useTheme();
  const [data, setData] = React.useState<IWorkAddressProps[]>(DATA);
  const renderItem = React.useCallback(
    ({ item }: { item: IWorkAddressProps }) => {
      const { location, id, name, distance } = item;
      return (
        <VStack style={styles.item} level="1">
          <Text category="t4-sb">{name}</Text>
          <Text category="s1">{location}</Text>
          <HStack itemsCenter justify="flex-start">
            <Icon
              pack="assets"
              name="location"
              style={{ tintColor: theme["text-info-color"] }}
            />
            <Text category="s1" status="info" numberOfLines={1} marginLeft={4}>
              {distance}
            </Text>
          </HStack>
        </VStack>
      );
    },
    []
  );

  return (
    <Container useSafeArea={false}>
      <Header
        title="Work Address"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.content}
      />
    </Container>
  );
});

export default DoctorWorkAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  item: {
    marginHorizontal: 24,
    marginBottom: 24,
    ...shadowStyle.shadowBtn,
    borderRadius: 8,
    padding: 16,
  },
});

const DATA = [
  {
    id: "1",
    name: "Healer Hospital #1",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
  },
  {
    id: "2",
    name: "Children Hospital",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
  },
  {
    id: "3",
    name: "Eyes Hospital #1",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
  },
  {
    id: "4",
    name: "Legs Hospital #1",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
  },
  {
    id: "5",
    name: "Healer Hospital #2",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
  },
];
