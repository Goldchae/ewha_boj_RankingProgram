# 🏅ewha_boj_RankingProgram🏅

이화여대 백준 랭킹 상승용 프로그램
(사진)

- 학교 랭킹
- 오늘의 문제
- 알고리즘별/태그별 남은 문제 분류
- 함께 풀어요 게시판
- 이화여대 랭킹

---

## 💻 Frontend

프론트엔드 리액트 프로그램

### 🟢 Node.js 설치

- npm 설치 확인

```
npm -v
```

- 설치가 되지 않았다면 Node.js 공식 웹사이트로 이동하여 최신 LTS(Long-Term Support) 버전을 다운로드하여 설치

### 🟢 프로젝트 의존성 설치

- 프로젝트 디렉토리로 이동
  frontend\q_up-react

- 의존성 설치

```
npm install
```

### 🟢 실행

- 프로젝트 실행

```
npm start
```

- 프로젝트 확인
  http://localhost:3000/
  1920 X 1080 px 규격, 80% 로 봐야 예쁩니다. (반응형 미구현)

---

## 💻 backend

백엔드 스프링 프로그램

(이클립스)

### 🟢 STS 플러그인 설치

이클립스 마켓플레이스(Help -> Eclipse Marketplace)에서 'Spring Tools 4'를 검색하여 설치

### 🟢 설정

Project > Java Compiler > Annotation Processing > Enable annotation processing 체크

### 🟢 lombok

lombok 따로 설치해서 Project > Java Compiler > Annotation Processing > Factory Path에 External JARs로 추가

### 🟢 실행

QqyuUpApplication 실행

(인텔리제이)

### 🟢 실행

파일을 연 후 QqyuUpApplication 실행

### 🔴 api 명세서

