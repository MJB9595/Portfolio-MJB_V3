import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

// 5개 프로젝트 상세 데이터
const PROJECT_DETAILS = {
  1: {
    id: 1,
    title: "경기도 지역화폐 가맹점 안내 서비스",
    subtitle: "대용량 공공 데이터 최적화 프로젝트",
    period: "2024",
    type: "Frontend",
    github: "https://github.com/MJB9595/react-tailwind-mab_web",
    demo: "http://react-tailwind-mab-web.vercel.app/",
    stack: ["React", "Python", "Kakao Maps SDK", "Vite", "LocalStorage", "Tailwind CSS"],
    overview:
      "경기도 공공 API에서 제공하는 수만 건의 지역화폐 가맹점 JSON 데이터를 React 앱에서 실시간으로 시각화하는 서비스입니다. 공공 데이터 특성상 하나의 거대한 JSON 파일로 제공되어 브라우저가 멈추는 치명적인 UX 이슈를 발견하고, 이를 직접 해결했습니다.",
    problem:
      "수만 건의 가맹점 데이터가 담긴 단일 JSON 파일(~30MB)을 한 번에 파싱하면서 브라우저 메인 스레드가 블로킹되고 초기 렌더링이 8초 이상 지연되는 문제 발생.",
    solution:
      "Python 스크립트(`data_splitter.py`)를 작성해 대용량 JSON을 500개 단위 청크 파일로 분할. React 프론트엔드에서 `useEffect` + `Promise.all`로 청크를 병렬 비동기 로드한 뒤 상태에 병합. 현재 지도 뷰포트 영역의 가맹점만 렌더링하는 Lazy Rendering 패턴도 추가 적용.",
    result:
      "초기 렌더링 시간을 8초 → 1.2초로 단축(약 85% 개선). 즐겨찾기(LocalStorage 기반 영구 저장), 카테고리 필터, 키워드 검색 기능까지 포함한 완성도 높은 서비스 배포.",
    codeHighlights: [
      {
        label: "핵심 코드 — 청크 분할 스크립트 (Python)",
        lang: "python",
        code: `# data_splitter.py
import json, os

def split_json(src_path, chunk_size=500):
    with open(src_path, encoding='utf-8') as f:
        data = json.load(f)
    
    total = len(data)
    os.makedirs('chunks', exist_ok=True)
    
    for i, batch in enumerate(chunks(data, chunk_size)):
        out_path = f'chunks/data_{i:03d}.json'
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(batch, f, ensure_ascii=False)
    
    print(f"✓ {total}건 → {i+1}개 파일로 분할 완료")

def chunks(lst, n):
    for i in range(0, len(lst), n):
        yield lst[i:i + n]`,
      },
      {
        label: "병렬 비동기 청크 로드 (React)",
        lang: "javascript",
        code: `// hooks/useStoreData.js
const useStoreData = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CHUNK_COUNT = 48; // 분할된 파일 수
    
    const fetches = Array.from({ length: CHUNK_COUNT }, (_, i) =>
      fetch(\`/chunks/data_\${String(i).padStart(3,'0')}.json\`)
        .then(r => r.json())
    );
    
    // 모든 청크를 병렬로 로드 후 병합
    Promise.all(fetches)
      .then(chunks => {
        setStores(chunks.flat());
        setLoading(false);
      });
  }, []);

  return { stores, loading };
};`,
      },
    ],
    architecture: [
      { label: "Public Data (JSON)", type: "gold" },
      { label: "→", type: "arrow" },
      { label: "Python Splitter", type: "normal" },
      { label: "→", type: "arrow" },
      { label: "Chunk Files ×48", type: "blue" },
      { label: "→", type: "arrow" },
      { label: "React (Promise.all)", type: "normal" },
      { label: "→", type: "arrow" },
      { label: "Kakao Maps SDK", type: "gold" },
    ],
    review: {
      strengths: [
        "성능 병목을 직접 발견하고 데이터 파이프라인 레벨에서 근본 해결",
        "Python + JS 크로스 스택 문제 해결 능력 입증",
        "LocalStorage 즐겨찾기로 실제 UX까지 완성",
      ],
      improvements: [
        "청크 수를 하드코딩 대신 manifest 파일로 동적 관리 가능",
        "Service Worker 캐싱 추가 시 재방문 로딩 0에 가깝게 개선 여지",
        "지도 뷰포트 기반 virtual scroll 추가로 DOM 부하 추가 감소 가능",
      ],
    },
  },
  2: {
    id: 2,
    title: "백세주 브랜드 반응형 웹사이트",
    subtitle: "Figma → Code 픽셀 퍼펙트 구현",
    period: "2024",
    type: "Frontend · UI/UX",
    github: "https://github.com/MJB9595/mjb-tocobo-figma",
    demo: "https://mjb-tocobo-figma-second.vercel.app/",
    stack: ["React", "Vite", "SCSS (66%)", "Figma", "반응형 디자인", "Vercel"],
    overview:
      "브랜드 아이덴티티를 반영한 백세주 공식 웹사이트를 Figma로 직접 UI/UX를 설계하고 React + SCSS로 1:1 구현한 프로젝트. 전체 코드의 66%가 SCSS로 구성될 만큼 픽셀 단위 레이아웃 정밀도와 완벽한 반응형 처리에 집중했습니다.",
    problem:
      "단순한 HTML 복제가 아닌, Figma 디자인 시스템(컬러 팔레트, 타이포그래피, 컴포넌트 토큰)을 코드로 정확히 재현하면서 Mobile → Desktop 전 구간 뷰포트를 모두 대응해야 하는 도전.",
    solution:
      "Figma의 디자인 토큰을 SCSS 변수(`_variables.scss`)로 1:1 매핑. BEM 방법론으로 컴포넌트 단위 스타일 모듈화. CSS `clamp()`와 `min()/max()`를 활용한 유체 타이포그래피로 중간 breakpoint 없이도 자연스러운 반응형 구현.",
    result:
      "Vercel 배포 완료. 모바일(375px), 태블릿(768px), 데스크탑(1440px) 전 구간 픽셀 퍼펙트 달성. Figma 설계 → 실제 서비스 완성의 전체 사이클 단독 수행.",
    codeHighlights: [
      {
        label: "유체 반응형 타이포그래피 (SCSS)",
        lang: "scss",
        code: `// _variables.scss — Figma 토큰 → SCSS 변수 1:1 매핑
$color-primary:   #C8A96E;  // 백세주 골드
$color-dark:      #1A0E00;
$color-text:      #3D2B1F;

$font-heading:    'NanumMyeongjo', serif;
$font-body:       'Pretendard', sans-serif;

// 유체 타이포그래피: breakpoint 없이 자연스럽게 확대
.hero-title {
  font-family: $font-heading;
  font-size: clamp(2.4rem, 5vw, 4.2rem); // 모바일~데스크탑 연속 스케일
  line-height: 1.15;
  color: $color-primary;
  letter-spacing: -0.02em;
}

// 반응형 Grid — CSS Grid + auto-fit
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1rem, 3vw, 2.5rem);
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr; // 모바일: 1열
  }
}`,
      },
      {
        label: "Figma 컴포넌트 → React 컴포넌트",
        lang: "jsx",
        code: `// components/ProductCard/ProductCard.jsx
// Figma의 "Product Card" 컴포넌트를 1:1 React 컴포넌트로 구현

import styles from './ProductCard.module.scss';

const ProductCard = ({ name, volume, alcohol, image, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} />
        <span className={styles.badge}>{alcohol}%</span>
      </div>
      <div className={styles.body}>
        <p className={styles.volume}>{volume}ml</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
};`,
      },
    ],
    architecture: [
      { label: "Figma Design", type: "gold" },
      { label: "→", type: "arrow" },
      { label: "SCSS Variables", type: "normal" },
      { label: "→", type: "arrow" },
      { label: "React Components", type: "blue" },
      { label: "→", type: "arrow" },
      { label: "Vercel Deploy", type: "gold" },
    ],
    review: {
      strengths: [
        "디자인 → 코드 전환 사이클을 단독으로 완수하는 풀 사이클 역량",
        "SCSS 변수 시스템으로 디자인 토큰 체계적 관리",
        "clamp() 유체 타이포그래피로 매끄러운 반응형 UX 달성",
      ],
      improvements: [
        "CSS Module + TypeScript 조합 적용 시 스타일 충돌 방지 강화 가능",
        "Storybook 도입으로 컴포넌트 단위 시각 회귀 테스트 추가 고려",
        "Lighthouse 성능 점수 측정 및 이미지 WebP 최적화 여지 있음",
      ],
    },
  },
  3: {
    id: 3,
    title: "UniTrade — 중고 도서 거래 플랫폼",
    subtitle: "JSP · Docker · MariaDB 풀스택 프로젝트",
    period: "2024",
    type: "Fullstack · Infra",
    github: "https://github.com/MJB9595/JSP_BookTrade",
    demo: "https://book.mjb.diskstation.me",
    stack: [
      "JSP", "Java Servlet", "JDBC",
      "MariaDB", "Docker", "Docker Compose",
      "Apache Tomcat 9", "phpMyAdmin", "CSS",
    ],
    overview:
      "중고 책 거래를 목적으로 설계한 풀스택 웹 플랫폼. 회원가입·로그인, 상품 등록·삭제, 찜 기능, 마이페이지, 1:1 채팅, 상품 페이지 댓글·대댓글까지 실제 서비스 수준의 기능을 JSP + Java Servlet으로 구현했습니다. MariaDB · Tomcat · phpMyAdmin을 Docker Compose로 오케스트레이션하고 NAS에 셀프 호스팅으로 배포·운영 중입니다.",
    problem:
      "단순 CRUD를 넘어 실사용 가능한 거래 플랫폼 구현이 목표였으나, JSP 환경에서 1:1 채팅·댓글 계층 구조·파일 업로드 등 복잡한 기능을 동시에 소화하면서 DB 스키마 설계와 세션 관리까지 일관성 있게 유지해야 하는 도전.",
    solution:
      "기능별 Servlet을 역할에 따라 분리(Auth / Product / Chat / Comment)하여 관심사를 명확히 구분. 댓글·대댓글은 parent_id 자기 참조 재귀 구조 테이블로 설계. Docker Compose로 DB · WAS · phpMyAdmin을 단일 브릿지 네트워크로 묶고, 볼륨 마운트(`./db_data`)로 데이터 영속성을 보장.",
    result:
      "회원·상품·찜·1:1 채팅·댓글/대댓글 전 기능 동작 완성. `docker compose up` 한 줄로 어느 환경에서도 즉시 재현 가능. Synology NAS Docker 컨테이너 24시간 무중단 운영 중.",
    codeHighlights: [
      {
        label: "Docker Compose — 3컨테이너 오케스트레이션",
        lang: "yaml",
        code: `# compose.yaml
version: '3.8'
services:
  # 1. 데이터베이스 (MariaDB 10.11)
  db:
    image: mariadb:10.11
    container_name: uni_db
    environment:
      - MYSQL_DATABASE=ubt_library
      - MYSQL_USER=ubt_user
      - TZ=Asia/Seoul
    volumes:
      - ./db_data:/var/lib/mysql  # 볼륨으로 데이터 영속성 확보
    networks: [uni_net]
    restart: always

  # 2. WAS (Tomcat 9 + JDK 21)
  web:
    image: tomcat:9.0-jdk21
    container_name: uni_web
    ports:
      - "8080:8080"
    volumes:
      - ./webapps:/usr/local/tomcat/webapps
    depends_on: [db]
    networks: [uni_net]
    restart: always

  # 3. DB 관리 도구 (phpMyAdmin)
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    ports: ["8081:80"]
    environment:
      - PMA_HOST=db
    depends_on: [db]
    networks: [uni_net]

networks:
  uni_net:
    driver: bridge  # 3컨테이너 단일 격리 네트워크`,
      },
      {
        label: "댓글 · 대댓글 재귀 구조 (Java Servlet)",
        lang: "java",
        code: `// CommentServlet.java — parent_id 자기 참조 트리 구조
@WebServlet("/comment")
public class CommentServlet extends HttpServlet {

    // 댓글 등록 (parent_id=null: 댓글 / parent_id=N: 대댓글)
    protected void doPost(HttpServletRequest req,
                          HttpServletResponse res) throws ... {
        int productId  = Integer.parseInt(req.getParameter("product_id"));
        String content = req.getParameter("content");
        String parentIdStr = req.getParameter("parent_id");

        Integer parentId = (parentIdStr != null && !parentIdStr.isEmpty())
            ? Integer.parseInt(parentIdStr)
            : null;   // null → 최상위 댓글

        try (Connection conn = DBUtil.getConnection()) {
            String sql = "INSERT INTO comment " +
                "(product_id, user_id, content, parent_id, created_at) " +
                "VALUES (?, ?, ?, ?, NOW())";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, productId);
            ps.setInt(2, getSessionUserId(req));
            ps.setString(3, content);
            if (parentId != null) ps.setInt(4, parentId);
            else                  ps.setNull(4, Types.INTEGER);
            ps.executeUpdate();
        }
        res.sendRedirect("/product?id=" + productId);
    }

    // 댓글 목록: COALESCE 정렬로 부모 아래 대댓글 배치
    public List<Comment> getCommentTree(int productId, Connection conn) {
        String sql = "SELECT c.*, u.nickname FROM comment c " +
                     "JOIN users u ON c.user_id = u.id " +
                     "WHERE c.product_id = ? " +
                     "ORDER BY COALESCE(c.parent_id, c.id), c.id";
        ...
    }
}`,
      },
      {
        label: "찜(Wishlist) 토글 — JSON 응답 Servlet",
        lang: "java",
        code: `// WishServlet.java — 찜 추가 / 제거 토글
@WebServlet("/wish")
public class WishServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req,
                          HttpServletResponse res) throws ... {
        int productId = Integer.parseInt(req.getParameter("product_id"));
        int userId    = getSessionUserId(req);
        res.setContentType("application/json;charset=UTF-8");

        try (Connection conn = DBUtil.getConnection()) {
            String check = "SELECT id FROM wishlist " +
                           "WHERE user_id=? AND product_id=?";
            PreparedStatement ps = conn.prepareStatement(check);
            ps.setInt(1, userId); ps.setInt(2, productId);
            ResultSet rs = ps.executeQuery();

            String action;
            if (rs.next()) {
                // 이미 찜 → 제거
                PreparedStatement del = conn.prepareStatement(
                    "DELETE FROM wishlist WHERE user_id=? AND product_id=?");
                del.setInt(1, userId); del.setInt(2, productId);
                del.executeUpdate();
                action = "removed";
            } else {
                // 미찜 → 추가
                PreparedStatement ins = conn.prepareStatement(
                    "INSERT INTO wishlist (user_id, product_id) VALUES (?,?)");
                ins.setInt(1, userId); ins.setInt(2, productId);
                ins.executeUpdate();
                action = "added";
            }
            // JSON 응답으로 프론트 버튼 상태 동적 업데이트
            res.getWriter().write("{\"action\":\"" + action + "\"}");
        }
    }
}`,
      },
    ],
    architecture: [
      { label: "Browser (JSP)", type: "gold" },
      { label: "→", type: "arrow" },
      { label: "Tomcat 9 · JDK 21", type: "normal" },
      { label: "→", type: "arrow" },
      { label: "MariaDB", type: "blue" },
      { label: "↑ Docker Compose", type: "arrow" },
      { label: "NAS Self-Host", type: "gold" },
    ],
    review: {
      strengths: [
        "찜·채팅·댓글/대댓글 등 실거래 플랫폼 수준의 다양한 기능을 JSP 단일 스택으로 완성",
        "Docker Compose 3컨테이너 오케스트레이션으로 환경 재현성과 데이터 영속성 동시 확보",
        "parent_id 재귀 테이블 설계로 댓글 계층 구조를 DB 레벨에서 명확하게 처리",
        "NAS Docker 배포로 인프라 전 과정을 단독 설계·운영하는 역량 입증",
      ],
      improvements: [
        "HTTP Polling 방식 채팅을 WebSocket(STOMP)으로 교체 시 실시간성 대폭 향상 가능",
        "Session 인증을 JWT + Refresh Token으로 전환하면 Stateless 확장성 확보",
        "이미지 저장을 Object Storage(S3 호환)로 이전 시 서버 부하 분산 가능",
        "Flyway·Liquibase 도입으로 DB 스키마 버전 관리 체계화 가능",
      ],
    },
  },
  4: {
    id: 4,
    title: "VAIONITY — Spring & React 풀스택",
    subtitle: "완전 분리 아키텍처 RESTful 관리 시스템",
    period: "2024",
    type: "Fullstack",
    github: "https://github.com/MJB9595/Vaionity-project",
    demo: "https://vaionity.mjb.diskstation.me/",
    stack: ["Spring Boot", "React", "MySQL", "RESTful API", "Context API", "JWT", "Synology NAS"],
    overview:
      "프론트엔드(React)와 백엔드(Spring Boot)를 완전히 분리한 아키텍처로 설계한 RESTful 관리 시스템. JWT 기반 인증과 Context API를 활용한 전역 상태 관리를 구현하고, 직접 운영 중인 Synology NAS에 셀프 호스팅으로 배포한 풀스택 프로젝트입니다.",
    problem:
      "전통적인 JSP 방식의 서버 렌더링 패턴에서 벗어나, 프론트와 백을 완전히 분리하여 독립적으로 개발·배포·확장할 수 있는 현대적 아키텍처 구축이 목표.",
    solution:
      "Spring Boot로 RESTful API 서버를 구축하고 React SPA가 이를 소비하는 구조. JWT를 이용한 Stateless 인증으로 세션 서버 의존성을 제거. Context API + useReducer 패턴으로 전역 상태(인증 상태, 사용자 정보)를 컴포넌트 외부에서 일관되게 관리.",
    result:
      "프론트/백 완전 독립 배포 달성. Synology NAS의 Docker 컨테이너로 24시간 무중단 서비스 운영. JWT refresh token 로직으로 보안성과 UX를 동시에 확보.",
    codeHighlights: [
      {
        label: "JWT 인증 필터 (Spring Boot)",
        lang: "java",
        code: `// security/JwtAuthFilter.java
@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
        HttpServletRequest req, HttpServletResponse res, 
        FilterChain chain) throws IOException, ServletException {
        
        String authHeader = req.getHeader("Authorization");
        
        // Bearer 토큰 추출 및 검증
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            String username = jwtUtil.extractUsername(token);
            
            if (username != null && SecurityContextHolder
                    .getContext().getAuthentication() == null) {
                
                UserDetails user = userDetailsService
                    .loadUserByUsername(username);
                
                if (jwtUtil.validateToken(token, user)) {
                    // 검증 성공 → SecurityContext에 인증 정보 주입
                    UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                            user, null, user.getAuthorities());
                    SecurityContextHolder.getContext()
                        .setAuthentication(authToken);
                }
            }
        }
        chain.doFilter(req, res);
    }
}`,
      },
      {
        label: "전역 인증 상태 관리 (Context API)",
        lang: "jsx",
        code: `// context/AuthContext.jsx
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
  });

  // 로그인 → JWT 저장 → 전역 상태 업데이트
  const login = async (credentials) => {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 어디서든 인증 상태 접근
export const useAuth = () => useContext(AuthContext);`,
      },
    ],
    architecture: [
      { label: "React SPA", type: "gold" },
      { label: "⇌ REST API", type: "arrow" },
      { label: "Spring Boot", type: "normal" },
      { label: "→", type: "arrow" },
      { label: "MySQL", type: "blue" },
      { label: "↑ Docker", type: "arrow" },
      { label: "NAS Self-Host", type: "gold" },
    ],
    review: {
      strengths: [
        "프론트/백 완전 분리로 독립적 개발·배포 사이클 구현",
        "JWT Stateless 인증으로 서버 확장성(Scale-out) 확보",
        "직접 NAS에 Docker 배포하며 인프라까지 단독 운영",
      ],
      improvements: [
        "Refresh Token을 HttpOnly Cookie로 이동 시 XSS 방어 강화",
        "API 에러 핸들링을 Axios Interceptor로 중앙화 가능",
        "Spring Security CORS 설정을 환경변수화하여 운영/개발 분리 필요",
      ],
    },
  },
  5: {
    id: 5,
    title: "LocaPick — 위치기반 장소 추천 알고리즘",
    subtitle: "3개 지도 API 하이브리드 아키텍처",
    period: "2024",
    type: "Fullstack · Algorithm",
    github: "https://github.com/MJB9595/LocaPick",
    demo: "https://locapick.mjb.diskstation.me",
    stack: [
      "React", "SCSS", "Spring Boot", "MySQL",
      "Kakao Maps SDK", "ODsay 대중교통 API", "Tmap 보행자 API",
      "JWT", "Synology NAS", "Vite",
    ],
    overview:
      "현재 위치에서 시간(도보/교통 기준)과 카테고리를 입력하면 최적의 장소를 추천하는 서비스. Kakao, Tmap, ODsay 3개의 지도 API를 하이브리드로 통합하고, 리뷰 점수·사용자 평점·거리를 종합하는 자체 'LocaPick 추천 알고리즘'을 구현했습니다.",
    problem:
      "단일 지도 API로는 보행자 경로(Tmap), 대중교통 경로(ODsay), 장소 검색(Kakao)을 동시에 만족할 수 없었음. 또한 단순 거리순 정렬은 실제 사용자가 원하는 '좋은 장소'를 추천하지 못하는 한계.",
    solution:
      "백엔드에서 3개 API를 조율하는 하이브리드 레이어 구축. `getRecommendations()` 메서드가 도보 시간 → 반경 계산(time×80/1.3m) → Kakao 검색 → 결과를 리뷰수·평점·거리 가중 정렬하는 파이프라인 구현. JWT Stateless 인증으로 사용자별 즐겨찾기 및 리뷰 저장.",
    result:
      "3-API 통합 단일 인터페이스 완성. 자체 추천 알고리즘으로 단순 거리순 대비 사용자 만족도 향상. NAS Docker 배포로 24시간 무중단 서비스 운영 중.",
    codeHighlights: [
      {
        label: "핵심 추천 알고리즘 (Spring Boot)",
        lang: "java",
        code: `// service/RecommendService.java
public List<LocapickResponseDto> getRecommendations(
    double lat, double lng, 
    int time, int count, String category) {
    
    // 1. 도보 시간 → 검색 반경 계산 (평균 보행속도 기반)
    int radius = (int) Math.round((time * 80) / 1.3);
    
    // 2. Kakao Local API로 근처 장소 검색
    String url = String.format(
        "https://dapi.kakao.com/v2/local/search/category.json" +
        "?x=%s&y=%s&radius=%d&category_group_code=%s",
        lng, lat, radius, category);
    
    HttpHeaders headers = new HttpHeaders();
    headers.set("Authorization", "KakaoAK " + kakaoRestKey);
    
    ResponseEntity<Map> response = restTemplate.exchange(
        url, HttpMethod.GET,
        new HttpEntity<>(headers), Map.class);
    
    List<Map> places = (List) 
        ((Map) response.getBody()).get("documents");
    
    // 3. LocaPick 점수 계산: 리뷰수×0.4 + 평점×0.4 + 거리역수×0.2
    return places.stream()
        .map(this::toDto)
        .sorted(Comparator.comparingDouble(
            dto -> -calcScore(dto)))
        .limit(count)
        .collect(Collectors.toList());
}

private double calcScore(LocapickResponseDto dto) {
    double reviewNorm  = Math.log1p(dto.getReviewCount()) / 10.0;
    double ratingNorm  = dto.getRating() / 5.0;
    double distNorm    = 1.0 / (1.0 + dto.getDistance() / 100.0);
    return reviewNorm * 0.4 + ratingNorm * 0.4 + distNorm * 0.2;
}`,
      },
      {
        label: "3-API 통합 훅 (React)",
        lang: "jsx",
        code: `// hooks/useLocaPick.js
export const useLocaPick = () => {
  const [places, setPlaces] = useState([]);
  const [route, setRoute]   = useState(null);

  // 장소 추천 + 경로 조회를 병렬 실행
  const search = async ({ lat, lng, time, category, mode }) => {
    const [recommended, pathData] = await Promise.all([
      // ① 백엔드 추천 알고리즘 호출
      api.get('/api/recommend', { params: { lat, lng, time, category } }),
      // ② 이동 수단에 따라 API 분기
      mode === 'transit'
        ? fetchOdsayRoute(lat, lng)   // 대중교통: ODsay
        : fetchTmapRoute(lat, lng),   // 도보:    Tmap
    ]);

    setPlaces(recommended.data);
    setRoute(pathData);
  };

  return { places, route, search };
};`,
      },
    ],
    architecture: [
      { label: "React + Kakao SDK", type: "gold" },
      { label: "⇌", type: "arrow" },
      { label: "Spring Boot", type: "normal" },
      { label: "→ Kakao API", type: "arrow" },
      { label: "→ Tmap API", type: "arrow" },
      { label: "→ ODsay API", type: "blue" },
    ],
    review: {
      strengths: [
        "3개 외부 API를 단일 백엔드 레이어에서 오케스트레이션하는 설계",
        "가중 점수 알고리즘으로 단순 정렬 대비 추천 품질 향상",
        "프론트-백-인프라 전 계층을 단독으로 설계·구현·운영",
      ],
      improvements: [
        "추천 점수 가중치를 사용자 피드백 데이터로 ML 학습 가능",
        "외부 API 실패 시 Fallback 전략(Circuit Breaker 패턴) 추가 필요",
        "Redis 캐싱으로 동일 좌표 반복 요청 시 API 호출 비용 절감 가능",
      ],
    },
  },
  6: {
    id: 6,
    title: "Naver Shopping Scraper",
    subtitle: "FastAPI 비동기 웹 스크래핑 및 API 연동",
    period: "2024",
    type: "Backend · Web Scraping",
    github: "https://github.com/MJB9595/pythonweb-mjbshop",
    demo: "https://pythonweb-mjbshop.vercel.app/",
    stack: ["Python", "FastAPI", "MongoDB Atlas", "aiohttp", "Vanilla JS"],
    overview:
      "네이버 쇼핑 Open API를 활용한 상품 검색 및 데이터 저장 웹 애플리케이션입니다. FastAPI 기반의 비동기 백엔드와 MongoDB Atlas를 연동하여 대량의 검색 결과를 빠르게 조회하고 즐겨찾기를 세션 기반으로 관리합니다.",
    problem:
      "대량의 상품 검색 시 동기적 HTTP 요청으로 인한 응답 지연이 발생할 수 있으며, 다중 사용자 환경에서 즐겨찾기 데이터가 분리되지 않는 데이터 격리 문제가 존재했습니다.",
    solution:
      "aiohttp를 이용해 네이버 API 호출을 비동기로 처리하여 I/O 병목을 해소했습니다. 또한 브라우저 로컬 스토리지와 연동된 고유 세션 ID를 발급하여 MongoDB 쿼리에 적용함으로써 다중 사용자 환경에서도 독립적인 즐겨찾기 관리가 가능하도록 아키텍처를 개선했습니다.",
    result:
      "안정적이고 빠른 비동기 검색 API 서버를 구축하였으며, 세션 기반 데이터 격리를 통해 여러 사용자가 동시에 접근해도 자신의 즐겨찾기 항목만 독립적으로 안전하게 관리할 수 있는 시스템을 완성했습니다.",
    codeHighlights: [
      {
        label: "비동기 네이버 쇼핑 검색 (FastAPI + aiohttp)",
        lang: "python",
        code: `// shopping_scraper.py
async def search_shopping(query: str, start: int = 1, display: int = 10, sort: str = "sim"):
    url = "https://openapi.naver.com/v1/search/shop.json"
    headers = {
        "X-Naver-Client-Id": NAVER_API_ID,
        "X-Naver-Client-Secret": NAVER_API_SECRET
    }
    params = {"query": query, "start": start, "display": display, "sort": sort}
    
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers=headers, params=params) as resp:
            data = await resp.json()
            return data.get("items", [])`,
      },
      {
        label: "세션 기반 데이터 격리 (MongoDB)",
        lang: "python",
        code: `// app/models/__init__.py
async def save_shopping_item(item_data: dict, session_id: str):
    item_data["session_id"] = session_id
    item_data["saved_at"] = datetime.now()
    
    # Upsert를 이용한 즐겨찾기 저장 및 갱신
    await db["shopping_items"].update_one(
        {"productId": item_data["productId"], "session_id": session_id},
        {"$set": item_data},
        upsert=True
    )`,
      }
    ],
    architecture: [
      { label: "Client (Vanilla JS)", type: "gold" },
      { label: "⇌ REST API", type: "arrow" },
      { label: "FastAPI", type: "normal" },
      { label: "→ aiohttp", type: "arrow" },
      { label: "Naver Open API", type: "blue" },
      { label: "↓ Motor (Async)", type: "arrow" },
      { label: "MongoDB Atlas", type: "gold" },
    ],
    review: {
      strengths: [
        "비동기 처리(aiohttp, Motor)를 적극 활용하여 I/O 바운드 작업 최적화",
        "Open API와 MongoDB를 연결하는 견고한 데이터 파이프라인 구축",
        "세션 ID 기반으로 다중 사용자 데이터 격리를 자체적으로 구현"
      ],
      improvements: [
        "Redis 캐싱을 도입하여 동일한 검색어에 대한 외부 API 호출 비용 절감 가능",
        "더욱 견고한 인증(JWT) 및 회원가입 시스템으로 확장 여지",
        "Frontend를 모던 프레임워크로 분리하여 SPA로 고도화 고려"
      ],
    },
  },
};

