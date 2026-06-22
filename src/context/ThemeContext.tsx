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
    const [isDark, setIsDark] = useState(()=>{
        const saved = localStorage.getItem("theme")
        return saved ? saved === 'dark' : true
    });

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : "light")
        document.documentElement.classList.toggle("dark");
    };

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if(saved === 'dark'){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
