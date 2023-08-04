import React from 'react';
import {Text, TextProps} from 'react-native';

interface CustomTextViewProps extends TextProps {
  customStyle?: object;
}

const CustomTextView: React.FC<CustomTextViewProps> = ({
  style,
  customStyle,
  ...restProps
}) => {
  const mergedStyle = [style, customStyle];
  return <Text style={mergedStyle} {...restProps} />;
};

export default CustomTextView;
