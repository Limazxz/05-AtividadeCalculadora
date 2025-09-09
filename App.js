import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const lightTheme = {
  background: "#f0f0f0",
  card: "#fff",
  text: "#121212",
  label: "#555",
  border: "#ccc",
  buttonPrimary: "#007bff",
  buttonDanger: "#dc3545",
  result: "#007bff",
  infoBg: "#fff",
  infoBorder: "#eee",
};

const darkTheme = {
  background: "#121212",
  card: "#1e1e1e",
  text: "#f5f5f5",
  label: "#aaa",
  border: "#444",
  buttonPrimary: "#3399ff",
  buttonDanger: "#ff4d4d",
  result: "#66ccff",
  infoBg: "#1e1e1e",
  infoBorder: "#333",
};

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const buttons = [
    "C",
    "()",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ",",
    "=",
  ];

  const [currentNumber, setCurrentNumber] = useState("0");
  const [lastNumber, setLastNumber] = useState("");

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.result}>
        <Text style={{ fontSize: 20, margin: 10 }}></Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handleInput(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      width: "100%",
      height: "300",
    },
    buttons: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.card,
      minWidth: "80",
      minHeight: "80",
    },
    buttonText: {
      color: theme.text,
      fontSize: 25,
    },
  });
