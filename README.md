# 원티드 프리온보딩 12차 - 2주차 과제

## 과제 소개

> 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

이번 과제에서는 [react의 이슈](https://github.com/facebook/react/issues)로 조건이 주어졌습니다.

### 과제 필수 요구 사항

-   이슈 목록 및 상세 화면 기능 구현
-   데이터 요청 중 로딩 표시
-   에러 화면 구현
-   지정된 조건(open 상태만, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

## 배포 주소

<!-- 이미지 & 링크 추가 -->

## 시작 가이드

### 설치

```
$ git clone git@github.com:hyesuhong/wanted-pre-onboarding-week-2.git
$ cd wanted-pre-onboarding-week-2
```

### 로컬 서버 구동

```
$ npm install
$ npm run start
```

-   과제에서 데이터를 받아오는 Github REST API 는 token을 발급하지 않으면 시간 당 60회로 API 호출
    횟수가 제한됩니다.
-   **token 설정**
    -   `.env` 파일 생성 후 `REACT_APP_GITHUB_TOKEN`에 발급 받은 token을 값으로 넣습니다.
    -   token 발급에 관해서는
        [여기](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)를
        참고할 수 있습니다.

## 주요 기능

## 프로젝트 구성

### 디렉토리

### 아키텍처

## 기술 스택

### 언어

### 라이브러리
