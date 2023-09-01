# 원티드 프리온보딩 12차 - 2주차 과제

## 과제 소개

> 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

이번 과제에서는 [react github의 이슈](https://github.com/facebook/react/issues)로 조건이
주어졌습니다.

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

-   Github REST API 는 token을 발급하지 않으면 시간 당 60회로 API 호출 횟수가 제한됩니다.
-   **token 설정**
    -   루트 디렉토리에 `.env` 파일 생성 후 `REACT_APP_GITHUB_TOKEN`에 발급 받은 token을 값으로
        넣습니다.
    -   token 발급에 관해서는
        [여기](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)를
        참고할 수 있습니다.

## 주요 기능

### 이슈 리스트

-   `open` 상태의 이슈를 코멘트 순으로 정렬하여 제공합니다.
-   `무한 스크롤`을 적용, 서버에서 응답 받은 헤더의 url에서 rel 값을 통해 다음 페이지가 있는 경우
    다음 페이지의 데이터를 받아옵니다.
-   리스트의 `5n` 번째 마다 광고를 노출합니다.

### 이슈 상세

-   url의 파라미터에서 이슈의 넘버를 받아와 데이터를 요청합니다.
-   서버로부터 받은 데이터에서 본문을 `마크다운` 라이브러리를 사용해, 유저가 볼 수 있는 화면으로
    렌더링합니다.

## 개발 중점 사항

1. 재사용성

    - **Component**
        - 이슈 기본 정보 컴포넌트는 `프로필 사용 유무`를 props로 설정할 수 있어, 리스트와
          상세보기에서 모두 사용할 수 있도록 했습니다.
    - **Hook**
        - `Intersection Observer API` 커스텀 훅
            - 기본 설정과 유사하게 사용할 수 있도록 제작했습니다.
            - Element의 타입과 관계 없이 사용할 수 있도록 `제네릭 타입`을 설정했습니다.
            - `핸들러`를 사용자가 원하는대로 조작할 수 있도록 핸들러의 자유도를 높였습니다.

2. 관심사 분리
    - 컴포넌트
        - **Page**: router와 관련된 정보를 컨테이너에게 전달합니다.
        - **Container**: page에서 전달받은 정보를 활용해 서버로부터 데이터를 받아 하위 컴포넌트를
          조합합니다.
        - **Component**: UI적인 측면만 담당합니다.
    - 데이터
        - recoil과 useGetIssues/useGetIssueDetail 훅을 통해 데이터를 관리합니다.

## 프로젝트 구성

### 디렉토리

```
src
 ┣ apis
 ┣ assets
 ┣ components
 ┣ constants
 ┣ containers
 ┣ hooks
 ┣ pages
 ┣ styles
 ┣ types
 ┗ utils
```

## 기술 스택
