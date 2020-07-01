import React from 'react';
import { Text } from 'react-native';

const NewText = ({ children }) => {
    return (
      <Text style={{ marginBottom: 10 }}>{children}</Text>
    );
}

export { NewText };