"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Rubik } from 'next/font/google';
import { MdComputer } from "react-icons/md";
import Footer from './Footer';

const font = Rubik({
  subsets:['latin'],
  weight:['400','300','500','700','900','600'],
})

const DarkModeFooter = ({ currentMode, onChangeMode }) => {
  return (
    <div className='flex items-center text-white right-0 px-1 gap-2'>
      <p className='text-black font-semibold dark:text-white'>Mode</p>
      {
        currentMode == 'dark'?(
          <button
        onClick={() => onChangeMode('light')}
        className={`rounded-full p-2 bg-purple-500/70`}
      > 
        <FiSun size={20}/>
      </button>
        ) :
        (
          <button
        onClick={() => onChangeMode('dark')}
        className={`rounded-full p-2 bg-purple-500/70`}
      > <FiMoon size={20}/>
        
      </button>
        )
      }
      
      
      
      
      <button
        onClick={() => onChangeMode('system')}
        className={`rounded-full p-2 bg-purple-500/70 `}
      >
        <MdComputer size={20}/>
      </button>
    </div>
  );
};

const Darkmode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(null);

  const toggleDarkMode = (mode) => {
    if (mode === 'system') {
      Cookies.remove('dark-mode');

      const systemDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemDarkMode ? 'dark' : 'light');
    } else {
      setIsDarkMode(mode);
      Cookies.set('dark-mode', mode, { expires: 365 });
    }
  };

  useEffect(() => {
  
    const cookieDarkMode = Cookies.get('dark-mode');

    if (cookieDarkMode === undefined) {
      setIsDarkMode('system');

      const systemDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemDarkMode) {
        toggleDarkMode('dark');
      } else {
        toggleDarkMode('light');
      }
    } else {
      setIsDarkMode(cookieDarkMode);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      if (isDarkMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    const updateDarkMode = (e) => {
      setIsDarkMode(e.matches ? 'dark' : 'light');
    };

    const systemDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    systemDarkModeQuery.addEventListener('change', updateDarkMode);

    return () => {
      systemDarkModeQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className={`${font.className} bg-white dark:bg-gray-800 text-black dark:text-white`}>
        {children}
        <Footer>
        <DarkModeFooter currentMode={isDarkMode} onChangeMode={toggleDarkMode} />
        </Footer>
      </body>
    </html>
  );
};

export default Darkmode;