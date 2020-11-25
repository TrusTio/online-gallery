import React from "react";
import { func, string } from "prop-types";


export const DarkThemeToggle = ({ theme, toggleTheme }) => {
  return <button onClick={toggleTheme}> Dark mode</button>;
};

DarkThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
