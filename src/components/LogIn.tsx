import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        if (true) {
            navigate("/dashboard");
        }
    };
    return (
        <>
            <h1>Login</h1>
            <button onClick={clickHandler}>Login</button>
        </>
    );
};

export default LogIn;
