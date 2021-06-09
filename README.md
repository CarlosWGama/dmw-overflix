# Overflix

<p>Projeto desenvolvido no Digital Maker Week na trilha de React Native</p>

<p>Tela dos Projetos</p>
<a href="https://www.figma.com/file/xCYJRTwk1DUz0F1xcDU86N/OverFlix---Final?node-id=188%3A581" target="_blank">Telas no Figmar</a>

<br/><br/>

<p>Caso tenha baixado o repositório e deseje avançar para uma aula, basta executar os comandos para o dia específico: <p>

```
git checkout --force dia1
expo install
```

## <b>Dia 1</b>
<p>O que veremos: </p>
<ul>
    <li>Mercado Mobile</li>
    <li>Tecnologias Mobile</li>
    <li>React Native</li>
    <li>Expo</li>
    <li>Configurar Ambiente</li>
    <li>JavaScript e TypeScript</li>
    <li>Criando um projeto</li>
</ul>

<p>Links importantes:</p>
<ul>
    <li><a target="_blank" href="https://nodejs.org/pt-br/">NodeJS</a></li>
    <li><a target="_blank" href="https://reactnative.dev/docs/getting-started">React Native</a></li>
    <li><a target="_blank" href="https://expo.io/">Expo</a></li>
    <li><a target="_blank" href="https://code.visualstudio.com/">VS Code</a></li>
</ul>

<p style="color:tomato">OBS*: Caso o teu PowerShell tenha dado uma restrição ao usar o Expo, execute o seguinte comando como administrador dentro do PowerShell: </p>

```
Set-ExecutionPolicy Unrestricted
```


## <b>Dia 2</b>
<p>O que veremos: </p>
<ul>
    <li>Components de Interface do React Native</li>
    <li>StyleSheet</li>
    <li>FlexBox</li>
    <li>Criar nossos próprio components</li>
    <li>Props</li>
    <li>AppIntroSlider</li>
    <li>StatusBar</li>
</ul>

### Bibliotecas:
<li><a href="https://docs.expo.io/versions/latest/sdk/linear-gradient/">LinearGradient</a>:</li>

```
expo install expo-linear-gradient
```
<!--  -->
<li><a href="https://github.com/Jacse/react-native-app-intro-slider">AppIntroSlider</a>: </li>

```
expo install react-native-app-intro-slider
```

### Cores

- ![#e2306c](https://via.placeholder.com/15/e2306c/000000?text=+) `#e2306c (Cor Primaria)`
- ![#320995](https://via.placeholder.com/15/320995/000000?text=+) `#320995 (Cor Secundaria)`
- ![#f0f0f7](https://via.placeholder.com/15/f0f0f7/000000?text=+) `#f0f0f7 (Cor de Background)`
- ![#6a617f](https://via.placeholder.com/15/6a617f/000000?text=+) `#6a617f (Cor de Texto)`
- ![#dad9e3](https://via.placeholder.com/15/dad9e3/000000?text=+) `#dad9e3 (Cor de Texto Númerico)`

## <b>Dia 3</b>
<p>O que veremos: </p>
<ul>
    <li>React Native Elements</li>
    <li>State</li>
    <li>Formik</li>
    <li>Yup</li>
</ul>

### Bibliotecas:

<li><a href="https://reactnativeelements.com/docs/">Floating label</a>:</li>

```
expo install react-native-floating-label-input react-native-reanimated
```

<li><a href="https://reactnativeelements.com/docs/">React Native Elements</a>:</li>

```
expo install react-native-elements
```

<li><a href="https://formik.org/docs/overview">Formik + Yup</a>:</li>

```
expo install formik  yup @types/yup
```

## <b>Dia 4</b>
<p>O que veremos: </p>
<ul>
    <li>React Navigation</li>
    <li>FlatList (Revisão)</li>
</ul>

### Bibliotecas:

<li><a href="https://reactnavigation.org/docs/getting-started/">React Navigation</a>:</li>

```
expo install @react-navigation/native react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

```
expo install @react-navigation/stack
```

```
expo install @react-navigation/bottom-tabs
```


### Cores
- ![#6363db](https://via.placeholder.com/15/6363db/000000?text=+) `#6363db (Cor React)`
- ![#20b365](https://via.placeholder.com/15/20b365/000000?text=+) `#20b365 (Cor Figmar)`
- ![#03ab4f](https://via.placeholder.com/15/03ab4f/000000?text=+) `#03ab4f (Cor NodeJS)`



## <b>Dia 5</b>
<p>O que veremos: </p>
<ul>
    <li>Modalize</li>
    <li>Vídeo</li>
    <li>WebService</li>
    <li>Axios</li>
    <li>useEffect</li>
</ul>

### Bibliotecas:
<li><a href="https://jeremybarbet.github.io/react-native-modalize/#/INSTALLATION">Modalize</a>:</li>

```
expo install react-native-modalize react-native-gesture-handler
```
<li><a href="https://docs.expo.io/versions/latest/sdk/video/">Vídeo</a>:</li>

```
expo install expo-av
```

<li><a href="https://axios-http.com/docs/intro">Axios</a>:</li>

```
expo install axios
```

<li><a href="https://react-native-async-storage.github.io/async-storage/docs/install">Async Storage</a>:</li>

```
expo install @react-native-async-storage/async-storage
```

### API
<p><b>URL BASE:</b> http://overflix.cwg.services/api </p>

<p>Usuários para teste:</p>
<li>carlos@teste.com - 123456</li>
<li>kaio@teste.com - 654321</li>

<br/>
<p><b>POST</b> /login</p>
<p>Parametros: {email: string, password: string} </p>
<p>Retorno: </p>

```
{
    jwt:string, 
    user:{
        id: number
        name:string, 
        email: string
        avatar:string
    }
}
```

<br/>
<p><b>GET</b> /projects</p>
<p style="color:tomato">Autenticação Necessária*</p>
<p>Retorno: </p>

```
[
    {
        id: number,
        image: string,
        text: string,
        category_id: number,
        total: number,
        videos: [
            {
                id: number,
                url: string,
                project_id: number,
                watched: boolean
            },
            ...
        ] 
    },
    ...
]
```

<br/>
<p><b>GET</b> /projects/category/{categoria ID}</p>
<p style="color:tomato">Autenticação Necessária*</p>
<p>Retorno: </p>

```
[
    {
        id: number,
        image: string,
        text: string,
        category_id: number,
        total: number,
        videos: [
            {
                id: number,
                url: string,
                project_id: number,
                watched: boolean
            },
            ...
        ] 
    },
    ...
]
```

<br/>
<p><b>PUT</b> /projects/videos/{video ID}/{1 = assistir | 0 = desmarcar}</p>
<p style="color:tomato">Autenticação Necessária*</p>


## Créditos
<p>Digital Maker Week 2021 (<a href="https://www.digitalmakerweek.com.br/">Site</a>)</p>
<p><b>Professor:</b> Carlos </p> 