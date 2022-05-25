import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import About from "./pages/About";
import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
