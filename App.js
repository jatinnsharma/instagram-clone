import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
      <NewPostScreen/>
  );
}
