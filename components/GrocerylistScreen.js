//Import
//-- Standard React
import * as React from "react";
//-- React funktioner
import {StyleSheet, Text, View} from "react-native";

//GroceryListScreen
//GrocerylistScreen funktionen tager en prop som argument
function GrocerylistScreen({prop}) {
    return (
        <View style={styles.container}>
            {/* prop printes og vises som tekst */}
            <Text style={styles.text}>{prop}</Text>
        </View>
    );
}

//Export
export default GrocerylistScreen

//Lokal styling til brug i GrocerylistScreen
const styles = StyleSheet.create({
    //Beholderen
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    //Tekst
    text: {
        fontSize: 40,
        fontStyle: 'italic',
        textShadowColor: '#faebd7',
    },
});