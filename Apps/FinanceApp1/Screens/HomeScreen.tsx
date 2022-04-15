
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import sharedStyles from '../../../SharedStyles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet, faBell, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import RoundView from '../components/RoundView';
import { Activity } from '../models/activity';
import ActivityView from '../components/ActivityView';
import constants from '../models/constants';

// https://www.instagram.com/p/CY6DJEMgEP6/

const standardPadding = 15;

const styles = StyleSheet.create({
    main: {
        padding: 8,
        marginTop: 25,
    },
    header: {
        padding: standardPadding,
        justifyContent: 'space-between'
    },
    headerContainer: {
        justifyContent: 'center',
        paddingLeft: standardPadding,
    },
    headerText: {
        fontSize: 18
    },
    subtitleText: {
        fontSize: 14
    },
    borderImage: { 
        width: 55, 
        height: 55, 
        borderRadius: 400/2 
    },
    accentColor: {
        backgroundColor: constants.accentColor
    }
});
const fontStyles = sharedStyles.fontStyles;
const viewStyles = sharedStyles.viewStyles;
const secondaryColor = '#D6E8E8';

const Header = () => {
    return (
        <View style={[styles.header, viewStyles.row]}>
            <View style={viewStyles.row}>
                <Image 
                    source={require('../../../SharedAssets/ProfileSelf.png')} 
                    style={styles.borderImage} />
                <View style={styles.headerContainer}>
                    <Text style={[styles.headerText, fontStyles.bold, fontStyles.black]}>Davmi Valdez</Text>
                    <Text style={[fontStyles.gray, styles.subtitleText]}>welcome back</Text>
                </View>
            </View>
            <View style={[viewStyles.row, viewStyles.center]}>
                <RoundView color={secondaryColor}>
                    <FontAwesomeIcon icon={faWallet} />
                </RoundView>
                <RoundView color={secondaryColor}>
                    <FontAwesomeIcon icon={faBell} />
                </RoundView>
            </View>
        </View>
    );
}

const MonthSummary = () => {
    const summaryStyles = StyleSheet.create({
        card: {
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: 'white',
            borderRadius: 20,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            width: '45%'
        },
        cardText: {
            fontSize: 16,
            paddingVertical: 5
        }
    });

    return (
        <View style={[viewStyles.row, viewStyles.spaceAround]}>
            <View style={[summaryStyles.card, viewStyles.spaceAround]}>
                <Text style={[fontStyles.black, fontStyles.weight600, summaryStyles.cardText]}>Monthly Budget</Text>
                <Text style={[fontStyles.black, fontStyles.weight600, summaryStyles.cardText]}>+$ 1200</Text>
            </View>
            <View style={[summaryStyles.card, viewStyles.spaceAround, styles.accentColor]}>
                <Text style={[fontStyles.white, fontStyles.weight600, summaryStyles.cardText]}>Monthly Budget</Text>
                <Text style={[fontStyles.white, fontStyles.weight600, summaryStyles.cardText]}>+$ 1200</Text>
            </View>
        </View>
    );
}

const RecentActivity = () => {
    const recentActivityStyles = StyleSheet.create({
        title: {
            fontSize: 18
        }
    });

    const activities: Activity[] = [
        {
            name: 'Urban coffee',
            time: '07:35',
            amount: 11.50
        },
        {
            name: 'Uber',
            time: '12:44',
            amount: 8
        },
        {
            name: 'McDonalds',
            time: '18:03',
            amount: 20
        },
    ];

    let amountCount = 0;

    return (
        <View style={{padding: 15}}>
            <Text style={[recentActivityStyles.title, fontStyles.black, fontStyles.bold]}>
                Today Activity
            </Text>
            <ScrollView style={{paddingVertical: 10}}>
                {
                    activities.map((activity, index) => {
                        amountCount += activity.amount;

                        return (
                            <ActivityView 
                                key={index} 
                                amount={activity.amount} 
                                name={activity.name} 
                                time={activity.time}
                                centerAmount={true} />
                        )
                    })
                }
            </ScrollView>
            <ActivityView
                name='Total'
                time=''
                amount={amountCount} />
        </View>
    )
}

const Footer = () => {
    return (
        <View style={[viewStyles.row, viewStyles.spaceBetween, {
            padding: standardPadding,
            marginHorizontal: 15,
            backgroundColor: secondaryColor,
            borderRadius: 12
        }]}>
            <View style={{
                justifyContent: 'space-around',
            }}>
                <Text style={[fontStyles.weight600, fontStyles.black]}>Total Balance</Text>
                <Text style={[fontStyles.weight600, fontStyles.black]}>{`$ ${16.500.toFixed(2)}`}</Text>
            </View>

            <RoundView color='#fff'>
                <FontAwesomeIcon icon={faArrowRight} />
            </RoundView>
        </View>
    )
};

const HomeScreen = () => {
  return (
    <View style={styles.main} >
        <Header />
        <MonthSummary />
        <RecentActivity />
        <Footer />
    </View>
  );
};

export default HomeScreen;

