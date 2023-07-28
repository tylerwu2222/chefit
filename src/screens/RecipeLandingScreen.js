import React, {useState} from 'react'
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../styles/globalStyles';



export default function RecipeLandingScreen() {
    const route = useRoute();
    const { recipe, ingredients } = route.params;

    const navigation = useNavigation();
    const navigateToIngredients = (ingredients) => {
        console.log('navigating to ingredients');
        navigation.navigate('Ingredients', {ingredients: ingredients});
    }

    return (
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.text}>Welcome to the live cooking guide for {recipe}!</Text>
            <Button onPress={() => {navigateToIngredients(ingredients)}} title="Gather Ingredients"></Button>
            {/* <Text>{currIngredients}</Text> */}
        </View>
    )
}
