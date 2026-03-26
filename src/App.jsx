import { useState, useEffect } from 'react'
import './App.css'
import './animations.css'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/NavbarNew'
import HeroSection from './components/Hero'
import WhyChooseUs from './components/Why'
import CoursesSection from './components/Courses'
import TestSeries from './components/TestSeries'
import Resources from './components/Resources'
import YouTube from './components/YouTube'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem("fto-theme") === "dark"; } catch { return false; }
  });

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      try { localStorage.setItem("fto-theme", next ? "dark" : "light"); } catch { }
      return next;
    });
  };

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <>
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <HeroSection darkMode={darkMode} />
      <WhyChooseUs darkMode={darkMode} />
      <CoursesSection darkMode={darkMode} />
      <TestSeries darkMode={darkMode} />
      <Resources darkMode={darkMode} />
      <YouTube darkMode={darkMode} />
      <DownloadApp darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  )
}

export default App
