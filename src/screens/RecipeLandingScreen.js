import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    smallImage: {
        width: 250,
        height: 250,
        borderRadius: 25
    }
});

export default function RecipeLandingScreen() {
    const route = useRoute();
    const { recipe, image, ingredients, steps } = route.params;

    const navigation = useNavigation();
    const navigateToIngredients = (ingredients) => {
        console.log('navigating to ingredients');
        navigation.navigate('Ingredients', { ingredients: ingredients });
    }

    return (
        <View style={globalStyles.paddedContainer}>
            <Text style={globalStyles.text}>Welcome to the live cooking guide for {recipe}!</Text>
            <Image
                style={styles.smallImage}
                src={image}
                alt={image}>
            </Image>
            <Button onPress={() => { navigateToIngredients(ingredients) }} title="Gather Ingredients"></Button>
            {/* <Text>{currIngredients}</Text> */}
        </View>
    )
}
