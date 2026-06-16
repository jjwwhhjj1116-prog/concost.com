const ASSET = ".";

const state = {
  lang: localStorage.getItem("concost:lang") || "ko",
  heroIndex: 0,
  businessPage: 0,
  page: 1,
  search: ""
};

const labels = {
  ko: {
    tagline: "Construction Cost Consulting",
    heroEyebrow: "대한민국 No.1 견적회사",
    heroTitle: "고객이 원하는 시간에 최상의 결과를 제공합니다",
    heroCopy: "30년 견적 경험을 바탕으로 공사비 컨설팅, 정미물량산출, 개산견적, 현장물량검증, BIM 산출, 건설 클레임 업무를 수행합니다.",
    quote: "견적요청",
    business: "사업소개",
    total: "전체",
    search: "검색",
    keyword: "검색어를 입력해주세요.",
    back: "목록으로",
    submit: "확인",
    saved: "문의가 저장되었습니다. 실제 운영에서는 서버 메일/DB 연동으로 접수됩니다.",
    privacyAgree: "개인정보처리방침에 동의합니다.",
    top: "맨 위로"
  },
  en: {
    tagline: "Construction Cost Consulting",
    heroEyebrow: "Quantity Surveying Specialist",
    heroTitle: "Reliable cost results, delivered when clients need them",
    heroCopy: "CONCOST provides quantity takeoff, conceptual estimates, field quantity reviews, BIM takeoff, cost review, and claim support.",
    quote: "Request Quote",
    business: "Business",
    total: "Total",
    search: "Search",
    keyword: "Search boards",
    back: "Back to list",
    submit: "Submit",
    saved: "Your inquiry was saved locally. Connect backend email/database for production.",
    privacyAgree: "I agree to the privacy policy.",
    top: "Top"
  }
};

const menu = [
  {
    key: "company",
    ko: "회사소개",
    en: "Company",
    href: "/company/aboutus",
    children: [
      ["대표이사 인사말", "CEO Message", "/company/aboutus"],
      ["대표이사 소개", "CEO Profile", "/company/greetings"],
      ["회사연혁", "History", "/company/awards"],
      ["조직도", "Organization", "/company/position"],
      ["오시는길", "Location", "/company/location"]
    ]
  },
  {
    key: "business",
    ko: "사업소개",
    en: "Business",
    href: "/business/bsn1?ca_id=010101",
    children: [
      ["수량산출", "Quantity Takeoff", "/business/bsn1?ca_id=010101", "group"],
      ["개산견적", "Concept Estimate", "/business/bsn1?ca_id=010101"],
      ["현장 물량 검증", "Field Quantity Review", "/business/bsn1?ca_id=010102"],
      ["정미 수량 산출", "Net Quantity Takeoff", "/business/bsn1?ca_id=010103"],
      ["BIM 산출", "BIM Takeoff", "/business/bsn1?ca_id=010104"],
      ["공사비 적정성 검토", "Cost Adequacy Review", "/business/bsn2?ca_id=0102"],
      ["설계변경", "Design Change", "/business/bsn3?ca_id=0103"],
      ["건설클레임", "Construction Claims", "/business/bsn4?ca_id=0104"],
      ["해외견적", "Overseas/FED Estimate", "/business/bsn5?ca_id=0105"]
    ]
  },
  {
    key: "cad",
    ko: "CAD적산",
    en: "CAD Estimate",
    href: "/cad/cad1",
    children: [
      ["CAD적산이란", "About CAD Estimate", "/cad/cad1"],
      ["사용 매뉴얼", "User Manual", "/cad/cad2"]
    ]
  },
  {
    key: "pr",
    ko: "PR센터",
    en: "PR Center",
    href: "/pr/pr1",
    children: [
      ["News", "News", "/pr/pr1"],
      ["특허 / 면허", "Patents / Licenses", "/pr/pr2"],
      ["Partners", "Partners", "/pr/pr3"],
      ["E-Brochure", "E-Brochure", "/pr/pr4"]
    ]
  },
  {
    key: "customer",
    ko: "고객지원",
    en: "Support",
    href: "/customer/cust1",
    children: [
      ["견적요청", "Request Quote", "/customer/cust1"],
      ["채용안내", "Recruiting", "/customer/cust2"],
      ["자료실", "Resources", "/customer/cust3"]
    ]
  }
];

const heroImages = [
  `${ASSET}/images/main/visual0.jpg`,
  `${ASSET}/images/main/visual2.jpg`,
  `${ASSET}/images/main/visual3.jpg`
];

