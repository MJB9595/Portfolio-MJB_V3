import HeroScene from './HeroScene';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-glow"></div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-tag">Full-Stack Developer</p>
          <h1 className="hero-name">
            <span className="hero-name-kr">김재아</span><br />
            <em>builds things</em><br />
            that last.
          </h1>
          <p className="hero-desc">
            인프라부터 프론트엔드까지 —<br />
            데이터 파이프라인을 직접 설계하고, Docker로 서버를 구축하며,<br />
            React로 사용자 경험을 완성하는 개발자입니다.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-arrow-down"></i> 프로젝트 보기
            </a>
            <a href="https://github.com/MJB9595" className="btn btn-outline" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>

      <HeroScene />

      <div className="hero-float">
        <div className="float-card">
          <div className="float-card-label">NAS 운영</div>
          Synology + UGREEN<br/>2대 동시 운영 중
        </div>
        <div className="float-card">
          <div className="float-card-label">Data Handling</div>
          JSON 대용량 분할<br/>Python 최적화 처리
        </div>
        <div className="float-card">
          <div className="float-card-label">Containerized</div>
          Docker 기반<br/>서비스 환경 구축
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        scroll
      </div>
    </section>
  );
};

export default Hero;