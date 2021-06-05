import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {AppColors} from './../../theme/colors';

export interface PageItemProps {
    icon: any;
    number: string;
    text: string;
    left: boolean;
}

export function PageItem (props: PageItemProps) {
    return (
        <View style={styles.container}>
            {/* TOP */}
            <LinearGradient 
                colors={(props.left ? [AppColors.Primary, AppColors.Secondary] : [AppColors.Secondary, AppColors.Primary])}
                start={[0,1]}
                end={[1, 1]}
                style={styles.linearGradiente}
            >
                <Image source={props.icon} style={styles.icon} />
            </LinearGradient>

            {/* BOTTOM */}
            <View style={styles.content}>
                <Text style={styles.numberText}>{props.number}.</Text>
                <Text style={styles.infoText}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    linearGradiente: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 120,
        height: 120
    },
    content: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        paddingTop: 20,
        paddingHorizontal: 50
    },
    numberText: {
        fontSize: 45,
        color: '#dad9e3'
    },
    infoText: {
        fontSize: 35,
        textAlign: 'left',
        marginTop: 20,
        color: '#6a617f'
    }
});