import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { UserProvider, UserContext } from './UserContext';

const Stack = createStackNavigator();

function Navigator() {
  const { user, setUser } = React.useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, [setUser]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppNavigator() {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider>
  );
}