import ChangeCounter from "../components/ChangeCounter";
import useCounterContext from "../hooks/useCounterContext";
import useTitleColorContext from "../hooks/useTitleColorContext";

export default function Home() {
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      Contador: {counter}
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Red</button>
        <button onClick={() => setTitleColor("BLUE")}>Blue</button>
        <button onClick={() => setTitleColor("PURPLE")}>Purple</button>
      </div>
    </div>
  );
}