const services = [
  {
    id: "010101",
    title: "개산견적",
    path: "/business/bsn1?ca_id=010101",
    img: `${ASSET}/images/main/bns-tmb1.jpg`,
    thumb: `${ASSET}/images/main/bns-tmb1.jpg`,
    intro: "현장의 설계가 시작되기 전이나 설계의 초기단계에서 사업의 실행가능성을 파악하기 위해 실시합니다.",
    details: [
      "도면이 완성되기 전 평면, 입면, 단면도를 활용하여 수량을 산출하고 공사비를 작성합니다.",
      "3,000건이 넘는 견적 실적을 바탕으로 재료를 협의하여 견적 후 산출합니다.",
      "당사에서 개발한 CAD 적산 시스템을 통해 발주용 수량산출과 금액을 산정합니다.",
      "작업기간은 규모와 종류에 따라 3~7일 소요됩니다."
    ],
    results: [
      ["전남 도립 미술관", "문화시설", "42,868m²", "2019"],
      ["돈의문 박물관마을", "타운하우스", "124,556m²", "2016"],
      ["오시리아 관광단지 아쿠아리움 리조트", "리조트", "64,642m²", "2020"],
      ["세운재정비촉진지구 도시환경정비사업", "공동주택", "127,746m²", "2020"]
    ]
  },
  {
    id: "010102",
    title: "현장 물량 검증",
    path: "/business/bsn1?ca_id=010102",
    img: `${ASSET}/images/main/bns-tmb2.jpg`,
    intro: "현장의 기존 수량을 CAD 적산 시스템으로 검증하여 산출합니다.",
    details: [
      "정확한 수량산출서와 비교 내역으로 작성하여 문제점을 확인할 수 있습니다.",
      "현장에서 공사에 활용할 수 있는 유용한 자료들을 제공합니다.",
      "작업기간은 규모와 종류에 따라 5~10일 소요됩니다."
    ],
    materials: [
      "수량 검토 보고서",
      "마감 관련 제공 자료: 공종별 집계표, 층별 집계표, 산출근거, 수량 분석표, CAD 검토 도면",
      "구조 관련 제공 자료: 총괄 집계표, 부재별 집계표, 산출근거, 부재별 개수/길이/면적 비교 분석표"
    ],
    results: [
      ["안양 호계동 지식산업센터", "업무시설", "88,316m²", "2022"],
      ["성수동 복합시설", "복합시설", "31,812m²", "2021"],
      ["인천 물류센터", "물류시설", "75,424m²", "2021"]
    ]
  },
  {
    id: "010103",
    title: "정미 수량 산출",
    path: "/business/bsn1?ca_id=010103",
    img: `${ASSET}/images/main/bns-tmb3.jpg`,
    intro: "발주사, 시행사의 공사예정 가격 또는 시공자의 공사입찰 금액 등을 알기 위해 실시합니다.",
    details: [
      "기본도면, 실시도면, 시방서 등을 확인하여 정확한 수량을 산출하고 내역서를 작성합니다.",
      "착수 전 도면의 불일치한 부분과 시공 중 발생할 문제점을 사전 검토 및 협의합니다.",
      "내역서와 함께 산출에 쓰인 CAD도면을 제공함으로써 내역서에 대한 정확도를 보장합니다.",
      "작업기간은 규모와 종류에 따라 5~30일 소요됩니다."
    ],
    materials: [
      "수량 검토 보고서",
      "마감 집계표, 층별 집계표, 산출 근거 집계표",
      "구조 총괄 집계표, 층별/부재별 집계표, 산출근거"
    ],
    results: [
      ["고덕 상업업무 복합단지", "업무시설", "96,123m²", "2023"],
      ["부산 공동주택 신축공사", "공동주택", "142,800m²", "2022"],
      ["판교 연구시설", "연구시설", "63,210m²", "2021"]
    ]
  },
  {
    id: "010104",
    title: "BIM 산출",
    path: "/business/bsn1?ca_id=010104",
    img: `${ASSET}/images/main/bns-tmb4.jpg`,
    intro: "2D 도면에 BIM을 활용하여 구조 모델링과 산출근거를 제공합니다.",
    details: [
      "BIM 전문팀이 REVIT을 활용해 구조 모델링을 작성합니다.",
      "고려전산 RC 8.0을 활용해 물량을 산출합니다.",
      "작업기간은 규모와 종류에 따라 5~20일 소요됩니다."
    ],
    materials: [
      "총괄 집계표, 층별/부재별 집계표, 산출근거",
      "평당 물량 분석표, 층별 체크리스트, 배근정보 리스트",
      "전체 모델링 및 층별 모델링 파일 자료"
    ],
    results: [
      ["춘천시 약사동 주상복합", "주상복합", "49,306m²", "2023"],
      ["키움 파이낸셜 스퀘어", "업무시설", "48,820m²", "2023"],
      ["안산 주공 재개발공사", "주거시설", "128,250m²", "2022"]
    ]
  },
  {
    id: "0102",
    title: "공사비 적정성 검토",
    path: "/business/bsn2?ca_id=0102",
    img: `${ASSET}/images/main/bns-tmb5.jpg`,
    subImages: [`${ASSET}/images/sub/bsn2-tmb1.jpg`, `${ASSET}/images/sub/bsn2-tmb2.jpg`],
    intro: "CAD 적산 시스템을 통해 수량을 산출하고 내역서를 작성 후 적정 단가를 적용해 원가계산서로 제공합니다.",
    details: [
      "원가계산서는 직접공사비뿐만 아니라 경비 및 간접공사비 산출을 포함하고 있습니다.",
      "조달 단가를 통한 설계 내역서 작성: 일위대가, 단가 대비표 작성, 공사원가 제비율 적용.",
      "조사 단가를 통한 실행 내역서 작성: 전문업체 적용 단가와 시공사 간접비율 적용.",
      "작업기간은 규모와 종류에 따라 10~30일 소요됩니다."
    ],
    results: [
      ["광주 운암 3단지 주택재건축 정비사업", "아파트", "509,744m²", "2020"],
      ["능곡연합 주택재건축 정비사업", "아파트", "114,771m²", "2020"],
      ["구리수택 E구역 주택재개발 정비사업", "아파트", "93,400m²", "2020"]
    ]
  },
  {
    id: "0103",
    title: "설계변경",
    path: "/business/bsn3?ca_id=0103",
    img: `${ASSET}/images/main/bns-tmb6.jpg`,
    subImages: [`${ASSET}/images/sub/bsn3-tmb1.jpg`],
    intro: "건설과정에서 설계변경이 이루어졌거나 준공 시 발주사와 시공사간 공사비 정산을 위해 물량을 산출하고 내역서를 작성합니다.",
    details: [
      "당초/변경 도면에 따른 수량 산출 후 단가를 적용하여 공사금액을 비교할 수 있는 내역서를 제공합니다.",
      "당초 산출 근거 및 금액 작성, 변경 산출 근거 및 금액 작성, 수량 및 금액 비교 내역 작성.",
      "작업기간은 규모와 종류에 따라 10~30일 소요됩니다."
    ],
    results: []
  },
  {
    id: "0104",
    title: "건설클레임",
    path: "/business/bsn4?ca_id=0104",
    img: `${ASSET}/images/main/bns-tmb7.jpg`,
    subImages: [`${ASSET}/images/sub/bsn4-tmb1.jpg`],
    intro: "특정 현장의 건설비에 관하여 용도에 맞게 세밀한 연구 및 분석을 진행합니다.",
    details: [
      "정확한 수량산출과 내역서를 제공함으로써 분쟁해결에 도움을 드립니다.",
      "당초/변경 도면에 따른 수량 산출 후 단가를 적용하여 공사금액을 비교할 수 있는 내역서를 제공합니다.",
      "작업기간은 규모와 종류에 따라 10~30일 소요됩니다."
    ],
    results: [
      ["속초 복합 상업시설", "복합시설", "19,835m²", "2020"],
      ["청계 한양 아이클래스", "업무시설", "11,272m²", "2020"],
      ["KINTEX 제2전시장", "문화집회시설", "218,890m²", "2019"]
    ]
  },
  {
    id: "0105",
    title: "해외견적",
    path: "/business/bsn5?ca_id=0105",
    img: `${ASSET}/images/main/bns-tmb8.jpg`,
    subImages: [`${ASSET}/images/sub/bsn5-tmb1.jpg`, `${ASSET}/images/sub/bsn5-tmb2.jpg`],
    intro: "25개국 200개 해외 프로젝트 수행 경험을 바탕으로 해외 공사 견적과 FED 공사 견적을 지원합니다.",
    details: [
      "CSI CODE에 따른 수량 산출 및 BOQ를 작성합니다.",
      "FED 양식에 따른 수량산출 후 BOQ 작성 및 WBS 내역서 작성을 지원합니다.",
      "작업기간은 규모와 종류에 따라 10~30일 소요됩니다."
    ],
    results: [
      ["말레이시아 KLCC CITITOWER", "오피스", "399,154m²", "2016"],
      ["필리핀 클락 SSI Residence 빌딩", "오피스", "68,595m²", "2020"],
      ["체코 넥센타이어 유럽공장 2단계공사", "공장", "52,132m²", "2019"],
      ["인도 GLOVIS, MOBIS 공장", "공장", "80,178m²", "2018"],
      ["인도 KMI 기아차 공장", "공장", "214,000m²", "2017"]
    ]
  }
];

