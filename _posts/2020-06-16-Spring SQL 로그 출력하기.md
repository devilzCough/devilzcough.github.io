---
title : "Spring SQL 로그 출력하기"
category :
    - dev
tag :
    - Development
    - Spring
    - Eclipse
comment : true
author_profile : true
toc : true
---

[참고] [JAVA/Spring SQL 로그 출력하기 :: 훈잇 블로그](https://freehoon.tistory.com/113)

콘솔 창에 어떤 SQL이 어떻게 실행되는지 실행되는 SQL 문장이 출력되도록 설정하기

## 의존성 추가
`pom.xml`
```xml
<!-- https://mvnrepository.com/artifact/org.bgee.log4jdbc-log4j2/log4jdbc-log4j2-jdbc4 -->
	<dependency>
	    <groupId>org.bgee.log4jdbc-log4j2</groupId>
	    <artifactId>log4jdbc-log4j2-jdbc4</artifactId>
	    <version>1.16</version>
	</dependency>
```

## 데이터 베이스 설정
`src/main/resources/spring/dataSource-context.xml`
```xml
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
	<!-- 기존 작성 내역 -->
	<property name="driverClassName" value="com.mysql.cj.jdbc.Driver" />
	<property name="url" value="jdbc:mysql://127.0.0.1:3306/[DB_name]?allowPublicKeyRetrieval=true&amp;useSSL=false&amp;serverTimezone=Asia/Seoul" />

	<!-- 수정 내역 -->
	<property name="driverClassName" value="net.sf.log4jdbc.sql.jdbcapi.DriverSpy" />
	<property name="url" value="jdbc:log4jdbc:mysql://127.0.0.1:3306/[DB_name]?allowPublicKeyRetrieval=true&amp;useSSL=false&amp;serverTimezone=Asia/Seoul" />       
	        <property name="username" value="[userID]"></property>
	        <property name="password" value="[Password]"></property>
	</bean>
```

## log4j 설정
`src/main/resources` 에 `log4jdbc.log4j2.properties` 파일 생성하기
(일반 File 로 생성하면 됨)

후에 아래 내역 작성
```properties
log4jdbc.spylogdelegator.name=net.sf.log4jdbc.log.slf4j.Slf4jSpyLogDelegator
```

`log4j.xml` 수정하기
3rdparty Loggers 와 Root Logger 사이에 아래 내용 추가하기
```xml
	<!-- SQL Logger -->
	<logger name="jdbc.sqltiming" additivity="false">
		<level value="warn" />
		<appender-ref ref="console"/>
	</logger>

	<logger name="jdbc.sqlonly" additivity="false">
		<level value="info"/>
		<appender-ref ref="console"/>
	</logger>

	<logger name="jdbc.audit" additivity="false">
		<level value="warn"/>  
		<appender-ref ref="console"/>
	</logger>  

	<logger name="jdbc.resultset" additivity="false">
		<level value="warn" />
		<appender-ref ref="console"/>
	</logger>

	<logger name="jdbc.resultsettable" additivity="false">
		<level value="info"/>  
		<appender-ref ref="console"/>
	</logger>
```
