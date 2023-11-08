"use client"
import { useState, useEffect } from 'react';
import { FiSun,FiMoon } from "react-icons/fi";
export default function Darkmode ({ children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

const toggleDarkMode = () => {
  const newDarkModeStatus = !isDarkMode;
  setIsDarkMode(newDarkModeStatus);
  localStorage.setItem('dark-mode', JSON.stringify(newDarkModeStatus)); // Save to localStorage
};

useEffect(() => {
  const localStorageDarkMode = localStorage.getItem('dark-mode');

  if (localStorageDarkMode === null) {
    const systemDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemDarkMode);
  } else {
    setIsDarkMode(JSON.parse(localStorageDarkMode));
  }
}, []);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);

return (
  
  <div className={isDarkMode ? 'dark' : ''}>
    {children}
    <div className='z-50 text-white fixed bottom-10 right-0 px-1 border border-slate-300 dark:border-slate-700 shadow-sm shadow-slate-600 backdrop-blur p-1 rounded-l-full'>
      <button onClick={toggleDarkMode} className='rounded-full p-2 bg-purple-600'>
        {isDarkMode ? <FiSun size={25} /> : <FiMoon size={25} />}
      </button>
    </div>
  </div>
);
}