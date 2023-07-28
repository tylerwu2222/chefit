import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, useState } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';

export default function RecipeIngredientsScreen() {
    const route = useRoute();
    const { ingredients } = route.params;
    const [currIngredGroup, setCurrIngredGroup] = useState(0);
    // split ingredients into object of main ingredients, spices, etc.
    
    // show each ingred group seperately

    return (
        <View style={globalStyles.mainContainer}>
            {ingredients.map((ingred) => {
                return <Text>{ingred}</Text>;
            })}
        </View>
    )
}
