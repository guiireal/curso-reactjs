import { useState } from "react";
import "./MyForm.css";

export default function MyForm({ user }) {
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [bio, setBio] = useState(user?.bio ?? "");
  const [role, setRole] = useState(user?.role ?? "");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Seu nome: ${name} | Seu e-mail: ${email} | Sua bio: ${bio}`);
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          <span>Email:</span>
          <input
            type="text"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          <span>Bio:</span>
          <textarea
            placeholder="Digite sua bio"
            onChange={(event) => setBio(event.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Função:</span>
          <select
            onChange={(event) => setRole(event.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
