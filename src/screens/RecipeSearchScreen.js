import React from 'react';
import { View, Text } from 'react-native';

import { RecipeSearchContextProvider } from './RecipeSearchContext';

import RecipeSearch from '../components/RecipeSearch';
import RecipeResults from '../components/RecipeResults';

import { globalStyles } from '../../styles/globalStyles';

export default function RecipeSearchScreen({ navigation, route }) {

    return (
        <RecipeSearchContextProvider>
            <View style={globalStyles.mainContainer}>
                <RecipeSearch />
                <RecipeResults />
            </View>
        </RecipeSearchContextProvider>
    );
}
