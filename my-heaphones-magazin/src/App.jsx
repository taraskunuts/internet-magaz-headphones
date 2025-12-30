import { useState } from "react";
import { products } from "./data/products";
import HeadphonesList from "./components/HeadphonesList";

function App() {
  const [maxPr, setPr] = useState(2000);

  return (
    <div>
      <h2>Навушники</h2>
      <label>
        Максимальна ціна:
        <input
          type="number"
          value={maxPr}
          onChange={e => setPr(Number(e.target.value))}
        />
      </label>

      <HeadphonesList products={products} maxPrice={maxPr} />
    </div>
  );
}

export default App;
