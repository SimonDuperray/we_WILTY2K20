import React from 'react';
import { View, StyleSheet } from 'react-native';

const RowViewLink = ({ children }) => {
    return (
      <View style={styles.view}>{children}</View>
    );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: 'rgba(249, 231, 159, 0.5)',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    paddingLeft: 13,
    textAlign: 'center',
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#eee',
  }
})

export { RowViewLink };