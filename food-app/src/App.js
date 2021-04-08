import React, { useState, useEffect } from 'react';

import Header from './component/Header';
import './App.css';
import Recipies from './component/Recipes';


function App() {
  useEffect(async () => {
    const data = await Axios.get(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);

  });
  const [search, setSearch] = useState("");
  const [Recipes, setRecipes] = useState([]);

  const APP_ID = "274837f2";
  const APP_KEY = "573f5f57d3612972c6c9f53d54d58155";


  const onInputChange = e => {

    setSearch(e.target.value);

  };
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} />


      <Recipies />

    </div>

  );
}

export default App;
