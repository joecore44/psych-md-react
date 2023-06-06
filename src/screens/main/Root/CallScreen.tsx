import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Avatar,
  Icon,
  StyleService,
  TopNavigation,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Header,
  HStack,
  NavigationAction,
  Text,
} from "components";
import Animated, {
  useAnimatedStyle,
  withSequence,
  withSpring,
  withRepeat,
  withTiming,
  useSharedValue,
  interpolate,
} from "react-native-reanimated";
import { Images } from "assets/images";
import { shadowStyle } from "style/globalStyle";
import { Icons } from "assets/icons";

const CallScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [useMic, setUseMic] = React.useState(true);
  const progress = useSharedValue(0.7);
  React.useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      alignItems: "center",
      justifyContent: "center",
      transform: [{ scale: scale }],
      width: width - 48,
      height: width - 48,
      borderRadius: 200,
      borderWidth: 0.6,
      borderColor: theme["text-placeholder-color"],
    };
  }, [progress.value]);

  const handleDone = () => {
    goBack();
  };
  const toggleMic = () => {
    setUseMic(!useMic);
  };
  const sizeAvatar = 175 * (width / 375);
  return (
    <Container>
      <View style={styles.content}>
        <Text status="placeholder" category="t2">
          {"Calling..."}
        </Text>
        <Text status="placeholder" category="t5-b" marginBottom={44}>
          {"Alexander Wolfe"}
        </Text>
        <Animated.View style={style}>
          <Animated.View style={styles.border}>
            <Avatar
              source={{
                uri: "https://placeimg.com/140/140/any",
              }}
              style={{
                width: sizeAvatar,
                height: sizeAvatar,
              }}
            />
          </Animated.View>
        </Animated.View>
        <HStack mt={80}>
          <TouchableOpacity style={styles.buttonMic} onPress={toggleMic}>
            <Icon
              pack="assets"
              name={useMic ? "micMute" : "mic"}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTick} onPress={handleDone}>
            <Icon pack="assets" name="tick" style={styles.icon} />
          </TouchableOpacity>
        </HStack>
      </View>
    </Container>
  );
});

export default CallScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  border: {
    borderWidth: 0.6,
    borderColor: "text-placeholder-color",
    borderRadius: 200,
    padding: 36,
  },
  buttonMic: {
    width: 60,
    height: 60,
    backgroundColor: "background-basic-color-1",
    ...shadowStyle.shadowBtn,
    borderRadius: 99,
    marginRight: 24,
    justifyContent: "center",
  },
  buttonTick: {
    width: 60,
    height: 60,
    backgroundColor: "background-basic-color-7",
    ...shadowStyle.shadowBtn,
    borderRadius: 99,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
});
