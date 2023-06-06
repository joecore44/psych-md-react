import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Layout, TopNavigation, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";

import { Container, Content, Header, NavigationAction, Text, VStack } from "components";
import { DATA_NEWS } from "constants/data";
import dayjs from "dayjs";
import { shadowStyle } from "style/globalStyle";
import { navigate } from "navigation/RootNavigation";

const NewsDetailsScreen = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const data = DATA_NEWS[0];
  const content =
    "A healthy lifestyle can help people with various disorders and diseases better control them, gaining a better quality of life. High blood pressure is one the diseases that can be better controlled with a healthy lifestyle. In some people, a healthy lifestyle Can prevent high blood pressure from developing. Many of us have heard over and over to “lose weight and get more exercise” because it will help a person to maintain better health. Maintaining a healthy weight and exercising regularly can do a lot to help prevent and control high blood pressure. High blood pressure and a high weight are closely related. Being overweight significantly raises a person’s risk of developing high blood pressure. An overweight person raises their risk by as much as six times. But, as a person starts to take the extra pounds off, their blood pressure typically goes down too. Try to eat more fruits, vegetables, whole grains, low-fat dairy products, and lean protein.  Exercise is another important factor in preventing and controlling high blood pressure (http://www.gothypertension.com/managing/highbloodpressureandexercise). Exercising makes the heart stronger and enables it to pump blood throughout the body with less effort. The easier it is for the heart to pump blood, the easier it is on the arteries. Regular physical activity helps a person reach and maintain a healthy weight. The latest federal guidelines suggest a person engage in moderate physical activity 30-60 minutes a day, 5-7 days a week. Walking is a good physical activity, especially for people just starting an exercise routine. Swimming, biking, and jogging are also great forms of exercise. In addition, federal guidelines suggest a person engage in vigorous physical activities, such as strength training, three times a week for at least 20 minutes each time.  Smoking is hard on the heart and nicotine cases the blood vessels to constrict, narrowing the blood vessels and making the heart work harder to pump blood through the body. Smoking also interferes with some blood pressure medications, making them much less effective. Quitting smoking reduces the risk for high blood pressure, will help to control existing high blood pressure, and will also reduce a person’s risk of developing lung cancer, heart disease, and having a stroke. Quitting smoking is very difficult, possibly the hardest thing a person will ever do, but doing so goes a long way towards improving a person’s health. Avoiding excessive sodium is suggested to help control and prevent high blood pressure, although there has been controversy in recent years about whether or not reducing sodium intake will have much of an effect on blood pressure. It may not have a big impact, but even a small reduction in sodium can have a positive effect on a person’s health. Take any prescribed high blood pressure medications as directed – don’t skip doses or quit taking it entirely. If, after being on medication for a period of time blood pressure returns to normal levels, it does not mean that person’s blood pressure has become normal. It means the medication is doing its job and is controlling the blood pressure. Blood pressure medication needs to be taking indefinitely, often for life. Avoid excessive alcohol consumption. Not only can it cause high blood pressure, it’s also bad for the liver and kidneys. Although studies have not proven whether or not caffeine affects high blood pressure, some studies have shown that people who regularly consume caffeine each day have higher blood pressure than people who don’t. On the other hand, some studies have shown that people eventually develop a tolerance to caffeine and that it then no longer affects their blood pressure. As a precautionary measure, physicians will usually advice patients with high blood pressure to limit their caffeine intake. Word count: 623. Incoming search terms:free plr articles on high blood pressure";
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Content>
        <Image
          source={{ uri: data.image.path }}
          style={{ width: width, height: 215 * (height / 812) }}
        />
        <TouchableOpacity style={styles.buttonFood}>
          <Text category="t4-sb" status="white">
            Food
          </Text>
        </TouchableOpacity>
        <VStack mh={16} mt={32}>
          <Text category="t2-sb">{data.title}</Text>
          <Text status="placeholder">
            {dayjs(data.createAt).format("MMMM DD,YYYY")} by{" "}
            <Text status="info">{data.createBy.name}</Text>
          </Text>
          <Text status="platinum" marginTop={40} marginBottom={40}>
            {content}
          </Text>
        </VStack>
      </Content>
      <Layout level="1" style={[styles.bottom, { paddingBottom: bottom + 8 }]}>
        <TouchableOpacity onPress={()=>navigate('CommentScreen')}>
          <Icon
            pack="assets"
            name="bubble"
            style={[styles.icon, { tintColor: theme["text-info-color"] }]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon pack="assets" name="like" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon pack="assets" name="bookmark" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon pack="assets" name="level" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon pack="assets" name="circle" style={styles.icon} />
        </TouchableOpacity>
      </Layout>
    </Container>
  );
});

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonFood: {
    backgroundColor: "#4B66EA",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 99,
    marginTop: -24,
    marginLeft: 24,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingHorizontal: 24,
    ...shadowStyle.shadowFade,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#969696",
  },
});