| 기능                                                  | HTTP   | URL                      | Request                                                                                                                                | Response                                                                                                                                                                                                                                                                                                                                                                                                                      | 완성 여부 |
| ----------------------------------------------------- | ------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 관리자가 오늘의 문제 post                             | POST   | /main/auth               |                                                                                                                                        | { (String) “TodayPS 생성 성공“ }                                                                                                                                                                                                                                                                                                                                                                                              | ⭕️       |
| 메인페이지 보여주기(오늘의 문제 + 그룹 순위)          | GET    | /main                    |                                                                                                                                        | { (INT) “ewha_ranking”: “이화여대 그룹 순위”<br>(INT) “rival_ranking”: “이화여대 전 순위 등수”<br>(String) “rival_group_name” : “이화여대 전 순위 그룹 이름”<br>(INT) “solved_num_gap” : “전 순위 그룹과 문제 수 차이”<br>(INT) “pid” : “오늘의 문제 번호”<br>(String) “dib_handle” : “찜한 사람 핸들”<br>(Boolean) “dib” : “찜하기 여부”<br>(String) “p_title” : “오늘의 문제 제목”<br>(INT) “p_tier” : “오늘의 문제 티어” } | ⭕️       |
| 오늘의 문제 찜하기                                    | PUT    | /main/todayps/dib/enable | { (INT)”pid”: “찜한 문제 번호”<br>(String) “dib_handle”: “찜한 사람 핸들” }                                                            | { (INT)”problem_num”: “찜한 문제 번호”<br>(String) “dib_handle”: “찜한 사람 핸들”<br>(Boolean) “dib” : “찜하기 여부”<br>(String) “problem_title” : “오늘의 문제 제목”<br>(INT) “problem_tier” : “오늘의 문제 티어” }                                                                                                                                                                                                          |           |
| 학생의 교내 랭크 보여주기                             | GET    | /studentRank             |                                                                                                                                        | { (INT) “rank_ingroup” : “사용자의 교내 랭크”<br>(String) “handle” : “사용자 핸들”<br>(String) “userlink” : “사용자 솔브닥 링크”<br>(String) “tier” : “사용자 티어”<br>(INT) “solved_num” : “사용자 푼 문제 수” }                                                                                                                                                                                                             | ⭕️       |
| 문제 알고리즘별로 보여주기                            | GET    | /problems/algo{algoid}   | { (String) “tag” : “사용자가 선택한 알고리즘 태그” }<br>→ url에 파라미터 형태로 제공(프엔) ex) /problems/algo?tag=알고리즘명           | { (INT) “pid” : “문제 번호”<br>(String) “p_title” : “문제 제목”<br>(String) “link” : “문제 링크”<br>(INT) “solvednum” : “푼 사람 수”<br>(String) “tier” : “문제 티어” }                                                                                                                                                                                                                                                       | ⭕️       |
| 문제 티어별로 보여주기                                | GET    | /problems/tier           | { (String) “tier” : “사용자가 선택한 티어” }<br>→ url에 파라미터 형태로 제공 ex) /problems/tier?tier=티어번호                          | { (INT) “pid” : “문제 번호”<br>(String) “p_title” : “문제 제목”<br>(String) “link” : “문제 링크”<br>(INT) “solvednum” : “푼 사람 수”<br>(String) “algo” : “문제 알고리즘” }                                                                                                                                                                                                                                                   | ⭕️       |
| 같이 풀어요 게시판 게시글 문제번호별로 보여주기(검색) | GET    | /pstogether/search/{pid} | { (int) “pid” : “사용자가 검색한 문제 번호” }<br>→ url에 파라미터 형태로 제공 ex) /pstogether/search?pid=문제번호                      | { (INT)”pid” : “문제 번호”<br>(String) “article_title” : “게시글 제목”<br>(String) “handle” : “게시자 핸들” }                                                                                                                                                                                                                                                                                                                 | ➿        |
| 같이 풀어요 게시판 게시글 미리보기                    | GET    | /pstogether/previews     |                                                                                                                                        | { (INT)”pid” : “문제 번호”<br>(String) “article_title” : “게시글 제목”<br>(String) “handle” : “게시자 핸들” }                                                                                                                                                                                                                                                                                                                 | ⭕️       |
| 같이 풀어요 게시글 상세 조회                          | GET    | /pstogether/search       | { (INT) “articleId” : “게시글 아이디” }                                                                                                | { (INT)”pid” : “문제 번호”<br>(String) “handle” : “게시자 핸들”<br>(String) “github_link” : “깃허브 링크” }                                                                                                                                                                                                                                                                                                                   |           |
| 같이 풀어요 게시글 올리기                             | POST   | /pstogether              | { (INT)”pid” : “문제 번호”<br>(String) “handle” : “게시자 핸들”<br>(String) “github_link” : “깃허브 링크”<br>(INT) “pw” : “비밀번호” } | { ”게시글 등록에 성공했습니다”<br>(INT)”pid” : “문제 번호”<br>(String) “handle” : “게시자 핸들”<br>(String) “github_link” : “깃허브 링크”<br>(INT) “pw” : “비밀번호” }                                                                                                                                                                                                                                                        | ⭕️       |
| 같이 풀어요 게시글 삭제                               | DELETE | /pstogether              | { (INT) “articleId” : “게시글 아이디”<br>(INT) “pw” : “비밀번호” }                                                                     | { //비밀번호가 일치할 경우 ”게시글 삭제 성공”<br>//비밀번호가 불일치할 경우 ”비밀번호 불일치” }                                                                                                                                                                                                                                                                                                                               |           |

---

## 💻 DB

DB 초기 세팅용 create.sql
DB 정리용 dropdb.sql

```
+---------------------------------+
| Tables_in_db2024team01          |
+---------------------------------+
| db2024_algorithms               |
| db2024_organizations            |
| db2024_problems                 |
| db2024_pstogether               |
| db2024_students                 |
| db2024_todayps                  |
| db2024_view_tag_data_structures |
| db2024_view_tag_dp              |
| db2024_view_tag_geometry        |
| db2024_view_tag_graphs          |
| db2024_view_tag_greedy          |
| db2024_view_tag_implementation  |
| db2024_view_tag_math            |
| db2024_view_tag_string          |
+---------------------------------+
```

---

Team 뀨엘
박세은 / 정희원 / 정은채 / 정소은 / 최이경
