import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cursor from './Cursor';
import styles from './Layout.module.scss';

const Layout = () => {
  useEffect(() => {
    // IntersectionObserver를 이용한 스크롤 애니메이션 구현
    const revealEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => obs.observe(el));
    
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Cursor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;