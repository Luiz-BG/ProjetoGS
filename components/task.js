import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const handleSend = async () => {
        Alert.alert('Envio Confirmado', 'Enviado para o Doutor!');
      };
    return (
        <View style={styles.item}>
            <TouchableOpacity style={styles.shareButton} onPress={handleSend}>
                <Text style={styles.shareButtonText}>Enviar</Text>
            </TouchableOpacity>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    shareButton: {
        padding: 10,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        marginRight: 15,
      },
    
      shareButtonText: {
        color: '#fff',
      },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#90ee90',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});
export default Task;