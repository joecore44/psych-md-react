import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, NavigationAction } from "components";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import RenderComposer from "elements/RenderComposer";

const ChatScreen = React.memo(() => {

  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    setMessages(
      [
        {
          _id: 1,
          text: "Hi Guys!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },

        {
          _id: 2,
          text: "Hi Doctor!",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 3,
          text: "I wanna book appointment",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 4,
          text: "Ok!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 5,
          text: "Thank you!",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ].reverse()
    );
  }, []);
  const onSend = React.useCallback((messages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header title="Alexander Wolfe" accessoryLeft={<NavigationAction status='white'/>} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderSend={(props) => null}
        placeholder="Type something..."
        renderComposer={(props) => {
          return <RenderComposer {...props} />;
        }}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
});

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
