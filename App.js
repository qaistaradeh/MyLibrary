import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BookCard from "./BookCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Library</Text>
      <Text style={styles.subtitle}>First React App</Text>

      <BookCard
        title="Clean Code"
        author="Robert Martin"
        price={40}
        discount={4}
        isAvailable={true}
      />

      <BookCard
        title="JavaScript Basics"
        author="Sara Ali"
        price={25}
        discount={5}
        isAvailable={false}
      />

      <BookCard
        title="Learning React Native"
        author="Ahmad Saeed"
        price={30}
        discount={0}
        isAvailable={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
    paddingTop: 50,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#172033',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 25,
  },
});