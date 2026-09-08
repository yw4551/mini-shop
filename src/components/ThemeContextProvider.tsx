import { useState, type ReactNode } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
    );
}

export default ThemeContextProvider;
