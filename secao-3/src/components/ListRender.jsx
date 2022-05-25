import { useState } from "react";

export default function ListRender() {
  const [name, setName] = useState("");
  const [list, setList] = useState(["Matheus", "Pedro", "João"]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Teste",
    },
    {
      id: 2,
      name: "Teste 2",
    },
    {
      id: 3,
      name: "Teste 3",
    },
    {
      id: 4,
      name: "Teste 4",
    },
  ]);

  const handleAddNameToList = () => {
    setList([...list, name]);
    setName("");
  };

  const handleDeleteUser = () => {
    const randomNumber = Math.floor(Math.random() * users.length);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== randomNumber)
    );
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Informe um nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <button onClick={handleAddNameToList}>Adicionar nome na lista</button>
      <h3>Usuários</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleDeleteUser}>Deletar usuário aleatório</button>
    </div>
  );
}
