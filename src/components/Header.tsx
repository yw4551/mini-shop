import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { useContext, useEffect } from "react";
import { useFavoritesStore } from "../store/favoritesStore";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

function Header() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Header must be used within a ThemeContextProvider");
    }

    const { theme } = context;

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const favorites = useFavoritesStore((state) => state.favorites);

    return (
        <>
            <header>
                <div className="header-container">
                    <p className="logo">Mini Shop</p>
                    <nav>
                        <div className="nav-links">
                            <NavLink to="/" end>
                                Products
                            </NavLink>
                            <NavLink to="/favorites">
                                Favorites ({favorites.length})
                            </NavLink>
                        </div>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
