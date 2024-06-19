import React, { createContext, useContext, useEffect } from 'react';
import { usePersistedState } from '../helpers/persistedState';

const ThemeContext = createContext({
  theme: 'light', // This can be 'light', 'dark', or 'system'
  toggleTheme: () => { return },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = usePersistedState('theme', 'light');

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
