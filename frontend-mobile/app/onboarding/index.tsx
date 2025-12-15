import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { setUserName, setFirstRunFalse } from "@/utils/storage";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleContinue = async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Type your name");
      return;
    }

    await setUserName(trimmed);
    await setFirstRunFalse();

    router.replace("/(tabs)");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#171616ff",
        paddingTop: 120,
        paddingHorizontal: 30,
      }}
    >
      <Text
        style={{
          color: "#CB7D74",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Welcome 👋
      </Text>

      <Text
        style={{
          color: "#BBAAAA",
          fontSize: 16,
          marginBottom: 40,
        }}
      >
        Before we start, how should I call you?
      </Text>

      <TextInput
        value={name}
        onChangeText={(value) => {
          setName(value);
          if (error && value.trim()) setError(null);
        }}
        placeholder="Your name"
        placeholderTextColor="#777"
        style={{
          backgroundColor: "#1E1C1C",
          color: "white",
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
          fontSize: 16,
          borderWidth: error ? 1 : 0,
          borderColor: error ? "red" : "transparent",
        }}
      />
      {error ? (
        <Text style={{ color: "red", fontSize: 14, marginBottom: 20 }}>
          {error}
        </Text>
      ) : null}

      <TouchableOpacity
        onPress={handleContinue}
        style={{
          backgroundColor: "#B75B56",
          paddingVertical: 15,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
