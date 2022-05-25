import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p style={{ color: "red" }}>Css Inline</p>
      <Title />
    </div>
  );
}

export default App;
