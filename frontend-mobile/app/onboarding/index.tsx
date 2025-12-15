import { setFirstRunFalse, setUserName } from "@/utils/storage";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
    >
      <MaskedView
        maskElement={
          <Text
            style={{
              color: "#CB7D74",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Welcome 👋
          </Text>
        }
      >
        <LinearGradient
          colors={["#DFA196", "#B75B56", "#7B141E"]}
          start={{ x: 1, y: 0}}
          end={{ x: 0, y: 1}}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              opacity: 0, 
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Welcome 👋
          </Text>
        </LinearGradient>
      </MaskedView>

      <Text
        style={{
          color: "#a14c4cff",
          fontSize: 16,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Type your name below
      </Text>

      <TextInput
        value={name}
        onChangeText={(value) => {
          setName(value);
          if (error && value.trim()) setError(null);
        }}
        placeholder="Put your name here"
        placeholderTextColor="#884545ff"
        style={{
          backgroundColor: "#201b1bff",
          color: "white",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
          fontSize: 16,
          borderWidth: error ? 1 : 0,
          borderColor: error ? "red" : "transparent",
          textAlign: "center",
        }}
      />
      {error ? (
        <Text style={{ color: "red", fontSize: 14, marginBottom: 20 }}>
          {error}
        </Text>
      ) : null}

      <MaskedView
        maskElement={
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
        }
      >
        <LinearGradient
          colors={["#DFA196", "#B75B56", "#7B141E"]}
          start={{ x: 2, y: 0}}
          end={{ x: 0, y: 1}}
        >
          <TouchableOpacity
        onPress={handleContinue}
        style={{
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
        </LinearGradient>
      </MaskedView>
    </View>
  );
}
