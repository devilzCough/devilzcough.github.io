---
title : "MySQL Installation & Remove_Mac OS"
category :
    - dev
tag :
    - Development
    - MySQL
    - MacOS
comment : true
author_profile : true
toc : true
---

* 참고: [macOS MySQL 설치 및 설정 사용법](https://whitepaek.tistory.com/16)

**Home-brew**  이용하기
[Homebrew 설치 및 사용] 편 참고

1. 터미널 열고 다음 명령어 실행
```powershell
$ brew update
$ brew search mysql
```

2. `brew search mysql` 명령어를 이용해 자신이 설치할 MySQL 명칭 확인하기
Ex. mysql@5.5 -> MySQL version 5.5

3. MySQL 설치
```powershell
# 최신 버전 설치 시,
$ brew install mysql
# 특정 버전 설치 시,
$ brew install mysql@5.5
```
설치 완료 후, `brew list` 를 통해 설치된 목록을 확인할 수 있음

4. MySQL 설정
```powershell
# MySQL 서버 실행
$ mysql.server start
```

만약, 네트워크 연결 허용여부와 관련된 알림창이 뜬다면 ‘허용’을 누르기

```powershell
$ mysql_secure_instrallation
```
-> 해당 명령어 실행 시 아래와 같은 질문이 나옴. 원하는 답변을 선택하면 되는데, 표시한 부분이 본인이 설정한 옵션.

- Would you like to setup VALIDATE PASSWORD component?
Yes - 복잡한 비밀번호 설정
::No - 쉬운 비밀번호 설정::
-> 선택 후, 사용할 비밀번호 입력하기
- Remove anonymous users?
::Yes - 접속하는 경우 “mysql -uroot” 처럼 -u 옵션 필요::
No - 접속하는 경우 “mysql” 처럼 -u 옵션 불필요

- Disallow root login remotely?
::Yes - 원격접속 불가능::
No - 원격 접속 가능

- Remove test database and access to it?
::Yes - Test 데이터베이스 제거::
No - Test 데이터베이스 유지

- Reload privilege tables now? (무조건 Yes)
::Yes - 변경된 권한을 테이블에 적용시킨다::
No - 적용시키지 않는다

5. MySQL 접속
```powershell
$ mysql -uroot -p
Enter password: [위에 설정한 패스워드 입력하기]

# 정상적으로 로그인 된 경우
mysql>
```

```sql
mysql> status;
```
-> 입력 후 characterset 설정이 모두 utf8 인지 확인하기
(utf8이 아니라면 설정을 바꿔주어야 함)
![img1](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200603/img1.png)

6. MySQL 종료
```sql
# 아래 명령어 모두 mysql> 쉘에서 로그아웃하는 명령어
mysql> exit
mysql> quit
```

```powershell
# MySQL 서버 종료 명령어
$ mysql.server stop
```


7. MySQL 삭제 방법

```powershell
$ sudo rm -rf /usr/local/var/mysql
Password: [본인의 맥 비밀번호 입력하기]

$ sudo rm -rf /usr/local/bin/mysql*
$ sudo rm -rf /usr/local/Cellar/mysql
```
-> 명령어 실행 완료 후, PC 를 재부팅하면 완전 삭제가 완료됨

8. MySQL Workbench 설치
UI 툴을 사용하고 싶다면 Workbench 를 설치하여 사용 가능
아래 링크에서 본인 PC 운영체제에 해당하는 설치 파일 다운로드 하기

다운로드 : [MySQL :: Download MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
