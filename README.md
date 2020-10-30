

# 두軍두軍 상담소

![license](https://img.shields.io/bower/l/react)
![Logo](/Users/iseongbin/workspace/OSAM/readme/logo.png)



<br/>

## 팀소개 및 프로젝트 설명 동영상


<br/>

## 기능 설계

TODO

 - Notion
 - BeeCanvas
 - Figma

<br/>

## 컴퓨터 구성 / 필수 조건 안내


<br/>

## 기술 스택
### Back-end
 -  [Django](https://www.djangoproject.com/)
 - [Graphene](https://graphene-python.org/)
 - [Django GraphQL JWT](https://django-graphql-jwt.domake.io/en/latest/)

<br/>

### Front-end
 -  [React.js](https://reactjs.org/)
 -  [Typescript](https://www.typescriptlang.org/)
 - [GraphQL Relay](https://relay.dev/)

<br/>

### Deploy

* [Docker](https://www.docker.com/)
* [Google Cloud Run](https://cloud.google.com/run)
* [Nginx](https://www.nginx.com/)

<br/>

## 설치 안내 (Installation Process)

* **Python(3.8.5)**, **Node.JS LTS(12.19.0)**, **Go (1.13)** 정도가 설치되어 있어야합니다.

```bash
# Repository Clone
git clone https://github.com/osamhack2020/web_4rmyclinic_yukhaejinmi

# 1) Django Server Setting
cd server
pip install -r requirements.txt
cd clinic
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata fixture.json # To load sample data
python manage.py runserver


# 2) React Client Setting
pwd 				# Web_4rmyClinic_YukHaeJinmi
cd client/react
touch .env.endpoint
# REACT_APP_DEV_SERVER=http://localhost:8000 또는 개발환경에서 사용하는 장고 서버 주소를 입력해야합니다.
npm i
npm run relay -- --watch # watch 모드를 실행하려면 watchman이 설치되어있어야합니다.
npm run dev
		# npm start는 배포되어있는 서버와 연결됩니다.
		# npm run dev는 REACT_APP_DEV_SERVER 에서 실행되고 있는 장고 서버와 연결됩니다.
```

<br/>

## 프로젝트 사용법 (Getting Started)

TODO

<br/>

## 팀 정보 (Team Information)
- 이성빈 (lee@sungbin.dev), Github: [@leesungbin](https://github.com/leesungbin)
- 홍유준 (hyjhyj0901@gmail.com), Github: [@Kick-snare](https://github.com/kick-snare)
- 이준영 (rubinstory@naver.com), Github: [@rubinstory](https://github.com/rubinstory)
- 박동한 (donghanpark@naver.com), Github: [@donghanpark](https://github.com/donghanpark)

<br/>

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)
