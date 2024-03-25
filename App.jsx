import "./App.css";
import { useState } from "react";
import Item from "./components/Item";
const products = [
  {
    item: "Item 1",
  },
  {
    item: "Item 2",
  },
  {
    item: "Item 3",
  },
];
export default function App() {
  const [count, setCount] = useState(0);
  function increament() {
    setCount(count + 1);
  }
  function decreament() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <main>
        <div>Increment & decrement</div>
        <div className="bg-red flex justify-center gap-12 py-3 rounded-sm">
          <button onClick={increament}> + </button>
          <span>
            <h6>{count}</h6>
          </span>
          <button onClick={decreament}> -</button>
        </div>
        <div> </div>
        <div>
          <button onClick={reset}>reset</button>
        </div>
      </main>
    </>
  );
}
