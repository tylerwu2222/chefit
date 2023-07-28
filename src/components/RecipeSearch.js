import React, { useContext } from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { RecipeSearchContext } from '../screens/RecipeSearchContext.js';
import RecipeCard from './RecipeCard.js';
// import scrapeURL from '../scripts/scraper.js';
import { globalStyles, globalColors } from '../../styles/globalStyles.js';

const styles = StyleSheet.create({
    submitView: {
        display: 'flex',
        // backgroundColor: globalColors.beigeBG,
        padding: 10,
        // borderWidth: 1,
        // borderColor: globalColors.beigeOutline,
        // borderRadius: 5
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    urlTextInput: {
        backgroundColor: 'white',
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: globalColors.beigeOutline,
        borderRadius: 5,
        paddingLeft: 10
    }
});

export default function RecipeSearch() {
    // const navigation = useNavigation();
    const {
        recipeKeyword,
        setRecipeKeyword
    } = useContext(RecipeSearchContext);

    return (
        <>
            <View style={styles.submitView}>
                <View style={styles.titleView}>
                    <Text style={globalStyles.titleText}>chefit</Text>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/favicon.png')}
                    />
                    <Text style={globalStyles.smallText}>(cooking simplified)</Text>
                </View>
                
                <TextInput
                    style={styles.urlTextInput}
                    placeholder="Type to filter recipes"
                    onChangeText={keyword => setRecipeKeyword(keyword)}
                    defaultValue={recipeKeyword}
                />
            </View>
        </>
    );
}
