import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeToggle() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Theme btn must be used within a ThemeContextProvider");
    }

    const { theme, toggleTheme } = context;

    return (
        <>
            <button className="toggle-theme-btn" onClick={toggleTheme}>
                {theme === "dark" && <MdLightMode size={24} />}
                {theme === "light" && <MdDarkMode size={24} />}
            </button>
        </>
    );
}

export default ThemeToggle;
