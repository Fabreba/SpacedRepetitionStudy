import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { auth } from './firebaseConfig';
import { UserContext } from './UserContext';

export default function HomeScreen() {
  const handleLogout = () => {
    auth.signOut();
  }
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen! {user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
