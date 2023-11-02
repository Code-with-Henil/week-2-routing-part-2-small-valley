import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";
import SignUp from "./components/SignUp";
// import Wellcome from "./components/Wellcome";
// import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Shopping from "./components/Shopping";
import Foods from "./components/Foods";
import Curry from "./components/Curry";
import Sports from "./components/Sports";
import Soccer from "./components/Soccer";
import Basketball from "./components/Basketball";
import Pasta from "./components/pasta";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/recipes/:recipe" element={<Recipes />} />
                <Route path="/sign-up" element={<SignUp />} />
                {/* <Route path="/wellcome" element={<Wellcome />} />
                <Route path="/log-in" element={<LogIn />} /> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/shopping" element={<Shopping />}>
                    <Route path="foods" element={<Foods />}>
                        <Route path="curry" element={<Curry />} />
                        <Route path="pasta" element={<Pasta />} />
                    </Route>
                    <Route path="sports" element={<Sports />}>
                        <Route path="soccer" element={<Soccer />} />
                        <Route path="basketball" element={<Basketball />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
