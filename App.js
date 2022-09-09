console.reportErrorsAsExceptions = false;
import { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Landing from './components/auth/Landing';
import Register from './components/auth/Register'

export default function App() {
  const Stack = createNativeStackNavigator();

  const firebaseConfig = {
    apiKey: "AIzaSyAoFv7z5RHySg0-c0sseg0XME9cYtvkO6o",
    authDomain: "exptagram.firebaseapp.com",
    projectId: "exptagram",
    storageBucket: "exptagram.appspot.com",
    messagingSenderId: "969046117555",
    appId: "1:969046117555:web:1cf2d8e33079080b0a34c6",
    measurementId: "G-L9JH11YHC9"
  };
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)

  const [loaded, isLoaded] = useState(false)
  const [loggedIn, isLogged] = useState(false)


  onAuthStateChanged(auth, (user) => {
    if (!user) {
      isLogged(false)
      isLoaded(false)
    }
    else {
      isLogged(false)
      isLoaded(true)
    }
  })

  if (!loaded) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }
  else return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}