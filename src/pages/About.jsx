const About = () => {
  return (
    <section id="about" className="section-wrap">
      <div className="container">
        <div className="sec-header reveal">
          <div>
            <p className="sec-label">06 — About & Contact</p>
            <h2 className="sec-title">저에 대해<br /><em>더 알고 싶다면</em></h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>안녕하세요, <strong>김재아</strong>입니다. 단순히 작동하는 코드를 넘어, <em>왜 그렇게 동작하는가</em>를 끊임없이 물어보는 개발자입니다.</p>
            <p>개발 공부를 하면서 코드만 짜는 것에 그치지 않고, <strong>Docker로 환경을 구축하고, NAS로 서버를 운영하며</strong> 실제 서비스가 어떻게 돌아가는지 직접 경험해왔습니다.</p>
            <p>공공 데이터 API의 성능 문제를 발견했을 때 <em>Python 스크립트를 직접 작성</em>해 해결한 것처럼, 문제 앞에서 도구를 가리지 않습니다.</p>
            <p>디자이너와도 원활하게 소통할 수 있는 <strong>Figma 활용 능력</strong>과 반응형 UI 구현 경험을 갖추고 있으며, 계속해서 만들고 부수며 성장 중입니다.</p>
          </div>
          <div className="reveal reveal-delay-1">
            <ul className="contact-list">
              <li>
                <a href="https://github.com/MJB9595" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> github.com/MJB9595
                </a>
              </li>
              <li>
                <a href="mailto:bjm00572773@gmail.com">
                  <i className="fa-solid fa-envelope"></i> bjm00572773@gmail.com
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-file-lines"></i> 이력서 다운로드 (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;