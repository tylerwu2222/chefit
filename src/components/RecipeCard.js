import { View, Text, Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { globalStyles, globalColors } from '../../styles/globalStyles';

import React from 'react';

const styles = StyleSheet.create({
    recipeCard: {
        backgroundColor: globalColors.beigeBG,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: globalColors.beigeOutline,
        borderRadius: 5,
        // alignSelf: 'flex-start'
    },
    tinyImage: {
        width: 150,
        height: 150,
        borderRadius: 5
    }
});

export default function RecipeCard({
    title = 'recipe',
    img = 'img',
    url = 'http://google.com',
    ingredients = '',
    steps = [] }) {

    const navigation = useNavigation();
    const navigateToRecipe = (title, ingredients, steps) => {
        console.log('navigating to', title);
        navigation.navigate('Start Cooking', { recipe: title, image: img, ingredients: ingredients, steps: steps });
    }

    return (
        <View style={styles.recipeCard}>
            <TouchableOpacity onPress={() => { navigateToRecipe(title, ingredients, steps) }}>
                <View>
                    <Text style={globalStyles.text}>{title + " "}
                        <Text style={{ color: 'red' }}
                            onPress={() => Linking.openURL(url)}>
                             [OG recipe]
                        </Text>
                    </Text>
                    <Image
                        style={styles.tinyImage}
                        src={img}
                        alt={img}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
