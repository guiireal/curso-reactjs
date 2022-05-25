import useCounterContext from "../hooks/useCounterContext";

export default function Product() {
  const { counter } = useCounterContext();

  return <div>Products {counter}</div>;
}
