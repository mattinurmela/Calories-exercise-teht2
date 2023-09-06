import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [intensity, setIntensity] = useState(1.3)
  const [gender, setGender] = useState('male')
  const [calories, setCalories] = useState(0)

  const intensities = [
    { label: 'light', value: 1.3 },
    { label: 'usual', value: 1.5 },
    { label: 'moderate', value: 1.7 },
    { label: 'hard', value: 2.0 },
    { label: 'very hard', value: 2.2 }
  ]

  const genders = [
    { label: 'Male', value: 'male'},
    { label: 'Female', value: 'female'}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setWeight(text)}
        placeholder='in kilograms'
        keyboardType='numeric'></TextInput>
      </View>
      <View style={styles.field}>
      <Text>Intensity</Text>
      <Picker style={styles.intensity}
          onValueChange={(itemValue) => setIntensity(itemValue)}
          selecetedValue={intensity}
        >
          {intensities.map((intensity, index) => (
            <Picker.Item key={index} label={intensity.label} value={intensity.value}/> 
            ))
        }
      </Picker>
      </View>
      <Text>Gender</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
