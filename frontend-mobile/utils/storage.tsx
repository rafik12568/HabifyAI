import AsyncStorage from "@react-native-async-storage/async-storage";

const FIRST_RUN_KEY = "first_run";
const USER_NAME_KEY = "user_name";

export async function isFirstRun(): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(FIRST_RUN_KEY);
    return value === null;
  } catch (e) {
    console.error("isFirstRun error:", e);
    return true;
  }
}

export async function setFirstRunFalse() {
  try {
    await AsyncStorage.setItem(FIRST_RUN_KEY, "false");
  } catch (e) {
    console.error("setFirstRunFalse error:", e);
  }
}

export async function setUserName(name: string) {
  try {
    await AsyncStorage.setItem(USER_NAME_KEY, name);
  } catch (e) {
    console.error("setUserName error:", e);
  }
}

export async function userName(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(USER_NAME_KEY);
  } catch (e) {
    console.error("userName error:", e);
    return null;
  }
}
