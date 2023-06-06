import * as React from 'react';
import * as Font from 'expo-font';

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
          'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
          'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
          'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
