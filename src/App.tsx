import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
