import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Product() {
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;

  const { data: product, isLoading, error } = useFetch(url);

  return (
    <>
      <p>Id do Produto: {id}</p>
      {error && <p>{error}</p>}
      {isLoading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <Link to={`/products/${id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
}
