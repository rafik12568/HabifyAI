import { userName } from "@/utils/storage";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useMemo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    (async () => {
      const n = await userName();
      setName(n ?? "User");
    })();
  }, []);

  const avatarColors = useMemo(
    () =>
      [
        ["#FF9A9E", "#FAD0C4"],
        ["#A18CD1", "#FBC2EB"],
        ["#FBC8D4", "#9795F0"],
        ["#84FAB0", "#8FD3F4"],
      ][Math.floor(Math.random() * 4)] as [string, string],
    []
  );

  const firstLetter = name.trim().charAt(0).toUpperCase() || "U";

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: '#301515ff' }}>
      <MaskedView
        maskElement={
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#CB7D74",
              marginTop: 60,
              textAlign: "center",
            }}
          >
            Profile
          </Text>
        }
      >
        <LinearGradient
          colors={["#DFA196", "#B75B56", "#7B141E"] as [string, string, string]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 2 }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              opacity: 0,
              marginTop: 80,
            }}
          >
            Profile Screen
          </Text>
        </LinearGradient>
      </MaskedView>

      <View
        style={{
          width: "90%",
          height: "70%",
          backgroundColor: '#411e1eff',
          borderRadius: 10,
          padding: "5%",
          marginTop: 30,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "30%",
            backgroundColor: '#832f2f9a',
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>{name}</Text>
          <LinearGradient
            colors={avatarColors}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold", textShadowColor: "black", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, }}>
              {firstLetter}
            </Text>
          </LinearGradient>
        </View>

        <View
          style={{
            width: "100%",
            height: "30%",
            backgroundColor: '#832f2f9a',
            borderRadius: 5,
            flexDirection: "row",
            padding: 20,
            flexWrap: "wrap",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>✅ Habits Completed: {"..."}</Text>
          <Text style={{ color: "white", fontSize: 20 }}>🔥 Current Streak: {"..."}</Text>
          <Text style={{ color: "white", fontSize: 20 }}>🗓️ Active days: {"..."}</Text>
        </View>
        <View
        style={{
            width: "100%",
            height: "30%",
            backgroundColor: '#832f2f9a',
            borderRadius: 5,
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
          <Text style={{ color: "white", fontSize: 15, textAlign: "center", width: "60%" }}>🔗🏆Share your achievements!</Text>
          <Pressable style={{ backgroundColor: '#ca86869a', borderRadius: 30, padding: 10, height: 60, width: 60, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/107/107784.png" }}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}