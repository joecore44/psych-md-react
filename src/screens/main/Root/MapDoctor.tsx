import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Avatar, Icon, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, Header, NavigationAction } from "components";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { DATA_DOCTOR } from "constants/data";
import CustomPin from "elements/MapDoctor/CustomPin";
import DoctorItem from "elements/MapDoctor/DoctorItem";

const MapDoctorScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const mapRef = React.useRef<MapView>(null);
  const destination = { latitude: 37.7733358, longitude: -122.4161628 };
  const second_destination = { latitude: 37.7583358, longitude: -122.4262328 };
  const myLocation = {
    latitude: 37.7727554036638,
    longitude: -122.40456238389014,
  };
  const endLocation = { latitude: 37.7583358, longitude: -122.4425687 };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        accessoryLeft={<NavigationAction status="white" />}
        title="Maps"
      />
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.7583358,
          longitude: -122.4262328,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0531,
        }}
        onPress={(e) => console.log(e.nativeEvent.coordinate)}
        showsBuildings
        showsCompass
        showsIndoorLevelPicker
      >
        <Polyline
          coordinates={[
            endLocation,
            second_destination,
            destination,
            myLocation,
          ]}
          strokeColor="#4F6DE6"
          strokeWidth={4}
          lineDashPattern={[10, 40, 70]}
        />
        <CustomPin
          image={<Avatar source={{ uri: DATA_DOCTOR[0].avatar.path }} />}
          coordinate={endLocation}
        />
        <Marker
          coordinate={myLocation}
          image={{
            uri: "https://user-images.githubusercontent.com/87011701/190369180-8843626f-76c2-48db-a4df-d001383d665b.png",
          }}
        />
      </MapView>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.myLocation}>
          <Icon pack="assets" name="locate" style={styles.iconMyLocation} />
        </TouchableOpacity>
        <FlatList
          horizontal
          contentContainerStyle={[
            styles.contentContainer,
            { paddingBottom: bottom + 8 },
          ]}
          scrollEventThrottle={16}
          data={DATA_DOCTOR}
          renderItem={({ item }) => {
            return <DoctorItem item={item} />;
          }}
        />
      </View>
    </Container>
  );
});

export default MapDoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 80,
    height: 80,
  },
  contentStyle: {
    position: "absolute",
    bottom: 0,
  },
  contentContainer: {
    paddingLeft: 24,
  },
  myLocation: {
    alignSelf: "flex-end",
  },
  iconMyLocation: {
    width: 60,
    height: 60,
    marginRight: 12,
    marginBottom: 12,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
