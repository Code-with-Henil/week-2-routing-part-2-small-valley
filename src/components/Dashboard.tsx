import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (false) {
            navigate("/log-in");
        }
    }, [navigate]);

    return <div>Dashboard</div>;
};

export default Dashboard;
