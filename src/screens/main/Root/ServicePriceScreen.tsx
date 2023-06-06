import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  LinearButton,
  NavigationAction,
  Text,
  VStack,
} from "components";
import TabBar from "components/TabBar";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { DATA_SERVICE_PRICE } from "constants/data";
import { ILayoutConfig } from "react-native-reanimated-carousel/lib/typescript/layouts/parallax";
import Animated from "react-native-reanimated";

interface IServicePrice {
  id: number;
  title: string;
  price: number;
  utilities: string[];
}

const ServicePriceScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const modeConfig: ILayoutConfig = {
    parallaxScrollingOffset: 46,
    parallaxScrollingScale: 0.9,
  };
  const [dataService, setDataService] = React.useState(DATA_SERVICE_PRICE);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const refCarousel = React.useRef<ICarouselInstance>(null);
  return (
    <Container style={styles.container}>
      <Header
        title="Price Table"
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content>
        <TabBar
          onChangeTab={setSelectedIndex}
          tabActive={selectedIndex}
          style={styles.tabBar}
          tabs={["Basic", "Pro", "Premium"]}
          disabled
        />
        <Carousel
          ref={refCarousel}
          data={dataService}
          mode="parallax"
          modeConfig={modeConfig}
          snapEnabled
          defaultIndex={selectedIndex}
          scrollAnimationDuration={1000}
          onSnapToItem={(e) => setSelectedIndex(e)}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  {
                    backgroundColor:
                      index === selectedIndex
                        ? "#cf9d03"
                        : theme["text-platinum-color"],
                    height: 480 * (height / 812),
                  },
                  styles.item,
                ]}
              >
                <VStack mb={48}>
                  <Text style={styles.textPrice} status="basic" marginTop={32}>
                    ${item.price}
                  </Text>
                  <Text
                    category="s1"
                    status="placeholder"
                    center
                    marginTop={-12}
                  >
                    Per Month
                  </Text>
                </VStack>
                <VStack justify="space-between">
                  {item.utilities.map((util, i) => {
                    return (
                      <Text
                        category="t4"
                        key={i}
                        marginVertical={16}
                        status="basic"
                        center
                      >
                        {util}
                      </Text>
                    );
                  })}
                </VStack>
              </View>
            );
          }}
          width={width}
          height={480 * (height / 812)}
          //   loop
        />
      </Content>
      <LinearButton style={styles.button} title="BUY NOW" />
    </Container>
  );
});

export default ServicePriceScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  textPrice: {
    fontSize: 48,
    lineHeight: 72,
    fontFamily: "Poppins-SemiBold",
  },
  item: {
    alignItems: "center",
    borderRadius: 16,
  },
  tabBar: {
    marginBottom: 24,
  },
  button: {
    marginBottom: 16,
    marginTop: 36,
  },
});
