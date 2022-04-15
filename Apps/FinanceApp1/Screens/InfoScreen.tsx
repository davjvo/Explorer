import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryTheme } from "victory-native";
import sharedStyles from '../../../SharedStyles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Category } from '../models/category';
import CategoryRepository from '../repository/CategoryRepository';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import BudgetRepository from '../repository/BudgetRepository';
import { Period } from '../models/quarter';
import constants from '../models/constants';

const fontStyles = sharedStyles.fontStyles;
const viewStyles = sharedStyles.viewStyles;

const Title = () => {
    const titleStyles = StyleSheet.create({
        container: { 
            padding: 12, 
            backgroundColor: constants.accentColor, 
            marginHorizontal: 200/2, 
            marginVertical: 20, 
            borderRadius: 12 
        },
        text: { 
            fontSize: 18, 
            color: "#fff", 
            textAlign: 'center'  
        }
    })

    return (
        <View style={titleStyles.container}>
            <Text style={[ sharedStyles.fontStyles.weight600, titleStyles.text ]}>
                Income
            </Text>
        </View>
    );
};

const Graph = () => {

    const graphStyles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: constants.accentColor
        },
        periodsContainer: { 
            flexDirection: 'row', 
            justifyContent: 'space-around',
            padding: 12 
        },
        periodTextContainer: {
            padding: 10,
            borderBottomWidth: 3
        }
      });

    const periods = [
        "Days", "Months", "Years"
    ]
    const [data, setData] = useState(BudgetRepository.getDaily());
    const [activePeriod, setActivePeriod] = useState(Period.Day);
    
    return (
        <View style={{
            backgroundColor: '#fff',

        }}>
            <View style={graphStyles.periodsContainer}>
                {
                    periods.map((period, index) => 
                        <TouchableOpacity 
                        key={`${period}-${index}`}
                        onPress={() => {
                            setActivePeriod(index);
                            switch(index){
                                case Period.Year:
                                    setData(BudgetRepository.getYearly())
                                    break;
                                case Period.Month:
                                    setData(BudgetRepository.getMonthly())
                                    break;
                                default:
                                    setData(BudgetRepository.getDaily())
                                    break;
                            }
                        }}>
                            <View style={[
                                graphStyles.periodTextContainer,
                                {
                                    borderBottomColor: activePeriod == index ? constants.accentColor : '#fff'
                                }
                                ]}>
                                <Text style={[
                                    fontStyles.black, 
                                    fontStyles.weight600,
                                    fontStyles.title
                                ]}>
                                    {period}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
            <View style={graphStyles.container}>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryArea 
                        interpolation='natural'
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        style={{ data: {fill: '#D6E8E8'}}} 
                        data={data} 
                        x="description" 
                        y="amount" />
                        <VictoryAxis 
                            style={{ tickLabels: {angle : 325, padding: 15}}} />
                        <VictoryAxis dependentAxis 
                            style={{ tickLabels: { fontWeight: 600 }}} />

                </VictoryChart>
            </View>
        </View>
    )
}

const CategoryRow = (item: Category) => {
    return (
        <View key={item.name} 
            style={[viewStyles.center, {
                padding: 5
            }]
            }>
            <FontAwesomeIcon icon={item.icon} color={item.color} size={25} />
            <Text style={[fontStyles.subtitle, {
                paddingVertical: 12
            }]}>{item.name}</Text>
        </View>
    );
}

const Categories = () => {
    const categories: Category[] = CategoryRepository.getCategories();
    const columns: Category[][] = [[],[],[],[]];

    let index = 0;
    let columnIndex = 0;
    while(index < categories.length) {
        let current = categories[index];
        columns[columnIndex].push(current);
        columnIndex = columnIndex == (columns.length - 1) ? 0 : ++columnIndex;
        index++;
    }

    let categoryStyles = StyleSheet.create({
        container: {
            padding: 15,
            backgroundColor: '#fff'
        },
    });
    return (
        <View style={categoryStyles.container}>
            <Text style={[fontStyles.title, fontStyles.black, fontStyles.weight600]}>
                Categories
            </Text>
            <View style={[viewStyles.row, categoryStyles.container]}>
                {
                    columns.map((column, index) => {
                        return (
                            <View key={index} style={{
                                flexGrow: 1
                            }}>
                                {
                                    column.map(item => CategoryRow(item))
                                }
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const InfoScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <Title />
                <Categories />
            </ScrollView>
            <Graph />
        </SafeAreaView>
    );
}

export default InfoScreen;