const MiniProjects = () => {
  return (
    <section id="mini" className="section-wrap">
      <div className="container">
        <div className="sec-header reveal">
          <div>
            <p className="sec-label">05 — Archive</p>
            <h2 className="sec-title">계속 만들고<br /><em>배웁니다</em></h2>
          </div>
        </div>

        <div className="mini-grid">
          <a href="https://github.com/MJB9595/timer-app" target="_blank" rel="noreferrer" className="mini-card reveal">
            <div className="mini-icon">⏱️</div>
            <p className="mini-title">타이머 앱</p>
            <p className="mini-stack">React · useState</p>
          </a>
          
          <a href="https://github.com/MJB9595/react-openwetherAPI" target="_blank" rel="noreferrer" className="mini-card reveal reveal-delay-1">
            <div className="mini-icon">⛅</div>
            <p className="mini-title">날씨 알림</p>
            <p className="mini-stack">React · OpenWeather API</p>
          </a>
          
          <a href="https://github.com/MJB9595/React-Todo-List" target="_blank" rel="noreferrer" className="mini-card reveal reveal-delay-2">
            <div className="mini-icon">✅</div>
            <p className="mini-title">TodoList</p>
            <p className="mini-stack">React · Context API</p>
          </a>
          
          <a href="https://github.com/MJB9595/end-word-game" target="_blank" rel="noreferrer" className="mini-card reveal reveal-delay-3">
            <div className="mini-icon">💬</div>
            <p className="mini-title">끝말잇기 게임</p>
            <p className="mini-stack">JavaScript · DOM</p>
          </a>
          
          <a href="https://github.com/MJB9595/JSP_BookTrade" target="_blank" rel="noreferrer" className="mini-card reveal reveal-delay-2">
            <div className="mini-icon">📚</div>
            <p className="mini-title">UniTrade</p>
            <p className="mini-stack">JSP · MariaDB</p>
          </a>
          
          <a href="https://github.com/MJB9595/LocaPick" target="_blank" rel="noreferrer" className="mini-card reveal reveal-delay-4">
            <div className="mini-icon">🗺️</div>
            <p className="mini-title">LocaPick</p>
            <p className="mini-stack">MultiPle API · Spring Backend</p>
          </a>
          
          <a href="https://www.figma.com/file/XwotLsaw8riNRvAUXjxIdw?node-id=569-5&p=f&t=FCOeaGM6INU8ndZZ-0&type=design&mode=design&fuid=1564202928376138181" target="_blank" rel="noreferrer" className="mini-card reveal">
            <div className="mini-icon">🎨</div>
            <p className="mini-title">Figma UI 작업</p>
            <p className="mini-stack">Figma · UI/UX</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;