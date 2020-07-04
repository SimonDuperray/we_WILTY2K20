import React from 'react';
import { Text, View } from 'react-native';

const NewText = ({ children, style }) => {
    return (
      <View>
        <Text style={{ color: '#566573', paddingRight: 10 }}>{children}</Text>
      </View>
    );
}

export { NewText };