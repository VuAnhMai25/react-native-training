// AnimatedProgressCircle.tsx

import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

interface AnimatedProgressCircleProps {
  progress: number;
  size: number;
  strokeWidth: number;
  backgroundColor: string;
  progressColor: string;
}

const AnimatedProgressCircle: React.FC<AnimatedProgressCircleProps> = ({
  progress,
  size,
  strokeWidth,
  backgroundColor,
  progressColor,
}) => {
  const animatedValue = useRef(new Animated.Value(0.0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [progress, animatedValue]);

  return (
    <View style={styles.container}>
      <ProgressCircle
        style={styles.progressCircle}
        progress={progress}
        strokeWidth={strokeWidth}
        backgroundColor={backgroundColor}
        progressColor={progressColor}
        startAngle={-Math.PI * 0.5}
        endAngle={Math.PI * 1.5}
        animate
        animateDuration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircle: {
    width: 200,
    height: 200,
  },
});

export default AnimatedProgressCircle;
