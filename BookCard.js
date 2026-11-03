import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookCard({title, author, price, discount, isAvailable}) {
    return(
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>by {author}</Text>
            <Text style={styles.price}>Price: {price}$</Text>
            <Text style={styles.price}>
                After discount: {price - discount}$
            </Text>

            <Text style={styles.availability}>
                {isAvailable ? 'Available' : 'Not available'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgb(225, 227, 230)',
        borderWidth: 2,
        borderColor: '#142046',
        borderRadius: 12,
        padding: 15,
        marginBottom: 17,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#172033',
        marginBottom: 5,
    },
    author: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 15,
    },

    price: {
     fontSize: 15,
     color: '#172033',
     marginBottom: 6,
    },

    availability: {
     fontSize: 15,
     fontWeight: 'bold',
     color: '#172033',
    },
});