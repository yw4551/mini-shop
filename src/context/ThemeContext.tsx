import { createContext, useState, type ReactNode } from "react";

interface ThemeContextType {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

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
