import React from 'react';
import { Text } from 'react-native';

const NewText = ({ children, style }) => {
    return (
      <Text style={[{ marginBottom: 10 }, style]}>{children}</Text>
    );
}

export { NewText };