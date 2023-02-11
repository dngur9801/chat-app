# Nextron을 이용한 데스크탑 채팅 애플리케이션 "Chatty" 
Nextron, firebase를 사용해서 구현한 데스크탑 채팅 애플리케이션 입니다.
firebase 특성상 실시간으로 데이터변화를 감지할 수 있는 기능을 제공하고, NoSQL 형식 으로 대량의 분산된 데이터를 저장하고 조회하는 데 특화돼 있어서 채팅 애플리케이션을 제작하는데 적합합니다.

## 목차
- 전체 구조
- 주요 기능
- 기술 스택
- 구현 내용
- 회고
- 실행 방법

## 전체 구조
- recoil을 사용하여 전역상태 관리를 하였습니다.
- component 폴더에는 각각 페이지에 해당하는 컴포넌트들이 위치해 있고, 하나의 컴포넌트 폴더 내부에는 다음과 같은 파일들이 있습니다.
  - [component].tsx : 컴포넌트에 ui부분을 담당합니다.
  - [componentContainer].tsx : 컴포넌트에 비즈니스 로직을 담당하고, [component].tsx에 데이터를 연결합니다.
  - [component.styles].ts : 컴포넌트에 해당하는 style을 정의해놓은 파일입니다.


## 주요 기능
- [x] 회원가입
- [x] 로그인
- [x] 유저목록
- [x] 1:1 채팅
- [x] 그룹채팅

## 기술 스택
<div>
 <img src="https://img.shields.io/badge/NextJs-000000?style=flat-square&logo=next.js&logoColor=white">&nbsp 
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a>&nbsp 
 <img src="https://img.shields.io/badge/recoil-000000?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGxpbmsgeG1sbnM9IiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIi8+PGcgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNDIuNTM2IDE5OC44NThjMCAyNi4zNi0yMS4zNjggNDcuNzItNDcuNzIgNDcuNzItMjYuMzYgMC00Ny43MjItMjEuMzYtNDcuNzIyLTQ3LjcyczIxLjM2LTQ3LjcyIDQ3LjcyLTQ3LjcyYzI2LjM1NSAwIDQ3LjcyMiAyMS4zNiA0Ny43MjIgNDcuNzIiLz48cGF0aCBkPSJNNTA1LjE4IDQxNC4yMjVIMjM4LjEyNGMtMzUuMjUgMC02My45MjYtMjguNjc0LTYzLjkyNi02My45MjNzMjguNjc4LTYzLjkyNiA2My45MjYtNjMuOTI2aDEyMC43OGMyMC44MTYgMCAzNy43NTMtMTYuOTM4IDM3Ljc1My0zNy43NTZzLTE2LjkzOC0zNy43NTYtMzcuNzUzLTM3Ljc1Nkg5NC44MWMtNy4yMjcgMC0xMy4wODYtNS44Ni0xMy4wODYtMTMuMDg1IDAtNy4yMjcgNS44Ni0xMy4wODYgMTMuMDg1LTEzLjA4NmgyNjQuMDkzYzM1LjI1IDAgNjMuOTIzIDI4LjY3OCA2My45MjMgNjMuOTI2cy0yOC42NzQgNjMuOTIzLTYzLjkyMyA2My45MjNoLTEyMC43OGMtMjAuODIgMC0zNy43NTYgMTYuOTM4LTM3Ljc1NiAzNy43NiAwIDIwLjgxNiAxNi45MzggMzcuNzUzIDM3Ljc1NiAzNy43NTNINTA1LjE4YzcuMjI3IDAgMTMuMDg2IDUuODYgMTMuMDg2IDEzLjA4NSAwIDcuMjI2LTUuODU4IDEzLjA4NS0xMy4wODUgMTMuMDg1eiIvPjxwYXRoIGQ9Ik00NTcuNDY0IDQwMS4xNDJjMC0yNi4zNiAyMS4zNi00Ny43MiA0Ny43Mi00Ny43MnM0Ny43MiAyMS4zNiA0Ny43MiA0Ny43Mi0yMS4zNiA0Ny43Mi00Ny43MiA0Ny43Mi00Ny43Mi0yMS4zNi00Ny43Mi00Ny43MiIvPjwvZz48c3R5bGUgeG1sbnM9IiIgaWQ9ImRhcmstbW9kZS1jdXN0b20tY29sb3IiPgoJCTpyb290ewoJCQktLWJnLWNvbG9yOnJnYmEoMjYsMjYsMjYsMSk7CgkJCS0tdGV4dC1jb2xvcjpyZ2JhKDExMCwxMTAsMTEwLDEpOwoJCQktLWEtY29sb3I6cmdiYSg5MCwxMjAsMTIwLDEpOwoJCQktLWEtdmlzaXRlZC1jb2xvcjpyZ2JhKDEyMCwxMjAsOTAsMSk7CgkJCS0tYS1ob3Zlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDEpOwoJCQktLWlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDAuMik7CgkJCS0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6cmdiYSgxNzMsMjE2LDIzMCwxKTsKCQkJLS1kaWFsb2ctYmctY29sb3I6cmdiYSgzNiwzNiwzNiwwLjk1KTsKCQkJLS1iZy1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNiwyNiwyNiwxKSxyZ2JhKDI2LDI2LDI2LDEpKTsKCQl9Cgk8L3N0eWxlPjwvc3ZnPg==")/></a>&nbsp
 <img src="https://img.shields.io/badge/electron-47848F?style=flat-square&logo=electron&logoColor=white">&nbsp
 <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white">&nbsp
 
</div>

## 구현 내용

## 회고

## 실행 방법
1. 프로젝트를 클론합니다.
```
git clone https://github.com/dngur9801/chat-app.git
```
2. 클론한 프로젝트 내부로 이동합니다.
```
cd chat-app
```
3. 패키지들을 설치 합니다.
```
npm install
```
4. 파이어베이스 관련 api키 설정을 위해 renderer 폴더 하위에 .env파일 생성 후 아래와 같이 입력해 줍니다.(미입력시 에러가 발생 합니다.)
```
# firebase SDK
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_DATABASE_URL=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="",
NEXT_PUBLIC_FIREBASE_APP_ID="",
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""
```
5. 애플리케이션을 실행 합니다.
```
npm run dev
```


