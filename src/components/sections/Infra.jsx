const Infra = () => {
  return (
    <section id="infra" className="section-wrap">
      <div className="container">
        <div className="sec-header reveal">
          <div>
            <p className="sec-label">04 — Infrastructure</p>
            <h2 className="sec-title">코드 너머의<br /><em>운영 경험</em></h2>
          </div>
          <p className="sec-note">서비스를 배포하고 유지하는<br />인프라 레이어까지 직접 다룹니다.</p>
        </div>

        <div className="infra-grid">
          <div className="infra-card reveal reveal-delay-1">
            <div className="infra-icon"><i className="fa-solid fa-hard-drive"></i></div>
            <h3 className="infra-title">NAS 홈 서버 운영</h3>
            <p className="infra-desc">Synology와 UGREEN NAS 2대를 동시 운영. SMB 멀티채널 설정과 포트 포워딩으로 안정적인 외부 접속 환경을 직접 구축했습니다.</p>
            <div className="infra-badges">
              <span className="infra-badge">Synology</span>
              <span className="infra-badge">UGREEN</span>
              <span className="infra-badge">SMB 멀티채널</span>
              <span className="infra-badge">포트 포워딩</span>
              <span className="infra-badge">보안 관리</span>
            </div>
          </div>
          <div className="infra-card reveal reveal-delay-2">
            <div className="infra-icon"><i className="fa-brands fa-docker"></i></div>
            <h3 className="infra-title">Docker Self-Hosting</h3>
            <p className="infra-desc">Immich(개인 사진 클라우드)를 Docker로 직접 구축해 운영 중. 24시간 게임 서버(Minecraft, SCP)도 컨테이너로 관리합니다.</p>
            <div className="infra-badges">
              <span className="infra-badge">Immich</span>
              <span className="infra-badge">Minecraft</span>
              <span className="infra-badge">SCP Server</span>
              <span className="infra-badge">24h 운영</span>
            </div>
          </div>
          <div className="infra-card wide reveal">
            <div className="infra-icon"><i className="fa-solid fa-diagram-project"></i></div>
            <h3 className="infra-title" style={{marginBottom: '1.2rem'}}>홈 서버 아키텍처</h3>
            <div className="arch-diagram">
              <div className="arch-row">
                <span className="arch-box gold">외부 클라이언트</span>
                <span className="arch-arrow">──▶ Port Forwarding ──▶</span>
                <span className="arch-box">Router / Firewall</span>
              </div>
              <div className="arch-row" style={{paddingLeft: '3rem'}}>
                <span className="arch-arrow">│</span>
              </div>
              <div className="arch-row">
                <span className="arch-box">NAS (Synology)</span>
                <span className="arch-arrow"> ←→ </span>
                <span className="arch-box">NAS (UGREEN)</span>
                <span className="arch-arrow">&nbsp;&nbsp;SMB Multi-Channel</span>
              </div>
              <div className="arch-row" style={{paddingLeft: '1rem'}}>
                <span className="arch-arrow">├──▶ </span>
                <span className="arch-box blue">Docker: Immich</span>
                <span className="arch-arrow"> ├──▶ </span>
                <span className="arch-box blue">Docker: Minecraft</span>
                <span className="arch-arrow"> └──▶ </span>
                <span className="arch-box blue">Docker: SCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infra;