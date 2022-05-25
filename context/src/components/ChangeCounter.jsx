import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export default function ChangeCounter() {
  const { setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Add value to counter
      </button>
    </div>
  );
}
