import React, {useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import CustomButton from './components/CustomButton';
import CustomTextView from './components/CustomTextView';
import CustomTextInput from './components/CustomTextInput';
import CustomDropdown from './components/CustomDropdown';

const App = () => {
  const options = [
    {label: 'Option 1', value: 'option 1'},
    {label: 'Option 2', value: 'option 2'},
    {label: 'Option 3', value: 'option 3'},
  ];
  const [value, setValue] = useState('');

  const handleButtonPress = () => {
    Alert.alert(String(value));
  };

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const handleSelectOption = (value: string | number) => {
    onChangeText(String(value));
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        style={styles.input}
        customStyle={styles.customInput}
        placeholder="Enter your text"
        placeholderTextColor="blue"
        onChangeText={text => onChangeText(text)}
      />
      <CustomTextView
        style={styles.customText}
        customStyle={{
          color: 'red',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {value}
      </CustomTextView>

      <CustomButton title="Press Me" onPress={handleButtonPress} />

      <Text style={styles.title}>Custom Dropdown Example</Text>
      <CustomDropdown options={options} onSelectOption={handleSelectOption} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    // Add any default styles you want for the custom TextView
  },
  input: {
    textAlign: 'center',
    color: 'brown',
    borderRadius: 9,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'green',
    paddingLeft: 10,
    marginBottom: 10,
  },
  customInput: {
    backgroundColor: 'lightgray',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
