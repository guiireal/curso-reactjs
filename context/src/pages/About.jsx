import useCounterContext from "../hooks/useCounterContext";

export default function About() {
  const { counter } = useCounterContext();

  return <div>About {counter}</div>;
}
