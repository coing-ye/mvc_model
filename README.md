# Node JS MVC 모델을 적용한 게시판의 각 기능 구현

## user 폴더
> 회원가입, 로그인 기능 구현. 회원 정보 수정 및 삭제 기능 추가 중

![image](https://user-images.githubusercontent.com/127190327/230763100-be4e9344-313c-4f4b-bbf7-b3bd3de4b550.png)

* express에 mvc 모델을 적용시켜 구현. 코드 수정, 협업 용이
* MySQL을 이용한 RDBMS 적용. 정규화 원칙 1NF 준수

## 사용 예제
![image](https://user-images.githubusercontent.com/127190327/230763760-aa146ecf-2eb2-41bb-9786-67f13d733912.png)
![image](https://user-images.githubusercontent.com/127190327/230763769-59c7f1f1-07bd-485c-82f1-5ce02873637e.png)
* 중복된 userid 혹은 비어있는 값은 적용되지 않도록 설정
* SQL injection 방지
* userid 중복 체크 시 "select *" 가 아닌 "select count(userid) from pracuser where userid = '입력값'" 을 사용하여 검색 속도 저하 방지

![image](https://user-images.githubusercontent.com/127190327/230763779-2673fa37-11c3-49b2-82d7-af9e41bd1bbd.png)
* 추후 유저 정보 수정 및 삭제 기능 추가 예정


## 개발 환경 설정
Windows:
```sh
pip install node
pip install npm
npm install express
pip install mysql
```

MySQL
```sh
CREATE USER 'user'@'%' IDENTIFIED BY '1234'
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
CREATE DATABASE 'codingon' DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
USE codingon;
CREATE TABLE 'pracuser' (id INT PRIMARY KEY AUTO_INCREMENT, userid VARCHAR(10), pwd VARCHAR(12), name VARCHAR(10));
INSERT INTO 'pracuser' (userid, pwd, name) values("root","4321","루트계정");
```

## 업데이트 내역

* 0.0
  * mvc 모델에서의 회원가입 및 로그인 기능 추가(캐쉬에 로그인 내역 미적용)
