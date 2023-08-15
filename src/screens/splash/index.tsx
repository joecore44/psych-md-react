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
      title: "PeterMD",
      describe: "The Top US online men's health clinic specializing in TRT. We offer convenient and confidential services with a team of experienced professionals, using advanced telemedicine for personalized treatment plans.",
    },
    {
      image: Images.appointment,
      title: "PetraMD",
      describe:
        "A leading online women's health clinic in the US, focusing on comprehensive health solutions. Specializing in a range of services, including hormone therapy, we employ advanced telemedicine providing personalized treatment plans.",
    },
    {
      image: Images.drugs,
      title: "PsychMD",
      describe:
        "PsychMD is a leading US-based online mental health clinic that leverages AI, VR, and Ketamine therapy for innovative telemedicine solutions. Specializing in comprehensive mental wellness, PsychMD offers virtual consultations and therapeutic interventions.",
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
      const backgroundColor = index === 0 ? "#ff4000" : index === 1 ? "#412e3e" : "#78da83"; 
      const fontColor = index === 0 ? "black" : index === 1 ? "#f8f9fa" : "black"; 
  
      return (
        <View style={[styles.screen, { backgroundColor }]} key={index}>
          <Image
            source={item.image}
            style={{ width: SIZE, height: SIZE, marginBottom: 80 }}
          />
          <Text category="t3-sb" marginBottom={24} style={{ color: fontColor }}>
            {item.title}
          </Text>
          <Text category="t5" center style={{ color: fontColor }}>
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