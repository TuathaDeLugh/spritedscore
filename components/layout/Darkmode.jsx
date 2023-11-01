"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FiSun,FiMoon } from "react-icons/fi";
export default function Darkmode ({ children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkModeStatus = !isDarkMode;
    setIsDarkMode(newDarkModeStatus);
    Cookies.set('dark-mode', newDarkModeStatus, { expires: 365 }); // Save to cookie for 1 year
  };

  useEffect(() => {
    // Check if dark mode preference is set in the cookie
    const cookieDarkMode = Cookies.get('dark-mode');
    
    // If cookieDarkMode is not set, check user's system preference
    if (cookieDarkMode === undefined) {
      const systemDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemDarkMode);
    } else {
      setIsDarkMode(cookieDarkMode === 'true');
    }
  }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Your components */}
      {children}
        <div className='z-50 text-white fixed bottom-10 right-0 px-1 border border-slate-300 dark:border-slate-700 shadow-sm shadow-slate-600 backdrop-blur p-1 rounded-l-full'>
      <button onClick={toggleDarkMode} className=' rounded-full p-2 bg-purple-600'>
          {isDarkMode ? <FiSun size={25}/> : <FiMoon size={25}/>}
          </button>
          </div>
    </div>
  );
};