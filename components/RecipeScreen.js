//Import
//--Standard React
import * as React from "react";
//--Importer React native funktioner
import {StyleSheet, Text, View, ScrollView} from "react-native";
//--Importer hard-coded database
import {ITALIEN} from "../DB"

//RecipeScreen
//SettingsScreen komponenten tager en prop med og printer indholdet af denne prop i en <Text>
function RecipeScreen({prop}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop}</Text>
            <ScrollView style={{height:80}}>
                {/*Det vi gør her er at loope igennem vores lande med en map funktion, 
                som looper igennem arrays. Heri laver vi en funktion som først har værdien 
                og dernæst index nummeret. Der bruger vi key'en til at definere pladsen på 
                elementet og country til udprint af vores værdi */}
                {
                    ITALIEN.map((italien : string , key : number) => {
                        return(
                            <Text style={styles.text_list} key={key}>
                                ** {italien} ** 
                            </Text>
                        )
                    })
                }
                <Text>{ITALIEN.name}</Text>
               </ScrollView>
        </View>
    );
}

export default RecipeScreen

//Lokal styling til brug i FoodScreen
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30,
        fontStyle: 'italic',
    },
    text_list: {
        fontSize: 15,
        fontStyle: 'normal',
        textAlign: 'center',
    }
});