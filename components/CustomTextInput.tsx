import React from 'react';
import {StyleProp, TextInput, TextInputProps, ViewStyle} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>;
  placeholderTextColor?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  style,
  customStyle,
  placeholderTextColor,
  ...restProps
}) => {
  const mergeStyle = [style, customStyle];
  return (
    <TextInput
      style={mergeStyle}
      placeholderTextColor={placeholderTextColor}
      {...restProps}
    />
  );
};

export default CustomTextInput;
