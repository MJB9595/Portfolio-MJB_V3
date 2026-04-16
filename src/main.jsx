import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';

// 전역 스타일 및 폰트 아이콘 임포트
import './styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 터미널에서 npm i @fortawesome/fontawesome-free 설치 권장

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)