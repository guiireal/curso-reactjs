export default function CarDetails({ brand, km, color }) {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand || "Não Informado"}</li>
        <li>Km: {km || "Não Informado"}</li>
        <li>Cor: {color || "Não Informado"}</li>
      </ul>
    </div>
  );
}