const news = [
  [63, "2026 건설기술인의 날 국무총리 표창 수상", "2026.06.10", 23],
  [62, "공무의 판을 바꾸다, 스마트 현장 관리 솔루션", "2026.06.10", 24],
  [61, "컨코스트-토펙엔지니어링 업무 협약(MOU) 체결", "2025.05.28", 1254],
  [60, "현동명박사, 재개발·재건축사업 공사비 분쟁해결책을 제시 (동아경제일보-2025.03.25)", "2025.03.25", 1518],
  [59, "[하우징 발언대]재개발·재건축 공사비분쟁 '표준 내역서'로 해결하자 (대한경제-2025.02.10)", "2025.02.10", 1295],
  [58, "[2023 서울 석세스 대상] '컨설팅 넘버원 기업' 컨코스트, 건설컨설팅 대상 수상", "2023.11.21", 1942],
  [57, "BIM을 통한 수량산출 (주)컨코스트가 앞장섭니다.", "2023.11.15", 3761],
  [56, "컨코스트, 창립 24주년 워크숍 실시 (대한경제-2023.09.04)", "2023.09.04", 2140],
  [55, "컨코스트-BIM을 활용한 골조수량 산출 (대한경제-2023.06.22)", "2023.06.22", 1754],
  [54, "컨코스트, 베트남서 임직원 해외연수 겸 워크숍 개최", "2022.11.17", 2154]
].map(([id, title, date, views], index) => ({
  id,
  no: 56 - index,
  title,
  date,
  views,
  author: "관리자",
  body: "컨코스트의 주요 소식입니다. 원본 CMS 게시판과 동일하게 목록, 검색, 상세보기 흐름을 제공합니다."
}));

const cadManualRows = [
  { id: 1, no: 1, title: "캐드적산 프로그램", date: "21.02.23", views: 2601, author: "관리자", body: "CAD 적산 프로그램 사용 매뉴얼 게시글입니다." }
];

const recruitRows = [
  { id: 3, no: 3, title: "건축 견적(적산) 마감/구조/토목·조경 경력·신입 정규직 모집", date: "25.07.09", views: 543, author: "관리자" },
  { id: 2, no: 2, title: "구조·마감 건축적산 경력사원 모집", date: "21.03.11", views: 1714, author: "관리자" },
  { id: 1, no: 1, title: "구조·마감 건축적산 신입사원 모집", date: "21.03.11", views: 1600, author: "관리자" }
];

const certificates = [
  "가족친화인증서",
  "자동 건축 모델링 및 수량산출 시스템",
  "CAD 도면에 기초한 건축인프라 3D 자동 모델링 시스템",
  "건축 및 건설공사비 견적시스템 및 장치특허증",
  "기술평가 우수기업 인증서",
  "ISO 14001 인증서",
  "ISO 9001 인증서",
  "기업부설연구소 인정서",
  "한국VE협회 회원증",
  "실용신안등록증"
];

function L() {
  return labels[state.lang];
}

function tr(ko, en) {
  return state.lang === "ko" ? ko : en;
}

function routeTo(path) {
  return `#${path.startsWith("/") ? path : `/${path}`}`;
}

