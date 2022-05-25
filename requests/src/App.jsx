import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const url = "http://localhost:3000/products";

  const { data, httpConfig, isLoading, error } = useFetch(url);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {isLoading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {data &&
            data.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
              </li>
            ))}
        </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          {isLoading && <input type="submit" disabled value="Aguarde" />}
          {!isLoading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
