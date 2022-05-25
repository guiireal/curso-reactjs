export default function Events() {
  const handleMyEvent = (event) => {
    console.log("Ativou o evento!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Também posso renderizar isso</h1>;
    }
  };

  return (
    <div>
      <button onClick={handleMyEvent}>Clique aqui</button>
      <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}
