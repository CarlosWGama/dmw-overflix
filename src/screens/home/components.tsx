import { Video } from 'expo-av';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import LinearProgress from 'react-native-elements/dist/linearProgress/LinearProgress';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import { AppColors } from '../../theme/colors';

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
                <Image source={{uri: project.image}} style={{width:30, height: 30}} />
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

// ========================= MODAL ========================================
export interface ModalProjectProps {
    project: any;
}

export function ModalProject (props: ModalProjectProps) {

    const [ project, setProject ] = React.useState(props.project)

    const markVideo = async(video, index) => {
        api.put('/projects/videos/' + video.id + '/' + (video.watched ? 0 : 1)).then(response => {
            let newProject = {...project};
            newProject.videos[index].watched = !video.watched;
            setProject(newProject);
        }).catch(erro => {
        })
    } 

    return (
      <View style={stylesMP.container}>
         <Text>{project.text}</Text>
         <Text style={stylesMP.labelVideo}>VÍdeos</Text>


        {project.videos.map((video, index) => (
            <View key={String(index)} style={stylesMP.videoContainer}>
                <Video
                    style={stylesMP.video}
                    source={{uri:video.url}}
                    resizeMode="contain"
                    useNativeControls
                />
                <Button title={video.watched ? "Desmarcar como assistido" : "Marcar como assistido"} 
                        type="outline"
                        titleStyle={{color: (video.watched ? AppColors.Primary : AppColors.Secondary)}}  
                        onPress={() => markVideo(video, index)}  
                        />
            </View> 
        ))}
      </View>
    );
}

const stylesMP = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    labelVideo: {
        textAlign:'center',
        fontSize: 20,
        marginVertical: 20
    },
    videoContainer: {
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: 'lightgrey'
    },
    video: {
        width: '100%',
        height: 200,
    }
});
