import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../../../SharedStyles/styles';
import { Activity } from '../models/activity';

const ActivityView: React.FC<Activity> = ({
    name,
    time,
    amount,
    centerAmount = false
}) => {
    const fontStyles = styles.fontStyles;
    const borderColor = '#aaaaaa';
    const borderWidth = .3;

    return(
        <View style={[styles.viewStyles.row, {
            justifyContent: 'space-between',
            paddingVertical: 8,
            borderTopColor: borderColor,
            borderTopWidth: borderWidth,
        }]}>
            <View>
                <Text style={[fontStyles.black, fontStyles.bold,
                {
                    fontSize: 18,
                    paddingVertical: centerAmount ? 5 : undefined
                }]}>{name}</Text>
                <Text>{time}</Text>
            </View>
            <Text style={[fontStyles.weight600, fontStyles.black, {
                textAlignVertical: centerAmount ? 'center' : undefined 
            }]}>{`$ ${amount.toFixed(2)}`}</Text>
        </View>
    )
}

export default ActivityView;