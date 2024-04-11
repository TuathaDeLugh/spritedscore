"use client";
import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { MdComputer } from 'react-icons/md';

const DarkmodeToggle = ({ mode, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(mode)}
      className={`rounded-full p-2 bg-purple-500/70`}
    >
      {mode === 'dark'? <FiSun size={20} /> : mode === 'system'? <MdComputer size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window!== 'undefined') {
      const storedMode = localStorage.getItem('dark-mode');
      if (storedMode === 'light' || storedMode === 'dark') {
        return storedMode;
      } else {
        localStorage.setItem('dark-mode', 'system');
        const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemDarkMode? 'dark' : 'light';
      }
    } else {
      return 'system'; // Fallback for non-browser environments
    }
  });

  const toggleDarkMode = (mode) => {
    if (typeof window!== 'undefined') {
      if (mode === 'system') {
        localStorage.setItem('dark-mode', 'system');
        const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(systemDarkMode? 'dark' : 'light');
      } else {
        setIsDarkMode(mode);
        localStorage.setItem('dark-mode', mode);
      }
    }
  };

  useEffect(() => {
    const updateDarkMode = (e) => {
      setIsDarkMode(e.matches? 'dark' : 'light');
    };

    if (typeof window!== 'undefined') {
      const systemDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      systemDarkModeQuery.addEventListener('change', updateDarkMode);

      return () => {
        systemDarkModeQuery.removeEventListener('change', updateDarkMode);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window!== 'undefined') {
      if (isDarkMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  return (
    <>
      <div className='flex items-center text-white right-0 px-1 gap-2'>
        <p className='text-black font-semibold dark:text-white'>Mode</p>
        {
          isDarkMode === 'light' ?
          <DarkmodeToggle mode='dark' onToggle={toggleDarkMode} /> :
        <DarkmodeToggle mode='light' onToggle={toggleDarkMode} />
        }
        <DarkmodeToggle mode='system' onToggle={toggleDarkMode} />
      </div>
    </>
  );
};

export default Darkmode;