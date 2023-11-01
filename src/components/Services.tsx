import { NavLink } from "react-router-dom";

const Services = () => {
    return (
        <>
            <h1>Services</h1>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    );
};

export default Services;
