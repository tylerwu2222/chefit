import React, { useContext, useState, useEffect } from 'react';


import { FlatList, View, Text, StyleSheet } from 'react-native';
import { globalStyles, globalColors } from '../../styles/globalStyles.js';

import { RecipeSearchContext } from '../screens/RecipeSearchContext.js';
import RecipeCard from './RecipeCard.js';
import NYT_data from '../../assets/data/NYT_recipe_data.json'

const styles = StyleSheet.create({
    resultsView: {
        padding: 0
    }
});

export default function RecipeResults() {
    const {
        recipeKeyword
    } = useContext(RecipeSearchContext);
    const [matchedRecipes, setMatchedRecipes] = useState(NYT_data);

    // filter matched recipes by keyword
    useEffect(() => {
        setMatchedRecipes(NYT_data.filter(recipe => recipe.name.includes(recipeKeyword)))
    }, [recipeKeyword]);

    return (
        <View style={styles.resultsView}>
            <FlatList
                data={matchedRecipes}
                renderItem={({ item }) =>
                    <RecipeCard
                        title={item.name}
                        img={item.image}
                        url={item.url}
                        ingredients={item.ingredients}
                        steps={item.full_instructions} />}
            >
            </FlatList >
        </View>
    )
}