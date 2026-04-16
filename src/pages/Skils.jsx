const Skils = () => {
  return (
    <section id="stack" className="section-wrap">
      <div className="container">
        <div className="sec-header reveal">
          <div>
            <p className="sec-label">02 — Tech Stack</p>
            <h2 className="sec-title">사용하는 <em>기술들</em></h2>
          </div>
          <p className="sec-note">코드를 쓰는 것 이상으로,<br />운영하고 배포하는 과정까지 이해합니다.</p>
        </div>

        <div className="tech-groups">
          <div className="tech-group reveal reveal-delay-1">
            <div className="tech-group-title"><i className="fa-solid fa-layer-group"></i> Frontend</div>
            <div className="tech-list">
              <span className="tech-pill hot">React</span>
              <span className="tech-pill hot">Tailwind CSS</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Vite</span>
              <span className="tech-pill">HTML/SCSS</span>
              <span className="tech-pill">Figma</span>
            </div>
          </div>
          <div className="tech-group reveal reveal-delay-2">
            <div className="tech-group-title"><i className="fa-solid fa-server"></i> Backend</div>
            <div className="tech-list">
              <span className="tech-pill hot">Spring Boot</span>
              <span className="tech-pill hot">Java</span>
              <span className="tech-pill">JSP / Tomcat</span>
              <span className="tech-pill">RESTful API</span>
            </div>
          </div>
          <div className="tech-group reveal reveal-delay-3">
            <div className="tech-group-title"><i className="fa-solid fa-database"></i> Database</div>
            <div className="tech-list">
              <span className="tech-pill hot">MySQL</span>
              <span className="tech-pill hot">MariaDB</span>
              <span className="tech-pill">PhpMyAdmin</span>
            </div>
          </div>
          <div className="tech-group reveal reveal-delay-4">
            <div className="tech-group-title"><i className="fa-solid fa-gear"></i> Infra & Tools</div>
            <div className="tech-list">
              <span className="tech-pill hot">Docker</span>
              <span className="tech-pill hot">Python</span>
              <span className="tech-pill">Linux (Ubuntu)</span>
              <span className="tech-pill">Git / GitHub</span>
              <span className="tech-pill">NAS (Synology)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;