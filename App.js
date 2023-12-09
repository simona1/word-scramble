import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function shuffleLetters(str) {
  const arr = [...str];
  for (let i = arr.length - 1; i > 0; --i) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr.join('');
}

export default function App() {
  const [inputText, setInputText] = useState('');
  const [shuffled, setShuffled] = useState(null);

  const updateShuffled = () => {
    setShuffled(shuffleLetters(inputText));
  };

  const resetInput = () => {
    setInputText('');
    setShuffled(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Everyday I'm shuffling</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text to shuffle"
        value={inputText}
        onChangeText={setInputText}
      />
      {shuffled && (
        <Text style={styles.resultText}>Shuffled result: {shuffled}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={updateShuffled}>
        <Text style={styles.buttonText}>Shuffle the string</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetInput}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  textInput: {
    height: 50,
    width: '80%',
    borderColor: '#007bff',
    borderRadius: '10%',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 700,
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
