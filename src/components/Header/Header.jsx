import { useState, useEffect } from 'react';
import useTheme from '../../context/useTheme';
import styles from './Header.module.scss';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 스크롤 시 현재 섹션 활성화 표시 (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 200) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileNavOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>JA.<span>DEV</span></div>
        <ul className={styles.navLinks}>
          <li><a href="#stack" className={activeSection === 'stack' ? styles.active : ''}>Stack</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projects</a></li>
          <li><a href="#infra" className={activeSection === 'infra' ? styles.active : ''}>Infra</a></li>
          <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a></li>
        </ul>
        
        <div className={styles.navActions}>
          <button 
            id="theme-toggle" 
            className={styles.themeToggle} 
            onClick={toggleTheme} 
            aria-label="테마 변경"
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
          </button>
          
          <button 
            className={`${styles.hamburger} ${isMobileNavOpen ? styles.open : ''}`}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-expanded={isMobileNavOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* 모바일 네비게이션 드로워 */}
      <div className={`${styles.mobileNav} ${isMobileNavOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><a href="#stack" onClick={handleNavClick}>Stack</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#infra" onClick={handleNavClick}>Infra</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
        </ul>
      </div>
      <div 
        className={`${styles.mobileOverlay} ${isMobileNavOpen ? styles.open : ''}`}
        onClick={() => setIsMobileNavOpen(false)}
      ></div>
    </>
  );
};

export default Header;