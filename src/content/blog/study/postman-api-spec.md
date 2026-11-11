---
title: 'Postman으로 API 명세서 설계하고 공개하기'
description: '회원가입 API 하나를 예로, 성공과 실패의 여러 경우를 Postman 예시로 정리하고 웹 문서로 공개한 과정을 정리했습니다.'
pubDate: '2026-11-13'
category: 'study'
tags: ['Postman', 'API 명세', 'HTTP', '2주 차']
author: 'chewbitdev'
draft: true
---

<!-- TODO 도입: 명세서 표만으로는 "어떤 요청에서 어떤 에러가 나는지"가 안 보였던 문제, 이 글에서 할 것 (두세 문장) -->

## 회원가입 API 하나에도 응답은 여러 가지

<!-- TODO: 같은 API라도 요청에 따라 응답이 달라진다는 설명, 같은 400·409 안에서도 code와 message가 다르다는 점 -->

| 경우 | 상태 | code | message |
|---|---|---|---|
| 성공 | 201 | | `{"id": 1}` |
| 아이디 형식 오류 | 400 | `INVALID_INPUT` | 아이디는 숫자와 영문을 포함한 4~20자리입니다. |
| 비밀번호 재확인 불일치 | 400 | `PASSWORD_MISMATCH` | 비밀번호와 비밀번호 재확인이 일치하지 않습니다. |
| 아이디 중복 | 409 | `DUPLICATE_ID` | 이미 사용중인 아이디 입니다. |
| 닉네임 중복 | 409 | `DUPLICATE_NICKNAME` | 이미 사용중인 닉네임 입니다. |
| 이메일 중복 | 409 | `DUPLICATE_EMAIL` | 이미 사용중인 이메일 입니다. |

## Postman으로 경우별 예시 저장하기

<!-- TODO: Save as Example로 경우마다 예시를 저장하는 방법, 예시 이름 붙이는 규칙 -->

<!-- 이미지 1: 회원가입 요청 아래 예시 6개가 보이는 사이드바
![회원가입 요청 아래에 저장된 성공·실패 예시 목록](../images/postman-api-spec/01-examples.png)
-->

<!-- TODO: 예시 하나를 열면 요청과 응답이 한 쌍으로 남는다는 설명. 이 화면으로 HTTP 요청·응답 구조(메서드, 상태 코드, 헤더, Content-Type)를 짧게 설명 -->

<!-- 이미지 2: 예시 하나(409 닉네임 중복)를 연 화면 - 요청 본문, 상태 코드, 응답 code/message, Content-Type 헤더
![409 닉네임 중복 예시의 요청 본문과 응답](../images/postman-api-spec/02-example-detail.png)
-->

## 웹 문서로 공개하기

<!-- TODO: View documentation → Publish 순서, 공개 전 확인할 것(계정 정보, 토큰, 사내 주소), 공개한 문서 주소 -->

<!-- 이미지 3: 공개된 문서에서 예시를 골라 보는 화면
![공개된 API 문서에서 회원가입 예시를 고르는 화면](../images/postman-api-spec/03-published.png)
-->

## Notion, Swagger와 비교

| 도구 | 여러 실패 경우를 보여 주는 방식 | 한계 |
|---|---|---|
| Notion·Markdown 표 | 표로 직접 적음 | 실제 응답과 맞는지 알 수 없고, 코드가 바뀌어도 그대로 남음. 실행해 볼 수 없음 |
| Swagger | 코드에서 자동 생성, 상태 코드별 응답 | 기본은 상태 코드당 예시 하나. 같은 409를 여러 개로 나누려면 어노테이션이 많아짐. 코드가 있어야 문서가 생김 |
| Postman | 경우마다 예시 저장, 요청과 응답이 한 쌍 | 코드와 따로 관리하므로 바뀌면 다시 저장해야 함 |

<!-- TODO: Postman이 설계 단계에 좋은 이유 - 구현 전에 예시를 먼저 정할 수 있음, Mock Server로 프론트가 먼저 개발 가능, 구현 후 같은 요청으로 바로 검증 -->

## 정리

<!-- TODO: 세 줄 정리, 4주 차 Swagger를 붙이면 둘을 어떻게 나눠 쓸지 -->
