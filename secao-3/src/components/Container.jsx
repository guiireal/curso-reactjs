export default function Container({ title, children }) {
  return (
    <div>
      <h1>Este é o título do container: {title || "Não informado"}</h1>
      {children}
    </div>
  );
}
