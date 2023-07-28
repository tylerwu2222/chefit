import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import PrepScreen from './src/screens/PrepScreen';
import RecipeSearchScreen from './src/screens/RecipeSearchScreen.js';
import RecipeLandingScreen from './src/screens/RecipeLandingScreen.js';
import RecipeIngredientsScreen from './src/screens/RecipeIngredientsScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Find Recipe"
          component={RecipeSearchScreen}
          options={{ title: 'Find Recipe' }}
        />
        <Stack.Screen
          name="Start Cooking"
          component={RecipeLandingScreen}
          options={{ title: 'Start Cooking' }}
        />
        <Stack.Screen
          name="Ingredients"
          component={RecipeIngredientsScreen}
          options={{ title: 'Ingredients' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}