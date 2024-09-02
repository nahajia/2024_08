import React,  {useState} from "react";
import { View, Alert } from "react-native";

//formik
import { Formik } from "formik";

//import Root from '../App';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';
import { InnerContainer,
         PageLogo, 
         PageTitle,
         StyledContainer, 
         SubTitle, 
         StyledFormArea,
         LeftIcon, 
         StyledInputLabel,
         StyledTextInput, 
         RightIcon, 
         Colors, 
         StyledButton, 
         ButtonText, 
         MsgBox, 
         Line, 
         ExtraView,
         ExtraText,
         TextLink,
         TextLinkContent,
        } from "../components/styles";

//colors
const {brand, darkLight, primary, blue}=Colors;
//const ip="192.168.0.118";
const ip = require('../ipcim');

import KeyBoardAvoidingWrapper from "../components/KeyBoardAvoidingWrapper";

const Login =( props, navigation)=>{
    const [hidePassword, setHidePassword]=useState(true);
    
    return(
        <KeyBoardAvoidingWrapper>
            <StyledContainer>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')}/>
                    <SubTitle>Bejelentkezés</SubTitle>
                    <Formik
                        initialValues={{email: '', password:''}}
                        onSubmit={(values)=>{
                            console.log(values);
                                fetch(ip.ipcim+'/bejelentkezes', {
                                 method: "POST",
                                 body: JSON.stringify(values),
                                 headers: {"Content-type": "application/json; charset=UTF-8"}
                               }
                               )
                                 .then((response) => response.json())
                                 .then((valasz) => {
                                   
                                   if(valasz.length==0){
                                       Alert.alert("Rossz email-cím vagy jelszó");
                                   }else{
                                        //navigation.navigate("Nyito");
                                        //alert(valasz[0].id)
                                        //var felid = valasz[0].id;
                                        //props.felid=felid;
                                        props.vissza(valasz[0].id);
                                   }
                                 })
                                 .catch((error) =>{
                                   console.error(error);
                                 });
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values})=> (<StyledFormArea>
                            <MyTextInput 
                                label="Email-cím"
                                icon="mail"
                                placeholder="mintajanos1@minta.hu"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput 
                                label="Jelszó"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Bejelentkezés</ButtonText>
                            </StyledButton>
                            <Line/>
                            <ExtraView>
                                <ExtraText>Nincs még fiókod? </ExtraText>
                                <TextLink onPress={()=> navigation.navigate("Signup")}>
                                    <TextLinkContent>Regisztráció</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyBoardAvoidingWrapper>
    );
}

const MyTextInput= ({label,icon, isPassword, hidePassword, setHidePassword, ...props})=>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {/* 
            {isPassword&&(
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
            */}
        </View>
    );
}

export default Login;