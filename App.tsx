import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/routes/index.routes";
import Login from "./src/pages/login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskProvider } from "./src/contexts/TaskContext";
import { ModalTarefas } from "./src/components/ModalTarefa";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TaskProvider>
          <Navigation />
          <ModalTarefas />
        </TaskProvider>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
