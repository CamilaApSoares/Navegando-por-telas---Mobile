import React from "react";
import { View, Text, Button, StyleSheet } from'react-native';
export default function AboutScreen({
    navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Sobre a desenvolvedora do aplicativo: </Text>
            <Text style={styles.text}>Camila Aparecida tem 21 anos, e atualmente trabalha como suporte. Nos tempos livres costuma jogar, ler e ver coisas fofas!</Text>
            <Button
                title="Página Home"
                onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#feeeff",
    },
  
    text: {
        paddingTop: 35,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        margin: 16,
      }
})