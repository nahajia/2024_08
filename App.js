import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Valami from './Valami';
/*
import Login from './Screens/Login';
import Signup from './Screens/Signup';

//------------------------------------------Menük
//Megjelenitesek
//1. én és a szem
import Seged from './Seged'; 
import Szemelyes_mentett_lap from './Szemelyes_mentett';
import Kulso_lap_kesz from './kulso_kesz';
import Belso_mentett from './Belso_mentett';
//5.
import Kedvelem from './Kedvelem';
import Nem_kedvelem_lap from './Nem_kedvelem_kesz';
import En_csalad_mentes_lap from './En_csaladom_mentes';
import Szuleim_kesz_lap from './Szuleim_kesz';
import Testvereim_lap_kesz from './Testvereim_kesz';
//10
import Nagyszuleim_lap_kesz from './Nagyszuleim_kesz';
import Hazi_kedvenc_kesz from './hazi_kedvenc_kesz';
import Tagabb_csalad_kesz from './Tagabb_csalad_kesz';
import Kozosseg_lap_kesz from './Kozosseg_kesz';
import Csoporttarsaim_lap_kesz from './Csoporttarsaim_kesz';
//15


//Szerkesztés
import Kulso_szerk from './kulso_szerk';

*/
/*
var belepett=false;
var felha_id=0;
var vissza=(adat)=>{
  belepett=true;
  alert(adat);
  felha_id=adat;
  //alert(props.felid)
  //alert("vissza")
  //navigation.navigate("Home");
}

function Belepeslap({ navigation }) {
  return (
    <Login navigacio={navigation} vissza={async (adat)=>vissza(adat)}/>
  );
}

function Regisztraciolap({ navigation }) {
  return (
    <Signup navigacio={navigation} vissza={async ()=>vissza()}/>
  );
}

//------------------------------------------------Menük
//1.Én és a szem
function Seged_lap({ navigation }) {
  return (
    <Seged navigacio={navigation} felhasz_id={felha_id} />
  );
}
//2.Személyes adatok
function Mentett_lap ({navigation}) {
  return(
    <Szemelyes_mentett_lap navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//3.
function Kulso_kesz ({navigation}) {
  return(
    <Kulso_lap_kesz navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//4.
function Belso_lap({navigation}){
  return(
    <Belso_mentett navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//5.
function Kedvelem_lap({ navigation }) {
  return (
    <Kedvelem navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//6.
function Nem_kedvelem_lap_kesz ({navigation}) {
  return(
    <Nem_kedvelem_lap navigacio={navigation} felhasz_id={felha_id} />
  );
}
//7. Családom
function Mentes_lap({navigation}){
  return(
    <En_csalad_mentes_lap navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//8.
function Szuleim_lap({navigation}) {
  return(
    <Szuleim_kesz_lap navigacio={navigation} felhasz_id={felha_id} />
  );
}
//9.
function Testvereim_lap ({navigation}) {
  return(
    <Testvereim_lap_kesz navigacio={navigation} felhasz_id={felha_id} />
  );
}
//10.
function Nagyszuleim_lap ({navigation}) {
  return(
    <Nagyszuleim_lap_kesz navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//11.
function Hazi_kedvenc_lap({navigation}) {
  return(
    <Hazi_kedvenc_kesz navigacio={navigation} felhasz_id={felha_id} />
  );
}
//12.
function Tagabb_lap ({navigation}) {
  return(
    <Tagabb_csalad_kesz navigacio={navigation} felhasz_id={felha_id} />
  );
}
//13.
function Kozosseg_lap({navigation}) {
  return(
    <Kozosseg_lap_kesz navigacio={navigation} felhasz_id={felha_id}/>
  );
}
//14.
function Csoporttarsaim_lap({navigation}) {
  return(
    <Csoporttarsaim_lap_kesz navigacio={navigation} felhasz_id={felha_id} />
  );
}
*/
function Valamilap({navigation}) {
  return(
    <Valami navigacio={navigation}  />
  );
}
//----------------------------------------------Drawer
function Root({ navigation }) {
  return (
<Drawer.Navigator initialRouteName="Belépés"        
      screenOptions={{
          drawerStyle: {
            // Egyéb stílus beállítások a menüre
          },
          drawerItemStyle: {
            marginVertical: 1, // Ez határozza meg a menüpontok közötti térközt
          }}} >
            <Drawer.Screen name="Valami" component={Valamilap} />
  {/*}
        {!belepett && <Drawer.Screen name="Belépés" component={Belepeslap} />}
        {!belepett && <Drawer.Screen name="Regisztráció" component={Regisztraciolap} />}


        {belepett &&<Drawer.Screen name="Én és a személyiségem" component={Seged_lap} />}
        {belepett&&<Drawer.Screen name='Személyes adatok' component={Mentett_lap}/>}
        {belepett &&<Drawer.Screen name="Külső tulajdonságok" component={Kulso_kesz} />}  
        {belepett && <Drawer.Screen name="Belső tulajdonságok" component={Belso_lap} />}
        {belepett&&<Drawer.Screen name="Kedvelem" component={Kedvelem_lap} />}

        {belepett &&<Drawer.Screen name="Nem kedvelem" component={Nem_kedvelem_lap_kesz}/>}
        {belepett &&<Drawer.Screen name="A családom" component={Mentes_lap}/>} 
        {belepett &&<Drawer.Screen name="A szüleim" component={Szuleim_lap}/>}   
        {belepett &&<Drawer.Screen name="A testvéreim"component={Testvereim_lap}/>}
        {belepett &&<Drawer.Screen name="A nagyszüleim"component={Nagyszuleim_lap}/>}
        
        {belepett &&<Drawer.Screen name="A házi kedvencem"component={Hazi_kedvenc_lap}/>}
        {belepett &&<Drawer.Screen name="A tágabb családom"component={Tagabb_lap}/>}
        {belepett &&<Drawer.Screen name="A közösségem"component={Kozosseg_lap}/>}
        {belepett &&<Drawer.Screen name="A csoporttársaim"component={Csoporttarsaim_lap}/>}
 {*/} 
      {/*  {belepett&&<Drawer.Screen name="Élmények" component={Elmeny_lap} 
         options={{
          headerRight: () => (
            <TouchableOpacity
            onPress={() =>{Alert.alert("Információ", "Itt tudod rögzíteni a minap megtörtént eseményeidet.\n\nÉlmény kereső:\nItt tudsz a már felvitt élményeid között keresni.\n\nÉlmény leírása:\nA minap történt eseményeid részletes leírását itt adhatod meg.\n\nKépfeltöltés:\nAz élményeid mellé egy képet is fel tudsz tölteni, hogy a leírt esemény még emlékezetesebb legyen. A gallériából illetve a kamerából közvetlen is fel tudsz tölteni képet.\n\nRögzítés:\nEzzel a gombbal tudod felvinni a megírt élményed, képpel együtt.\n\nÉlmény törlése:\nAmennyiben elrontottad amit írtál, esetleg a kép nem megfelelő, itt tudod kitörölni azt.\n\nFelolvasás:\nA szavak gyakorlása érdekében felolvassa az adott élmény szövegét.")}}>
            <MaterialIcons name='info' size={25} color={"gray"} style={{marginRight:10}} />
            </TouchableOpacity>
            ),
          }}
        />} */}
        {/*{belepett &&< Drawer.Screen name="Emlékek" component={Emlek_lap}
          options={{
            headerRight: () => (
              <TouchableOpacity
              onPress={() =>{Alert.alert("Használati útmutató", "Emlék kereső:\nAz emlék kereső feliratú beviteli mezőbe a beírt szöveg alapján keres az emlékek között, miután a felhasználó megnyomja a nagyító ikonnal ellátott gombot.\n\nEmlék rögzítése:\n'Írd le az emléked!' feliratú beviteli mezőbe kell beírni az emlék szövegét. \nDátum feliratú gombot megnyomva megjelenik egy naptár, amiben ki lehet választani a ívánt dátumot.\n'Válaszd ki a képet' feliratú gombot, ha mwgnymojuk akkor a telefon gelériájából ki kell választni a kívánt képet.\n 'Rögzítés' feliratú gomb megnyomása után megjelenik az újonnan hozzáadott emlék a listában.")}}
              style={{marginRight:10}}
              >
              <MaterialIcons name='info' size={25} color={"gray"}/>
              </TouchableOpacity>
              ),
            }}
          />}*/}
        </Drawer.Navigator>

  );
}




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Root" component={Root} options={{headerShown:false}} />
{/*}
        <Stack.Screen name="Kulso_szerk" component={Kulso_szerk}
            options={{headerBackTitle:"Vissza", title: "Külső tulajdonságok" , headerRight: () => (
            <TouchableOpacity
              onPress={() =>{Alert.alert("Információ", "Itt tudod beállítani a külső tulajdonságaid.")}}>
              <MaterialIcons name='info' size={25} color={"gray"}/>
            </TouchableOpacity>
          ),}}/>           
{*/}
      </Stack.Navigator>     
    </NavigationContainer>
  );
}