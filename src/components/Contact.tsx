import { NavLink } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    );
};

export default Contact;
