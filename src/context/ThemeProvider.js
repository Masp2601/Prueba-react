import { createContext } from 'react';
import useDarkTheme from '../hooks/useDarkTheme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, toggleDarkTheme] = useDarkTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );

};