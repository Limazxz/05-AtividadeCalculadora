import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const handlePress = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString()); // cuidado: eval em app real não é recomendado
      } catch {
        setResult("Erro");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["C", "/", "*", "-"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", ""],
    ["1", "2", "3", ""],
    ["0", ".", "=", ""],
  ];

  return (
    <View style={[styles.container, isDark ? styles.darkBg : styles.lightBg]}>
      <View style={styles.display}>
        <Text
          style={[styles.input, isDark ? styles.darkText : styles.lightText]}
        >
          {input}
        </Text>
        <Text
          style={[styles.result, isDark ? styles.darkText : styles.lightText]}
        >
          {result}
        </Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn, j) =>
              btn ? (
                <TouchableOpacity
                  key={j}
                  style={[
                    styles.button,
                    isDark ? styles.darkBtn : styles.lightBtn,
                  ]}
                  onPress={() => handlePress(btn)}
                >
                  <Text
                    style={[
                      styles.btnText,
                      isDark ? styles.darkText : styles.lightText,
                    ]}
                  >
                    {btn}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={j}
                  style={[styles.button, { backgroundColor: "transparent" }]}
                />
              )
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  lightBg: {
    backgroundColor: "#f2f2f2",
  },
  darkBg: {
    backgroundColor: "#121212",
  },
  display: {
    marginBottom: 20,
  },
  input: {
    fontSize: 36,
    textAlign: "right",
  },
  result: {
    fontSize: 24,
    textAlign: "right",
    marginTop: 8,
    opacity: 0.7,
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
  buttons: {
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  lightBtn: {
    backgroundColor: "#e0e0e0",
  },
  darkBtn: {
    backgroundColor: "#333",
  },
  btnText: {
    fontSize: 24,
    fontWeight: "600",
  },
});
