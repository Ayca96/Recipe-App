import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import RecipeCard from "./RecipeCard";

import { RecipeContext } from '../../context/AuthContext';

const Home = () => {
const {recipes}=useContext(RecipeContext)

  return (
    <div>
      <Header />

{recipes.length > 0  ? ( <RecipeCard />): <img src=""/>}

      {/* dizi doluysa <RecipeCard /> a git boşsa aşçı resmi */}
     
    </div>
  );
}

export default Home