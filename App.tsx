import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/routes/index.routes";
import Login from "./src/pages/login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskProvider } from "./src/contexts/TaskContext";
import { ModalTarefas } from "./src/components/ModalTarefa";



export default function App() {
  return(
    <SafeAreaProvider>
      <TaskProvider>
        <Navigation />
        <ModalTarefas/>
      </TaskProvider>
      <StatusBar style="auto" />
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
