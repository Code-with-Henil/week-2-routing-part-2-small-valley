import { Link, Outlet } from "react-router-dom";

const Sports = () => {
    return (
        <>
            <div>Sports</div>
            <ul>
                <li>
                    <Link to="./soccer">Soccer</Link>
                </li>
                <li>
                    <Link to="./basketball">Basketball</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Sports;
