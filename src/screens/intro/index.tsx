import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from './../../theme/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import { PageItem } from './components';

export interface IntroScreenProps {
}

export function IntroScreen (props: IntroScreenProps) {

    const pages = [
        {
            key: '1',
            icon: require('./../../assets/imgs/book.png'),
            number: '01',
            left: true,
            text: 'Estude programação com projetos reais de mercado.'
        },
        {
            key: '2',
            icon: require('./../../assets/imgs/tv.png'),
            number: '02',
            left: false,
            text: 'Tenha a chance de conseguir um emprego e ainda a chance de ganhar bolsas em várias Instituições de Ensino.'
        },
    ]


    return (
        <View style={{flex:1}}>
            <AppIntroSlider
                data={pages}
                renderNextButton={() => <Text style={styles.btnPagination}>PRÓXIMO</Text>}
                renderDoneButton={() => <Text style={styles.btnPagination}>INICIAR</Text>}
                onDone={() => {
                    console.log('COMPLETOU!!')
                }}
                renderItem={({item}) => (
                    <PageItem {...item}/>
                )}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    btnPagination: {
        color:AppColors.Text, 
        fontSize:16, 
        marginTop:12
    }
});