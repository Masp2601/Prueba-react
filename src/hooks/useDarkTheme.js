import { useState, useEffect } from 'react';

const useDarkTheme = () => {

  const [theme, setTheme] = useState('light');

  const toggleDarkTheme = (storagedTheme = null) => {

    const newTheme = storagedTheme
      ? storagedTheme
      : theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);
    document.body.dataset.theme = newTheme;
    setTheme(newTheme);

  };

  useEffect(() => {

    const themeStoraged = localStorage.getItem('theme');

    if (themeStoraged) {
      toggleDarkTheme(themeStoraged);
    }

    // eslint-disable-next-line
  }, []);

  return [theme, toggleDarkTheme];

};

export default useDarkTheme;