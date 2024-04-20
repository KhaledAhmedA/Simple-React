import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/";
    const [user, setUser] = useState("");

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true });
    }

    return (
        <div>
            <label>
                username:
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUser(e.target.value)}
                />
            </label>

            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;