import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Guilherme",
          email: "João",
          bio: "Analista de sistemas",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
