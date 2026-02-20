import {
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from "react-native";
import React, { Component, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { style } from "./style";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../themes/colors";

import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

export function ModalTarefas() {
  const { isModalOpen, closeModal, createTask } = useTaskContext();

  /// Estados para o campo do formulário

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState<"urgente" | "opcional">("opcional");
  const [timeLimit, setTimeLimit] = useState("");

  const [date, setDate] = useState(new Date()); // Guarda o objeto Date real
  const [showDatePicker, setShowDatePicker] = useState(false); // Controla se o calendário aparece
  const [mode, setMode] = useState<"date" | "time">("date"); // Define se é calendário ou relógio

  //funçao para Salvar

  function handleSave() {
    if (!title.trim()) {
      return Alert.alert("Ops, Bota um Titulo ai filhão");
    }

    //chama a função do contexto para salvar
    createTask({
      title,
      description,
      timeLimit: date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      flag,
    });

    setTitle("");
    setDescription("");
    setFlag("opcional");
    setTimeLimit("");
  }

  function onChangeDate(event: any, selectedDate?: Date) {
    setShowDatePicker(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  function openDatePicker(currentMode: "date" | "time") {
    setShowDatePicker(true);
    setMode(currentMode);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={closeModal}
    >
      <View style={style.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={style.container}
        >
          <View style={style.header}>
            <Text style={style.title}>Criar Tarefa</Text>
            <TouchableOpacity onPress={closeModal}>
              {/* <Text style={style.closeBtn}>Cancelar</Text> */}
              <Octicons name="x" size={30} color={colors.gray || "#333"} />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {/* input de titulo */}
            <Text style={style.label}>Título</Text>
            <TextInput
              style={style.input}
              placeholder="Ex: Estudar para a Prova"
              value={title}
              onChangeText={setTitle}
            />
            {/* input de Descrição */}
            <Text style={style.label}>Descrição</Text>
            <TextInput
              style={[style.input, { height: 100, textAlignVertical: "top" }]}
              placeholder="Ex: Estudar para a Prova"
              value={description}
              onChangeText={setDescription}
            />
            {/* Seção Data e Hora */}

            <Text style={style.label}>Data e Hora Limite</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              {/* Botão de Data */}
              <TouchableOpacity
                style={[style.input, { flex: 1, alignItems: "center" }]}
                onPress={() => openDatePicker("date")}
              >
                <Text>{date.toLocaleDateString("pt-BR")}</Text>
              </TouchableOpacity>

              {/* Botão de Hora */}
              <TouchableOpacity
                style={[style.input, { flex: 1, alignItems: "center" }]}
                onPress={() => openDatePicker("time")}
              >
                <Text>
                  {date.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Componente Nativo de Calendário */}

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
              />
            )}

            {/* Seleção de Flags */}

            <Text style={style.label}>Prioridade</Text>
            <View style={style.flagContainer}>
              {/*Flag Urgente */}
              <TouchableOpacity
                style={[
                  style.flagButton,
                  flag === "urgente" && style.flagSelected,
                ]}
                onPress={() => setFlag("urgente")}
              >
                <Text
                  style={[
                    style.flagText,
                    flag === "urgente" && { color: "#FFF" },
                  ]}
                >
                  Urgente
                </Text>
              </TouchableOpacity>
            </View>
            {/*Flag Opcional */}
            <Text style={style.label}>Opcional</Text>
            <View style={style.flagContainer}>
              <TouchableOpacity
                style={[
                  style.flagButton,
                  flag === "opcional" && style.flagSelected,
                ]}
                onPress={() => setFlag("opcional")}
              >
                <Text
                  style={[
                    style.flagText,
                    flag === "opcional" && { color: "#FFF" },
                  ]}
                >
                  Opcional
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.saveButton} onPress={handleSave}>
              <Text style={style.saveButtonText}>Salvar Tarefa</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
