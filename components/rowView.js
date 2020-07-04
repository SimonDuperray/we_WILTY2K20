import React from 'react';
import { View, StyleSheet } from 'react-native';

const RowView = ({ children }) => {
    return (
      <View style={styles.view}>{children}</View>
    );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    backgroundColor: 'rgba(253, 235, 208, 0.5)',
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#566573',
  }
})

export { RowView };