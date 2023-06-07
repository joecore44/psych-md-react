import * as React from 'react';
import {StyleSheet} from 'react-native';
import {useDrawer} from 'hooks';

import {Container, Content, Header, NavigationAction} from 'components';
import Chart from './Chart';
const DashboardScreen = React.memo(() => {
  const {toggleDrawer} = useDrawer();
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        accessoryLeft={
          <NavigationAction status="white" icon="menu" onPress={toggleDrawer} />
        }
        title="Charts"
      />
      <Content contentContainerStyle={styles.content}>
        <Chart />
        <Chart />
        <Chart />
      </Content>
    </Container>
  );
});

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 32,
  },
});
