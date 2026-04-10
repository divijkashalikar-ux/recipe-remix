import { useState } from "react";

export default function Grocery({ grocery }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const exists = cart.find(i => i.name === item.name);

    if (exists) {
      setCart(
        cart.map(i =>
          i.name === item.name
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (item) => {
    const exists = cart.find(i => i.name === item.name);

    if (exists.qty === 1) {
      setCart(cart.filter(i => i.name !== item.name));
    } else {
      setCart(
        cart.map(i =>
          i.name === item.name
            ? { ...i, qty: i.qty - 1 }
            : i
        )
      );
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="page fade">
      <h1>Your Grocery List 🛒</h1>

      <div className="list">
        {grocery.map((item, i) => (
          <div key={i} className="listItem">
            <span>{item.name} — ₹{item.price}</span>

            <button onClick={() => addItem(item)}>+</button>
          </div>
        ))}
      </div>

      {/* CART SECTION */}
      <h2 style={{ marginTop: "30px" }}>Cart</h2>

      {cart.length === 0 && <p>No items added yet</p>}

      {cart.map((item, i) => (
        <div key={i} className="cartItem">
          <span>
            {item.name} x {item.qty}
          </span>

          <div>
            <button onClick={() => removeItem(item)}>-</button>
            <button onClick={() => addItem(item)}>+</button>
          </div>

          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}