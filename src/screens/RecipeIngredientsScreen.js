import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute, useState } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';

import food_list_data from '../../assets/data/food_lists.json';

const styles = StyleSheet.create({
    boldText:{
        fontWeight: 'bold'
    },
    smallImage: {
        width: 250,
        height: 250,
        borderRadius: 25
    }
});

const groupIngredients = (ingredients) => {
    // console.log('food_list_data', food_list_data['dairy'][0])
    // console.log('ingredients', ingredients)
    const grouped_ingredients = {};
    for (const key in food_list_data) {
        // console.log('k',key)
        grouped_ingredients[key] = [];
    }
    // console.log('grouped', grouped_ingredients);

    // for each ingredient...
    for (const ingredient of ingredients) {
        // iterate through each food group..
        for (const foodGroup in food_list_data) {
            // and each food within the food group
            for (const potentialFood of food_list_data[foodGroup]) {
                // check if the ingredient contains the potential food
                if (ingredient.includes(potentialFood)) {
                    // console.log('match pf',potentialFood,'ingred', ingredient )
                    // Assign the food group to the ingredient
                    grouped_ingredients[foodGroup].push(ingredient);
                    break; // No need to continue checking other potential foods in this group
                }
            }
            // Exit the loop if a match has been found for the current ingredient
            if (grouped_ingredients[foodGroup].includes(ingredient)) {
                break;
            }
        }
    }
    return grouped_ingredients;
};

export default function RecipeIngredientsScreen() {
    const route = useRoute();
    const { ingredients } = route.params;
    // const [currIngredGroup, setCurrIngredGroup] = useState(0);
    // const [groupedIngredients, setGroupedIngredients] = useState({});
    // split ingredients into object of main ingredients, spices, etc.
    const groupedIngredients = groupIngredients(ingredients);
    // show each ingred group seperately

    return (
        <View style={globalStyles.mainContainer}>
            <Text style={styles.boldText}>
                Grouped Ingreds
            </Text>
            {Object.keys(groupedIngredients).map((group) => {
                console.log('groupededIngreds', group);
                if (groupedIngredients[group].length > 0) {
                    return <>
                        <Text style={styles.boldText}>{group}</Text>
                        {
                            groupedIngredients[group].map((ingred) => {
                                return <Text>{ingred}</Text>
                            })
                        }
                    </>
                }
            })
            }
            {/* <Text>OG INGREDS</Text>
            {ingredients.map((ingred, index) => {
                return <Text key={index}>
                    {ingred}
                </Text>;
            })} */}
        </View>
    )
}
