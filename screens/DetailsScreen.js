import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function DetailsScreen({
    navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página de detalhes</Text>
                <Text style={styles.text}>O nosso aplicativo para a nossa loja ainda está em desenvolvimento! Volte mais tarde para verificar nossa história</Text>
            <Button
                title="Página Home"
                onPress={() => navigation.goBack()}
            />
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
    }
)