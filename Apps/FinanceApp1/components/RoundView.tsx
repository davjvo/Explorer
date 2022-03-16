
import React from 'react';
import {
  View,
} from 'react-native';

type Props = {
    color?: string | undefined,
};

const RoundView: React.FC<Props> = ({
    color,
    children
}) => {
    const selectedColor = color || '#808080'

    return (
        <View style={{ 
                backgroundColor: selectedColor, 
                borderRadius: 400/2,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
                padding: 20,
                margin: 4
            }}>
            {children}
        </View>
    )
}

export default RoundView;