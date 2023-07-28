import React, { createContext, useState, useContext } from 'react';

const RecipeSearchContext = createContext();

const RecipeSearchContextProvider = ({ children }) => {
    const [recipeKeyword, setRecipeKeyword] = useState('');
    const [recipeSummary, setRecipeSummary] = useState('');

    return (
        <RecipeSearchContext.Provider value={{
            recipeKeyword, setRecipeKeyword,
            recipeSummary, setRecipeSummary
        }}>
            {children}
        </RecipeSearchContext.Provider>
    );
};

export { RecipeSearchContext, RecipeSearchContextProvider };