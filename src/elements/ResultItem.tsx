//@ts-nocheck
import React from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Icon, Modal, useTheme } from "@ui-kitten/components";

import { HStack, Text, VStack } from "components";
import { IDoctorProps, IHospitalsProps } from "constants/types";
import { globalStyle, shadowStyle } from "style/globalStyle";
import { useBoolean, useLayout, useModal } from "hooks";
import { Swipeable } from "react-native-gesture-handler";
import { navigate } from "navigation/RootNavigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DoctorStackParamList } from "navigation/types";

const ResultItem = React.memo(
  ({
    item,
    onDelete,
    onPressCall,
    onPressList,
    onPressMessage,
  }: {
    item: IDoctorProps | IHospitalsProps;
    onPressCall?(): void;
    onDelete?(): void;
    onPressList?(): void;
    onPressMessage?(): void;
  }) => {
    const { navigate } = useNavigation<NavigationProp<DoctorStackParamList>>();
    const { width, height } = useLayout();
    const theme=useTheme()
    const [show, { toggle, on, off }] = useBoolean(false);
    const { modalRef, show: open, hide: close } = useModal();
    const RateStar = () => {
      return (
        <HStack itemsCenter>
          <Icon pack="assets" name="star" style={styles.star} />
          <Text status="info" marginLeft={4}>
            {item.rate.rateStar}
          </Text>
        </HStack>
      );
    };
    const RenderRight = (
      progressAnimatedValue: Animated.AnimatedInterpolation,
      dragAnimatedValue: Animated.AnimatedInterpolation
    ) => {
      return (
        <TouchableOpacity style={styles.delete} onPress={open}>
          <Icon pack="assets" name="close" />
          <Text status="white" marginTop={12}>
            Delete
          </Text>
        </TouchableOpacity>
      );
    };
    const onPress = () => {
      navigate("DoctorProfile");
    };
    return (
      <Swipeable
        renderRightActions={RenderRight}
        containerStyle={styles.swiper}
        onSwipeableOpen={off}
      >
        <HStack
          onPress={onPress}
          ph={16}
          pv={12}
          itemsCenter
          style={styles.item}
          level="1"
          ml={8}
        >
          <Avatar source={{ uri: item.avatar.path }} />
          <VStack flexOne ml={12}>
            <HStack>
              <Text
                category="t4-sb"
                numberOfLines={1}
                maxWidth={180 * (width / 375)}
              >
                {item.name}
              </Text>
              <RateStar />
            </HStack>
            <Text category="s1" status="placeholder" numberOfLines={1}>
              {item.industry}
            </Text>
            <HStack itemsCenter justify="flex-start">
              <Icon pack="assets" name="location" style={{tintColor:theme['text-platinum-color']}}/>
              <Text category="s1" status="platinum" numberOfLines={1} marginLeft={4}>
                {item.distance}
              </Text>
            </HStack>
          </VStack>
          {!show ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={on}
              style={styles.buttonMore}
            >
              <Icon pack="assets" name="more" />
            </TouchableOpacity>
          ) : (
            <HStack style={styles.option}>
              <TouchableOpacity
                style={styles.buttonOption}
                onPress={() => {
                  onPressCall();
                  off();
                }}
              >
                <Icon pack="assets" name="phone" style={styles.iconOption} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonOption}
                onPress={() => {
                  onPressMessage();
                  off();
                }}
              >
                <Icon pack="assets" name="message" style={styles.iconOption} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonOption}
                onPress={() => {
                  onPressList();
                  off();
                }}
              >
                <Icon pack="assets" name="list" style={styles.iconOption} />
              </TouchableOpacity>
              <TouchableOpacity onPress={off} style={styles.buttonOption}>
                <Icon pack="assets" name="close" style={styles.iconOption} />
              </TouchableOpacity>
            </HStack>
          )}
        </HStack>
        <Modal
          ref={modalRef}
          onBackdropPress={close}
          backdropStyle={globalStyle.backdropStyle}
        >
          <VStack level="1" style={styles.alert}>
            <Text
              category="t5"
              center
              marginHorizontal={32}
              marginTop={24}
              marginBottom={16}
            >
              Delete Doctor
            </Text>
            <Text
              category="s1"
              center
              marginHorizontal={60}
              maxWidth={220 * (width / 375)}
              status="platinum"
            >
              Do you want delete doctor{" "}
              <Text category="s1-sb" status="info">
                {item.name}
              </Text>{" "}
              on list
            </Text>
            <HStack mt={28} style={shadowStyle.shadow}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonCancel}
                onPress={close}
              >
                <Text category="t4" status="white" center>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonDone}
                onPress={() => {
                  onDelete && onDelete();
                  close();
                }}
              >
                <Text category="t4" center>
                  Done
                </Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </Modal>
      </Swipeable>
    );
  }
);

export default ResultItem;

const styles = StyleSheet.create({
  swiper: {
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  alert: {
    borderRadius: 16,
  },
  item: {
    borderRadius: 12,
    ...shadowStyle.shadowBtn,
  },
  star: {
    width: 16,
    height: 16,
  },
  delete: {
    backgroundColor: "#FF4A4A",
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 96,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 12,
    marginLeft: -24,
  },
  buttonMore: {
    position: "absolute",
    bottom: 12,
    right: 8,
  },
  option: {
    backgroundColor: "#696969",
    position: "absolute",
    bottom: 8,
    right: 8,
    borderRadius: 8,
  },
  buttonOption: {
    padding: 12,
    backgroundColor: "#696969",
    padding: 12,
    borderRadius: 8,
  },
  iconOption: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: "#4B66EA",
    borderBottomLeftRadius: 16,
    paddingVertical: 12,
  },
  buttonDone: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomRightRadius: 16,
  },
});
