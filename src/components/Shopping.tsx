import { Link, Outlet } from "react-router-dom";

const Shopping = () => {
    return (
        <>
            <h1>Shopping</h1>
            <ul>
                <li>
                    <Link to="./foods">Foods</Link>
                </li>
                <li>
                    <Link to="./sports">Sports</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Shopping;
