const ProjectsPage = () => {
  return (
    <section id="projects" className="section-wrap">
      <div className="container">
        <div className="sec-header reveal">
          <div>
            <p className="sec-label">03 — Featured Projects</p>
            <h2 className="sec-title">만든 것들로<br /><em>말합니다</em></h2>
          </div>
          <p className="sec-note">문제 정의 → 기술적 해결 →<br />실제 결과로 정리한 프로젝트들입니다.</p>
        </div>

        <div className="project-grid">

          {/* PROJECT 01: 경기도 지역화폐 */}
          <div className="project-card featured reveal">
            <div className="project-visual">
              <div className="visual-badge">★ Featured</div>
              <div className="project-visual-inner">
                <div className="code-line-img">
                  <img src="/simplemap.png" alt="배경 이미지" className="banner" />
                </div>
                <div className="code-line"><span className="code-num">01</span><span className="code-comment"># data_splitter.py</span></div>
                <div className="code-line"><span className="code-num">02</span><span className="code-kw">import</span> <span className="code-fn">json</span>, <span className="code-fn">os</span></div>
                <div className="code-line"><span className="code-num">03</span></div>
                <div className="code-line"><span className="code-num">04</span><span className="code-kw">def</span> <span className="code-fn">split_json</span>(src, chunk=500):</div>
                <div className="code-line"><span className="code-num">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-kw">with</span> <span className="code-fn">open</span>(src) <span className="code-kw">as</span> f:</div>
                <div className="code-line"><span className="code-num">06</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = <span className="code-fn">json.load</span>(f)</div>
                <div className="code-line"><span className="code-num">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-kw">for</span> i, batch <span className="code-kw">in</span> <span className="code-fn">enumerate</span>(</div>
                <div className="code-line"><span className="code-num">08</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chunks(data, chunk)):</div>
                <div className="code-line"><span className="code-num">09</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-fn">save_chunk</span>(i, batch)</div>
                <div className="code-line"><span className="code-num">10</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment"># → 브라우저 로딩 최적화 ✓</span></div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Python</span>
                <span className="project-tag">Kakao Maps API</span>
                <span className="project-tag">Vite</span>
                <span className="project-tag">LocalStorage</span>
              </div>
              <p className="project-num">Project 01</p>
              <h3 className="project-title">경기도 지역화폐<br />가맹점 안내 서비스</h3>
              <p className="project-desc">공공 API의 대용량 JSON 데이터를 React로 렌더링할 때 발생하는 브라우저 성능 저하 문제를 직접 해결한 프로젝트.</p>
              <div className="psr-grid">
                <div className="psr-card">
                  <p className="psr-label">🔴 Problem</p>
                  <p className="psr-text">공공기관 JSON 파일이 너무 커서 브라우저가 멈추는 UX 이슈 발생</p>
                </div>
                <div className="psr-card">
                  <p className="psr-label">🔵 Solution</p>
                  <p className="psr-text">Python 스크립트로 데이터를 청크 분할, 프론트에서 비동기 병합 로드 구현</p>
                </div>
                <div className="psr-card">
                  <p className="psr-label">🟢 Result</p>
                  <p className="psr-text">초기 로딩 속도 개선 + 즐겨찾기(LocalStorage) 기능까지 포함한 완성도</p>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/MJB9595/react-tailwind-mab_web" className="project-link" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
                <a href="http://react-tailwind-mab-web.vercel.app/" className="project-link" target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
              </div>
            </div>
          </div>

          {/* PROJECT 02: 백세주 반응형 웹사이트 */}
          <div className="project-card featured featured-flip reveal">
            <div className="project-body">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Vite</span>
                <span className="project-tag">SCSS</span>
                <span className="project-tag">반응형 디자인</span>
                <span className="project-tag">Figma</span>
              </div>
              <p className="project-num">Project 02</p>
              <h3 className="project-title">백세주 브랜드<br />반응형 웹사이트</h3>
              <p className="project-desc">Figma로 직접 설계하고 코드로 구현한 브랜드 반응형 웹사이트. 전체 코드의 66%가 SCSS인 만큼 픽셀 단위 레이아웃 정밀도와 모든 뷰포트 대응에 집중했습니다.</p>
              <div className="psr-grid">
                <div className="psr-card">
                  <p className="psr-label">🎨 Design</p>
                  <p className="psr-text">Figma로 UI/UX 직접 설계 후 React + SCSS로 1:1 구현</p>
                </div>
                <div className="psr-card">
                  <p className="psr-label">📐 Responsive</p>
                  <p className="psr-text">모바일·태블릿·데스크탑 전 구간 완벽 반응형 처리</p>
                </div>
                <div className="psr-card">
                  <p className="psr-label">🚀 Deploy</p>
                  <p className="psr-text">Vercel 배포 · 실서비스 수준의 완성도 확보</p>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/MJB9595/mjb-tocobo-figma" className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://mjb-tocobo-figma-second.vercel.app/" className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
            <div className="project-visual tocobo-visual">
              <div className="visual-badge">Figma → Code</div>
              <div className="tocobo-mockup">
                <div className="mock-desktop">
                    <div className="mock-bar"></div>
                    <div className="mock-screen screen-desktop"></div>
                  </div>
                  <div className="mock-devices">
                    <div className="mock-tablet">
                      <div className="mock-bar"></div>
                      <div className="mock-screen screen-tablet" style={{height: '72px'}}></div>
                    </div>
                    <div className="mock-mobile">
                      <div className="mock-notch"></div>
                      <div className="mock-screen screen-mobile" style={{height: '82px'}}></div>
                    </div>
                  </div>
                <p className="mock-label">Desktop · Tablet · Mobile</p>
              </div>
            </div>
          </div>

          {/* PROJECT 03 & 04: Row */}
          <div className="project-row">
            {/* PROJECT 03 */}
            <div className="project-card reveal reveal-delay-1">
              <div className="project-visual">
                <div className="project-visual-inner">
                  <div className="arch-diagram" style={{fontSize: '0.64rem', padding: '1rem'}}>
                    <div className="arch-row">
                      <span className="arch-box gold">Client (Browser)</span>
                      <span className="arch-arrow">────▶</span>
                      <span className="arch-box">Tomcat (JSP)</span>
                    </div>
                    <div className="arch-row" style={{paddingLeft: '2rem'}}>
                      <span className="arch-arrow">│</span>
                    </div>
                    <div className="arch-row">
                      <span className="arch-box blue">Docker Network</span>
                      <span className="arch-arrow">──▶</span>
                      <span className="arch-box">MariaDB</span>
                      <span style={{fontSize: '0.6rem', color: 'var(--text-faint)'}}>+ Volume</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  <span className="project-tag">JSP</span>
                  <span className="project-tag">Docker</span>
                  <span className="project-tag">MariaDB</span>
                </div>
                <p className="project-num">Project 03</p>
                <h3 className="project-title">Docker 기반<br />중고 도서 거래 플랫폼</h3>
                <p className="project-desc">단순 CRUD를 넘어 Docker 볼륨 설정으로 데이터 무결성을 확보하고, 1:1 채팅·사진 편집 기능까지 구현한 풀스택 프로젝트.</p>
                <div className="project-links">
                  <a href="https://book.mjb.diskstation.me" className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                </div>
              </div>
            </div>

            {/* PROJECT 04 */}
            <div className="project-card reveal reveal-delay-2">
              <div className="project-visual">
                <div className="project-visual-inner">
                  <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', padding: '1.2rem'}}>
                    <div className="arch-box gold" style={{fontSize: '0.65rem'}}>React</div>
                    <span className="arch-arrow">⇌</span>
                    <div className="arch-box blue" style={{fontSize: '0.65rem'}}>Spring Boot</div>
                    <br/>
                    <div style={{width: '100%', marginTop: '0.5rem', fontSize: '0.64rem', color: 'var(--text-faint)'}}>RESTful API · MySQL · Context API</div>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  <span className="project-tag">Spring Boot</span>
                  <span className="project-tag">React</span>
                  <span className="project-tag">MySQL</span>
                </div>
                <p className="project-num">Project 04</p>
                <h3 className="project-title">Spring & React<br />VAIONITY</h3>
                <p className="project-desc">프론트/백엔드 완전 분리 아키텍처로 설계한 RESTful 관리 시스템. Context API를 활용한 전역 상태 관리.</p>
                <div className="project-links">
                  <a href="https://github.com/MJB9595/Fullstack-project" className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                  <a href="https://vaionity.mjb.diskstation.me/" className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                </div>
              </div>
            </div>
          </div>{/* /project-row */}

          {/* PROJECT 05: 위치기반 장소 추천 사이트 */}
          <div className="project-card featured reveal">
            <div className="project-visual">
              <div className="visual-badge">★ Featured</div>
              <div className="project-visual-inner">
                <div className="code-line-img">
                  <img src="/locapickimg.png" alt="배경 이미지" className="banner" />
                </div>
                <div className="code-line"><span className="code-num">01</span><span className="code-kw">public List</span>&lt;LocapickResponseDto&gt; <span className="code-fn">getRecommendations</span></div>
                <div className="code-line"><span className="code-num">02</span>(<span className="code-kw">double</span> lat, <span className="code-kw">double</span> lng, <span className="code-kw">int</span> time, <span className="code-kw">int</span> count, <span className="code-kw">String</span> category) {'{'}</div>
                <div className="code-line"><span className="code-num">03</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-kw">int</span> radius = (<span className="code-kw">int</span>) Math.<span className="code-fn">round</span>((time * 80) / 1.3);</div>
                <div className="code-line"><span className="code-num">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-kw">String</span> url = <span className="code-kw">String</span>.<span className="code-fn">format</span>("https://dapi.kakao.com/...", lng, lat, radius);</div>
                <div className="code-line"><span className="code-num">05</span>&nbsp;&nbsp;&nbsp;&nbsp;HttpHeaders headers = <span className="code-kw">new</span> <span class="code-fn">HttpHeaders</span>();</div>
                <div className="code-line"><span className="code-num">06</span>&nbsp;&nbsp;&nbsp;&nbsp;headers.<span className="code-fn">set</span>("Authorization", "KakaoAK " + kakaoRestKey);</div>
                <div className="code-line"><span className="code-num">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-kw">return</span> restTemplate.<span class="code-fn">exchange</span>(url, HttpMethod.GET, <span className="code-kw">new</span> <span className="code-fn">HttpEntity</span>&lt;&gt;(headers), Map.class)</div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">SCSS</span>
                <span className="project-tag">Spring</span>
                <span className="project-tag">Synology NAS (Self-Hosting)</span>
                <span className="project-tag">Kakao Maps SDK</span>
                <span className="project-tag">ODsay Public Transit</span>
                <span className="project-tag">Tmap Pedestrian</span>
                <span className="project-tag">Vite</span>
                <span className="project-tag">MySQL</span>
              </div>
              <p className="project-num">Project 05</p>
              <h3 className="project-title">LocaPick<br />위치기반 내비게이션 & 장소 추천 알고리즘</h3>
              <p className="project-desc"> 3개의 API(Kakao, Tmap, ODsay)를 하나의 인터페이스에서 통합하고, <br/>
                JWT를 활용한 Stateless 인증 시스템을 구축하여 보안성을 확보하고,<br/>
                다차원 정렬(리뷰 점수, 사용자 평점 등)을 통해 최적의 장소를 추천하는 <br/> 'LocaPick 알고리즘'을 구현 </p>
              <div className="psr-grid">
                <div className="psr-card">
                  <p className="psr-label">🔴 Problem</p>
                  <p className="psr-text">초기에 정적 데이터 (JSON) 방식에서 발생하던 데이터의 한계와 연산 부하 문제를 인식</p>
                </div>
                <div className="psr-card">
                  <p className="psr-label">🔵 Solution</p>
                  <p className="psr-text">카카오 API와 백엔드 연산 로직을 결합한 하이브리드 아키텍처로 고도화</p>
                </div>
                <div className="psr-card">
                  <p className="psr-label">🟢 Result</p>
                  <p className="psr-text">빠른 로딩시간과 가볍고 성능좋은 웹사이트면서 동시에 장소 추천 알고리즘 구현에 성공</p>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/MJB9595/LocaPick.git" className="project-link" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
                <a href="https://locapick.mjb.diskstation.me" className="project-link" target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
              </div>
            </div>
          </div>
        </div>{/* /project-grid */}
      </div>
    </section>
  );
};

export default ProjectsPage;