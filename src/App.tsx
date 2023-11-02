import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";
import SignUp from "./components/SignUp";
import Wellcome from "./components/Wellcome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/recipes/:recipe" element={<Recipes />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/wellcome" element={<Wellcome />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
