import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    isDark: true,
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }:{children: React.ReactNode}) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
