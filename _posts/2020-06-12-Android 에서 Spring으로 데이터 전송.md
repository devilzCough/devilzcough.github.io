---
title : "Android 에서 Spring으로 데이터 전송"
category :
    - dev
tag :
    - Development
    - Spring
    - Eclipse
    - eGovFramework
comment : true
author_profile : true
toc : true
---

## Android

**Retrofit** 을 사용하기 위한 설정
참고. [Retrofit](https://square.github.io/retrofit/)

**Retrofit 이란?**
Square 사에서 제공하는 오픈소스 라이브러리
REST API 를 안드로이드에서 쉽게 이용할 수 있게 해주는 도구

### 1. 인터넷 사용권한 추가하기
**AndroidManifest.xml**
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

### 2. 라이브러리 추가하기
**Build.gradle(app)**
```xml
implementation 'com.squareup.retrofit2:retrofit:2.3.0'
implementation 'com.google.code.gson:gson:2.8.5'
implementation 'com.squareup.retrofit2:converter-gson:2.1.0'
```

### 3. Data
아래는 예시 데이터 클래스.
아래 형식으로 전송할 데이터 클래스 만들기
```java
public class User {

    @SerializedName("id")
    String id;
    @SerializedName("password")
    String password;

    public User() {
    }

    public User(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

### 4. 인터페이스 정의
```java
public interface APIInterface {
    @POST("user")
    Call<String> sendUser(@Body User user);
}
```
-> Call<[응답 받을 데이터 형식]> [함수명] (@Body [데이터 객체])

### 5. Retrofit Client 빌더
```java
public class APIClient {

    static Retrofit getClient() {
        return new Retrofit.Builder()
                .baseUrl("http://[IP]:[PORT]/[ProjectName]/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public static APIInterface serverPost() {
        return getClient().create(APIInterface.class);
    }
}
```

### 6. Main
```java
public class MainActivity extends AppCompatActivity {

    // Example
    EditText txtId, txtPassword;
    Button sendBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtId = (EditText) findViewById(R.id.txtId);
        txtPassword = (EditText) findViewById(R.id.txtPassword);

        sendBtn = (Button) findViewById(R.id.btnSend);
        sendBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                User user = new User(
                        txtId.getText().toString(),
                        txtPassword.getText().toString()
                );
                sendNetworkRequest(user);
            }
        });
    }

	  // 데이터 전송 함수
    private void sendNetworkRequest(User user) {

			// [Client_ClassName].[Client_function].[interface_var]
        Call<String> call = APIClient.serverPost().sendUser(user);

        call.enqueue(new Callback<String>() {

			  // 응답 성공 시, 처리
            @Override
            public void onResponse(Call<String> call, Response<String> response) {

                try {
                    Toast.makeText(getApplicationContext(), "서버에 값을 전달했습니다 : " + response.body(), Toast.LENGTH_SHORT).show();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
			 // 응답 실패 시, 처리
            @Override
            public void onFailure(Call<String> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Something went wrong :(", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
```
sendNetworkRequest() -> Retrofit 처리 부분
Enqueue 는 비동기 방식

## Spring [egovframework]

### 1. 프로젝트 만들기
`File -> New -> eGovFrame Web Project`
![img1](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img1.png)

Project name 과 Group Id 채워준 후, Next
![img2](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img2.png)

`Generate Example` 체크 후, Finish
예제 코드를 함께 생성하는 것인데, 체크를 안하면 직접 만들어야 하는게 많아서 처음 접하는 경우는 특히나 체크!
![img3](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img3.png)

전자정부 프레임워크를 처음 사용한다면
`Window -> Perspective -> Open Perspective -> Other…` 에 들어간 후, `eGovFrame` 선택하기
![img4](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img4.png)
![img5](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img5.png)

### 2. Controller 생성

위에서 Generate Example 을 통해 생성한 것들은 샘플 코드이므로, 본인이 사용할 패키지를 생성해주기
`src 폴더 위에서 우클릭 -> New -> Class` 선택
![img6](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img6.png)

사용할 Controller 클래스 명과 패키지 명을 채워주고 Finish
![img7](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img7.png)

생성하면  `src/main/java`  밑에 생성한 패키지 아래 Controller 파일이 생성된 것을 확인 할 수 있음
![img8](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img8.png)
아래 egovframework 로 시작하는 패키지들은 모두 예제 파일로 생성된 것들이다

### 3. 기본 환경 설정
- **context-common.xml**
`src/main/resources` 아래 `egovframework/spring/`  에 context-* 파일들이 있음
여기서 먼저 `context-common.xml` 파일을 열어 base package 를 변경해주기
![img9](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img9.png)

본인이 설정한 패키지 명으로 변경해주면 된다
```xml
<!--변경 전에는 egovframework 로 되어있었음-->
<context:component-scan base-package="com.android2spring">
   <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller" />
</context:component-scan>
```

- **dispatcher-servlet.xml**
그리고 `src/main/webapp/WEB-INF/config/egovframework/springmvc/` 아래에 `dispatcher-servlet.xml` 파일이 있는데 여기도 위 파일과 마찬가지로 base-package 명을 변경해준다
![img10](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img10.png)

```xml
<context:component-scan base-package="com.android2spring">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Service"/>
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Repository"/>
</context:component-scan>
```

그리고 파일 내에 아래 코드 추가해주기
```xml
<mvc:annotation-driven />
```

주석 아래 내용을 해당 위치에 추가해주기
Json 으로 데이터를 받을 때 `Content type 'application/json;charset=UTF-8' not supported` 에러 발생 시, 필요
```xml
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter">
    <property name="webBindingInitializer">
        <bean class="egovframework.example.cmmn.web.EgovBindingInitializer"/>
    </property>
    <!-- @ResponseBody application/json 으로 변경 -->
    <property name="messageConverters">
        <list>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"/>
        </list>
    </property>
</bean>
```

- **web.xml**
`src/main/webapp/WEB-INF/` 아래에 web.xml 파일에 servlet 파일 설정이 있는데
Servlet 이름은 원하는 데로 쓰더라도 [servlet-name]-servlet.xml 이라는 파일을 생성해야 한다. 기본적으로 action 이라는 servlet 이름이 설정되어있는데 테스트 시 계속 경고 같은게 떠서 일단 dispatcher 로 변경해두었다. (dispatcher-servlet.xml 파일은 있으므로)

```xml
<servlet>
	<servlet-name>dispatcher</servlet-name>
	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
	<init-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>/WEB-INF/config/egovframework/springmvc/dispatcher-servlet.xml</param-value>
	</init-param>
	<load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
	<servlet-name> dispatcher </servlet-name>
	<url-pattern>/</url-pattern>
</servlet-mapping>
```

그리고 `<url-pattern>` 은 / 로 변경하였다.
기본적으로 `*.do` 로 되어있는데 .do 형식을 처리하겠다는 의미이다. 다른 패턴을 사용해도 되지만 모든 형식을 처리하기 위해 `/` 로 변경해두었다.
(개인 적으로는 해당 파일에 있는 url-pattern 은 모두 / 로 변경함)

### 4. 테스트
`src/main/webapp/WEB-INF/` 아래에 있는 `index.jsp` 파일에 기존에 써있는 것을 지우고 간단한 코드를 작성했다
```jsp
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hello!</title>
</head>
<body>
	<p>Hello!</p>
</body>
</html>
```

프로젝트 명 위에 `우클릭 -> Run As -> Run on Server` 선택 후,  실행했을 때 다
음과 같이 뜨면 우선 테스트 성공
![img11](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img11.png)

### 5. 데이터를 받기 위한 설정
`pom.xml` 에 json 데이터를 받기위한 dependency 를 추가해야 한다
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.3</version>
</dependency>

<dependency>
    <groupId>org.codehaus.jackson</groupId>
    <artifactId>jackson-mapper-asl</artifactId>
    <version>1.9.13</version>
</dependency>
```

slf4j 를 이용해 logging 을 할 것이라면 아래 dependency 를 추가하고,  properties 에 `<org.slf4j-version>1.7.21</org.slf4j-version>` 도 추가한다
```xml
<properties>
    <spring.maven.artifact.version>4.3.22.RELEASE</spring.maven.artifact.version>
	<egovframework.rte.version>3.9.0</egovframework.rte.version>
	<org.slf4j-version>1.7.21</org.slf4j-version>
</properties>
```

```xml
<dependency>
	<groupId>ch.qos.logback</groupId>
	<artifactId>logback-classic</artifactId>
	<version>1.1.7</version>
</dependency>

<dependency>
	<groupId>org.slf4j</groupId>
	<artifactId>jcl-over-slf4j</artifactId>
	<version>${org.slf4j-version}</version>
	<scope>runtime</scope>
</dependency>
```

그리고 `src/main/resources/egovframework/` 에 `logback.xml` 파일을 만든 후, 다음 내용을 채워준다
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
	<logger name="jdbc.sqlonly"			level="DEBUG"/>
	<logger name="jdbc.sqltiming"		level="INFO"/>
	<logger name="jdbc.audit"			level="WARN"/>
	<logger name="jdbc.resultset"		level="ERROR"/>
	<logger name="jdbc.resultsettable"	level="ERROR"/>
	<logger name="jdbc.connection"		level="INFO"/>

	<appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
		<layout class="ch.qos.logback.classic.PatternLayout">
			<pattern>%d{HH:mm:ss.SSS} [%thread] %-4level [%logger.%method:%line]- %msg%n
			</pattern>
		</layout>
	</appender>

	<appender name="LOGFILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
		<file>/WEB-INF/logback.log</file>
		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBaseRollingPolicy">
			<fileNamePattern>logback.%d{yyyy-MM-dd}.log</fileNamePattern>
			<maxHistory>30</maxHistory>
		</rollingPolicy>
		<encoder>
			<pattern>%d{HH:mm:ss.SSS} [%thread] %-4level [%logger.%method:%line]- %msg %n</pattern>
		</encoder>
	</appender>

	<logger name="myweb" additivity="false">
		<level value="INFO" />
		<appender-ref ref="LOGFILE" />
		<appender-ref ref="CONSOLE" />
	</logger>

	<root>
		<level value="INFO" />
		<appender-ref ref="CONSOLE" />
	</root>
</configuration>
```

### 6. Android 로 부터 오는 데이터 처리 코드 및 테스트
**MainController.java**
```java
@RestController
@RequestMapping(value="/")
public class MainController {

	private static final Logger logger = LoggerFactory.getLogger(MainController.class);

	@PostMapping(value="/user", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> TestPost(@RequestBody Map<String, String> user) throws JsonProcessingException {

		logger.info(user.toString());

		// android 에 보낼 메시지
		Map<String, String> result = new HashMap<>();
		result.put("ID", user.get("id"));
		result.put("PASSWORD", user.get("password"));
		result.put("result", "test OK");

		ObjectMapper objMapper = new ObjectMapper();
		final String json = objMapper.writeValueAsString(result);

		return new ResponseEntity<>(json, HttpStatus.OK);
	}
}
```

안드로이드 앱 및 서버 실행 후, 데이터를 보내면
`{id=[send_id], password=[send_password]}` 와 같은 형식으로 로그가 찍히게 되고,

안드로이드 화면에는 다음과 같이 응답 Toast 가 발생하게 된다
![img12](https://raw.githubusercontent.com/devilzCough/devilzCough.github.io/master/_posts/img/200612/img12.jpg)
