import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

interface EventData {
  buildingNumber: string;
  buildingName: string;
  department: string;
  site: string;
  description: string;
  imageSrc: string;
}
const eventsData: EventData[] = [
  {
    buildingNumber: "100",
    buildingName: "본관",
    department: "경북대 메인페이지",
    site: "https://www.knu.ac.kr/wbbs/wbbs/main/main.action",
    description: "경북대 운영의 중심이자 경북대의 상징",
    imageSrc: "/img/100.webp",
  },
  {
    buildingNumber: "101",
    buildingName: "대강당",
    department: "대강당",
    site: "https://globalplaza.knu.ac.kr/gp",
    description:
      "대구 지역의 주요 공연장. 국내 최고 수준의 음향 및 조명시설을 갖추고 있다.",
    imageSrc: "/img/101.jpg",
  },
  {
    buildingNumber: "102",
    buildingName: "DGB문화센터",
    department: "경북대 미술관, 경북대 평생교육원",
    site: "https://artmuseum.knu.ac.kr/main.html",
    description: "대구은행, 미술관, 평생교육원이 위치한 건물.",
    imageSrc: "/img/102.webp",
  },
  {
    buildingNumber: "103",
    buildingName: "KNU 글로벌플라자",
    department:
      "글로벌플라자, 자율전공부, 창업지원단, 교육혁신본부, 산학협력단",
    site: "https://iac.knu.ac.kr/",
    description:
      "경북대의 새로운 랜드마크. 산업, 교육, 문화, 예술 분야의 발전을 위한 다양한 공간 및 편의시설 제공",
    imageSrc: "/img/103.jpg",
  },
  {
    buildingNumber: "104",
    buildingName: "인문대학",
    department: "인문대학, 국어국문학과, 철학과",
    site: "https://philosophy.knu.ac.kr/",
    description: "인문대학. 인문대학 여러 과의 중심 건물이다.",
    imageSrc: "/img/104.webp",
  },
  {
    buildingNumber: "105",
    buildingName: "영선동",
    department: "인문대학, 국어국문학과, 철학과",
    site: "http://google",
    description: "영선동",
    imageSrc: "/img/105.jpg",
  },
  {
    buildingNumber: "106",
    buildingName: "인문한국진흥관",
    department: "인문대학",
    site: "https://humanities.knu.ac.kr/",
    description: "인문대학. 인문대학의 주요연구소가 있는 곳이다.",
    imageSrc: "/img/106.jpg",
  },
  {
    buildingNumber: "107",
    buildingName: "대학원동",
    department: "대학원동, 영어영문학과, 사학과, 불어불문학과,노어노문학과",
    site: "http://knurussian.kr/",
    description: "일반대학원과 인문대학의 여러 학과가 함께 사용하는 건물이다.",
    imageSrc: "/img/107.webp",
  },
  {
    buildingNumber: "108",
    buildingName: "첨성인미래관",
    department: "대학 입학과, 대학원 입학과",
    site: "https://ipsi2.knu.ac.kr",
    description: "학생미래지원센터를 통해 대학생활 전바에 대한 고민 해결소.",
    imageSrc: "/img/108.webp",
  },
  {
    buildingNumber: "109",
    buildingName: "도서관 휴게실",
    department: "편의점, 패스트푸드점",
    site: "https://www.knu.ac.kr/wbbs/wbbs/contents/",
    description: "편의점과 패스트푸드점이 있는 휴게공간.",
    imageSrc: "/img/109.webp",
  },
  {
    buildingNumber: "110",
    buildingName: "정보화본부",
    department: "정보화본부",
    site: "https://uicc.knu.ac.kr/",
    description:
      "학사관리 시스템 구축 및, 정보서비스 구축의 중심. 사이트를 통해 경북대 계정을 통한 다양한 혜택을 받을 수 있다.",
    imageSrc: "/img/110.png",
  },
  {
    buildingNumber: "111",
    buildingName: "중앙도서관",
    department: "도서관",
    site: "https://kudos.knu.ac.kr/pages/index.htm",
    description:
      "전국 5대 도서관에 들어갈 정도의 장서량을 가진 도서관으로 자료실인 구관과 열람실인 신관으로 나뉜다.",
    imageSrc: "/img/111.webp",
  },
  {
    buildingNumber: "112",
    buildingName: "언어교육센터",
    department: "언어교육센터",
    site: "https://lang.knu.ac.kr/hmpg/main/main.knu",
    description: "경북대 외국어 교육의 중심.",
    imageSrc: "/img/112.jpg",
  },
  {
    buildingNumber: "113",
    buildingName: "향토관",
    department: "기숙사 - 향토관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 향토관이다.",
    imageSrc: "/img/113.jpg",
  },
  {
    buildingNumber: "114",
    buildingName: "첨성관",
    department: "기숙사 - 첨성관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 첨성관이다.",
    imageSrc: "/img/114.jpg",
  },
  {
    buildingNumber: "115",
    buildingName: "IT융합산업빌딩",
    department: "경북대 테크노파크 - IT융합산업빌딩",
    site: "http://knutp.org/?menu_code=184",
    description:
      "경북대 기업육성 전문기관, 테크노파크의 건물 중 하나. 모바일 단말 SW 기업 및 모바일 기업, IT융복합분야 기술집약형 벤처기업이 주로 입주해있다.",
    imageSrc: "/img/115.jpg",
  },
  {
    buildingNumber: "116",
    buildingName: "종합정보센터",
    department: "소프트웨어교육센터",
    site: "https://swedu.knu.ac.kr/main/index.html",
    description:
      "SW 중심 사회 실현을 목표로 전공 및 교양, 융합 교육을 제공하는 시설. SW교양인증제를 통해 인증서 및 장학금을 수여한다.",
    imageSrc: "/img/116.webp",
  },
  {
    buildingNumber: "117",
    buildingName: "테크노빌딩",
    department: "첨단기술융합대학 테크노빌딩",
    site: "http://knutp.org/?menu_code=104",
    description:
      "다양한 분야의 응용기술을 다루는 융합학부. 창업보육센터 졸업기업 또는 졸업에정기업들이 입주하는 테크노 빌딩.",
    imageSrc: "/img/117.jpg",
  },
  {
    buildingNumber: "118",
    buildingName: "약학대학",
    department: "약학과",
    site: "https://pharmacy.knu.ac.kr/",
    description: "경북대학교 약학대학.",
    imageSrc: "/img/118.jpg",
  },
  {
    buildingNumber: "119",
    buildingName: "조형관",
    department: "미술학과, 디자인학과",
    site: "https://vcd.knu.ac.kr/",
    description:
      "경북대학교 예술대학 중 미술학과와 디자인학과가 자리하고 있는 건물이다.",
    imageSrc: "/img/119.webp",
  },
  {
    buildingNumber: "120",
    buildingName: "예술대학",
    department: "예술대학, 음악학과, 국악학과",
    site: "https://kmusic.knu.ac.kr/",
    description:
      "예술대학 건물로 음악학과와 국악학과의 강의실 및 연습실이 자리한 건물이다.",
    imageSrc: "/img/120.jpg",
  },
  {
    buildingNumber: "121",
    buildingName: "조소동",
    department: "미술학과, 디자인학과",
    site: "https://vcd.knu.ac.kr/",
    description:
      "경북대학교 예술대학 중 미술학과와 디자인학과가 자리하고 있는 건물이다.",
    imageSrc: "/img/121.jpg",
  },
  {
    buildingNumber: "122",
    buildingName: "문예관",
    department: "000",
    site: "000",
    description: "여러 학과의 풍물패의 연습공간이다.",
    imageSrc: "/img/122.jpg",
  },
  {
    buildingNumber: "123",
    buildingName: "차고",
    department: "00",
    site: "000",
    description: "차고",
    imageSrc: "/img/123.webp",
  },
  {
    buildingNumber: "124",
    buildingName: "누리관",
    department: "기숙사 - 누리관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 누리관이다.",
    imageSrc: "/img/124.jpg",
  },
  {
    buildingNumber: "125",
    buildingName: "농생대4호관",
    department:
      "식물생명과학전공, 원예과학과, 생물산업기계공학전공, 식품자원경제학과",
    site: "https://frecon.knu.ac.kr/",
    description:
      "농업생명과학대학의 식물생명과학전공, 식품자원경제학과가 자리한 건물이다.",
    imageSrc: "/img/125.jpg",
  },
  {
    buildingNumber: "201",
    buildingName: "농생대1호관",
    department: "농업생명과학대학, 환경생명화학전공, 임학전공, 조경학 전공",
    site: "https://land.knu.ac.kr/",
    description:
      "농업생명과학대학의 환경생명화학전공, 임학전공, 조경학 전공가 자리한 건물이다.",
    imageSrc: "/img/201.webp",
  },
  {
    buildingNumber: "202",
    buildingName: "농생대3호관",
    department:
      "식품생물공학전공, 식품소재공학전공, 식품응용공학전공, 임산공학전공",
    site: "https://wood.knu.ac.kr/",
    description:
      "농업생명과학대학의 식품생물공학전공, 임산공학전공이 자리한 건물이다.",
    imageSrc: "/img/202.webp",
  },
  {
    buildingNumber: "203",
    buildingName: "농생대2호관",
    department:
      "응용생물학전공, 식물의학과, 식물방역학과, 농업토목공학전공, 바이오섬유소재학과",
    site: "https://biofiber.knu.ac.kr/",
    description:
      "농업생명과학대학의 응용생물학전공, 바이오섬유소재학과가 자리한 건물이다.",
    imageSrc: "/img/203.webp",
  },
  {
    buildingNumber: "204",
    buildingName: "출판부",
    department: "경북대학교 출판부",
    site: "https://knupress.com/",
    description: "여러 서적 및 연구자료의 저술 장려 및 출판을 통한 지원시설.",
    imageSrc: "/img/204.webp",
  },
  {
    buildingNumber: "205",
    buildingName: "복현회관",
    department:
      "경북대학교 신문, 스마트모빌리티공학과, 우주공학부, 혁신신약학과",
    site: "https://innopharm.knu.ac.kr/",
    description:
      "경북대학교 신문방송사와 첨단기술융합대학의 2개학과, 1개학부가 있는 건물이다.",
    imageSrc: "/img/205.webp",
  },
  {
    buildingNumber: "206",
    buildingName: "어린이집",
    department: "000",
    site: "000",
    description: "어린이집",
    imageSrc: "/img/206.webp",
  },
  {
    buildingNumber: "207",
    buildingName: "생명공학관(철거)",
    department: "000",
    site: "000",
    description: "000",
    imageSrc: "/img/205.webp",
  },
  {
    buildingNumber: "208",
    buildingName: "제1과학관",
    department: "물리교육과",
    site: "https://physed.knu.ac.kr/",
    description: "물리교육과가 위치한 건물.",
    imageSrc: "/img/208.webp",
  },
  {
    buildingNumber: "209",
    buildingName: "자연과학대학",
    department: "자연과학대학, 수학과, 통계학과, 수학교육과",
    site: "https://mathedu.knu.ac.kr/",
    description: "수학과, 통계학과, 수학교육과가 위치한 건물.",
    imageSrc: "/img/209.webp",
  },
  {
    buildingNumber: "210",
    buildingName: "제2과학관",
    department: "지질학전공, 천문대기과학전공, 지구과학교육과",
    site: "https://earthed.knu.ac.kr/",
    description:
      "지구시스템과학부의 지질학전공, 천문대기과학전공, 지구과학교육과가 위치한 건물.",
    imageSrc: "/img/210.webp",
  },
  {
    buildingNumber: "211",
    buildingName: "국민체육센터",
    department: "체육진흥센터",
    site: "https://sports.knu.ac.kr/main.html",
    description:
      "교직원 및 학생들의 체육진흥과 체육활동을 조장, 발전시키기 위한 시설. 수영장을 포함한다.",
    imageSrc: "/img/211.jpg",
  },
  {
    buildingNumber: "212",
    buildingName: "제2체육관",
    department: "체육진흥센터",
    site: "https://sports.knu.ac.kr/main.html",
    description:
      "교직원 및 학생들의 체육진흥과 체육활동을 조장, 발전시키기 위한 시설.",
    imageSrc: "/img/212.png",
  },
  {
    buildingNumber: "213",
    buildingName: "제1체육관",
    department: "체육교육과",
    site: "https://sport.knu.ac.kr/",
    description:
      "교직원 및 학생들의 체육진흥과 체육활동을 조장, 발전시키기 위한 시설.",
    imageSrc: "/img/213.webp",
  },
  {
    buildingNumber: "214",
    buildingName: "청룡관",
    department: "헬스장, 중앙동아리",
    site: "http://dongari.knu.ac.kr/",
    description:
      "경북대 헬스장을 포함하며, 중앙동아리의 여러 동아리실이 자리한 건물이다.",
    imageSrc: "/img/214.png",
  },
  {
    buildingNumber: "215",
    buildingName: "제1학생회관",
    department: "중앙동아리",
    site: "http://dongari.knu.ac.kr/",
    description:
      "백호관으로 불리며 청룡관과 함께 중앙동아리의 여러 동아리실이 자리한 건물이다.",
    imageSrc: "/img/215.webp",
  },
  {
    buildingNumber: "216",
    buildingName: "학군단",
    department: "ROTC",
    site: "https://www.rotc.or.kr/",
    description: "학생군사교육단.",
    imageSrc: "/img/216.webp",
  },
  {
    buildingNumber: "217",
    buildingName: "생물학관",
    department: "생물학과, 해양학전공, 생물교육과",
    site: "https://bioedu.knu.ac.kr/",
    description:
      "생물학과, 지구시스템과학부 해양학 전공, 생물교육과가 위치한 건물.",
    imageSrc: "/img/217.webp",
  },
  {
    buildingNumber: "218",
    buildingName: "공동실험학습관",
    department: "공동실험실습관",
    site: "https://kpcl.knu.ac.kr/",
    description: "여러 실험 장비 대여 및 분석의뢰를 위한 공간.",
    imageSrc: "/img/218.webp",
  },
  {
    buildingNumber: "219",
    buildingName: "미래융합과학관",
    department: "물리학과, 생명공학부",
    site: "https://biotech.knu.ac.kr/",
    description: "물리학과, 생명공학부가 위치한 건물",
    imageSrc: "/img/219.webp",
  },
  {
    buildingNumber: "301",
    buildingName: "사범대학",
    department: "사범대학",
    site: "https://knutc.knu.ac.kr/",
    description: "사범대학의 여러 학과가 위치한 건물.",
    imageSrc: "/img/301.webp",
  },
  {
    buildingNumber: "302",
    buildingName: "교육대학원",
    department: "교육대학원",
    site: "https://gse.knu.ac.kr/",
    description:
      "중등학교 교사의 교직관을 확립하고 각 전공에 대한 이해를 심화하기 위한 대학원.",
    imageSrc: "/img/302.",
  },
  {
    buildingNumber: "303",
    buildingName: "우당교육관",
    department: "사범대학 GTU, 공동교육혁신센터, 교육연수원",
    site: "https://tcedu.knu.ac.kr/",
    description:
      "보다 나은 교육을 위한 교육과 그 교육의 전파에 대한 실질적 움직임의 건물.",
    imageSrc: "/img/303.webp",
  },
  {
    buildingNumber: "304",
    buildingName: "제4합동강의동",
    department: "학습지원센터, 학생역량진단검사",
    site: "https://kca.knu.ac.kr/",
    description:
      "대학 교육의 질적 향상을 위한 전문적이고 체게적인 지원을 수행.",
    imageSrc: "/img/304.png",
  },
  {
    buildingNumber: "305",
    buildingName: "복지관",
    department: "경북대 생활협동조합",
    site: "http://coop.knu.ac.kr/",
    description: "식당, 편의점, 우편취급국, 서점, 쇼핑플라자들이 입점한 건물.",
    imageSrc: "/img/305.png",
  },
  {
    buildingNumber: "306",
    buildingName: "박물관",
    department: "박물관",
    site: "https://museum.knu.ac.kr/",
    description:
      "대구, 경북지역의 다양한 유물의 보존, 전시, 연구의 중추적인 문화시설",
    imageSrc: "/img/306.jpg",
  },
  {
    buildingNumber: "307",
    buildingName: "생활과학대학",
    department: "생활과학대학",
    site: "https://cohe.knu.ac.kr/",
    description: "생활과학대학이 위치한 건물.",
    imageSrc: "/img/307.webp",
  },
  {
    buildingNumber: "308",
    buildingName: "경상대학",
    department: "경상대학",
    site: "https://cec.knu.ac.kr/",
    description: "경상대학이 위치한 건물.",
    imageSrc: "/img/308.jpg",
  },
  {
    buildingNumber: "309",
    buildingName: "국제경상관",
    department: "경제통상학부, 경영학부",
    site: "https://econ.knu.ac.kr/, https://biz.knu.ac.kr/",
    description: "경제통상학부, 경영학부가 위치한 건물.",
    imageSrc: "/img/309.webp",
  },
  {
    buildingNumber: "310",
    buildingName: "사회과학대학",
    department:
      "사회과학대학, 정치외교학과, 사회학과, 사회복지학부, 미디어커뮤니케이션학과",
    site: "https://mediacomm.knu.ac.kr/",
    description: "사회과학대학이 위치한 건물.",
    imageSrc: "/img/310.png",
  },
  {
    buildingNumber: "311",
    buildingName: "법학전문대학원",
    department: "법학전문대학원",
    site: "https://lawschool.knu.ac.kr/",
    description: "법학전문대학원이 위치한 건물",
    imageSrc: "/img/311.jpg",
  },
  {
    buildingNumber: "401",
    buildingName: "공대2호관",
    department: "건축학전공, 건축공학전공, 토목공학과",
    site: "http://civil.knu.ac.kr/",
    description: "건축학 전공, 건축공학전공, 토목공학과 전공이 위치한 건물.",
    imageSrc: "/img/401.webp",
  },
  {
    buildingNumber: "402",
    buildingName: "공대2A호관",
    department: "건축학전공, 건축공학전공, 토목공학과",
    site: "http://civil.knu.ac.kr/",
    description: "건축학 전공, 건축공학전공, 토목공학과 전공이 위치한 건물.",
    imageSrc: "/img/402.png",
  },
  {
    buildingNumber: "403",
    buildingName: "P/P구조실습실",
    department: "000",
    site: "000",
    description: "P/P구조실습실",
    imageSrc: "/img/403.webp",
  },
  {
    buildingNumber: "404",
    buildingName: "공대1호관",
    department: "공학대학, 응용화학과, 섬유시스템공학과",
    site: "http://textile-eng.knu.ac.kr/",
    description:
      "응용화학과, 섬유시스템공화과가 위치한 건물이며 공학대학 행정실이 위치함.",
    imageSrc: "/img/404.png",
  },
  {
    buildingNumber: "405",
    buildingName: "연구실안전관리센터",
    department: "연구실안전관리센터",
    site: "https://safe.knu.ac.kr/",
    description: "연구실 안전관리 체계 구축을 위해 연구실을 관리하는 센터.",
    imageSrc: "/img/405.webp",
  },
  {
    buildingNumber: "406",
    buildingName: "공대9호관",
    department: "화학공학과, 고분자공학과, 컴퓨터학부",
    site: "https://computer.knu.ac.kr/",
    description: "화학공학과, 고분자공학과, 컴퓨터학부가 위치한 건물.",
    imageSrc: "/img/406.webp",
  },
  {
    buildingNumber: "407",
    buildingName: "화학관",
    department: "화학과, 화학교육과",
    site: "https://chemedu.knu.ac.kr/",
    description: "화학과, 화학교육과가 위치한 건물.",
    imageSrc: "/img/407.webp",
  },
  {
    buildingNumber: "408",
    buildingName: "공대12호관",
    department:
      "공학관식당, 과학기술정책전공, 과학기술실무전공, 과학기술창업전공",
    site: "http://stae.knu.ac.kr/",
    description:
      "바로 앞에 한반도 모양의 지도못이 있으며, 공학관식당이 위치하고 있다.",
    imageSrc: "/img/408.webp",
  },
  {
    buildingNumber: "409",
    buildingName: "공대3호관",
    department: "기계공학부, 금속재료공학과",
    site: "https://metal.knu.ac.kr/",
    description: "기계공학부, 금속재료공학과가 위치한 건물",
    imageSrc: "/img/409.png",
  },
  {
    buildingNumber: "410",
    buildingName: "공대6호관",
    department: "환경공학과",
    site: "http://env.knu.ac.kr/",
    description: "환경공학과가 위치한 건물",
    imageSrc: "/img/410.jpg",
  },
  {
    buildingNumber: "411",
    buildingName: "공대7호관",
    department: "에너지공학부",
    site: "http://energy.knu.ac.kr/",
    description: "에너지공학부가 위치한 건물",
    imageSrc: "/img/411.webp",
  },
  {
    buildingNumber: "412",
    buildingName: "미래창직관",
    department: "",
    site: "",
    description: "구 공대4호관으로 2024년 4월 23일 개관하였다.",
    imageSrc: "/img/412.jpg",
  },
  {
    buildingNumber: "413",
    buildingName: "IT대학3호관",
    department: "IT대학",
    site: "https://it.knu.ac.kr/",
    description: "IT대학",
    imageSrc: "/img/413.webp",
  },
  {
    buildingNumber: "414",
    buildingName: "IT대학4호관",
    department: "컴퓨터학부",
    site: "https://cse.knu.ac.kr/",
    description: "컴퓨터학부가 위치한 건물.",
    imageSrc: "/img/414.webp",
  },
  {
    buildingNumber: "415",
    buildingName: "IT대학융복합공학관",
    department: "컴퓨터학부, 전기공학과",
    site: "https://electric.knu.ac.kr/",
    description: "컴퓨터학부와 전기공학과가 위치한 건물.",
    imageSrc: "/img/415.webp",
  },
  {
    buildingNumber: "416",
    buildingName: "IT대학2호관",
    department: "모바일공학전공",
    site: "https://smobile.knu.ac.kr/",
    description: "모바일공학전공이 위치한 건물.",
    imageSrc: "/img/416.png",
  },
  {
    buildingNumber: "417",
    buildingName: "반도체연구동",
    department: "",
    site: "",
    description: "반도체 연구동.",
    imageSrc: "/img/417.webp",
  },
  {
    buildingNumber: "418",
    buildingName: "IT대학1호관",
    department: "IT대학, 전자공학부, 인공지능학과",
    site: "https://seeai.knu.ac.kr/",
    description: "IT대학 전자공학부와 인공지능학과가 위치한 건물.",
    imageSrc: "/img/418.webp",
  },
  {
    buildingNumber: "419",
    buildingName: "공대8호관",
    department: "신소재공학과, 전기공학과",
    site: "https://electric.knu.ac.kr/",
    description: "신소재공학과, 전기공학과가 위치한 건물.",
    imageSrc: "/img/419.webp",
  },
  {
    buildingNumber: "420",
    buildingName: "수의과대학",
    department: "수의과대학",
    site: "https://vet.knu.ac.kr/",
    description: "수의과 대학이 위치한 건물.",
    imageSrc: "/img/420.webp",
  },
  {
    buildingNumber: "421",
    buildingName: "수의과대학부속동물병원",
    department: "경북대동물병원",
    site: "https://knuvmth.co.kr/",
    description: "수의과 대학 부속동물 병원.",
    imageSrc: "/img/421.png",
  },
  {
    buildingNumber: "501",
    buildingName: "진리관",
    department: "기숙사 - 진리관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 진리관이다.",
    imageSrc: "/img/501.webp",
  },
  {
    buildingNumber: "502",
    buildingName: "봉사관",
    department: "기숙사 - 봉사관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 봉사관이다.",
    imageSrc: "/img/502.webp",
  },
  {
    buildingNumber: "503",
    buildingName: "화목관",
    department: "기숙사 - 화목관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 화목관이다.",
    imageSrc: "/img/503.webp",
  },
  {
    buildingNumber: "504",
    buildingName: "긍지관(철거)",
    department: "",
    site: "",
    description: "",
    imageSrc: "/img/501.webp",
  },
  {
    buildingNumber: "505",
    buildingName: "협동관(철거)",
    department: "",
    site: "",
    description: "",
    imageSrc: "/img/511.png",
  },
  {
    buildingNumber: "506",
    buildingName: "면학관",
    department: "기숙사 - 면학관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 면학관이다.",
    imageSrc: "/img/506.webp",
  },
  {
    buildingNumber: "507",
    buildingName: "성실관(철거)",
    department: "",
    site: "",
    description: "",
    imageSrc: "/img/304.png",
  },
  {
    buildingNumber: "508",
    buildingName: "보람관",
    department: "기숙사 - 보람관",
    site: "https://dorm.knu.ac.kr/",
    description: "기숙사. 보람관이다.",
    imageSrc: "/img/508.webp",
  },
  {
    buildingNumber: "509",
    buildingName: "교수아파트",
    department: "",
    site: "",
    description: "경북대 산격캠퍼스 교수아파트.",
    imageSrc: "/img/509.png",
  },
  {
    buildingNumber: "510",
    buildingName: "변전소",
    department: "",
    site: "",
    description: "변전소",
    imageSrc: "/img/510.png",
  },
  {
    buildingNumber: "511",
    buildingName: "창업보육센터",
    department: "테크노파크 - 창업보육센터",
    site: "http://knutp.org/?menu_code=184",
    description:
      "예비창업자(입주 후 1개월 이내 창업가능자) 및 창업후 3년 이내의 중소기업이 입주해 있는 건물이다.",
    imageSrc: "/img/511.png",
  },
];

const PropertyCard = ({ event }: { event: EventData }) => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link
          href={{
            pathname: "/property/detail",
            query: { id: "test123asdlfkas" },
          }}
        >
          {/* <img src="{imagePath}" alt="" /> */}
          <img
            style={{
              backgroundImage: `url(${event?.imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "295px",
              height: "250px",
            }}
            alt=""
          />
        </Link>
        <Box className={"top-badge"}>
          <Typography>{event?.buildingNumber}</Typography>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{
                pathname: "/property/detail",
                query: { id: "test1243sfdfa" },
              }}
            >
              <Typography>{event?.buildingName}</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>{event?.description}</Typography>
          </Stack>
        </Stack>
        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="" />{" "}
            <Typography>{event?.site}</Typography>
          </Stack>

          <Stack className="option">
            <img src="/img/icons/room.svg" alt="" />{" "}
          </Stack>

          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="" />{" "}
          </Stack>
        </Stack>

        <Stack className="divider"></Stack>
        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              {event?.department}
            </Typography>
          </Stack>

          <Stack className="buttons">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon color="primary" />
            </IconButton>
            <Typography className="view-cnt">20</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PropertyCard;
