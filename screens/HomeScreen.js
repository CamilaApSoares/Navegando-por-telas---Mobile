import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Home</Text>
            <Text style={styles.text}>Página destinada para a Home do aplicativo mobile.</Text>
            
            <Button
                title="Página de detalhes"
                onPress={() => navigation.navigate('Details')}
            />

            
            <Button
                title="Sobre"
                onPress={() => navigation.navigate('About')}
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
});