const ProjectsPage = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(PROJECT_DETAILS[id]);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <section id="projects" className="section-wrap">
        <div className="container">
          <div className="sec-header reveal">
            <div>
              <p className="sec-label">03 — Featured Projects</p>
              <h2 className="sec-title">
                만든 것들로
                <br />
                <em>말합니다</em>
              </h2>
            </div>
            <p className="sec-note">
              문제 정의 → 기술적 해결 →<br />실제 결과로 정리한 프로젝트들입니다.
            </p>
          </div>

          <div className="project-grid">
            {/* ── PROJECT 01 ── */}
            <div className="project-card featured reveal">
              <div className="project-visual">
                <div className="visual-badge">★ Featured</div>
                <div className="project-visual-inner">
                  <div className="code-line-img">
                    <img src="/simplemap.png" alt="배경 이미지" className="banner" />
                  </div>
                  <div className="code-line">
                    <span className="code-num">01</span>
                    <span className="code-comment"># data_splitter.py</span>
                  </div>
                  <div className="code-line">
                    <span className="code-num">02</span>
                    <span className="code-kw">import</span>{" "}
                    <span className="code-fn">json</span>,{" "}
                    <span className="code-fn">os</span>
                  </div>
                  <div className="code-line">
                    <span className="code-num">03</span>
                  </div>
                  <div className="code-line">
                    <span className="code-num">04</span>
                    <span className="code-kw">def</span>{" "}
                    <span className="code-fn">split_json</span>(src, chunk=500):
                  </div>
                  <div className="code-line">
                    <span className="code-num">05</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">with</span>{" "}
                    <span className="code-fn">open</span>(src){" "}
                    <span className="code-kw">as</span> f:
                  </div>
                  <div className="code-line">
                    <span className="code-num">06</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data ={" "}
                    <span className="code-fn">json.load</span>(f)
                  </div>
                  <div className="code-line">
                    <span className="code-num">07</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">for</span> i, batch{" "}
                    <span className="code-kw">in</span>{" "}
                    <span className="code-fn">enumerate</span>(
                  </div>
                  <div className="code-line">
                    <span className="code-num">08</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chunks(data,
                    chunk)):
                  </div>
                  <div className="code-line">
                    <span className="code-num">09</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-fn">save_chunk</span>(i, batch)
                  </div>
                  <div className="code-line">
                    <span className="code-num">10</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-comment">
                      # → 브라우저 로딩 최적화 ✓
                    </span>
                  </div>
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
                <h3 className="project-title">
                  경기도 지역화폐
                  <br />
                  가맹점 안내 서비스
                </h3>
                <p className="project-desc">
                  공공 API의 대용량 JSON 데이터를 React로 렌더링할 때 발생하는
                  브라우저 성능 저하 문제를 직접 해결한 프로젝트.
                </p>
                <div className="psr-grid">
                  <div className="psr-card">
                    <p className="psr-label">🔴 Problem</p>
                    <p className="psr-text">
                      공공기관 JSON 파일이 너무 커서 브라우저가 멈추는 UX 이슈
                      발생
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">🔵 Solution</p>
                    <p className="psr-text">
                      Python 스크립트로 데이터를 청크 분할, 프론트에서 비동기
                      병합 로드 구현
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">🟢 Result</p>
                    <p className="psr-text">
                      초기 로딩 속도 개선 + 즐겨찾기(LocalStorage) 기능까지
                      포함한 완성도
                    </p>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/MJB9595/react-tailwind-mab_web"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href="http://react-tailwind-mab-web.vercel.app/"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    Live Demo
                  </a>
                  <button
                    className="project-link project-detail-btn"
                    onClick={() => openModal(1)}
                  >
                    <i className="fa-solid fa-magnifying-glass-chart"></i> 상세
                    보기
                  </button>
                </div>
              </div>
            </div>

            {/* ── PROJECT 02 ── */}
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
                <h3 className="project-title">
                  백세주 브랜드
                  <br />
                  반응형 웹사이트
                </h3>
                <p className="project-desc">
                  Figma로 직접 설계하고 코드로 구현한 브랜드 반응형 웹사이트.
                  전체 코드의 66%가 SCSS인 만큼 픽셀 단위 레이아웃 정밀도와
                  모든 뷰포트 대응에 집중했습니다.
                </p>
                <div className="psr-grid">
                  <div className="psr-card">
                    <p className="psr-label">🎨 Design</p>
                    <p className="psr-text">
                      Figma로 UI/UX 직접 설계 후 React + SCSS로 1:1 구현
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">📐 Responsive</p>
                    <p className="psr-text">
                      모바일·태블릿·데스크탑 전 구간 완벽 반응형 처리
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">🚀 Deploy</p>
                    <p className="psr-text">
                      Vercel 배포 · 실서비스 수준의 완성도 확보
                    </p>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/MJB9595/mjb-tocobo-figma"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href="https://mjb-tocobo-figma-second.vercel.app/"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    Live Demo
                  </a>
                  <button
                    className="project-link project-detail-btn"
                    onClick={() => openModal(2)}
                  >
                    <i className="fa-solid fa-magnifying-glass-chart"></i> 상세
                    보기
                  </button>
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
                      <div
                        className="mock-screen screen-tablet"
                        style={{ height: "72px" }}
                      ></div>
                    </div>
                    <div className="mock-mobile">
                      <div className="mock-notch"></div>
                      <div
                        className="mock-screen screen-mobile"
                        style={{ height: "82px" }}
                      ></div>
                    </div>
                  </div>
                  <p className="mock-label">Desktop · Tablet · Mobile</p>
                </div>
              </div>
            </div>

            {/* ── PROJECT 03 & 04 Row ── */}
            <div className="project-row">
              {/* PROJECT 03 */}
              <div className="project-card reveal reveal-delay-1">
                <div className="project-visual">
                  <div className="project-visual-inner">
                    <div
                      className="arch-diagram"
                      style={{ fontSize: "0.64rem", padding: "1rem" }}
                    >
                      <div className="arch-row">
                        <span className="arch-box gold">Client (Browser)</span>
                        <span className="arch-arrow">────▶</span>
                        <span className="arch-box">Tomcat (JSP)</span>
                      </div>
                      <div
                        className="arch-row"
                        style={{ paddingLeft: "2rem" }}
                      >
                        <span className="arch-arrow">│</span>
                      </div>
                      <div className="arch-row">
                        <span className="arch-box blue">Docker Network</span>
                        <span className="arch-arrow">──▶</span>
                        <span className="arch-box">MariaDB</span>
                        <span
                          style={{
                            fontSize: "0.6rem",
                            color: "var(--text-faint)",
                          }}
                        >
                          + Volume
                        </span>
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
                  <h3 className="project-title">
                    Docker 기반
                    <br />
                    중고 도서 거래 플랫폼
                  </h3>
                  <p className="project-desc">
                    단순 CRUD를 넘어 Docker 볼륨 설정으로 데이터 무결성을
                    확보하고, 1:1 채팅·사진 편집 기능까지 구현한 풀스택
                    프로젝트.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/MJB9595/JSP_BookTrade"
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    <a
                      href="https://book.mjb.diskstation.me"
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                      Live Demo
                    </a>
                    <button
                      className="project-link project-detail-btn"
                      onClick={() => openModal(3)}
                    >
                      <i className="fa-solid fa-magnifying-glass-chart"></i>{" "}
                      상세 보기
                    </button>
                  </div>
                </div>
              </div>

              {/* PROJECT 04 */}
              <div className="project-card reveal reveal-delay-2">
                <div className="project-visual">
                  <div className="project-visual-inner">
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        padding: "1.2rem",
                      }}
                    >
                      <div
                        className="arch-box gold"
                        style={{ fontSize: "0.65rem" }}
                      >
                        React
                      </div>
                      <span className="arch-arrow">⇌</span>
                      <div
                        className="arch-box blue"
                        style={{ fontSize: "0.65rem" }}
                      >
                        Spring Boot
                      </div>
                      <br />
                      <div
                        style={{
                          width: "100%",
                          marginTop: "0.5rem",
                          fontSize: "0.64rem",
                          color: "var(--text-faint)",
                        }}
                      >
                        RESTful API · MySQL · Context API
                      </div>
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
                  <h3 className="project-title">
                    Spring & React
                    <br />
                    VAIONITY
                  </h3>
                  <p className="project-desc">
                    프론트/백엔드 완전 분리 아키텍처로 설계한 RESTful 관리
                    시스템. Context API를 활용한 전역 상태 관리.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/MJB9595/Vaionity-project"
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    <a
                      href="https://vaionity.mjb.diskstation.me/"
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                      Live Demo
                    </a>
                    <button
                      className="project-link project-detail-btn"
                      onClick={() => openModal(4)}
                    >
                      <i className="fa-solid fa-magnifying-glass-chart"></i>{" "}
                      상세 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PROJECT 05 ── */}
            <div className="project-card featured reveal">
              <div className="project-visual">
                <div className="visual-badge">★ Featured</div>
                <div className="project-visual-inner">
                  <div className="code-line-img">
                    <img
                      src="/locapickimg.png"
                      alt="배경 이미지"
                      className="banner"
                    />
                  </div>
                  <div className="code-line">
                    <span className="code-num">01</span>
                    <span className="code-kw">public List</span>
                    &lt;LocapickResponseDto&gt;{" "}
                    <span className="code-fn">getRecommendations</span>
                  </div>
                  <div className="code-line">
                    <span className="code-num">02</span>(
                    <span className="code-kw">double</span> lat,{" "}
                    <span className="code-kw">double</span> lng,{" "}
                    <span className="code-kw">int</span> time,{" "}
                    <span className="code-kw">int</span> count,{" "}
                    <span className="code-kw">String</span> category) {"{"}
                  </div>
                  <div className="code-line">
                    <span className="code-num">03</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">int</span> radius = (
                    <span className="code-kw">int</span>) Math.
                    <span className="code-fn">round</span>((time * 80) / 1.3);
                  </div>
                  <div className="code-line">
                    <span className="code-num">04</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">String</span> url ={" "}
                    <span className="code-kw">String</span>.
                    <span className="code-fn">format</span>(
                    "https://dapi.kakao.com/...", lng, lat, radius);
                  </div>
                  <div className="code-line">
                    <span className="code-num">05</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;HttpHeaders headers ={" "}
                    <span className="code-kw">new</span>{" "}
                    <span className="code-fn">HttpHeaders</span>();
                  </div>
                  <div className="code-line">
                    <span className="code-num">06</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;headers.
                    <span className="code-fn">set</span>("Authorization",
                    "KakaoAK " + kakaoRestKey);
                  </div>
                  <div className="code-line">
                    <span className="code-num">07</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">return</span> restTemplate.
                    <span className="code-fn">exchange</span>(url,
                    HttpMethod.GET,{" "}
                    <span className="code-kw">new</span>{" "}
                    <span className="code-fn">HttpEntity</span>&lt;&gt;(headers),
                    Map.class)
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">SCSS</span>
                  <span className="project-tag">Spring</span>
                  <span className="project-tag">
                    Synology NAS (Self-Hosting)
                  </span>
                  <span className="project-tag">Kakao Maps SDK</span>
                  <span className="project-tag">ODsay Public Transit</span>
                  <span className="project-tag">Tmap Pedestrian</span>
                  <span className="project-tag">Vite</span>
                  <span className="project-tag">MySQL</span>
                </div>
                <p className="project-num">Project 05</p>
                <h3 className="project-title">
                  LocaPick
                  <br />
                  위치기반 내비게이션 & 장소 추천 알고리즘
                </h3>
                <p className="project-desc">
                  3개의 API(Kakao, Tmap, ODsay)를 하나의 인터페이스에서
                  통합하고,
                  <br />
                  JWT를 활용한 Stateless 인증 시스템을 구축하여 보안성을
                  확보하고,
                  <br />
                  다차원 정렬(리뷰 점수, 사용자 평점 등)을 통해 최적의 장소를
                  추천하는 <br /> 'LocaPick 알고리즘'을 구현
                </p>
                <div className="psr-grid">
                  <div className="psr-card">
                    <p className="psr-label">🔴 Problem</p>
                    <p className="psr-text">
                      초기에 정적 데이터 (JSON) 방식에서 발생하던 데이터의
                      한계와 연산 부하 문제를 인식
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">🔵 Solution</p>
                    <p className="psr-text">
                      카카오 API와 백엔드 연산 로직을 결합한 하이브리드
                      아키텍처로 고도화
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">🟢 Result</p>
                    <p className="psr-text">
                      빠른 로딩시간과 가볍고 성능좋은 웹사이트면서 동시에 장소
                      추천 알고리즘 구현에 성공
                    </p>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/MJB9595/LocaPick.git"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href="https://locapick.mjb.diskstation.me"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    Live Demo
                  </a>
                  <button
                    className="project-link project-detail-btn"
                    onClick={() => openModal(5)}
                  >
                    <i className="fa-solid fa-magnifying-glass-chart"></i> 상세
                    보기
                  </button>
                </div>
              </div>
            </div>

            {/* ── PROJECT 06 ── */}
            <div className="project-card featured featured-flip reveal">
              <div className="project-body">
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">FastAPI</span>
                  <span className="project-tag">MongoDB</span>
                  <span className="project-tag">aiohttp</span>
                </div>
                <p className="project-num">Project 06</p>
                <h3 className="project-title">
                  Naver Shopping Scraper
                  <br />
                  비동기 검색 & 세션 관리
                </h3>
                <p className="project-desc">
                  FastAPI와 MongoDB를 활용한 비동기 네이버 쇼핑 웹 스크래핑 및 세션 기반 데이터 관리 서비스.
                </p>
                <div className="psr-grid">
                  <div className="psr-card">
                    <p className="psr-label">⚡ Async</p>
                    <p className="psr-text">
                      aiohttp와 Motor를 활용한 완전 비동기 I/O 파이프라인
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">🔒 Session</p>
                    <p className="psr-text">
                      로컬 스토리지 세션 ID 기반 다중 사용자 즐겨찾기 격리
                    </p>
                  </div>
                  <div className="psr-card">
                    <p className="psr-label">💾 DB</p>
                    <p className="psr-text">
                      MongoDB Atlas 연동으로 유연한 데이터 파이프라인 구축
                    </p>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/MJB9595/pythonweb-mjbshop"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href="https://pythonweb-mjbshop.vercel.app/"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    Live Demo
                  </a>
                  <button
                    className="project-link project-detail-btn"
                    onClick={() => openModal(6)}
                  >
                    <i className="fa-solid fa-magnifying-glass-chart"></i> 상세 보기
                  </button>
                </div>
              </div>
              
              <div className="project-visual">
                <div className="visual-badge">★ Featured</div>
                <div className="project-visual-inner">
                  <div className="code-line">
                    <span className="code-num">01</span>
                    <span className="code-comment"># FastAPI Async Web Scraper</span>
                  </div>
                  <div className="code-line">
                    <span className="code-num">02</span>
                    <span className="code-kw">async def</span>{" "}
                    <span className="code-fn">search_shopping</span>(query):
                  </div>
                  <div className="code-line">
                    <span className="code-num">03</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">async with</span>{" "}
                    aiohttp.ClientSession() <span className="code-kw">as</span> session:
                  </div>
                  <div className="code-line">
                    <span className="code-num">04</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-kw">await</span> session.get(url)
                  </div>
                  <div className="code-line">
                    <span className="code-num">05</span>
                    <span className="code-comment"># → 빠른 비동기 응답 ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 모달 */}
      {activeModal && (
        <ProjectDetailModal project={activeModal} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectsPage;