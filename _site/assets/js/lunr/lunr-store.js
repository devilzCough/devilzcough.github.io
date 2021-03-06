var store = [{
        "title": "HelloWorld!",
        "excerpt":"HelloWorld!   HelloWorld!  ","categories": ["dev"],
        "tags": ["INIT"],
        "url": "http://localhost:4000/dev/test/",
        "teaser":null},{
        "title": "math.h pow() 함수 오차",
        "excerpt":"pow(), sqrt() 와 같은 함수들은 자주 사용되는데, math.h(C언어) 와 cmath(C++) 모두에 정의되어 있다. double pow(double x, double y); x의 y 제곱을 의미한다. 그런데 math.h 에서 연산을 하는데 오차가 발생하는 경우가 있다. 얼마 전 (int)pow(10, 2); 를 계산하는데 99가 나와서 당황.. C/C++ pow() 함수 사용자는 반드시 알아야 하는 주의사항 : 네이버...","categories": ["cs"],
        "tags": ["Algorithm","C","Basic"],
        "url": "http://localhost:4000/cs/math.h-pow()-%ED%95%A8%EC%88%98-%EC%98%A4%EC%B0%A8/",
        "teaser":null},{
        "title": "공백이 포함된 문자열 입력받기 및 EOF",
        "excerpt":"백준 문제 : 11718, 11719 C++ 에서 공백이 포함된 문자열을 입력받기 위해, string 클래스의 getline 함수를 이용해 문제를 해결할 수 있다. getline(입력스트림, 문자열을 저장할 string 객체, 구분자) 이 때, 구분자라는 건, 이 문자에 도달했을 때 추출이 중단되는 문자를 의미한다. ‘\\n’ 가 default 값인 것 같다. [참고] getline 함수가 iostream 에도...","categories": ["cs"],
        "tags": ["Algorithm","C","Basic"],
        "url": "http://localhost:4000/cs/%EA%B3%B5%EB%B0%B1%EC%9D%B4-%ED%8F%AC%ED%95%A8%EB%90%9C-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B8%B0-%EB%B0%8F-EOF/",
        "teaser":null},{
        "title": "Java 개발 환경 + eclipse",
        "excerpt":"1. Jdk 설치 Java SE - Downloads | Oracle Technology Network | Oracle $ java --version -&gt; 정상 설치 여부 확인 설치 파일 위치 /Library/Java/JavaVirtualMachines/jdk-14.0.1.jdk/Contents/home JDK 환경 변수 설정 $ sudo vim /etc/profile # 아래와 같이 추가 후 # 터미널 재실행하여 # java --version 명령어 실행 여부 확인 export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-12.0.1.jdk/Contents/Home...","categories": ["dev"],
        "tags": ["Development","Java","Spring","Eclipse"],
        "url": "http://localhost:4000/dev/Java-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD+eclipse/",
        "teaser":null},{
        "title": "[토비의 스프링] 1.1 초난감 DAO",
        "excerpt":"토비의 스프링 책을 실습해보기 위해 프로젝트 생성 실습 내용 : 1.1 초난감 DAO 실습 환경 : Eclipse / Mac OS Project 생성 1. 아래와 같이 File -&gt; New -&gt; Other 선택 2. Spring -&gt; Spring Legacy Project 선택 후, Next 3. 원하는 프로젝트 명 입력 및 Simple Spring Web Maven...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","Toby"],
        "url": "http://localhost:4000/dev/1.-%ED%86%A0%EB%B9%84%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A7%81-1.1-%EC%B4%88%EB%82%9C%EA%B0%90-DAO/",
        "teaser":null},{
        "title": "Spring Environment [eclipse]",
        "excerpt":"스프링 개발을 위해 필요한 기본 환경 세팅 Jdk Eclipse + STS(Spring tool suite) Project 생성하기 1. JDK Java 개발 환경 + eclipse 편 참고 2. Eclipse for Spring Eclipse IDE for Enterprise Java Developers ** 아 그리고 참고로, 이클립스를 오래전에 설치한 분들은 삭제 후 새로 받아서 설치하는 걸 추천.. 구버전에는...","categories": ["dev"],
        "tags": ["Development","Java","Spring","Eclipse"],
        "url": "http://localhost:4000/dev/Spring-Environment-_eclipse/",
        "teaser":null},{
        "title": "[토비의 스프링] 1.2 DAO의 분리",
        "excerpt":"토비의 스프링 책의 실습 및 정리 실습 내용 : 1.2 DAO의 분리 실습 환경 : Eclipse / Mac OS 이전 실습 내용을 개선하는 작업을 진행 코드 변경이 일어날 때, 필요한 작업을 최소화하고, 변경한 내용이 문제를 일으키지 않도록 하기 위해 분리와 확장 을 고려하여 설계해야 함 -&gt; 관심이 같은 것 끼리...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","Toby"],
        "url": "http://localhost:4000/dev/2.-%ED%86%A0%EB%B9%84%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A7%81-1.2-DAO%EC%9D%98-%EB%B6%84%EB%A6%AC/",
        "teaser":null},{
        "title": "MySQL Installation & Remove_Mac OS",
        "excerpt":"참고: macOS MySQL 설치 및 설정 사용법 Home-brew 이용하기 [Homebrew 설치 및 사용] 편 참고 터미널 열고 다음 명령어 실행 $ brew update $ brew search mysql brew search mysql 명령어를 이용해 자신이 설치할 MySQL 명칭 확인하기 Ex. mysql@5.5 -&gt; MySQL version 5.5 MySQL 설치 # 최신 버전 설치 시,...","categories": ["dev"],
        "tags": ["Development","MySQL","MacOS"],
        "url": "http://localhost:4000/dev/MySQL-Installation-&-Remove_Mac-OS/",
        "teaser":null},{
        "title": "[토비의 스프링] 1.3 DAO의 확장",
        "excerpt":"토비의 스프링 책의 실습 및 정리 실습 내용 : 1.3 DAO의 확장 실습 환경 : Eclipse / Mac OS 이전까지 두 개의 관심사를 상하위 클래스로 분리시킴 데이터 액세스 로직을 어떻게 만들 것인가 DB 연결을 어떤 방법으로 할 것인가 -&gt; 이 두 개의 관심은 변환의 성격이 다름 이 때, 변화의 성격이...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","Toby"],
        "url": "http://localhost:4000/dev/3.-%ED%86%A0%EB%B9%84%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A7%81-1.3-DAO%EC%9D%98-%ED%99%95%EC%9E%A5/",
        "teaser":null},{
        "title": "[Spring 블로그 만들기] 1. 프로젝트 생성 및 설정",
        "excerpt":"[참고] Spring 블로그 만들기 - 1. 프로젝트 생성 및 character encoding setting :: 훈잇 블로그 다음 블로그에서 진행한 프로젝트를 따라하며 공부 중 개발 환경 운영체제 : Mac OS Eclipse : 2020-03 (4.15.0) Tomcat : 9.0 스프링 개발이 처음이라면 다음 문서를 참고하기 Spring 개발을 위한 환경 구축 문서 참고 프로젝트 생성...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","CloneProject"],
        "url": "http://localhost:4000/dev/Spring-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%84%A4%EC%A0%95/",
        "teaser":null},{
        "title": "[Spring 블로그 만들기] 2. DB 설정 Part 1",
        "excerpt":"[참고] Spring 블로그 만들기 - 2. DB 셋팅 및 접속 테스트 Part.1 :: 훈잇 블로그 다음 블로그에서 진행한 프로젝트를 따라하며 공부 중 개발 환경 운영체제 : Mac OS Eclipse : 2020-03 (4.15.0) Tomcat : 9.0 DB : MySQL 8.0.19 데이터 베이스 설치가 안 되어 있다면 다음 문서 참고하기 [MySql Installation...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","CloneProject"],
        "url": "http://localhost:4000/dev/Spring-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-2.-DB-%EC%84%A4%EC%A0%95-Part-1/",
        "teaser":null},{
        "title": "Android 에서 Spring으로 데이터 전송",
        "excerpt":"Android Retrofit 을 사용하기 위한 설정 참고. Retrofit Retrofit 이란? Square 사에서 제공하는 오픈소스 라이브러리 REST API 를 안드로이드에서 쉽게 이용할 수 있게 해주는 도구 1. 인터넷 사용권한 추가하기 AndroidManifest.xml &lt;uses-permission android:name=\"android.permission.INTERNET\"/&gt; 2. 라이브러리 추가하기 Build.gradle(app) implementation 'com.squareup.retrofit2:retrofit:2.3.0' implementation 'com.google.code.gson:gson:2.8.5' implementation 'com.squareup.retrofit2:converter-gson:2.1.0' 3. Data 아래는 예시 데이터 클래스. 아래 형식으로...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","eGovFramework"],
        "url": "http://localhost:4000/dev/Android-%EC%97%90%EC%84%9C-Spring%EC%9C%BC%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%86%A1/",
        "teaser":null},{
        "title": "[Spring 블로그 만들기] 2. DB 설정 Part 2",
        "excerpt":"[참고] Spring 블로그 만들기 - 2. DB 셋팅 및 접속 테스트 Part.2 :: 훈잇 블로그 다음 블로그에서 진행한 프로젝트를 따라하며 공부 중 개발 환경 운영체제 : Mac OS Eclipse : 2020-03 (4.15.0) Tomcat : 9.0 DB : MySQL 8.0.19 Create Table create table posts( pid int auto_increment comment '일련번호' primary...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","CloneProject"],
        "url": "http://localhost:4000/dev/Spring-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-2.-DB-%EC%84%A4%EC%A0%95-Part-2/",
        "teaser":null},{
        "title": "[토비의 스프링] 1.4 제어의 역전(IoC)",
        "excerpt":"토비의 스프링 책의 실습 및 정리 실습 내용 : 1.4 제어의 역전(IoC) 실습 환경 : Eclipse / Mac OS 오브젝트 팩토리 이전 초난감 DAO를 깔끔하게 리팩토링하는 과정에서 UserDaoTest 에 어떤 ConnectionMaker 구현 클래스를 사용할지 결정하는 기능이 포함되었다 UserDaoTest의 본래 목적은 UserDao의 기능이 잘 동작하는지 테스트하려는 것 -&gt; 분리! -&gt; UserDao와...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","Toby"],
        "url": "http://localhost:4000/dev/4.-%ED%86%A0%EB%B9%84%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A7%81-1.4-%EC%A0%9C%EC%96%B4%EC%9D%98-%EC%97%AD%EC%A0%84(IoC)/",
        "teaser":null},{
        "title": "Spring SQL 로그 출력하기",
        "excerpt":"[참고] JAVA/Spring SQL 로그 출력하기 :: 훈잇 블로그 콘솔 창에 어떤 SQL이 어떻게 실행되는지 실행되는 SQL 문장이 출력되도록 설정하기 의존성 추가 pom.xml &lt;!-- https://mvnrepository.com/artifact/org.bgee.log4jdbc-log4j2/log4jdbc-log4j2-jdbc4 --&gt; &lt;dependency&gt; &lt;groupId&gt;org.bgee.log4jdbc-log4j2&lt;/groupId&gt; &lt;artifactId&gt;log4jdbc-log4j2-jdbc4&lt;/artifactId&gt; &lt;version&gt;1.16&lt;/version&gt; &lt;/dependency&gt; 데이터 베이스 설정 src/main/resources/spring/dataSource-context.xml &lt;bean id=\"dataSource\" class=\"org.springframework.jdbc.datasource.DriverManagerDataSource\"&gt; &lt;!-- 기존 작성 내역 --&gt; &lt;property name=\"driverClassName\" value=\"com.mysql.cj.jdbc.Driver\" /&gt; &lt;property name=\"url\" value=\"jdbc:mysql://127.0.0.1:3306/[DB_name]?allowPublicKeyRetrieval=true&amp;amp;useSSL=false&amp;amp;serverTimezone=Asia/Seoul\" /&gt;...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse"],
        "url": "http://localhost:4000/dev/Spring-SQL-%EB%A1%9C%EA%B7%B8-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[Spring 블로그 만들기] 3. 게시판 리스트 화면 만들기",
        "excerpt":"[참고] Spring 블로그 만들기 - 3. 게시판 리스트 화면 만들기 :: 훈잇 블로그 다음 블로그에서 진행한 프로젝트를 따라하며 공부 중 개발 환경 운영체제 : Mac OS Eclipse : 2020-03 (4.15.0) Tomcat : 9.0 DB : MySQL 8.0.19 사용자가 웹 브라우저(View)에서 게시판 목록 선택 -&gt; 브라우저에서 서버로 ‘게시판 리스트 조회’ 요청을...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","CloneProject"],
        "url": "http://localhost:4000/dev/Spring-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-3.-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%ED%99%94%EB%A9%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "부트스트랩(Bootstrap) 사용하기",
        "excerpt":"Bootstrap · The most popular HTML, CSS, and JS library in the world. Examples · Bootstrap v4.5 CDN 방식 적용하기 CDN : Content Delivery Network &lt;head&gt; &lt;link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"&gt; &lt;/head&gt; &lt;body&gt; &lt;script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"&gt;&lt;/script&gt; &lt;/body&gt; 다운로드하여 사용하기 다운로드 : Download · Bootstrap v4.5 Compiled CSS and JS...","categories": ["dev"],
        "tags": ["Development","Bootstrap"],
        "url": "http://localhost:4000/dev/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9(Bootstrap)-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[Spring 블로그 만들기] 4. 글쓰기 화면 만들기",
        "excerpt":"[참고] Spring 블로그 만들기 - 4.글쓰기 화면 만들기 :: 훈잇 블로그 다음 블로그에서 진행한 프로젝트를 따라하며 공부 중 Service 추가 게시판에 작성한 글을 저장할 때 호출할 Service PostService.java 내용 추가하기 public void insertPost(PostVO postVO) throws Exception; PostServiceImpl.java 내용 추가하기 @Override public void insertPost(PostVO postVO) throws Exception { postDAO.insertPost(postVO); } Controller...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","CloneProject"],
        "url": "http://localhost:4000/dev/Spring-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-4.-%EA%B8%80%EC%93%B0%EA%B8%B0-%ED%99%94%EB%A9%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[토비의 스프링] 1.5 스프링의 IoC",
        "excerpt":"토비의 스프링 책의 실습 및 정리 실습 내용 : 1.5 스프링의 IoC 실습 환경 : Eclipse / Mac OS 스프링에서는 스프링이 제어권을 가지고 직접 만들고 관계를 부여하는 오브젝트를 빈(bean) 이라고 함 ; 오브젝트 단위의 애플리케이션 컴포넌트 스프링 빈 스프링 컨테이너가 생성한 관계 설정, 사용 등을 제어해주는 제어의 역전이 적용된 오브젝트를...","categories": ["dev"],
        "tags": ["Development","Spring","Eclipse","Toby"],
        "url": "http://localhost:4000/dev/%ED%86%A0%EB%B9%84%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A7%81-1.5-%EC%8A%A4%ED%94%84%EB%A7%81%EC%9D%98-IoC/",
        "teaser":null}]
