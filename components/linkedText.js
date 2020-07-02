import React from 'react';
import { Text } from 'react-native';

const LinkedText = ({ children, style }) => {
    return (
      <Text style={[{ marginBottom: 10 }, style]}>{children}</Text>
    );
}

export { LinkedText };