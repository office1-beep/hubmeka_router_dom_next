# 처음으로 소스를 받을 때

## 1. 로컬 Git 저장소 초기화

git init

## 2. 기본 브랜치 이름을 main으로 변경

git branch -M main

## 3. GitHub 원격 저장소 주소 등록

git remote add origin https://github.com/office1-beep/hubmeka_router_dom_next.git

## 4. 원격 저장소(Remote Repository)의 최신 변경 사항을 로컬의 현재 브랜치로 가져오고 병합하려면 아래 명령어를 사용하세요.

git pull origin main

# 소스 수정 후에 git에 올릴 때

## 1. 파일 local에 올리기

git add .

## 2. 파일 massage 올리기

git commit -m "git 가져오기 갱신"

## 3. 파일 remote에 올리기

git push -u origin main
