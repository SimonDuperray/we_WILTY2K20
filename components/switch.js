import React, { useState } from 'react';
import { View, Switch } from 'react-native';

const NewSwitch = ({ children }) => {

    const [isSwitchEnabled, setSwitch] = React.useState(false)

    return (
      <Switch 
        value={isSwitchEnabled}
        onValueChange={(value) => setSwitch(value)}
        trackColor={{true: 'red'}}
      />
    );
}

export { NewSwitch };