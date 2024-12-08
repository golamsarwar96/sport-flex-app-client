import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button className="p-3 rounded-full bg-white " onClick={handleTheme}>
        {theme === "light" ? (
          <IoMoon></IoMoon>
        ) : (
          <MdSunny className="text-black"></MdSunny>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
