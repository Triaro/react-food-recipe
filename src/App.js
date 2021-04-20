import './App.css';
import './key';
import {useState} from 'react';
import Axios from "axios";
import RecipeTile from './RecipeTile';
function App() {
  const [query, setquery] = useState("");

  const [recipes, setrecipes] = useState([]);

  const [healthLabels, sethealthLabels] = useState("vegan")
  const YOUR_APP_ID = "3bfcb99b";
  const YOUR_APP_KEY = "59f2b5bf0c63d558f779b712ab18dc81";
  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`  

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
      <h1>Food Recipe Plaza</h1>
      <form className="searchForm" onSubmit={onSubmit}>
          <input className="input" type="text" placeholder="Enter ingredient" value={query} onChange={(e)=> setquery(e.target.value)}/>
          <input className="submit" type="submit" value="Search"/>
          <select id="" className="healthLabel">
            <option value="vegan" onClick={()=>sethealthLabels("vegan")}>Vegan</option>
            <option value="vegetarian" onClick={()=>sethealthLabels("vegetarian")}>vegetarian</option>
            <option value="paleo" onClick={()=>sethealthLabels("paleo")}>paleo</option>
            <option value="dairy-free" onClick={()=>sethealthLabels("dairy-free")}>dairy-free</option>
            <option value="gluten-free" onClick={()=>sethealthLabels("gluten-free")}>gluten-free</option>
            <option value="wheat-free" onClick={()=>sethealthLabels("wheat-free")}>wheat-free</option>
            <option value="low-sugar" onClick={()=>sethealthLabels("low-sugar")}>low-sugar</option>
            <option value="egg-free" onClick={()=>sethealthLabels("egg-free")}>egg-free</option>
            <option value="peanut-free" onClick={()=>sethealthLabels("peanut-free")}>peanut-free</option>
            <option value="soy-free" onClick={()=>sethealthLabels("soy-free")}>soy-free</option>
            <option value="fish-free" onClick={()=>sethealthLabels("fish-free")}>fish-free</option>
            <option value="shellfish-free" onClick={()=>sethealthLabels("shellfish-free")}>shellfish-free</option>
          </select>
      </form>

      <div className="recipes">
        {recipes.map(recipe =>{
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
