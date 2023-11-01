import { NavLink } from "react-router-dom";

const Products = () => {
    return (
        <>
            <h1>Products</h1>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    );
};

export default Products;
