# 김재아(Kim Jae-ah) - Developer Portfolio

> **"코드 너머의 운영 경험까지. builds things that last."** <br/>
> 인프라부터 프론트엔드까지 — 데이터 파이프라인을 직접 설계하고, Docker로 서버를 구축하며, React로 사용자 경험을 완성하는 풀스택 개발자의 포트폴리오 웹사이트입니다.

<br/>


## Key Features
- **다크/라이트 테마 (Context API)**: 사용자의 시스템 설정 또는 토글 버튼을 통해 부드럽게 전환되는 테마 환경 구현
- **Custom Cursor & Interactive UI**: 마우스 움직임을 부드럽게 추적하는 커스텀 커서 및 호버 애니메이션 적용 (`requestAnimationFrame` 활용)
- **Scroll Reveal Animation**: `IntersectionObserver`를 활용하여 스크롤 시 컨텐츠가 자연스럽게 나타나는 동적 효과 구현
- **Responsive Web Design**: 모바일, 태블릿, 데스크탑 등 모든 뷰포트에 대응하는 완벽한 반응형 레이아웃 (SCSS)
- **모듈화된 아키텍처**: 기능 및 페이지별로 React 컴포넌트를 분리하고 SCSS를 모듈화하여 유지보수성 극대화

<br/>

## 🛠 Tech Stack

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br/>

## Featured Projects

| 프로젝트명 | 핵심 기술 | 요약 | 링크 |
| --- | --- | --- | --- |
| **경기도 지역화폐 가맹점 안내** | React, Python, Vite | 대용량 JSON 데이터 청크 분할을 통한 브라우저 로딩 최적화 구현 | [GitHub](https://github.com/MJB9595/react-tailwind-mab_web) |
| **백세주 반응형 웹사이트** | React, SCSS, Figma | Figma 설계 기반 픽셀 단위 레이아웃 및 데스크탑/모바일 완벽 반응형 구현 | [GitHub](https://github.com/MJB9595/mjb-tocobo-figma) |
| **중고 도서 거래 플랫폼** | JSP, Docker, MariaDB | Docker 기반 아키텍처 및 볼륨 설정을 통한 데이터 무결성 확보 | - |
| **VAIONITY** | Spring Boot, React | 프론트/백엔드 완전 분리 아키텍처 및 Context API 활용 전역 상태 관리 | [GitHub](https://github.com/MJB9595/Fullstack-project) |
| **LocaPick 장소 추천 알고리즘** | Spring, React, 다중 API | 3개의 지도 API 하이브리드 아키텍처 및 JWT 기반 다차원 정렬 추천 서비스 | [GitHub](https://github.com/MJB9595/LocaPick.git) |
| **Naver Shopping Scraper** | Python, FastAPI, MongoDB | aiohttp 비동기 처리 및 세션 기반 다중 사용자 즐겨찾기 격리 구현 | [GitHub](https://github.com/MJB9595/pythonweb-mjbshop) |

<br/>

## Infrastructure 운영 경험
단순히 코드를 작성하는 것을 넘어, 서비스를 직접 배포하고 유지하는 **인프라 환경(Self-Hosting)**을 운영합니다.
- **NAS 홈 서버 구축**: Synology 및 UGREEN NAS 동시 운영, SMB 멀티채널 및 포트 포워딩을 통한 안정적인 접속 환경 구성
- **Docker 기반 컨테이너 관리**: Immich(개인 사진 클라우드), Minecraft 서버 등 다양한 서비스를 컨테이너 기반으로 24시간 무중단 운영 중
