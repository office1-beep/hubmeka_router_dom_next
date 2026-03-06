# hubmeka_router_dom

## 1. 프로젝트 초기화 및 첫 커밋

** 터미널에서 프로젝트 루트 폴더로 이동한 뒤 아래 명령어를 순서대로 입력하세요. **

### 1. 프로젝트 설명 파일 생성

echo "# hubmeka_router_dom" >> README.md

### 2. 로컬 Git 저장소 초기화

git init

### 3. 모든 파일을 스테이징 영역에 추가

git add .

### 4. 첫 번째 커밋 생성

git commit -m "first commit"

## 2. 원격 저장소 연결 및 푸시(Push)

** 브라우저 기반 인증(Google 로그인 등)이 완료된 상태에서 진행합니다. **

### 5. 기본 브랜치 이름을 main으로 변경

git branch -M main

### 6. GitHub 원격 저장소 주소 등록

git remote add origin https://github.com/office1-beep/hubmeka_router_dom_next.git

### 7. 원격 저장소의 main 브랜치로 코드 업로드 (-u 옵션으로 기본 경로 설정)

git push -u origin main

## 팁: 인증 관련 문제 발생 시

** 만약 push 과정에서 사용자 이름(Username)과 비밀번호(Password)를 묻는다면, 앞서 설명해 드린 대로 **GitHub Personal Access Token(PAT)**을 생성하여 비밀번호 칸에 입력해 주세요. **

** 주의: office1@hubmeka.com 계정의 구글 비밀번호가 아니라, GitHub 설정에서 발급받은 토큰을 사용해야 중력의 방해 없이 매끄럽게 업로드됩니다. **

## 원격 저장소(Remote Repository)의 최신 변경 사항을 로컬의 현재 브랜치로 가져오고 병합하려면 아래 명령어를 사용하세요.

git pull origin main

## 파일 local에 올리기

git add .

## 파일 massage 올리기

git commit -m "git 가져오기 갱신"

## 파일 remote에 올리기

git push -u origin main

## remote에서 update 된 문서 내려 받기

git pull origin main
