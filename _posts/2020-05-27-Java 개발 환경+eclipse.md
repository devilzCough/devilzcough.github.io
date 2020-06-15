---
title : "Java 개발 환경 + eclipse"
category :
    - dev
tag :
    - Development
    - Java
    - Spring
    - Eclipse
comment : true
author_profile : true
toc : true
---

## Java 개발 환경 + eclipse
1. Jdk 설치
[Java SE - Downloads | Oracle Technology Network | Oracle](https://www.oracle.com/java/technologies/javase-downloads.html)

```
$ java --version
```
-> 정상 설치 여부 확인

- 설치 파일 위치
`/Library/Java/JavaVirtualMachines/jdk-14.0.1.jdk/Contents/home`

- JDK 환경 변수 설정
```
$ sudo vim /etc/profile

# 아래와 같이 추가 후
# 터미널 재실행하여
# java --version 명령어 실행 여부 확인
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-12.0.1.jdk/Contents/Home export CLASSPATH=.:$JAVA_HOME/lib/tools.jar
```


- java 코드 작성해보기
```
$ vim Test.java

// 아래 내용
public class Test { public static void main(String[] args) { System.out.println("Hello Java!"); } }

// compile
$ javac [filename].java
$ java [filename]
```
-> 정상 작동 여부 확인하기


2. Eclipse 사이트에서 설치
[Eclipse Downloads | The Eclipse Foundation](https://www.eclipse.org/downloads/)
![](Java%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20+%20eclipse/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-06-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.59.46.png)

Eclipse IDE 설치에는 두 가지 방법이 있는데
	1. `Download 64bit` 라고 써있는 주황색 버튼을 눌러서 installer 를 다운로드 한 뒤 원하는 IDE 를 선택하는 방법이 있고
	2. 주황색 버튼 아래에 `Download Packages` 버튼을 누르면 아래와 같이 원하는 IDE 를 바로 설치할 수도 있다.
	![](Java%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20+%20eclipse/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-06-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.02.20.png)

3. 2-1을 선택했다면 Installer 실행 후, 본인이 사용할 것과 적합한 IDE 로 설치해야한다.
![](Java%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20+%20eclipse/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-05-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.33.37.png)
- Java 프로젝트
-> Eclipse IDE for Java Developers
- Spring 프로젝트
-> Eclipse IDE for Enterprise Java Developers

#settings/mac #development/spring
