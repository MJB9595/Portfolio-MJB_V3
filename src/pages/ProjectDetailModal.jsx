import { useEffect, useState } from "react";
import "./ProjectDetailModal.scss";

// ── 간단한 신택스 하이라이터 (키워드 기반) ──
function syntaxHighlight(line, lang) {
  const escHtml = (s) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  let escaped = escHtml(line);

  if (lang === "java" || lang === "javascript" || lang === "jsx") {
    const keywords =
      /\b(public|private|protected|class|interface|new|return|void|if|else|for|while|import|export|const|let|var|async|await|function|extends|implements|static|final|try|catch|throws|null|true|false|this|super|from|of|in|default)\b/g;
    const types =
      /\b(String|List|Map|int|double|boolean|HttpHeaders|ResponseEntity|UserDetails|void|Promise|Array)\b/g;
    const fns = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g;
    const strings = /(".*?"|'.*?'|`.*?`)/g;
    const comments = /(\/\/.*$|#.*$)/;

    // 주석 우선 처리
    if (comments.test(escaped)) {
      return escaped.replace(comments, '<span class="sh-comment">$1</span>');
    }

    escaped = escaped
      .replace(strings, '<span class="sh-string">$1</span>')
      .replace(types, '<span class="sh-type">$1</span>')
      .replace(fns, '<span class="sh-fn">$1</span>')
      .replace(keywords, '<span class="sh-kw">$1</span>');
  } else if (lang === "scss" || lang === "css") {
    const props = /([a-z-]+)\s*(?=:)/g;
    const values = /:\s*(.+)/g;
    const selectors = /^([.#&][\w-]+)/g;
    const comments = /(\/\/.*$)/;

    if (comments.test(escaped)) {
      return escaped.replace(comments, '<span class="sh-comment">$1</span>');
    }
    escaped = escaped
      .replace(selectors, '<span class="sh-fn">$1</span>')
      .replace(props, '<span class="sh-type">$1</span>');
  }

  return escaped;
}

const ProjectDetailModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeCode, setActiveCode] = useState(0);

  // ESC 키로 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // 탭 변경 시 코드 선택 초기화
  useEffect(() => {
    setActiveCode(0);
  }, [activeTab]);

  const tabs = [
    { id: "overview", label: "개요", icon: "fa-solid fa-layer-group" },
    { id: "code", label: "코드 리뷰", icon: "fa-solid fa-code" },
    { id: "review", label: "분석", icon: "fa-solid fa-chart-bar" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* ── 모달 헤더 ── */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-type-badge">{project.type}</span>
            <div>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{project.subtitle}</p>
            </div>
          </div>
          <div className="modal-header-right">
            <div className="modal-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn"
                  title="Live Demo"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
            <button className="modal-close" onClick={onClose} title="닫기">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* ── 기술 스택 태그 ── */}
        <div className="modal-stack-row">
          {project.stack.map((s) => (
            <span key={s} className="modal-stack-tag">
              {s}
            </span>
          ))}
        </div>

        {/* ── 탭 네비게이션 ── */}
        <div className="modal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`modal-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── 탭 콘텐츠 ── */}
        <div className="modal-body">

          {/* ── 개요 탭 ── */}
          {activeTab === "overview" && (
            <div className="tab-content" key="overview">
              {/* 프로젝트 개요 */}
              <div className="overview-section">
                <h4 className="overview-label">
                  <i className="fa-solid fa-circle-info"></i> 프로젝트 개요
                </h4>
                <p className="overview-text">{project.overview}</p>
              </div>

              {/* PSR 카드 */}
              <div className="psr-detail-grid">
                <div className="psr-detail-card problem">
                  <div className="psr-detail-header">
                    <span className="psr-dot red"></span>
                    <span className="psr-detail-label">Problem</span>
                  </div>
                  <p className="psr-detail-text">{project.problem}</p>
                </div>
                <div className="psr-detail-card solution">
                  <div className="psr-detail-header">
                    <span className="psr-dot blue"></span>
                    <span className="psr-detail-label">Solution</span>
                  </div>
                  <p className="psr-detail-text">{project.solution}</p>
                </div>
                <div className="psr-detail-card result">
                  <div className="psr-detail-header">
                    <span className="psr-dot green"></span>
                    <span className="psr-detail-label">Result</span>
                  </div>
                  <p className="psr-detail-text">{project.result}</p>
                </div>
              </div>

              {/* 아키텍처 다이어그램 */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="arch-section">
                  <h4 className="overview-label">
                    <i className="fa-solid fa-diagram-project"></i> 아키텍처
                  </h4>
                  <div className="modal-arch-diagram">
                    {project.architecture.map((node, i) => (
                      <span
                        key={i}
                        className={`modal-arch-node ${node.type}`}
                      >
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── 코드 리뷰 탭 ── */}
          {activeTab === "code" && (
            <div className="tab-content" key="code">
              {project.codeHighlights && project.codeHighlights.length > 0 ? (
                <>
                  {/* 파일 탭 선택 */}
                  <div className="code-selector">
                    {project.codeHighlights.map((c, i) => (
                      <button
                        key={i}
                        className={`code-sel-btn ${activeCode === i ? "active" : ""}`}
                        onClick={() => setActiveCode(i)}
                      >
                        <i className="fa-solid fa-file-code"></i>
                        {c.label}
                      </button>
                    ))}
                  </div>

                  {/* 코드 블록 */}
                  {project.codeHighlights[activeCode] && (
                    <div className="code-block-wrap">
                      <div className="code-block-header">
                        <div className="code-dots">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                        </div>
                        <span className="code-block-filename">
                          <i className="fa-solid fa-file-code"></i>
                          {project.codeHighlights[activeCode].label}
                        </span>
                        <span className="code-block-lang">
                          {project.codeHighlights[activeCode].lang}
                        </span>
                      </div>
                      <pre className="code-block">
                        <code>
                          {project.codeHighlights[activeCode].code
                            .split("\n")
                            .map((line, i) => (
                              <div key={i} className="code-row">
                                <span className="line-num">{i + 1}</span>
                                <span
                                  className="line-text"
                                  dangerouslySetInnerHTML={{
                                    __html: syntaxHighlight(
                                      line,
                                      project.codeHighlights[activeCode].lang
                                    ),
                                  }}
                                />
                              </div>
                            ))}
                        </code>
                      </pre>
                    </div>
                  )}
                </>
              ) : (
                <div className="empty-state">
                  <i className="fa-solid fa-code"></i>
                  <p>코드 하이라이트가 준비 중입니다.</p>
                </div>
              )}
            </div>
          )}

          {/* ── 분석 탭 ── */}
          {activeTab === "review" && (
            <div className="tab-content" key="review">
              {/* 잘한 점 / 개선 포인트 */}
              <div className="review-grid">
                <div className="review-card strengths">
                  <h4 className="review-title">
                    <i className="fa-solid fa-circle-check"></i> 잘한 점
                  </h4>
                  <ul className="review-list">
                    {project.review.strengths.map((s, i) => (
                      <li key={i} className="review-item">
                        <span className="review-bullet good">✦</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="review-card improvements">
                  <h4 className="review-title">
                    <i className="fa-solid fa-arrow-trend-up"></i> 개선 포인트
                  </h4>
                  <ul className="review-list">
                    {project.review.improvements.map((s, i) => (
                      <li key={i} className="review-item">
                        <span className="review-bullet improve">▶</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 기술 스택 상세 */}
              <div className="stack-detail-section">
                <h4 className="overview-label">
                  <i className="fa-solid fa-layer-group"></i> 사용 기술 상세
                </h4>
                <div className="stack-detail-grid">
                  {project.stack.map((s) => (
                    <div key={s} className="stack-detail-item">
                      <i className="fa-solid fa-check-circle"></i>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;