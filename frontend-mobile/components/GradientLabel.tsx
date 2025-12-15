import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

type GradientLabelProps = {
  label: string;
  focused: boolean;
};

export default function GradientLabel({ label, focused }: GradientLabelProps) {
  if (!focused) {
    return (
      <Text style={{ color: "#909090", fontSize: 10, marginTop: 2 }}>
        {label}
      </Text>
    );
  }

  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontSize: 10,
            fontWeight: "600",
            color: "white",
            marginTop: 2,
            alignSelf: "center",
          }}
        >
          {label}
        </Text>
      }
    >
      <LinearGradient
        colors={["#DFA196", "#B75B56", "#270909ff"] as [
          string,
          string,
          string
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            opacity: 0,
            marginTop: 2,
          }}
        >
          {label}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}