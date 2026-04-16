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
          <div className="mini-card reveal">
            <div className="mini-icon">⏱️</div>
            <p className="mini-title">타이머 앱</p>
            <p className="mini-stack">React · useState</p>
          </div>
          <div className="mini-card reveal reveal-delay-1">
            <div className="mini-icon">⛅</div>
            <p className="mini-title">날씨 알림</p>
            <p className="mini-stack">React · OpenWeather API</p>
          </div>
          <div className="mini-card reveal reveal-delay-2">
            <div className="mini-icon">✅</div>
            <p className="mini-title">TodoList</p>
            <p className="mini-stack">React · Context API</p>
          </div>
          <div className="mini-card reveal reveal-delay-3">
            <div className="mini-icon">💬</div>
            <p className="mini-title">끝말잇기 게임</p>
            <p className="mini-stack">JavaScript · DOM</p>
          </div>
          <div className="mini-card reveal reveal-delay-2">
            <div className="mini-icon">📚</div>
            <p className="mini-title">UniTrade</p>
            <p className="mini-stack">JSP · MariaDB</p>
          </div>
          <div className="mini-card reveal reveal-delay-4">
            <div className="mini-icon">🗺️</div>
            <p className="mini-title">LocaPick</p>
            <p className="mini-stack">MultiPle API · Spring Backend</p>
          </div>
          <div className="mini-card reveal">
            <div className="mini-icon">🎨</div>
            <p className="mini-title">Figma UI 작업</p>
            <p className="mini-stack">Figma · UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;