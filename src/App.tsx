import { useState, createContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import "./App.css";

type ThemeContextType = "light" | "dark";
export const ThemeContext = createContext<ThemeContextType>('light');

function App() {
  const [theme, setTheme] = useState<ThemeContextType>('light');
  const className=theme;
  return (
    <ThemeContext.Provider value={theme}>
      <div className={className}>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/price/:symbol" element={<Price />} />
        </Routes>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
