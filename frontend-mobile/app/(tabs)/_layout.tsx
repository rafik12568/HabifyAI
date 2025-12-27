import { Tabs } from "expo-router";
import { Colors } from "@/constants/theme";
import GradientIcon from "@/components/GradientIcon";
import GradientLabel from "@/components/GradientLabel";
import { View } from "react-native";
import { Pressable } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#171616ff",
          borderRadius: 10,
          borderColor: "none",
          margin: 2,
          height: 60,
          paddingBottom: "0%",
        },
        tabBarBackground: () => (
          <View style={{ backgroundColor: Colors.dark.background, width: "100%", height: "100%" }} />
        ),
        tabBarItemStyle: {
          borderRadius: 10,
          backgroundColor: "#333131ff",
          height: "100%",
          marginHorizontal: "1%",
          paddingTop: 0,
        },
        tabBarActiveTintColor: Colors.dark.tabIconSelected,
        tabBarInactiveTintColor: Colors.dark.tabIconDefault,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarButton: ({ children, onPress, accessibilityState }) => (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => ({
                flex: 1,
                borderRadius: 10,
                backgroundColor: pressed
                  ? "#262424ff"
                  : accessibilityState?.selected
                  ? "#2E2C2Cff"
                  : "#333131ff",
                marginHorizontal: "1%",
                paddingTop: 4,
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              {children}
            </Pressable>
          ),
          tabBarIcon: ({ focused, size }) => <GradientIcon name="home" size={size} focused={focused} />,
          tabBarLabel: ({ focused }) => <GradientLabel label="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          title: "Habits",
          tabBarButton: ({ children, onPress, accessibilityState }) => (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => ({
                flex: 1,
                borderRadius: 10,
                backgroundColor: pressed
                  ? "#262424ff"
                  : accessibilityState?.selected
                  ? "#2E2C2Cff"
                  : "#333131ff",
                marginHorizontal: "1%",
                paddingTop: 4,
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              {children}
            </Pressable>
          ),
          tabBarIcon: ({ focused, size }) => <GradientIcon name="list" size={size} focused={focused} />,
          tabBarLabel: ({ focused }) => <GradientLabel label="Habits" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarButton: ({ children, onPress, accessibilityState }) => (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => ({
                flex: 1,
                borderRadius: 10,
                backgroundColor: pressed
                  ? "#262424ff"
                  : accessibilityState?.selected
                  ? "#2E2C2Cff"
                  : "#333131ff",
                marginHorizontal: "1%",
                paddingTop: 4,
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              {children}
            </Pressable>
          ),
          tabBarIcon: ({ focused, size }) => <GradientIcon name="person" size={size} focused={focused} />,
          tabBarLabel: ({ focused }) => <GradientLabel label="Profile" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
