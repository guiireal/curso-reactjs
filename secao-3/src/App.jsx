import Cidade from "./assets/cidade.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

export default function App() {
  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Vermelha",
      km: 50000,
    },
    {
      id: 2,
      brand: "KIA",
      color: "Branco",
      km: 1000000,
    },
    {
      id: 3,
      brand: "Renault",
      color: "Azul",
      km: 23000,
    },
  ];

  const containerTitle = "Teste";

  return (
    <div>
      <h1>Seção 3</h1>
      <div>
        {/* Imagem em public */}
        <img src="/imagem-gaviao.jpg" alt="Imagem Gavião" width="300" />
      </div>
      <div>
        {/* Imagem em asset */}
        <img src={Cidade} alt="Imagem Cidade" width="300" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Guilherme" />
      <ShowUserName />
      <CarDetails brand="VW" km={10000} color="Branco" />
      {cars.map(({ id, brand, km, color }) => (
        <CarDetails key={id} brand={brand} km={km} color={color} />
      ))}
      <Fragment propFragment="Teste" />
      <Container title={containerTitle}>
        <h2>Este é o resumo do container</h2>
      </Container>
    </div>
  );
}
