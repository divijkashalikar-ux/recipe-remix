import { useState } from "react";

export default function Home({ setRecipes, setPage }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = () => {
    if (!ingredients) return;

    setLoading(true);

    // simulate AI/search delay
    setTimeout(() => {
      const ing = ingredients.split(",").map(i => i.trim());

      const data = [
        {
          title: `${ing[0] || "Ingredient"} Bowl`,
          desc: `A quick and simple dish using ${ing.join(", ")}.`,
          missing: ["Oil", "Salt"]
        },
        {
          title: `${ing[1] || "Fusion"} Mix`,
          desc: `Balanced flavors with sautéed ingredients.`,
          missing: ["Garlic", "Butter"]
        },
        {
          title: `${ing[2] || "Quick"} Meal`,
          desc: `A fast and satisfying combination.`,
          missing: ["Pepper", "Sauce"]
        }
      ];

      setRecipes(data);
      setLoading(false);
      setPage("recipes");
    }, 1800); // timing for animation
  };

  return (
    <div className="page fade">

      {/* WELCOME MESSAGE */}
      <h1>
        {name ? `Hey ${name} 👋 What are we cooking today?` : "What are we cooking today?"}
      </h1>

      <p className="sub">
        Got a few ingredients? Let’s turn them into something great.
      </p>

      {/* INPUTS */}
      <div className="inputBox">
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="e.g. chicken, rice, garlic"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <button className="primary" onClick={generate}>
          Generate Recipes
        </button>
      </div>

      {/* LOADING ANIMATION */}
      {loading && (
        <div className="loaderBox">
          <div className="spinner"></div>
          <p className="loadingText">
            Searching for the best recipes for you...
          </p>
        </div>
      )}

    </div>
  );
}