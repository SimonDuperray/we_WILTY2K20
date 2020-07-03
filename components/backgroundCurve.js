import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Svg, Path } from 'expo';

const BackgroundCurve = () => {
    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center'},
            ]}
        >
            <Svg height="50%" width="50%" viewBox="0 0 100 100">
                <Path 
                    fill="#0099ff" 
                    d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,80C840,64,960,96,1080,106.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" 
                />
            </Svg>
        </View>
    );
};

export { BackgroundCurve };

const styles = StyleSheet.create({});