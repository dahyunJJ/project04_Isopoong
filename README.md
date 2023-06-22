<img width="100%" src="https://github.com/dahyunJJ/project04_Picnic/assets/117347407/4d7704bb-0e5f-4ded-8595-99291d126412">

## project04_Isopoong
> 팀프로젝트 <br/>
> 팀원 : 이상희 <br/>
> 한국문화정보원에서 제공하는 공공 데이터와 지도 API를 활용하여 <b>React를 기반</b>으로 만든 반응형 웹사이트 <br/>
> 어린 자녀가 있는 부모님 또는 영유아들을 돌보는 시설의 보조 교사들을 주 사용층으로 제작했습니다. <br/>

### 프로젝트의 목적
> 1. React와 Redux의 숙련도 향상을 위해 <br/>
> 2. 카카오맵 지도 API를 활용해서 문화시설의 위치를 쉽게 파악할 수 있도록 정보를 제공 <br/>
> 3. 전국의 유아 동반 문화시설에 대한 정보를 한눈에 파악할 수 있도록 제공하는 것이 목적입니다. <br/>

### 프로젝트 내 역할
> 분석 및 기획 : 100% <br>
> 발표자료(ppt) 작성 : 100% <br>
> 디자인 : 100% <br>
> 코딩 : 100% <br>

### 기술 스택
> <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white"/> <br/>
> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <br/>

> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/> <br/>
> <img src="https://img.shields.io/badge/slack-4A154B?style=flat&logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=flat&logo=notion&logoColor=white"/> <br/>
> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Font Awesome-528DD7?style=flat&logo=Font Awesome&logoColor=white"/> <br/>

### 이슈 발생 및 해결
- 활용하고자 하는 데이터를 API로 불러오려 했으나 양이 너무 많아서 한번에 3000개 이상 불러오지 못하는 이슈가 발생했습니다. 그래서 함께 제공되는 CSV 파일로 다운받은 후, JSON 파일로 변환하는 작업을 거쳐 데이터를 활용했습니다.

```
const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('변경할파일명.CSV')
  .pipe(csv())
  .on('data', (data) => {
    results.push(data);
  })
  .on('end', () => {
    const jsonString = JSON.stringify(results, null, 2);

    // 파일 쓰기
    fs.writeFile('data.json', jsonString, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('완료');
      }
    });
  });
```

### 약식 기획서
#### [📌 약식 기획서 링크](https://docs.google.com/presentation/d/1xqMjxz6jWLzUjv6CZ7LO_881BwjtM9TBecfHwJVGBpo/edit?usp=sharing)
<img width="60%" src="https://github.com/dahyunJJ/project04_Picnic/assets/117347407/ce9255ab-4be3-43d8-ae83-895119f51a01">

<br/>

### 디자인 시안
#### [📌 피그마 링크](https://www.figma.com/file/2pXkiubULvIskDhpWSNboc/%EC%A0%95%EB%8B%A4%ED%98%84_%EC%95%84%EC%9D%B4%EC%86%8C%ED%92%8D?type=design&node-id=0%3A1&mode=design&t=O6IyCmULZ52UQIip-1)

<img width="32%" src="https://github.com/dahyunJJ/project04_Picnic/assets/117347407/477f992c-e097-472f-90a2-379e5d03ad88">
<img width="32%" src="https://github.com/dahyunJJ/project04_Picnic/assets/117347407/51a890e1-79f8-44ca-8b48-723e3fb2775b">
<img width="32%" src="https://github.com/dahyunJJ/project04_Picnic/assets/117347407/23f70beb-2bf0-4807-89f9-ddc04d2c1130">

<br/>

### 데모
#### [📌 데모 링크](https://dahyunjj.github.io/project04_Picnic/)
