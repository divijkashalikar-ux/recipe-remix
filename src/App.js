import { useState } from "react";
import Home from "./Home";
import Recipes from "./Recipes";
import Grocery from "./Grocery";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [recipes, setRecipes] = useState([]);
  const [grocery, setGrocery] = useState([]);
   const [user, setUser] = useState()

  return (
    <div>
      <nav className="nav">
        <h2>Recipe Remix</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("recipes")}>Recipes</button>
          <button onClick={() => setPage("grocery")}>Grocery</button>
        </div>
      </nav>

      {page === "home" && (
        <Home setRecipes={setRecipes} setUser={setUser} setPage={setPage} />
      )}
      {page === "recipes" && (
       <Recipes 
  recipes={recipes} 
  setGrocery={setGrocery} 
  setPage={setPage} 
/>
      )}
      {page === "grocery" && <Grocery grocery={grocery} />}
    </div>
  );
}

export default App;