---
title : "부트스트랩(Bootstrap) 사용하기"
category :
    - dev
tag :
    - Development
    - Bootstrap
comment : true
author_profile : true
toc : true
---

- [Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com/)
- [Examples · Bootstrap v4.5](https://getbootstrap.com/docs/4.5/examples/)

## CDN 방식 적용하기
CDN : Content Delivery Network
```html
<head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
```

## 다운로드하여 사용하기
다운로드 : [Download · Bootstrap v4.5](https://getbootstrap.com/docs/4.5/getting-started/download/)
- Compiled CSS and JS -> 압축풀면 됨
- Source files -> 압축 푼 후, dist 폴더

Bootstrap 을 다운로드하고 압축을 푼 다음, css 와 js 폴더를 서버에 업로드
만약 사용하는 프로젝트내 구조가 다음과 같다면
```
/css
/js
fileName.html
```

- fileName.html

```html
<!doctype html>
<html lang="ko">
  <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Title</title>
	<!-- Bootstrap 의 css 사용 -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
  </head>
  <body>
	<!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  	<!-- Bootstrap 의 javascript 사용 -->
 	<script src="js/bootstrap.min.js"></script>
  </body>
</html>
```
; bootstrap 은 jQuery로 구성되어 있으므로 js 앞에 추가해줘야 함
