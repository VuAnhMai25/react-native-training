import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  const [isPressed, setIsPress] = useState(false);

  const handlePressIn = () => {
    setIsPress(true);
  };

  const handlePressOut = () => {
    setIsPress(false);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.6}>
      <View style={[styles.button, isPressed ? styles.buttonPressed : null]}>
        <Text
          style={[styles.buttonText, isPressed ? styles.buttonPressed : null]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#EFEFEF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextPressed: {
    color: '#007AFF',
  },
});

export default CustomButton;
