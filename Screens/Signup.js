import React,  {useState} from "react";
import { View, TouchableOpacity } from "react-native";
//formik
import { Formik } from "formik";
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import { InnerContainer,
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
const {brand, darkLight, primary}=Colors;
const ip = require('../ipcim');

//Datetimepicker
//import DateTimePicker from '@react-native-community/datetimepicker';

import KeyBoardAvoidingWrapper from "../components/KeyBoardAvoidingWrapper";


const Signup =( props, navigation)=>{
    const [hidePassword, setHidePassword]=useState(true);
    const [show, setShow] = useState(false);
  //  const [date, setDate] = useState(new Date(2000, 0, 1));

    const [dob, setDob] = useState();
/*
    const onChange = (event, selectedDate)=>{
        const currentDate =selectedDate||date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker =()=>{
        setShow(true);
    }
*/
    return(
        <KeyBoardAvoidingWrapper>
            <StyledContainer>
                <InnerContainer>
                    <PageTitle>Én könyv</PageTitle>
                    <SubTitle>Regisztráció</SubTitle>
                       <Formik
                       initialValues={{name:'', email: '', password:'', confirmPassword:''}}
                       onSubmit={(values)=>{
                           console.log(values);
                           if (values.password != values.confirmPassword)
                           {
                               alert("A jelszó nem egyezik.")
                           }
                           else{
                                //alert(JSON.stringify(values));
                               //alert("Sikeres felvitel!");
                               fetch('http://'+ip.ipcim+'/regisztracio', {
                                 method: "POST",
                                 body: JSON.stringify(values),
                                 headers: {"Content-type": "application/json; charset=UTF-8"}
                                 } )
                                 .then((response) => response.text())
                                 .then((szoveg) => {
                                   alert(szoveg);
                                   if (szoveg=="van")
                                   {
                                       alert("Ez az email cím már használva van.")
                                   }
                                   else
                                   {
                                        props.vissza();
                                       //navigation.navigate('Welcome')
                                   }
                                   
                                 })
                                 .catch((error) =>{
                                   console.error(error);
                                 });
                           }
                       }}
                   >
                        {({handleChange, handleBlur, handleSubmit, values})=> (<StyledFormArea>
                            <MyTextInput 
                                label="Név"
                                icon="person"
                                placeholder="Minta János"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <MyTextInput 
                                label="Email-cím"
                                icon="mail"
                                placeholder="mintajanos1@minta.hu"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput 
                                label="Jelszó"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MyTextInput 
                                label="Jelszó megerősítése"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Regisztráció</ButtonText>
                            </StyledButton>
                            <Line/>
                            <ExtraView>
                                <ExtraText>Már van fiókod? </ExtraText>
                                <TextLink onPress={()=>navigation.navigate('Login')}>
                                    <TextLinkContent>Bejelentkezés</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyBoardAvoidingWrapper>
    );
};

const MyTextInput= ({label,icon, isPassword, hidePassword, setHidePassword, isDate,showDatePicker, ...props})=>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props}/>
                </TouchableOpacity>
            )}
            {isPassword&&(
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
}

export default Signup;