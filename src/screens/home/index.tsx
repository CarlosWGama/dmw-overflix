import { useFocusEffect } from '@react-navigation/core';
import { Video } from 'expo-av';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { AppHeader } from '../../components/app-header';
import api from '../../services/api';
import { AppColors } from '../../theme/colors';
import { CategoryButton, ModalProject, ProjectItem } from './components';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {


    const modalizeRef = React.useRef<Modalize>(null);
    const [ selectedProject, setSelectedProject ] = React.useState<any>(null); 

    const [ projects, setProjects ] = React.useState([])
    const [ update, setUpdate ] = React.useState(false);

    React.useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        }).catch(erro => {
            console.log('Erro')
        })

    }, [update])


    const selectCategory = (id: string) => {
        console.log('ID:', id);
        api.get('/projects/category/' + id).then(response => {
            setProjects(response.data);
        }).catch(erro => {
            console.log('Erro')
        })
    }

    const openProject = (project: any) => {
        console.log('Projeto:', project);
        setSelectedProject(project);
        modalizeRef.current?.open();
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
                    style={{maxHeight: 60}}
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

            <Modalize
                ref={modalizeRef}
                modalTopOffset={150}
                disableScrollIfPossible={true}
                modalStyle={{marginHorizontal: 20}}
            >
                <ModalProject project={selectedProject} />
            </Modalize>
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