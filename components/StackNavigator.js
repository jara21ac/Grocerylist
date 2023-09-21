//Imports:
//--standard react
import * as React from "react";
//--Navigation
import { createStackNavigator } from '@react-navigation/stack';
//--Komponenter
import SettingsScreen from "./SettingsScreen";
import Profile from "./stackComponents/ProfileSettings";

//Konstanter
//--Der startes en stack hvor react funktionen createStackNavigator kaldes
const Stack = createStackNavigator()

//Stack navigationen
//--Stack navigationens funktion
function StackNavigator() {
    return (
        <Stack.Navigator
            /* det indledende rute navn sættes til "Settings" */
            initialRouteName="Settings"
        >{/* SettingsScreen sættes som standard destination for StackNavigator 
                en screen for settings og profil fastssættes til stacken
                Hver skærm styles unikt ved brug af options
                */}
            <Stack.Screen name="Options" component={SettingsScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: { color: 'black' },
                    headerStyle: { backgroundColor: '#FAEBD7' }
                }
                }
            />
            <Stack.Screen name="Profile" component={Profile}
                options={{
                    headerTitleStyle: { textAlign: 'right', color: 'black' },
                    headerStyle: { backgroundColor: '#FAEBD7' }
                }} />
        </Stack.Navigator>
    )
}

//Eksport
export default StackNavigator