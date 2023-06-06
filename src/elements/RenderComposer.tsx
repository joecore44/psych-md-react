import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Layout,
  Icon,
} from "@ui-kitten/components";

import { Composer, Send } from "react-native-gifted-chat";

const RenderComposer = (props: any) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout {...props} style={styles.container}>
      <Composer
        {...props}
        textInputStyle={{ color: theme["text-white-color"] }}
      />
      <View style={styles.content}>
        <TouchableOpacity>
          <Icon pack="assets" name="add" />
        </TouchableOpacity>
        <Send {...props} containerStyle={styles.containerSend} alwaysShowSend>
          <Icon pack="assets" name="plane" />
        </Send>
      </View>
    </Layout>
  );
};

export default RenderComposer;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  containerSend: {
    marginHorizontal: 16,
    justifyContent: "center",
  },
});
