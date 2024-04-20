import React from "react"
import { NavLink } from 'react-router-dom';
import { useAuth } from "./Auth";

const Navbar = () => {
    const auth = useAuth();
    const navBarStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? "none" : "underline",
            fontWeight: isActive ? "bold" : "normal",
        }
    }

    return (
        <nav>
            <NavLink style={navBarStyle} to="/">
                Home
            </NavLink>

            <NavLink style={navBarStyle} to="/about">
                About
            </NavLink>

            <NavLink style={navBarStyle} to="/products">
                Products
            </NavLink>

            <NavLink style={navBarStyle} to="/profile">
                Profile
            </NavLink>

            {!auth.user && (
                <NavLink style={navBarStyle} to="/login">
                    Login
                </NavLink>
            )}
        </nav>
    )
}

export default Navbar;