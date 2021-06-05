import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearProgress from 'react-native-elements/dist/linearProgress/LinearProgress';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface CategoryButtonProps {
    id: string,
    image: any;
    text: string;
    color: string;
    onPress(id: string);
}

export function CategoryButton (props: CategoryButtonProps) {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.id)}>
            <View style={stylesCB.container}>
                    <Image source={props.image} style={stylesCB.image}/>
                    <Text style={{color: props.color}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const stylesCB = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 150,
        height: 55,
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    image: {
        marginRight: 10
    }
});

// ========================= PROJECT ===================================
export interface ProjectItemProps {
    project: any;
    onPress(project: any);
}

export function ProjectItem (props: ProjectItemProps) {
    const { project } = props;

    const percent = (watched: number, total: number) => watched / total

    return (
        <TouchableOpacity onPress={() => props.onPress(project)} >
            <View style={stylesPI.container} >
                <Image source={project.image} style={{width: 40, height: 40}}/>
                <Text>{project.text}</Text>
                <View style={stylesPI.progress}>
                    <Text>{project.watched} de {project.total}</Text>
                    <LinearProgress style={{flex:1, marginLeft: 10}} color="green" variant="determinate" value={percent(project.watched, project.total)}/>
                </View>
            </View>
      </TouchableOpacity>
    );
}

const stylesPI = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 170,
        width: 150,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'space-between'
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});