function parseRoute() {
  let raw = location.hash.replace(/^#/, "") || "/";
  if (!raw.startsWith("/")) raw = `/${raw}`;
  const [pathPart, queryPart = ""] = raw.split("?");
  let path = pathPart.replace(/^\/kor\//, "/").replace(/^\/eng\//, "/");
  if (path === "/index.html") path = "/";
  return { path, query: new URLSearchParams(queryPart) };
}

function activeKey(path) {
  if (path.startsWith("/company")) return "company";
  if (path.startsWith("/business")) return "business";
  if (path.startsWith("/cad")) return "cad";
  if (path.startsWith("/pr")) return "pr";
  if (path.startsWith("/customer") || path.startsWith("/doc")) return "customer";
  return "";
}

function navHtml() {
  const { path } = parseRoute();
  const active = activeKey(path);
  return menu.map(item => `
    <div class="nav-item" data-menu-key="${item.key}">
      <a class="nav-link ${active === item.key ? "active" : ""}" href="${routeTo(item.href)}">${tr(item.ko, item.en)}</a>
    </div>
  `).join("");
}

function megaHtml() {
  return `
    <div class="mega-menu" data-mega-menu>
      <div class="mega-inner">
        ${menu.map(item => `
          <section class="mega-column" data-mega-key="${item.key}">
            <a class="mega-title" href="${routeTo(item.href)}">${tr(item.ko, item.en)}</a>
            <div class="mega-links">
              ${item.children.map(child => {
                if (child[3] === "group") return "";
                return `<a href="${routeTo(child[2])}">${tr(child[0], child[1])}</a>`;
              }).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </div>
  `;
}

function drawerHtml() {
  return `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="drawer" aria-label="Mobile menu">
      <div class="drawer-head">
        <a class="brand" href="${routeTo("/")}">
          <img class="brand-logo" src="${ASSET}/images/layout/concost-logo-horizontal.png" alt="CON COST">
        </a>
        <button class="icon-button" type="button" data-close-drawer aria-label="Close menu">X</button>
      </div>
      <nav class="drawer-nav">
        ${menu.map(item => `
          <details>
            <summary>${tr(item.ko, item.en)}</summary>
            ${item.children.map(child => {
              if (child[3] === "group") return `<strong class="drawer-group">${tr(child[0], child[1])}</strong>`;
              return `<a href="${routeTo(child[2])}">${tr(child[0], child[1])}</a>`;
            }).join("")}
          </details>
        `).join("")}
      </nav>
    </aside>
  `;
}

function layout(content) {
  return `
    <header class="site-header">
      <div class="topbar">
        <a class="brand" href="${routeTo("/")}">
          <img class="brand-logo" src="${ASSET}/images/layout/concost-logo-horizontal.png" alt="CON COST">
        </a>
        <nav class="desktop-nav" aria-label="Primary">${navHtml()}</nav>
        <div class="header-actions">
          <button class="lang-toggle" type="button" data-lang>${state.lang === "ko" ? "KOR" : "ENG"}</button>
          <button class="menu-button" type="button" data-menu-toggle data-tip="전체 메뉴" aria-label="Open menu"><span></span><span></span><span></span></button>
        </div>
      </div>
      ${megaHtml()}
    </header>
    ${drawerHtml()}
    <main>${content}</main>
    ${footerHtml()}
    <button class="gotop" type="button" data-top aria-label="${L().top}">↑</button>
  `;
}

function footerHtml() {
  return `
    <footer class="site-footer">
      <div class="footer-links">
        <div class="container">
          <div>
            <a href="${routeTo("/pr/pr1")}">PR센터</a>
            <a href="${routeTo("/customer/cust1")}">고객지원</a>
            <a href="${routeTo("/company/location")}">오시는길</a>
            <a href="${routeTo("/doc/antiemail")}">이메일무단수집거부</a>
            <a href="${routeTo("/doc/private")}">개인정보처리방침</a>
          </div>
          <div class="sns">
            <a href="#" aria-label="Facebook">f</a>
            <a href="https://www.youtube.com/channel/UCiUVqgF9TAgkL36F-w4CGcg" target="_blank" rel="noreferrer">Y</a>
            <a href="https://www.instagram.com/gongsabi_/" target="_blank" rel="noreferrer">I</a>
          </div>
        </div>
      </div>
      <div class="footer-body">
        <address>
          COMPANY : CONCOST CO.,Ltd<br>
          CEO : David Hyun · 사업자등록번호 : 215-86-08383<br>
          TEL : 02.2203.1463 · FAX : 02.2203.1464<br>
          개인정보보호책임자 : 강동균 · JOBS : kdk1225@con-cost.com<br>
          ADDRESS : 5F, Songwon Building, 6, Baekjegobun-ro 37-Gil, Songpa-gu, Seoul
        </address>
        <div>COPYRIGHT(c) 2018 CONCOST ALL RIGHT RESERVED</div>
      </div>
    </footer>
  `;
}

function homePage() {
  return layout(`
    <section class="hero original-hero">
      <div class="hero-bg" style="background-image:url('${heroImages[state.heroIndex]}')"></div>
      <div class="hero-grid-lines"></div>
      <div class="hero-title-block">
        <img class="hero-symbol" src="${ASSET}/images/main/vis-tit.png" alt="">
        <h1>고객이 원하는 시간에 최상의 결과를 제공하자</h1>
        <p>20여 년간의 경험을 바탕으로 최고를 꿈꾸며 세계 1위 견적기업을 만들겠습니다.</p>
      </div>
      <ul class="visual-menu">
        ${[
          ["mn1", "수량산출", "개산견적, 내역 작성, 현장<br>물량 검증, 정미 수량 산출, BIM 산출", "/business/bsn1?ca_id=010101", "vis-ico1.png"],
          ["mn2", "설계변경", "당초 / 변경 수량 산출 및<br>공사비 정산", "/business/bsn3?ca_id=0103", "vis-ico2.png"],
          ["mn3", "해외/FED견적", "해외공사 BOQ작성<br>FED 내역 및 WBS내역서 작성", "/business/bsn5?ca_id=0105", "vis-ico3.png"],
          ["mn4", "공사비 적정성 검토", "설계 예가 및 현장 실행가로 된<br>원가계산서 작성 및 검토", "/business/bsn2?ca_id=0102", "vis-ico4.png"],
          ["mn5", "건설클레임", "공사비 분쟁과 관련된<br>수량 산출 및 감정", "/business/bsn4?ca_id=0104", "vis-ico5.png"]
        ].map(item => `
          <li class="${item[0]}">
            <a href="${routeTo(item[3])}" class="visual-link" aria-label="${item[1]}"></a>
            <img src="${ASSET}/images/main/${item[4]}" class="visual-icon" alt="">
            <strong>${item[1]}</strong>
            <span>${item[2]}</span>
            <i></i>
          </li>
        `).join("")}
      </ul>
      <div class="hero-pager"><button class="active"></button><button></button><button></button></div>
      <img class="hero-scroll" src="${ASSET}/images/main/vis-scroll.png" alt="">
    </section>
    <section class="section business-section">
      <div class="container">
        <div class="business-head">
            <h2>CONCOST Business</h2>
            <p>개산견적, 현장 물량 검증, 정미 수량 산출, BIM 산출, 공사비 적정성 검토 등 원본 메인 업무 영역을 동일하게 구성했습니다.</p>
        </div>
        <div class="business-stage">
          <div class="business-controls" data-business-controls>
            <button class="carousel-button" type="button" data-business-step="-1" data-tip="이전 업무" aria-label="Previous business">‹</button>
            <button class="carousel-button" type="button" data-business-step="1" data-tip="다음 업무" aria-label="Next business">›</button>
          </div>
          <div class="business-rail" data-business-rail><div class="business-track" data-business-track>${services.map(serviceCard).join("")}</div></div>
        </div>
        <div class="business-dots" data-business-dots></div>
      </div>
    </section>
    <section class="home-lower">
      <div class="container lower-container">
        <div class="banner-pair">
          <a class="feature-banner" href="${routeTo("/cad/cad1")}" style="background-image:url('${ASSET}/images/main/banner1.jpg')">
            <h3>CAD 적산 프로그램이란</h3>
            <p>CAD 도면에 산출 정보들을 입력하여 산출 수량 추적 및 결과 검증이 가능한 당사 개발 프로그램입니다.</p>
          </a>
          <a class="feature-banner" href="${routeTo("/cad/cad2")}" style="background-image:url('${ASSET}/images/main/banner2.jpg')">
            <h3>CAD 적산 사용 매뉴얼</h3>
            <p>작성된 CAD도면을 현장관리 및 운영에 활용할 수 있는 프로그램입니다.</p>
          </a>
        </div>
        <div class="lower-grid">
          <div class="gateway">
            <a class="gate-link" href="${routeTo("/pr/pr2")}"><span class="gate-icon">P</span><strong>특허면허</strong></a>
            <a class="gate-link accent" href="${routeTo("/pr/pr3")}"><span class="gate-icon">B</span><strong>Partners</strong></a>
            <a class="gate-link dark" href="${routeTo("/pr/pr4")}"><span class="gate-icon">E</span><strong>E-Brochure</strong></a>
            <a class="gate-link slate" href="${routeTo("/customer/cust1")}"><span class="gate-icon">Q</span><strong>견적요청</strong></a>
          </div>
          <div class="contact-box">
            <div class="contact-panel"><strong>대표전화</strong><div class="tel">02.2203.1463</div><div>FAX 02.2203.1464, 1468</div></div>
            <a class="recruit-panel" href="${routeTo("/customer/cust2")}"><strong>인재채용</strong><span>CONCOST와 함께 꿈을 키워갈 인재를 기다립니다.</span></a>
          </div>
          <div class="board-card news-card">
            <div class="news-head"><h2>News</h2><a class="news-more" href="${routeTo("/pr/pr1")}" aria-label="More news">+</a></div>
            <ul class="news-list">${news.slice(0, 6).map(item => `<li><a href="${routeTo(`/pr/pr1?idx=${item.id}`)}">${item.title}</a><time>${item.date}</time></li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </section>
  `);
}

function serviceCard(item) {
  return `
    <a class="service-card" href="${routeTo(item.path)}" data-tip="${item.title} 상세보기">
      <img src="${item.img}" alt="">
      <div class="body"><h3>${item.title}</h3><p>${item.intro}</p><span class="more-view">MORE VIEW</span></div>
    </a>
  `;
}

function subShell(sectionKo, sectionEn, titleKo, titleEn, copyKo, copyEn, visual, body) {
  return layout(`
    <section class="sub-hero" style="--sub-image:url('${ASSET}/images/sub/${visual}')">
      <div class="container">
        <div class="breadcrumb"><span>HOME</span><span>${tr(sectionKo, sectionEn)}</span><span>${tr(titleKo, titleEn)}</span></div>
        <div class="sub-title"><h1>${tr(titleKo, titleEn)}</h1><p>${tr(copyKo, copyEn)}</p></div>
      </div>
    </section>
    <section class="section"><div class="container">${body}</div></section>
  `);
}

function companyPage(path) {
  if (path === "/company/greetings") {
    return subShell("회사소개", "Company", "대표이사 소개", "CEO Profile", "대표이사 현동명 약력과 주요 활동입니다.", "CEO profile.", "sub-visual1.jpg", `
      <div class="grid-2">
        <img class="asset-page-image" src="${ASSET}/images/sub/greetings-img1.jpg" alt="대표이사 소개">
        <div class="info-card">
          <h3>주식회사 컨코스트 대표이사 현동명</h3>
          <ul class="origin-list">
            <li>한성고, 홍익대 건축학과 졸업</li>
            <li>쌍용건설 건축견적부 및 국내외 현장 근무</li>
            <li>한양대학교 강사 "건축 적산 실습"</li>
            <li>해외건설협회 강사 "해외 입찰 실무 과정"</li>
            <li>삼성, 두산, 한진중공업, 조달청 등 기업체 견적 교육 강사</li>
            <li>조달청 최저가 입찰금액 적정성 심사위원, LH 심의 위원, 서울시 교육청 설계 심의 위원</li>
          </ul>
        </div>
      </div>
    `);
  }
  if (path === "/company/awards") {
    return subShell("회사소개", "Company", "회사연혁", "History", "컨코스트의 주요 연혁입니다.", "Company history.", "sub-visual1.jpg", `
      <img class="asset-page-image wide" src="${ASSET}/images/sub/history.jpg" alt="회사연혁">
      <ul class="timeline">
        ${[
          ["2023", "제15회 2023 서울 석세스대상 경제부문 컨설팅대상"],
          ["2021", "한국건축시공학회 기술상 수상, 건설기술인의 날 국토교통부장관 표창 수상"],
          ["2020", "현장기술자를 위한 건축견적이야기 발간, 현장 물량 시스템 개발"],
          ["2019", "상호명 변경 (주)컨코스트"],
          ["2017", "베트남 VIETQS 설립"],
          ["2016", "ISO 9001, 14001 인증"],
          ["2014", "CAD적산 프로그램 저작권 등록"],
          ["2011", "기업부설연구소 설립"]
        ].map(item => `<li><strong>${item[0]}</strong><span>${item[1]}</span></li>`).join("")}
      </ul>
    `);
  }
  if (path === "/company/position") {
    return subShell("회사소개", "Company", "조직도", "Organization", "컨코스트 조직도입니다.", "Organization chart.", "sub-visual1.jpg", `
      <picture>
        <source media="(max-width: 680px)" srcset="${ASSET}/images/sub/m-position.jpg">
        <img class="asset-page-image wide" src="${ASSET}/images/sub/position.jpg" alt="조직도">
      </picture>
    `);
  }
  if (path === "/company/location") {
    return subShell("회사소개", "Company", "오시는길", "Location", "서울 송파구 백제고분로46길 18 5층", "Location.", "sub-visual1.jpg", `
      <img class="asset-page-image wide" src="${ASSET}/images/sub/location.jpg" alt="오시는길">
      <div class="grid-3">
        <div class="info-card"><h3>주소</h3><p>서울 송파구 백제고분로46길 18 5층</p></div>
        <div class="info-card"><h3>대표번호</h3><p>02-2203-1463</p></div>
        <div class="info-card"><h3>팩스</h3><p>02-2203-1464</p></div>
      </div>
    `);
  }
  return subShell("회사소개", "Company", "대표이사 인사말", "CEO Message", "컨코스트는 지난 30년 동안 견적이라는 한 길만 걸어온 대한민국 No.1 견적회사입니다.", "CEO message.", "sub-visual1.jpg", `
    <div class="info-card">
      <h3>대표이사 인사말</h3>
      <p>컨코스트를 찾아주신 여러분들 진심으로 환영합니다. 컨코스트는 지난 30년 동안 견적이라는 한 길만 걸어온 대한민국 No.1 견적회사입니다.</p>
      <p>이제 컨코스트는 견적뿐만 아니라, 세계를 무대로 공사비 컨설팅회사로서 새롭게 도약하고자 합니다.</p>
      <p>[인재와 품질을 통한 High Quality 실현]이라는 경영이념 아래 고객만족을 최우선으로 하는 프로젝트 관리, 차별화된 전문인력 양성 및 보유, 풍부한 경험을 바탕으로 축적된 기술 노하우를 제공합니다.</p>
      <p>특히 당사가 직접 개발한 CAD적산 프로그램은 국내 견적업계의 기술력을 한층 업그레이드했다는 평을 받고 있습니다.</p>
      <img src="${ASSET}/images/sub/aboutus-sign.png" alt="대표이사 서명" class="sign-image">
    </div>
  `);
}

function businessPage(path, query) {
  let id = query.get("ca_id") || "";
  if (path.includes("bsn2")) id = id || "0102";
  if (path.includes("bsn3")) id = id || "0103";
  if (path.includes("bsn4")) id = id || "0104";
  if (path.includes("bsn5")) id = id || "0105";
  id = id || "010101";
  const current = services.find(item => item.id === id) || services[0];
  const tabs = services.map(item => `<a class="tab ${item.id === current.id ? "active" : ""}" href="${routeTo(item.path)}">${item.title}</a>`).join("");
  return subShell("사업소개", "Business", current.title, current.title, current.intro, current.intro, "sub-visual2.jpg", `
    <div class="tabs">${tabs}</div>
    <div class="business-detail">
      <div class="info-card">
        <h3>${current.title}</h3>
        <p>${current.intro}</p>
        <ul class="origin-list">${current.details.map(item => `<li>${item}</li>`).join("")}</ul>
        ${current.materials ? `<h3>제공자료</h3><ul class="origin-list">${current.materials.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}
      </div>
      <div class="detail-media">
        <img src="${current.img}" alt="${current.title}">
        ${(current.subImages || []).map(src => `<img src="${src}" alt="${current.title}">`).join("")}
      </div>
    </div>
    <h3 class="block-title">주요실적</h3>
    ${current.results.length ? `<div class="result-grid">${current.results.map(row => `
      <div class="result-card">
        <strong>${row[0]}</strong>
        <span>용도/위치 ${row[1]}</span>
        <span>연면적/대지면적 ${row[2]}</span>
        <span>연도 ${row[3]}</span>
      </div>
    `).join("")}</div>` : `<div class="empty">등록된 주요실적이 없습니다.</div>`}
  `);
}

function cadPage(path) {
  if (path.endsWith("cad2")) {
    const detailId = Number(parseRoute().query.get("idx"));
    if (detailId) return simpleDetail("CAD적산", "CAD Estimate", "사용 매뉴얼", cadManualRows[0], "/cad/cad2", "sub-visual3.jpg");
    return subShell("CAD적산", "CAD Estimate", "사용 매뉴얼", "User Manual", "CAD적산 프로그램 게시판입니다.", "CAD manual board.", "sub-visual3.jpg", boardContent(cadManualRows, "/cad/cad2"));
  }
  return subShell("CAD적산", "CAD Estimate", "CAD적산이란", "About CAD Estimate", "20여 년간의 견적 경험을 바탕으로 개발한 당사 고유의 프로그램입니다.", "CAD estimate program.", "sub-visual3.jpg", `
    <p class="info-card"><strong>CAD적산 프로그램</strong>은 CAD 도면에 수량산출 정보를 입력하여 CAD상에서 산출 수량을 확인하고 검증하여 작성된 CAD도면을 현장관리 및 운영에 활용할 수 있는 프로그램입니다.</p>
    <h3 class="block-title">프로그램의 특장점</h3>
    <div class="grid-3">
      ${[
        ["cad1-img1.png", "산출 수량 확인", "도면이 아무리 복잡해도 CAD상에서 산출 수량을 확인할 수 있다."],
        ["cad1-img2.png", "산출정보 작성", "산출 정보를 도면에 표로 작성해준다."],
        ["cad1-img3.png", "간단 명령어", "산출된 위치를 명령어 하나로 CAD도면상에서 확인할 수 있다."],
        ["cad1-img4.png", "도면 변경 위치 확인", "작성된 도면들을 오버랩시켜 도면 변경 위치를 바로 확인할 수 있다."],
        ["cad1-img5.png", "산출 값 확인", "결과값을 도면에 표현하여 도면상에서 산출 값을 확인할 수 있다."],
        ["cad1-img6.png", "정산시 분쟁 방지", "산출 도면을 현장에서 수량 정산에 활용하므로 업체 정산시 분쟁을 방지할 수 있다."]
      ].map(item => `<div class="info-card cad-feature"><img src="${ASSET}/images/sub/${item[0]}" alt=""><h3>${item[1]}</h3><p>${item[2]}</p></div>`).join("")}
    </div>
    <div class="contact-panel" style="margin-top:18px"><strong>프로그램 문의</strong>TEL 02-2203-1463 · MAIL sjlee@con-cost.com <a class="button secondary" href="${routeTo("/customer/cust1")}">온라인문의</a></div>
  `);
}

function prPage(path, query) {
  if (path === "/pr/pr2") {
    return subShell("PR센터", "PR Center", "특허 / 면허", "Patents / Licenses", "특허와 인증서 목록입니다.", "Patents and licenses.", "sub-visual4.jpg", `
      <div class="board-tools"><span>전체 <strong>${certificates.length}</strong>건</span></div>
      <div class="certificate-grid">${certificates.map(name => `<div class="info-card"><h3>${name}</h3></div>`).join("")}</div>
      <div class="pagination"><button class="active">1</button><button>2</button><button>&gt;&gt;</button></div>
    `);
  }
  if (path === "/pr/pr3") {
    return subShell("PR센터", "PR Center", "Partners", "Partners", "Partners", "Partners.", "sub-visual4.jpg", `<div class="empty">Partners</div>`);
  }
  if (path === "/pr/pr4") {
    return subShell("PR센터", "PR Center", "E-Brochure", "E-Brochure", "E-Brochure", "E-Brochure.", "sub-visual4.jpg", `<div class="empty">E-Brochure</div>`);
  }
  const id = Number(query.get("idx"));
  if (id) return simpleDetail("PR센터", "PR Center", "News", news.find(row => row.id === id) || news[0], "/pr/pr1", "sub-visual4.jpg");
  return subShell("PR센터", "PR Center", "News", "News", "News 게시판입니다.", "News board.", "sub-visual4.jpg", boardContent(news, "/pr/pr1"));
}

function customerPage(path, query) {
  if (path === "/customer/cust2") {
    const id = Number(query.get("idx"));
    if (id) return simpleDetail("고객지원", "Support", "채용안내", recruitRows.find(row => row.id === id) || recruitRows[0], "/customer/cust2", "sub-visual5.jpg");
    return subShell("고객지원", "Support", "채용안내", "Recruiting", "채용공고와 인재상 안내입니다.", "Recruiting.", "sub-visual5.jpg", `
      <div class="section-head"><h2>채용공고</h2><a class="button ghost" href="#">입사지원서 양식 다운로드</a></div>
      ${boardContent(recruitRows, "/customer/cust2", false)}
      <h3 class="block-title">인재상</h3>
      <div class="grid-3">
        ${[
          ["cust2-tmb1.jpg", "고객 지향적인 자세", "고객의 니즈를 파악하고 고객만족을 최우선으로 하는 인재"],
          ["cust2-tmb2.jpg", "강한 자신감과 주체의식", "전문지식에 자신감을 갖고 주체적으로 문제를 해결하는 인재"],
          ["cust2-tmb3.jpg", "긍정적이고 유연한 태도", "급변하는 흐름을 빠르게 파악하고 긍정적으로 주도할 수 있는 인재"]
        ].map(item => `<div class="info-card cad-feature"><img src="${ASSET}/images/sub/${item[0]}" alt=""><h3>${item[1]}</h3><p>${item[2]}</p></div>`).join("")}
      </div>
      <div class="info-card" style="margin-top:18px"><h3>인재채용</h3><p>(주)컨코스트는 세계를 무대로 글로벌한 열정을 가진 인재를 기다립니다. 지금 도전하세요!</p><p>지원분야: 기술부 마감, 구조, 토목/조경, BIM · 제출처: kdk1225@con-cost.com</p></div>
    `);
  }
  if (path === "/customer/cust3") {
    return subShell("고객지원", "Support", "자료실", "Resources", "자료실 게시판입니다.", "Resources board.", "sub-visual5.jpg", `
      <div class="board-tools"><span>전체 <strong>0</strong>건</span>${searchForm()}</div>
      <table class="board-table"><thead><tr><th>번호</th><th>제목</th><th>작성일</th><th>조회</th><th>다운로드</th></tr></thead><tbody><tr><td colspan="5">등록된 자료가 없습니다.</td></tr></tbody></table>
    `);
  }
  return quotePage();
}

function policyPage(path) {
  const isPrivate = path.endsWith("private");
  return subShell("약관 및 정책", "Policy", isPrivate ? "개인정보처리방침" : "이메일무단수집거부", isPrivate ? "Privacy Policy" : "Email Collection Policy", "약관 및 정책 페이지입니다.", "Policy page.", "sub-visual5.jpg", `
    <div class="info-card">
      <h3>${isPrivate ? "개인정보처리방침" : "이메일무단수집거부"}</h3>
      <p>${isPrivate ? "(주)컨코스트는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 고충을 원활하게 처리할 수 있도록 개인정보처리방침을 두고 있습니다." : "본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다."}</p>
    </div>
  `);
}

function boardContent(rows, basePath, wrap = true) {
  const perPage = 10;
  const term = state.search.trim().toLowerCase();
  const filtered = rows.filter(row => !term || `${row.title} ${row.author || ""} ${row.body || ""}`.toLowerCase().includes(term));
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  state.page = Math.min(state.page, pages);
  const pageRows = filtered.slice((state.page - 1) * perPage, state.page * perPage);
  const html = `
    <div class="board-tools"><span>${L().total} <strong>${filtered.length}</strong>건</span>${searchForm()}</div>
    <table class="board-table">
      <thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회</th></tr></thead>
      <tbody>
        ${pageRows.length ? pageRows.map(row => `
          <tr>
            <td data-label="번호">${row.no || row.id}</td>
            <td data-label="제목" class="title"><a href="${routeTo(`${basePath}?idx=${row.id}`)}">${row.title}</a></td>
            <td data-label="작성자">${row.author || "관리자"}</td>
            <td data-label="작성일">${row.date}</td>
            <td data-label="조회">${Number(row.views || 0).toLocaleString()}</td>
          </tr>
        `).join("") : `<tr><td colspan="5">등록된 자료가 없습니다.</td></tr>`}
      </tbody>
    </table>
    <div class="pagination">${Array.from({ length: pages }, (_, i) => `<button type="button" class="${state.page === i + 1 ? "active" : ""}" data-page="${i + 1}">${i + 1}</button>`).join("")}</div>
  `;
  return wrap ? html : `<div>${html}</div>`;
}

function searchForm() {
  return `
    <form class="search-box" data-board-search>
      <select name="where"><option value="all">전체</option><option value="title">제목</option><option value="member_id">회원아이디</option><option value="name">작성자</option><option value="content">내용</option></select>
      <input name="keyword" value="${escapeHtml(state.search)}" maxlength="30" placeholder="${L().keyword}">
      <button type="submit">${L().search}</button>
    </form>
  `;
}

function simpleDetail(sectionKo, sectionEn, title, item, basePath, visual) {
  return subShell(sectionKo, sectionEn, title, title, `${title} 상세보기입니다.`, `${title} detail.`, visual, `
    <article>
      <div class="detail-head">
        <h2>${item.title}</h2>
        <div class="detail-meta"><span>작성자 ${item.author || "관리자"}</span><span>작성일 ${item.date}</span><span>조회 ${Number(item.views || 0).toLocaleString()}</span></div>
      </div>
      <div class="detail-body"><p>${item.body || "상세 내용 영역입니다."}</p></div>
      <a class="button ghost" href="${routeTo(basePath)}">${L().back}</a>
    </article>
  `);
}

function quotePage() {
  return subShell("고객지원", "Support", "견적요청", "Request Quote", "원본 온라인 문의 폼 항목과 검증 흐름을 재현했습니다.", "Request form.", "sub-visual5.jpg", `
    <form id="quote-form" novalidate>
      <div class="privacy-box">온라인 문의를 통한 상담을 위해 성명, 이메일, 전화번호를 수집합니다. 이용자는 개인정보의 수집/이용에 대한 동의를 거부할 수 있으나 온라인 문의 상담은 제한될 수 있습니다.</div>
      <label class="agree-line"><input type="checkbox" name="agree"> ${L().privacyAgree}</label>
      <div class="form-grid">
        <label for="kind">구분</label>
        <select id="kind" name="kind"><option value="">상담 구분을 선택하세요.</option><option>일반문의</option><option>견적문의</option><option>방문문의</option></select>
        <label for="company">회사명</label><input id="company" name="company">
        <label for="name">작성자</label><input id="name" name="name">
        <label>이메일</label>
        <div class="field-row"><input name="email1" aria-label="email id"><span>@</span><input name="email2" aria-label="email domain"><select name="emailSelect"><option value="">직접입력</option><option>gmail.com</option><option>naver.com</option><option>hanmail.net</option><option>daum.net</option></select></div>
        <label>연락처</label>
        <div class="phone-row"><input name="tel1" maxlength="4" inputmode="numeric"><span>-</span><input name="tel2" maxlength="4" inputmode="numeric"><span>-</span><input name="tel3" maxlength="4" inputmode="numeric"></div>
        <label for="title">제목</label><input id="title" name="title">
        <label for="content">문의내용</label><textarea id="content" name="content"></textarea>
      </div>
      <div class="form-message" data-form-message></div>
      <p style="text-align:center;margin-top:22px"><button class="button" type="submit">${L().submit}</button></p>
    </form>
  `);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]));
}

function render() {
  const { path, query } = parseRoute();
  let html;
  if (path === "/") html = homePage();
  else if (path.startsWith("/company")) html = companyPage(path);
  else if (path.startsWith("/business")) html = businessPage(path, query);
  else if (path.startsWith("/cad")) html = cadPage(path);
  else if (path.startsWith("/pr")) html = prPage(path, query);
  else if (path.startsWith("/customer")) html = customerPage(path, query);
  else if (path.startsWith("/doc")) html = policyPage(path);
  else html = homePage();
  document.getElementById("app").innerHTML = html;
  bindEvents();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function bindEvents() {
  document.querySelector("[data-lang]")?.addEventListener("click", () => {
    state.lang = state.lang === "ko" ? "en" : "ko";
    localStorage.setItem("concost:lang", state.lang);
    render();
  });
  document.querySelector("[data-menu-toggle]")?.addEventListener("click", toggleMenu);
  document.querySelector("[data-menu-toggle]")?.addEventListener("mouseenter", () => openMega(activeKey(parseRoute().path)));
  document.querySelector(".site-header")?.addEventListener("mouseleave", closeMega);
  document.querySelectorAll("[data-menu-key]").forEach(item => {
    item.addEventListener("mouseenter", () => openMega(item.dataset.menuKey));
    item.addEventListener("focusin", () => openMega(item.dataset.menuKey));
  });
  document.querySelectorAll("[data-mega-key]").forEach(item => {
    item.addEventListener("mouseenter", () => setMegaActive(item.dataset.megaKey));
    item.addEventListener("focusin", () => setMegaActive(item.dataset.megaKey));
  });
  document.querySelectorAll("[data-close-drawer]").forEach(el => el.addEventListener("click", closeDrawer));
  document.querySelector("[data-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.querySelectorAll("[data-business-step]").forEach(btn => btn.addEventListener("click", () => {
    moveBusinessCarousel(Number(btn.dataset.businessStep));
  }));
  bindParallax();
  updateBusinessCarousel();
  document.querySelector("[data-board-search]")?.addEventListener("submit", event => {
    event.preventDefault();
    state.search = new FormData(event.currentTarget).get("keyword") || "";
    state.page = 1;
    render();
  });
  document.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", () => {
    state.page = Number(btn.dataset.page);
    render();
  }));
  bindQuoteForm();
}

function toggleMenu() {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    openDrawer();
    return;
  }
  const mega = document.querySelector("[data-mega-menu]");
  if (mega?.classList.contains("open")) closeMega();
  else openMega(activeKey(parseRoute().path));
}

function openMega(key = activeKey(parseRoute().path)) {
  if (window.matchMedia("(max-width: 1024px)").matches) return;
  document.querySelector("[data-mega-menu]")?.classList.add("open");
  document.querySelector("[data-menu-toggle]")?.classList.add("active");
  setMegaActive(key);
}

function closeMega() {
  document.querySelector("[data-mega-menu]")?.classList.remove("open");
  document.querySelector("[data-menu-toggle]")?.classList.remove("active");
  setMegaActive("");
}

function setMegaActive(key) {
  document.querySelectorAll("[data-menu-key]").forEach(el => el.classList.toggle("is-active", el.dataset.menuKey === key));
  document.querySelectorAll("[data-mega-key]").forEach(el => el.classList.toggle("is-active", el.dataset.megaKey === key));
}

function businessVisibleCount() {
  if (window.matchMedia("(max-width: 640px)").matches) return 1;
  if (window.matchMedia("(max-width: 1024px)").matches) return 2;
  return 4;
}

function maxBusinessPage() {
  return Math.max(0, services.length - businessVisibleCount());
}

function setBusinessPage(page) {
  state.businessPage = Math.max(0, Math.min(page, maxBusinessPage()));
  updateBusinessCarousel();
}

function moveBusinessCarousel(step) {
  setBusinessPage(state.businessPage + step);
}

function updateBusinessCarousel() {
  const track = document.querySelector("[data-business-track]");
  const dots = document.querySelector("[data-business-dots]");
  if (!track) return;
  const max = maxBusinessPage();
  state.businessPage = Math.min(state.businessPage, max);
  const firstCard = track.querySelector(".service-card");
  const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
  const offset = firstCard ? (firstCard.getBoundingClientRect().width + gap) * state.businessPage : 0;
  track.style.setProperty("--business-page", state.businessPage);
  track.style.setProperty("--business-offset", `${offset}px`);
  document.querySelectorAll("[data-business-step]").forEach(btn => {
    const step = Number(btn.dataset.businessStep);
    btn.disabled = step < 0 ? state.businessPage === 0 : state.businessPage === max;
  });
  if (dots) {
    dots.innerHTML = Array.from({ length: max + 1 }, (_, index) => `
      <button type="button" class="${index === state.businessPage ? "active" : ""}" data-business-dot="${index}" aria-label="Business page ${index + 1}"></button>
    `).join("");
    dots.querySelectorAll("[data-business-dot]").forEach(btn => btn.addEventListener("click", () => setBusinessPage(Number(btn.dataset.businessDot))));
  }
}

function bindParallax() {
  const hero = document.querySelector(".original-hero");
  if (!hero || hero.dataset.parallaxBound) return;
  hero.dataset.parallaxBound = "true";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const applyScroll = () => {
    const bg = document.querySelector(".original-hero .hero-bg");
    if (!bg) return;
    const rect = hero.getBoundingClientRect();
    const offset = Math.max(-80, Math.min(80, rect.top * -0.08));
    bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
  };
  hero.addEventListener("mousemove", event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty("--parallax-x", `${x * 14}px`);
    hero.style.setProperty("--parallax-y", `${y * 10}px`);
  });
  hero.addEventListener("mouseleave", () => {
    hero.style.setProperty("--parallax-x", "0px");
    hero.style.setProperty("--parallax-y", "0px");
  });
  window.addEventListener("scroll", applyScroll, { passive: true });
  window.addEventListener("resize", updateBusinessCarousel);
  applyScroll();
}

function openDrawer() {
  document.body.classList.add("drawer-open");
  document.querySelector(".drawer")?.classList.add("open");
  document.querySelector(".drawer-backdrop")?.classList.add("open");
}

function closeDrawer() {
  document.body.classList.remove("drawer-open");
  document.querySelector(".drawer")?.classList.remove("open");
  document.querySelector(".drawer-backdrop")?.classList.remove("open");
}

function bindQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;
  const saved = JSON.parse(localStorage.getItem("concost:lastInquiry") || "{}");
  Object.keys(saved).forEach(key => {
    if (form.elements[key] && key !== "agree") form.elements[key].value = saved[key];
  });
  form.elements.emailSelect.addEventListener("change", event => {
    form.elements.email2.value = event.target.value;
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const message = form.querySelector("[data-form-message]");
    const checks = [
      [form.elements.agree.checked, "개인정보처리방침에 동의해주세요."],
      [data.kind, "구분을 선택해주세요."],
      [data.name, "작성자를 입력해주세요."],
      [data.tel1 && data.tel2 && data.tel3, "연락처를 입력해주세요."],
      [/^\d+$/.test(`${data.tel1}${data.tel2}${data.tel3}`), "연락처는 숫자로만 입력해주세요."],
      [/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(`${data.email1}@${data.email2}`), "이메일 형식에 맞게 입력해주세요."],
      [data.title, "제목을 입력해주세요."],
      [data.content, "문의내용을 입력해주세요."]
    ];
    const failed = checks.find(item => !item[0]);
    if (failed) {
      message.className = "form-message error";
      message.textContent = failed[1];
      return;
    }
    localStorage.setItem("concost:lastInquiry", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
    message.className = "form-message ok";
    message.textContent = L().saved;
    form.reset();
  });
}

window.addEventListener("hashchange", () => {
  state.page = 1;
  state.search = "";
  render();
});

setInterval(() => {
  state.heroIndex = (state.heroIndex + 1) % heroImages.length;
  if (parseRoute().path === "/") {
    const bg = document.querySelector(".hero-bg");
    if (bg) bg.style.backgroundImage = `url('${heroImages[state.heroIndex]}')`;
  }
}, 5500);

render();
