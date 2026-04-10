export default function Recipes({ recipes, setGrocery, setPage }) {

  const createList = () => {
    let items = [];

    // collect all missing ingredients
    recipes.forEach(r => {
      items.push(...r.missing);
    });

    // remove duplicates
    const uniqueItems = [...new Set(items)];

    // realistic price mapping (₹)
    const priceMap = {
      Oil: 120,
      Salt: 20,
      Spices: 80,
      Butter: 60,
      Garlic: 40,
      Pepper: 50,
      Sauce: 70
    };

    // attach price to each item
    const pricedItems = uniqueItems.map(item => ({
      name: item,
      price: priceMap[item] || 50
    }));

    // set grocery list
    setGrocery(pricedItems);

    // navigate to grocery page
    setPage("grocery");
  };

  return (
    <div className="page fade">
      <h1>Here are some ideas 🍳</h1>

      <div className="grid">
        {recipes.map((r, i) => (
          <div className="card" key={i}>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>

            <span className="label">Missing</span>
            <ul>
              {r.missing.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="primary" onClick={createList}>
        Create Grocery List 🛒
      </button>
    </div>
  );
}