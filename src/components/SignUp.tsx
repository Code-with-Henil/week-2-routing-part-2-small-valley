import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const signUpHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/wellcome");
        }, 1000);
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={signUpHandler}>
                <button type="submit">Sign Up!</button>
            </form>
        </>
    );
};

export default SignUp;
