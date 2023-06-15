import React,{useState} from "react";
import './App.css';
import Home from './components/Dashboard';
import About from './components/About';
import Contact from './components/contact';
import Navbar from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NotFound from "./Components/pages/NotFound";
import AddProduct from "./components/AddProducts";
import EditProduct from "./components/EditProduct";
import ViewProduct from "./components/viewProduct";

function App() {

  const [posts, setPosts] = useState([

  ]);
  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <Routes>
           <Route  path="/" element={<Home/>} />
          <Route  path="/About" element={<About/>} />
          <Route  path="/Contact" element={<Contact/>} />
          
            <Route  path="/products/EditProduct/:id" element={<EditProduct/>} />
          <Route  path="/products/AddProduct" element={<AddProduct/>} />
        
          <Route path="/products/:id" element={<ViewProduct/>} />  

        </Routes>

      </div>
    </Router>
  );
};

export default App;

