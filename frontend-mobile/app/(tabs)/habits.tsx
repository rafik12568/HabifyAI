import AsyncStorage from "@react-native-async-storage/async-storage";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";

export default function HabitsScreen() {
    const [habits, setHabits] = useState<
      { id: string; title: string }[]
    >([]);

    const [newHabit, setNewHabit] = useState("");

    const addHabit = () => {
      if (!newHabit.trim()) return;

      setHabits(prev => [
        ...prev,
        { id: Date.now().toString(), title: newHabit },
      ]);

      setNewHabit("");
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const removeHabit = (id: string) => {
      setHabits(prev => prev.filter(h => h.id !== id));
    };

    const [deleteId, setDeleteId] = useState<string | null>(null);

    const confirmDelete = () => {
      if (!deleteId) return;

      setHabits(prev => prev.filter(h => h.id !== deleteId));
      setDeleteId(null);
    };

    const HABITS_KEY = "habits";

    useEffect(() => {
      (async () => {
        const saved = await AsyncStorage.getItem(HABITS_KEY);
        if (saved) {
          setHabits(JSON.parse(saved));
        }
      })();
    }, []);

    useEffect(() => {
      AsyncStorage.setItem(HABITS_KEY, JSON.stringify(habits));
    }, [habits]);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: '#301515ff' }}>
      <MaskedView
        maskElement={
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: '#CB7D74',
              marginTop: 60,
            }}
          >
            Habits
          </Text>
        }
      >
        <LinearGradient
          colors={["#DFA196", "#521c19ff", "#7B141E"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 2}}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              opacity: 0, 
              marginTop: 80,
            }}
          >
            Habits
          </Text>
        </LinearGradient>
      </MaskedView>

      <View style={{ width: '90%', height: '75%', backgroundColor: '#411e1eff', borderRadius: 10, padding: '5%', alignItems: 'center' }}>
        <Pressable
          onPress={() => setIsModalVisible(true)}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#4d1c1cce' : '#832f2f9a',
            borderRadius: 5,
            marginBottom: 10,
            width: '55%',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Add Habit</Text>
        </Pressable>

        {/* Lista nawyków */}
        <FlatList
          style={{ width: '95%',
            height: '80%',
            backgroundColor: '#832f2f9a',
            borderRadius: 10,
          }}
          data={habits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 16,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 25 }}>
                • {item.title}
              </Text>

              <Pressable onPress={() => setDeleteId(item.id)}>
                <Text style={{ fontSize: 22 }}>🗑️</Text>
              </Pressable>
            </View>
          )}
          ListEmptyComponent={
            <Text
              style={{
                color: "#aaa",
                textAlign: "center",
                marginTop: 40,
                fontSize: 18,
              }}
            >
              Add your first habit!
            </Text>
          }
        />
      </View>


      {/* Ekran dodawania nowego nawyku */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#2C2626",
              borderRadius: 10,
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
              New habit
            </Text>

            <TextInput
              value={newHabit}
              onChangeText={setNewHabit}
              placeholder="Habit name"
              placeholderTextColor="#aaa"
              style={{
                backgroundColor: "#3A3030",
                color: "white",
                borderRadius: 5,
                padding: 12,
                marginBottom: 15,
                fontSize: 16,
                width: "100%",
              }}
            />

            <Pressable
              onPress={() => {
                addHabit();
                setIsModalVisible(false);
              }}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#2A2222" : "#3A3030",
                borderRadius: 5,
                padding: 14,
                alignItems: "center",
                marginBottom: 10,
                width: "100%",
              })}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                Add habit
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setIsModalVisible(false)}
              style={{ alignItems: "center" }}
            >
              <Text style={{ color: "#aaa" }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Ekran usuwania nawyku */}
      <Modal
        transparent
        animationType="fade"
        visible={deleteId !== null}
        onRequestClose={() => setDeleteId(null)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#2C2626",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Delete this habit?
            </Text>

            <Pressable
              onPress={confirmDelete}
              style={{
                backgroundColor: "#7B141E",
                padding: 14,
                borderRadius: 6,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
                Delete
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setDeleteId(null)}
              style={{
                backgroundColor: "#555",
                padding: 14,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

    
  );
  
}
