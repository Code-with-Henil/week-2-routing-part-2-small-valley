import { Link, Outlet } from "react-router-dom";

const Foods = () => {
    return (
        <>
            <div>Foods</div>
            <ul>
                <li>
                    <Link to="./curry">Curry</Link>
                </li>
                <li>
                    <Link to="./pasta">Pasta</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Foods;
