import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { AppColors } from '../theme/colors';

export interface AppHeaderProps {
    title: string;
}

export function AppHeader (props: AppHeaderProps) {

    const [ name, setName ] = React.useState<null|string>(null);
    const [ avatar, setAvatar ] = React.useState<null|string>(null);
    const nav = useNavigation();
    
    useFocusEffect(() => {
        AsyncStorage.getItem("user").then(user => {
            if (user) {
                let userObj = JSON.parse(user);
                setName(userObj?.name);
                setAvatar(userObj?.avatar);
            }
        })
    })

    const quit = () => {
        nav.navigate('login');
        AsyncStorage.clear();
        setName(null);
        setAvatar(null);
    }
    
    return (
      <View style={styles.container}>
         <LinearGradient
            colors={[AppColors.Primary, AppColors.Secondary]}
            style={styles.linearGradient}
            start={[0, 1]}
            end={[1, 1]}
         >
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                { name && <Text style={styles.welcome}>Olá, {name}</Text>}
                { avatar && <Image source={{uri:avatar}} style={styles.avatar}/>}
            </View>
        
            <Button title="Sair" type="outline" buttonStyle={styles.quit} titleStyle={{color:'white'}} onPress={quit} />

            <Text style={styles.title}>{props.title}</Text>

         </LinearGradient>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200
    },
    linearGradient: {
        flex: 1,
        paddingTop: 50,
        padding: 30
    },
    welcome: {
        color: 'white',
        fontSize: 20
    },
    avatar: {
        width: 80,
        height: 40
    }, 
    quit: {
        borderColor:'white',
        width: 50
    },
    title: {
        color: 'white',
        fontSize: 35,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 10
    }
});