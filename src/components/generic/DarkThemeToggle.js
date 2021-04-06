import React from "react";
import { func, string } from "prop-types";
import Switch from "react-switch";
import { ReactComponent as MoonIcon } from "assets/images/moon.svg";
import { ReactComponent as SunIcon } from "assets/images/sun.svg";

export const DarkThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === "dark" ? true : false}
      uncheckedIcon={<MoonIcon style={{ fill: "red" }} />}
      checkedIcon={<SunIcon fill="red" />}
    ></Switch>
  );
};

DarkThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
