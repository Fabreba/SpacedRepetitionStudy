import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 4, marginHorizontal: 24, marginTop: "40%" }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Olá, seja bem-vindo!
        </Text>
        <Text style={{ fontSize: 12}}>
          Esta é uma plataforma de ensino que oferece ensino baseado em
          repetição espaçada.
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Acesse e descubra!
        </Text>
        <View style={{flex: 1, flexDirection: "row", alignContent: 'center', justifyContent:'space-between', marginHorizontal: 32}}>
          <Pressable style={styles.button}>
            <Text>Criar</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text>Entrar</Text>
          </Pressable>
        </View>
        <View style={{ gap: 12, marginTop: 32 }}>
          <TextInput
            style={styles.text_input}
            placeholder="Nome completo"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.text_input}
            placeholder="Seu E-mail"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.text_input}
            placeholder="Sua senha"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.text_input}
            placeholder="Confirme sua senha"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
        </View>
      </View>
      <Pressable style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Criar nova conta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 16,
  },
  text_input: {
    padding: 14,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0056ff",
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
