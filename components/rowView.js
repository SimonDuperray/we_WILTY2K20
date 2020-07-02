import React from 'react';
import { View } from 'react-native';

const RowView = ({ children }) => {
    return (
      <View style={{ flexDirection: 'row' }}>{children}</View>
    );
}

export { RowView };