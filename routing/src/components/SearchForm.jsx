import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
}
