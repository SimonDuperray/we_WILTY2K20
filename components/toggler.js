import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalReviews } from '../styles/globalReview';

const Toggler = ({ command, description }) => {

    const [test, setTest] = useState(true)

    return (
      <View style={globalReviews.newCommand}>
            {test==true && (
              <Text
                onPress={() => setTest(!test)}
                style={globalReviews.command}
              >
                  { command }
              </Text>
            )}
            {test==false && (
                <View>
                    <Text
                        onPress={() => setTest(!test)}
                        style={globalReviews.command}
                    >
                        { command }
                    </Text>
                    <Text
                        style={globalReviews.description}
                    >
                        { description }
                    </Text>
                </View>
            )}
      </View>
    );
}

export { Toggler };