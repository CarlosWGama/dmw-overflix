import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AppHeader } from '../../components/app-header';
import { AppColors } from '../../theme/colors';
import { CategoryButton, ProjectItem } from './components';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {

    const [ projects, setProjects ] = React.useState([
        {id: 1, image: require('./../../assets/imgs/projects/project1.png'), text: 'Criando uma plataforma de job’s com Next JS', total: 10, watched: 3},
        {id: 2, image: require('./../../assets/imgs/projects/project2.png'), text: 'Clone da interface do Nubank com React Native', total: 10, watched: 10},
        {id: 3, image: require('./../../assets/imgs/projects/project3.png'), text: 'Integração React e Hubspot CRM', total: 10, watched: 9},
        {id: 4, image: require('./../../assets/imgs/projects/project4.png'), text: 'Plataforma de conteúdo com RN', total: 10, watched: 5},
    ])

    const selectCategory = (id: string) => {
        console.log('ID:', id);
    }

    const openProject = (project: any) => {
        console.log('Projeto:', project);
    }

    return (
        <View style={styles.container}>
            <AppHeader title="Home"/>
            
            <View style={{padding: 20, flex: 1}}>
                {/* CURSOS */}
                <Text style={styles.category}>Cursos</Text>
                <FlatList
                    data={[
                        {id: 0, text:"Todos", color:'#6363db'},
                        {id: 1, image:require('./../../assets/imgs/logos/react.png'), text:"React", color:'#6363db'},
                        {id: 2, image:require('./../../assets/imgs/logos/figma.png'), text:"Figma", color:'#20b365'},
                        {id: 3, image:require('./../../assets/imgs/logos/node.png'), text:"Node", color:'#03ab4f'},
                    ]}
                    keyExtractor={(item, index) => String(item.id)}
                    style={{height: 60}}
                    horizontal
                    renderItem={({item}) => (
                        <CategoryButton {...item} onPress={selectCategory}/>
                    )}
                />

                {/* PROJETOS */}
                <Text style={styles.project}>Projetos</Text>

                <FlatList
                    data={projects}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    renderItem={({item}) => (
                        <ProjectItem project={item} onPress={openProject} />
                    )}
                />
                 
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.Secondary
    },
    category: {
        color: 'white',
        fontSize: 25,
        marginBottom: 10
    },
    project: {
        fontSize: 25,
        color: 'white',
        marginTop: 20,
        marginBottom: 10
    }
});