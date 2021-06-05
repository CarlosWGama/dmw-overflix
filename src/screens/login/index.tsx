import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { AppColors } from '../../theme/colors';
import { CheckBox, Button } from 'react-native-elements';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Formik } from 'formik';
import * as Yup from 'yup';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    const login = async (datas) => {
        await new Promise((resolve, erro) => setTimeout(() => resolve('Completou'), 2000));
        console.log('Email:', datas.email);
        console.log('Senha:', datas.password);
        console.log('Lembrar-me:', datas.rememberMe);
    }

    //Render
    return (
        <View style={styles.container}>
            <Text style={styles.labelLogin}>Fazer login</Text>


            <Formik
                initialValues={{password: '', email: '', rememberMe: false}}
                validationSchema={Yup.object({
                    email: Yup.string().required('Email é obrigatório').email('O campo precisa ser um email'),
                    password: Yup.string().required('Senha é obrigatória').min(6, 'É preciso de pelo menos 6 digitos')
                })}
                onSubmit={login}
            >
                {({values, handleChange, setFieldValue, handleSubmit, isSubmitting, isValid, errors, handleBlur, touched}) => (
                    <>
                        {/* FORM */}
                        <View style={styles.form} >
                            <FloatingLabelInput containerStyles={styles.textInput} onBlur={handleBlur('email')} value={values.email} onChangeText={handleChange('email')} label="E-mail" keyboardType="email-address"/>
                            <Text style={styles.textError}>{touched.email && errors.email}</Text>

                            <View style={styles.hr} />
                            <FloatingLabelInput containerStyles={styles.textInput}  onBlur={handleBlur('password')} value={values.password} onChangeText={handleChange('password')} label="Senha" isPassword keyboardType="number-pad"/>
                            <Text style={styles.textError}>{touched.password && errors.password}</Text>

                        </View>

                        {/* LEMBRAR-ME */}
                        <View style={styles.remember}>
                            {/* LEMBRAR-ME */}
                            <View style={styles.checkerContainer}>
                                <CheckBox checked={values.rememberMe} onPress={() => setFieldValue('rememberMe', !values.rememberMe)} checkedColor={AppColors.Primary}  />
                                <Text style={[styles.textRemeber, {marginLeft: -10}]}>Lembrar-me</Text>
                            </View>

                            {/* ESQUECI SENHA */}
                            <View style={styles.checkerContainer}>
                                <Text style={styles.textRemeber}>Esqueci minha senha</Text>
                            </View>

                        </View>

                        {/* BOTÃO */}
                        { isSubmitting && <ActivityIndicator size={30} color={AppColors.Primary} /> }
                        { !isSubmitting && <Button disabled={!isValid} title="Entrar" buttonStyle={styles.btn} onPress={() => handleSubmit()} />}
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: AppColors.Secondary,
        padding: 20
    },
    labelLogin: {
        color: AppColors.Primary,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    form: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    textInput: {
        margin: 20,
        marginBottom: 0,
        borderWidth: 0
    },
    hr: {
        borderBottomColor: 'rgb(240, 240, 240)',
        borderBottomWidth: 1,
    },

    remember: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    checkerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRemeber: {
        fontSize: 18,
        color: AppColors.Primary
    },

    btn: {
        backgroundColor: AppColors.Primary,
        height: 50,
        borderRadius: 10
    },
    textError: {
        textAlign: 'right',
        color: 'red',
        marginRight: 10
    }
});
