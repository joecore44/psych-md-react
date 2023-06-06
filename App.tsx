import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as darkTheme } from './src/constants/theme/dark.json';
import { default as lightTheme } from './src/constants/theme/light.json';
import { default as customTheme } from './src/constants/theme/appTheme.json';
import { default as customMapping } from './src/constants/theme/mapping.json';
import ThemeContext from './ThemeContext';
import useCachedResources from 'hooks/useCachedResources';
import AppContainer from 'navigation';
import AssetIconsPack from 'assets/AssetIconsPack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    AsyncStorage.getItem('theme').then((value) => {
      if (value === 'light' || value === 'dark') setTheme(value);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('theme', nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <IconRegistry defaultIcons="lock" icons={[EvaIconsPack, AssetIconsPack]} />
          <ApplicationProvider
            {...eva}
            theme={
              theme === 'light'
                ? { ...eva.light, ...customTheme, ...lightTheme }
                : { ...eva.dark, ...customTheme, ...darkTheme }
            }
            customMapping={{ ...eva.mapping, ...customMapping }}>
            <StatusBar
              style={theme === 'light' ? 'dark' : 'light'}
              translucent={true}
              backgroundColor={'#00000000'}
            />
            <AppContainer cachedResources={isLoadingComplete} />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
