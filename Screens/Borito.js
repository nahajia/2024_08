import React from "react";
import { StatusBar } from "expo-status-bar";

import { 
         InnerContainer,
         PageTitle,
         SubTitle, 
         StyledFormArea, 
         StyledButton, 
         ButtonText, 
         Line,
         WelcomeContainer,
         WelcomeImage,
         Avatar,
        } from "../components/styles";


const Borito =({navigation})=>{
    return(
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/img2.png')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Üdvözöllek</PageTitle>
                    <SubTitle welcome={true}>Minta János</SubTitle>
                    <SubTitle welcome={true}>mintajanos1@minta.hu</SubTitle>
                    <StyledFormArea>    
                    <Avatar resizeMode="cover" source={require('./../assets/img/img1.png')}/>
                    <Line/>
                    
                        <StyledButton onPress={()=>{navigation.navigate('Login')}}>
                            <ButtonText>Kijelentkezés</ButtonText>
                        </StyledButton>
                        
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Borito;