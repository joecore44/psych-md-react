import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import { Container, LinearButton, Text } from "components";
import { Images } from "assets/images";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { ILayoutConfig } from "react-native-reanimated-carousel/lib/typescript/layouts/stack";
import Indicator from "./Indicator";
import { RootStackParamList } from "navigation/types";

interface IIntroProps {
  image: ImageSourcePropType;
  title: string;
  describe: string;
}
const Intro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { height, width, top, bottom } = useLayout();
  const SIZE = 215 * (width / 375);
  const DATA_INTRO: IIntroProps[] = [
    {
      image: Images.drugs,
      title: "Ketamine Therapy",
      describe: "Ketamine, when administered under the guidance of trained professionals, holds the potential to profoundly alleviate suffering and facilitate transformative healing experiences.",
    },
    {
      image: Images.appointment,
      title: "Technology",
      describe:
        "By harnessing the power of AI, VR, and professional soundscape technology, ketamine therapy becomes an enhanced and immersive therapeutic approach that holds immense promise for healing and personal growth.",
    },
    {
      image: Images.doctor,
      title: "Trip Sitters",
      describe:
        "Trip sitters play a crucial role in providing compassionate support and ensuring a safe and transformative experience during ketamine therapy journeys.",
    },
  ];
  const modeConfig: ILayoutConfig = {
    snapDirection: "right",
    stackInterval: 120,
    scaleInterval: 1,
    rotateZDeg: 15,
    moveSize: width,
  };

  const [activeIndex, setActiveIndex] = React.useState(0);
  const refCarousel = React.useRef<ICarouselInstance>(null);

  const handleNext = () => refCarousel.current?.next();
  const handlePrv = () => refCarousel.current?.prev();

  const renderItem = React.useCallback(
    ({ item, index }: { item: IIntroProps; index: number }) => {
      return (
        <View style={styles.screen} key={index}>
          <Image
            source={item.image}
            style={{ width: SIZE, height: SIZE, marginBottom: 80 }}
          />
          <Text category="t3-sb" marginBottom={24}>
            {item.title}
          </Text>
          <Text category="t5" center>
            {item.describe}
          </Text>
        </View>
      );
    },
    []
  );
  const handleStart = () => navigate("Auth", { screen: "Login" });
  return (
    <Container style={styles.container}>
      <Carousel
        width={width}
        windowSize={width}
        mode="horizontal-stack"
        modeConfig={modeConfig}
        height={height - 120}
        data={DATA_INTRO}
        loop={false}
        style={styles.carousel}
        renderItem={renderItem}
        ref={refCarousel}
        onProgressChange={(_, absoluteProgress) => {
          setActiveIndex(absoluteProgress);
        }}
      />

      {activeIndex === 2 ? (
        <LinearButton
          title="GET STARTED"
          style={styles.startButton}
          width={width - 72}
          shadow
          onPress={handleStart}
        />
      ) : (
        <View style={styles.bottom}>
          <TouchableOpacity
            disabled={activeIndex === 1}
            style={[styles.button]}
            onPress={handlePrv}
          >
            {activeIndex === 1 && (
              <Icon pack="assets" name="circleBack" style={styles.button} />
            )}
          </TouchableOpacity>
          <Indicator selectIndex={activeIndex} data={DATA_INTRO} />
          <TouchableOpacity style={[styles.button]} onPress={handleNext}>
            <Icon pack="assets" name="circleNext" style={styles.button} />
          </TouchableOpacity>
        </View>
      )}
    </Container>
  );
});

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    flex: 1,
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 32,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  button: {
    width: 56,
    height: 56,
  },
  startButton: {
    alignSelf: "center",
    marginBottom: 12,
  },
});
