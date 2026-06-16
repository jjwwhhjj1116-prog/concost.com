const ASSET = ".";

const state = {
  lang: localStorage.getItem("concost:lang") || "ko",
  heroIndex: 0,
  page: 1,
  search: "",
  searchWhere: "all"
};

const t = {
  ko: {
    tagline: "Construction Cost Consulting",
    nav: ["회사소개", "사업소개", "CAD적산", "PR센터", "고객지원"],
    heroEyebrow: "국내 견적 전문 기업",
    heroTitle: "고객이 원하는 시간에 최상의 결과를 제공합니다",
    heroCopy: "20여 년간 축적한 공사비 컨설팅 경험을 바탕으로 수량산출, 개산견적, 현장 물량 검증, 설계변경과 클레임 대응까지 지원합니다.",
    quote: "견적요청",
    business: "사업소개",
    latest: "News",
    total: "전체",
    search: "검색",
    keyword: "검색어를 입력해주세요.",
    detailBack: "목록으로",
    submit: "확인",
    saved: "문의가 저장되었습니다. 실제 메일 발송이 필요한 경우 백엔드 연동이 필요합니다.",
    privacyAgree: "개인정보처리방침에 동의합니다.",
    goTop: "맨 위로"
  },
  en: {
    tagline: "Construction Cost Consulting",
    nav: ["Company", "Business", "CAD Estimate", "PR Center", "Support"],
    heroEyebrow: "Quantity Surveying Specialist",
    heroTitle: "Reliable cost results, delivered when clients need them",
    heroCopy: "CONCOST supports quantity takeoff, conceptual estimates, field quantity reviews, change orders, overseas BOQ work, and claim-related cost analysis.",
    quote: "Request Quote",
    business: "Services",
    latest: "News",
    total: "Total",
    search: "Search",
    keyword: "Search boards",
    detailBack: "Back to list",
    submit: "Submit",
    saved: "Your inquiry was saved locally. Connect a backend to send email or manage submissions.",
    privacyAgree: "I agree to the privacy policy.",
    goTop: "Top"
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
    ko: "개산견적",
    en: "Concept Estimate",
    path: "/business/bsn1?ca_id=010101",
    img: `${ASSET}/images/main/bns-tmb1.jpg`,
    copyKo: "초기 도면과 기본 조건을 바탕으로 빠르게 예산 규모를 검토합니다.",
    copyEn: "Fast budget checks based on early drawings and project assumptions."
  },
  {
    id: "010102",
    ko: "현장 물량 검증",
    en: "Field Quantity Review",
    path: "/business/bsn1?ca_id=010102",
    img: `${ASSET}/images/main/bns-tmb2.jpg`,
    copyKo: "현장 내역과 도면을 비교해 누락, 중복, 변경 수량을 확인합니다.",
    copyEn: "Compares site quantities with drawings to identify gaps and changes."
  },
  {
    id: "010103",
    ko: "정미 수량 산출",
    en: "Net Quantity Takeoff",
    path: "/business/bsn1?ca_id=010103",
    img: `${ASSET}/images/main/bns-tmb3.jpg`,
    copyKo: "실시설계도서와 시방 기준을 검토해 정확한 산출 근거를 만듭니다.",
    copyEn: "Builds traceable takeoff records from design documents and specifications."
  },
  {
    id: "010104",
    ko: "BIM 구조 수량 산출",
    en: "BIM Structural Takeoff",
    path: "/business/bsn1?ca_id=010104",
    img: `${ASSET}/images/main/bns-tmb4.jpg`,
    copyKo: "모델링 기반 수량과 전통 산출 근거를 함께 검토합니다.",
    copyEn: "Reviews model-based quantities with conventional estimate evidence."
  },
  {
    id: "0102",
    ko: "공사비 적정성 검토",
    en: "Cost Adequacy Review",
    path: "/business/bsn2?ca_id=0102",
    img: `${ASSET}/images/main/bns-tmb5.jpg`,
    copyKo: "수량과 단가를 함께 점검해 발주자와 시공자의 의사결정을 돕습니다.",
    copyEn: "Checks quantities and unit rates for balanced project decisions."
  },
  {
    id: "0103",
    ko: "설계 변경 및 정산",
    en: "Design Change Settlement",
    path: "/business/bsn3?ca_id=0103",
    img: `${ASSET}/images/main/bns-tmb6.jpg`,
    copyKo: "당초와 변경 도면의 차이를 수량과 금액으로 정리합니다.",
    copyEn: "Summarizes drawing changes as quantity and cost impacts."
  },
  {
    id: "0104",
    ko: "건설 클레임",
    en: "Construction Claims",
    path: "/business/bsn4?ca_id=0104",
    img: `${ASSET}/images/main/bns-tmb7.jpg`,
    copyKo: "분쟁 사안에 필요한 산출 근거와 비용 검토 자료를 준비합니다.",
    copyEn: "Prepares cost review material and takeoff evidence for disputes."
  },
  {
    id: "0105",
    ko: "해외 / FED 견적",
    en: "Overseas / FED Estimate",
    path: "/business/bsn5?ca_id=0105",
    img: `${ASSET}/images/main/bns-tmb8.jpg`,
    copyKo: "CSI 코드, BOQ, WBS 형식에 맞춘 해외 프로젝트 견적을 지원합니다.",
    copyEn: "Supports CSI-coded BOQ and WBS estimate formats for overseas work."
  }
];

const news = [
  [63, "2026 건설기술인의 날 국무총리 표창 수상", "2026.06.10", 23],
  [62, "공무의 판을 바꾸다, 스마트 현장 관리 솔루션", "2026.06.10", 24],
  [61, "컨코스트-토펙엔지니어링 업무 협약(MOU) 체결", "2025.05.28", 1254],
  [60, "현동명박사, 재개발·재건축사업 공사비 분쟁해결책을 제시", "2025.03.25", 1518],
  [59, "재개발·재건축 공사비분쟁 표준 내역서 제안", "2025.02.10", 1295],
  [58, "컨설팅 넘버원 기업 컨코스트, 건설컨설팅 대상 수상", "2023.11.21", 1942],
  [57, "BIM을 통한 수량산출, 컨코스트가 앞장섭니다", "2023.11.15", 3761],
  [56, "컨코스트, 창립 24주년 워크숍 실시", "2023.09.04", 2140],
  [55, "컨코스트-BIM을 활용한 골조수량 산출", "2023.06.22", 1754],
  [54, "베트남 임직원 해외연수 겸 워크숍 개최", "2022.11.17", 2154],
  [53, "건설 원가관리 세미나 개최", "2022.09.21", 1748],
  [52, "현장 실행가 검증 서비스 확대", "2022.06.17", 1411],
  [51, "CAD 적산 프로그램 고도화 안내", "2022.03.03", 1830],
  [50, "건설 프로젝트 수량산출 품질관리 캠페인", "2021.11.26", 1507]
].map(([id, title, date, views], index) => ({
  id,
  no: newsNumber(index),
  title,
  date,
  views,
  author: "관리자",
  body: "컨코스트의 주요 소식과 서비스 업데이트를 안내합니다. 본 복제본에서는 게시글 상세 화면, 목록 이동, 검색, 페이지네이션 동작을 확인할 수 있도록 요약 콘텐츠를 제공합니다."
}));

function newsNumber(index) {
  return 56 - index;
}

const downloads = [
  { id: 1, title: "CAD 적산 사용 매뉴얼", date: "2026.04.08", views: 412, type: "PDF" },
  { id: 2, title: "견적 요청 기본 자료 체크리스트", date: "2026.02.12", views: 338, type: "DOC" },
  { id: 3, title: "현장 물량 검증 의뢰서 양식", date: "2025.11.04", views: 521, type: "XLS" },
  { id: 4, title: "BIM 산출 협업 가이드", date: "2025.06.20", views: 447, type: "PDF" }
];

function tr(ko, en) {
  return state.lang === "ko" ? ko : en;
}

function routeTo(path) {
  if (!path.startsWith("/")) path = `/${path}`;
  return `#${path}`;
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
    <div class="nav-item">
      <a class="nav-link ${active === item.key ? "active" : ""}" href="${routeTo(item.href)}">${tr(item.ko, item.en)}</a>
      <div class="dropdown">
        ${item.children.map(child => `<a href="${routeTo(child[2])}">${tr(child[0], child[1])}</a>`).join("")}
        ${item.key === "business" ? `<div class="subgroup"><span class="subgroup-title">Quantity</span><a href="${routeTo("/business/bsn1?ca_id=010101")}">개산견적</a><a href="${routeTo("/business/bsn1?ca_id=010103")}">정미 수량 산출</a></div>` : ""}
      </div>
    </div>
  `).join("");
}

function drawerHtml() {
  return `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="drawer" aria-label="Mobile menu">
      <div class="drawer-head">
        <a class="brand" href="${routeTo("/")}">
          <span class="brand-mark">C</span>
          <span><strong>CONCOST</strong><span>${t[state.lang].tagline}</span></span>
        </a>
        <button class="icon-button" type="button" data-close-drawer aria-label="Close menu">X</button>
      </div>
      <nav class="drawer-nav">
        ${menu.map(item => `
          <details>
            <summary>${tr(item.ko, item.en)}</summary>
            <a href="${routeTo(item.href)}">${tr(item.ko, item.en)}</a>
            ${item.children.map(child => `<a href="${routeTo(child[2])}">${tr(child[0], child[1])}</a>`).join("")}
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
          <span class="brand-mark">C</span>
          <span><strong>CONCOST</strong><span>${t[state.lang].tagline}</span></span>
        </a>
        <nav class="desktop-nav" aria-label="Primary">${navHtml()}</nav>
        <div class="header-actions">
          <button class="lang-toggle" type="button" data-lang>${state.lang === "ko" ? "eng" : "kor"}</button>
          <button class="menu-button" type="button" data-open-drawer aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
    ${drawerHtml()}
    <main>${content}</main>
    ${footerHtml()}
    <button class="gotop" type="button" data-top aria-label="${t[state.lang].goTop}">↑</button>
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
          TEL : 02.2203.1463 · FAX : 02.2203.1464, 1468<br>
          ADDRESS : 5F, Songwon Building, 6, Baekjegobun-ro 37-Gil, Songpa-gu, Seoul
        </address>
        <div>COPYRIGHT(c) 2018 CONCOST ALL RIGHT RESERVED</div>
      </div>
    </footer>
  `;
}

function homePage() {
  return layout(`
    <section class="hero">
      <div class="hero-bg" style="background-image:url('${heroImages[state.heroIndex]}')"></div>
      <div class="hero-inner">
        <div class="eyebrow">${t[state.lang].heroEyebrow}</div>
        <h1>${t[state.lang].heroTitle}</h1>
        <p>${t[state.lang].heroCopy}</p>
        <div class="hero-actions">
          <a class="button" href="${routeTo("/customer/cust1")}">${t[state.lang].quote}</a>
          <a class="button secondary" href="${routeTo("/business/bsn1?ca_id=010101")}">${t[state.lang].business}</a>
        </div>
        <div class="quick-grid">
          ${services.slice(0, 5).map(item => `
            <a class="quick-card" href="${routeTo(item.path)}">
              <strong>${tr(item.ko, item.en)}</strong>
              <span>${tr(item.copyKo, item.copyEn)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>CONCOST Business</h2>
            <p>${tr("공사비와 물량을 다루는 주요 업무를 한 화면에서 탐색할 수 있습니다.", "Explore CONCOST's main estimating and cost consulting services.")}</p>
          </div>
          <div>
            <button class="icon-button" data-scroll-rail="-1" aria-label="Previous">‹</button>
            <button class="icon-button" data-scroll-rail="1" aria-label="Next">›</button>
          </div>
        </div>
        <div class="business-rail">
          <div class="business-track" data-rail>
            ${services.map(serviceCard).join("")}
          </div>
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="container banner-pair">
        <a class="feature-banner" href="${routeTo("/cad/cad1")}" style="background-image:url('${ASSET}/images/main/banner1.jpg')">
          <h3>CAD 적산 프로그램</h3>
          <p>${tr("CAD 도면 위에서 산출 위치와 수량 근거를 확인하고 현장 운영 자료로 활용합니다.", "Review quantities and takeoff evidence directly on CAD drawings.")}</p>
        </a>
        <a class="feature-banner" href="${routeTo("/cad/cad2")}" style="background-image:url('${ASSET}/images/main/banner2.jpg')">
          <h3>사용 매뉴얼</h3>
          <p>${tr("명령어, 산출표, 변경 검토 흐름을 확인할 수 있는 매뉴얼 페이지입니다.", "A practical manual for commands, tables, and change review workflows.")}</p>
        </a>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="gateway">
          <a class="gate-link" href="${routeTo("/pr/pr2")}"><strong>특허면허</strong><span class="gate-icon">P</span></a>
          <a class="gate-link" href="${routeTo("/pr/pr3")}"><strong>Partners</strong><span class="gate-icon">B</span></a>
          <a class="gate-link" href="${routeTo("/pr/pr4")}"><strong>E-Brochure</strong><span class="gate-icon">E</span></a>
          <a class="gate-link" href="${routeTo("/customer/cust1")}"><strong>견적요청</strong><span class="gate-icon">Q</span></a>
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="container latest-grid">
        <div class="board-card">
          <div class="section-head">
            <h2>${t[state.lang].latest}</h2>
            <a class="button ghost" href="${routeTo("/pr/pr1")}">More</a>
          </div>
          <ul class="news-list">
            ${news.slice(0, 6).map(item => `<li><a href="${routeTo(`/pr/pr1?idx=${item.id}`)}">${item.title}</a><time>${item.date}</time></li>`).join("")}
          </ul>
        </div>
        <div class="contact-box">
          <div class="contact-panel">
            <strong>대표전화</strong>
            <div class="tel">02.2203.1463</div>
            <div>FAX 02.2203.1464, 1468</div>
          </div>
          <a class="gate-link" href="${routeTo("/customer/cust2")}"><strong>인재채용</strong><span>${tr("함께 성장할 인재를 기다립니다.", "Join the CONCOST team.")}</span></a>
        </div>
      </div>
    </section>
  `);
}

function serviceCard(item) {
  return `
    <a class="service-card" href="${routeTo(item.path)}">
      <img src="${item.img}" alt="">
      <div class="body">
        <h3>${tr(item.ko, item.en)}</h3>
        <p>${tr(item.copyKo, item.copyEn)}</p>
      </div>
    </a>
  `;
}

function subShell(sectionKo, sectionEn, titleKo, titleEn, copyKo, copyEn, visual, body) {
  return layout(`
    <section class="sub-hero" style="--sub-image:url('${ASSET}/images/sub/${visual}')">
      <div class="container">
        <div class="breadcrumb"><span>HOME</span><span>${tr(sectionKo, sectionEn)}</span><span>${tr(titleKo, titleEn)}</span></div>
        <div class="sub-title">
          <h1>${tr(titleKo, titleEn)}</h1>
          <p>${tr(copyKo, copyEn)}</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">${body}</div>
    </section>
  `);
}

function companyPage(path) {
  const pages = {
    "/company/aboutus": ["대표이사 인사말", "CEO Message", "고객이 원하는 시간에 최상의 결과를 제공한다는 기준으로 공사비 컨설팅을 수행합니다.", "CONCOST works by one standard: useful cost results delivered on time."],
    "/company/greetings": ["대표이사 소개", "CEO Profile", "건설 원가와 물량 검증 경험을 기반으로 고객의 의사결정을 돕습니다.", "The CEO profile page highlights cost consulting and quantity review expertise."],
    "/company/awards": ["회사연혁", "History", "컨코스트의 주요 성장 이력과 업무 확장 흐름입니다.", "Key milestones in CONCOST's growth and service expansion."],
    "/company/position": ["조직도", "Organization", "견적, CAD, BIM, 공사비 검토 업무가 유기적으로 협업합니다.", "Estimate, CAD, BIM, and cost review teams collaborate across projects."],
    "/company/location": ["오시는길", "Location", "서울 송파구 백제고분로37길 6 송원빌딩 5층.", "5F, Songwon Building, Songpa-gu, Seoul."]
  };
  const page = pages[path] || pages["/company/aboutus"];
  let body = "";
  if (path === "/company/awards") {
    body = `<ul class="timeline">
      ${[
        ["1999", "건설 견적 전문 조직 출범"],
        ["2006", "CAD 기반 수량 검증 업무 확대"],
        ["2013", "해외/FED 견적 및 BIM 산출 서비스 강화"],
        ["2018", "CONCOST 브랜드 사이트 운영"],
        ["2026", "공사비 검토 및 스마트 현장 관리 솔루션 고도화"]
      ].map(item => `<li><strong>${item[0]}</strong><span>${item[1]}</span></li>`).join("")}
    </ul>`;
  } else if (path === "/company/position") {
    body = `<div class="org-chart">
      <div class="org-node primary"><strong>CEO</strong><br>David Hyun</div>
      <div class="org-node">공사비 컨설팅</div>
      <div class="org-node">수량산출팀</div>
      <div class="org-node">CAD/BIM팀</div>
      <div class="org-node">경영지원</div>
    </div>`;
  } else if (path === "/company/location") {
    body = `<div class="grid-2">
      <div class="map-panel"><div><strong>CONCOST</strong><br>Songpa-gu, Seoul</div></div>
      <div class="info-card"><h3>방문 안내</h3><p>지하철과 주요 도로 접근이 편한 송파구 사무실입니다. 방문 상담은 사전 연락 후 진행됩니다.</p><p><strong>TEL</strong> 02-2203-1463<br><strong>FAX</strong> 02-2203-1464</p></div>
    </div>`;
  } else {
    body = `<div class="grid-2">
      <div class="info-card"><h3>${page[0]}</h3><p>${page[2]}</p><p>수량 산출, 내역 검증, 설계 변경, 건설 클레임까지 프로젝트 단계별로 필요한 비용 근거를 제공합니다.</p></div>
      <div class="info-card"><h3>Core Values</h3><p>정확한 산출 근거, 빠른 피드백, 현장 활용성을 기준으로 고객의 시간과 비용을 줄입니다.</p></div>
    </div>`;
  }
  return subShell("회사소개", "Company", page[0], page[1], page[2], page[3], "sub-visual1.jpg", body);
}

function businessPage(path, query) {
  let id = query.get("ca_id") || "";
  if (path.includes("bsn2")) id = id || "0102";
  if (path.includes("bsn3")) id = id || "0103";
  if (path.includes("bsn4")) id = id || "0104";
  if (path.includes("bsn5")) id = id || "0105";
  id = id || "010101";
  const current = services.find(item => item.id === id) || services[0];
  const tabs = services.map(item => `<a class="tab ${item.id === current.id ? "active" : ""}" href="${routeTo(item.path)}">${tr(item.ko, item.en)}</a>`).join("");
  const body = `
    <div class="tabs">${tabs}</div>
    <div class="grid-2">
      <div class="info-card">
        <h3>${tr(current.ko, current.en)}</h3>
        <p>${tr(current.copyKo, current.copyEn)}</p>
        <p>${tr("의뢰 자료 접수, 산출 기준 검토, 물량 산정, 결과 검증, 납품 보고의 순서로 진행됩니다.", "Workflow: receive documents, review criteria, quantify, verify, and deliver report.")}</p>
        <a class="button" href="${routeTo("/customer/cust1")}">${t[state.lang].quote}</a>
      </div>
      <div class="info-card">
        <img src="${current.img}" alt="" style="width:100%;border-radius:8px;margin-bottom:16px">
        <h3>${tr("제공 산출물", "Deliverables")}</h3>
        <p>${tr("산출 근거서, 내역 검토표, 변경 비교표, 검토 의견서를 프로젝트 목적에 맞춰 제공합니다.", "Takeoff sheets, cost review tables, change comparisons, and review notes are prepared by project purpose.")}</p>
      </div>
    </div>
  `;
  return subShell("사업소개", "Business", current.ko, current.en, current.copyKo, current.copyEn, "sub-visual2.jpg", body);
}

function cadPage(path) {
  const isManual = path.endsWith("cad2");
  const title = isManual ? ["사용 매뉴얼", "User Manual"] : ["CAD적산이란", "About CAD Estimate"];
  const copy = isManual
    ? ["CAD 적산 프로그램의 주요 명령과 검증 흐름을 단계별로 정리했습니다.", "Step-by-step commands and review flows for the CAD estimate program."]
    : ["CAD 도면에서 수량산출 정보와 위치를 함께 확인하는 프로그램입니다.", "A program for reviewing quantity information and locations directly on CAD drawings."];
  const body = isManual ? `
    <div class="grid-3">
      ${["도면 불러오기", "산출 영역 지정", "수량표 생성", "변경 비교", "산출 근거 출력", "현장 공유"].map((item, index) => `
        <div class="info-card"><h3>${index + 1}. ${item}</h3><p>작업자가 도면과 산출 정보를 연결해 추적 가능한 검토 자료를 만듭니다.</p></div>
      `).join("")}
    </div>
  ` : `
    <p class="info-card">CAD적산 프로그램은 도면의 산출 위치와 수량 근거를 연결해 복잡한 도면에서도 검토자가 빠르게 근거를 확인할 수 있도록 설계되었습니다.</p>
    <div class="grid-3">
      ${["산출 수량 확인", "산출정보 작성", "간단 명령어", "변경 위치 확인", "산출 값 표시", "정산 분쟁 예방"].map((item, index) => `
        <div class="info-card cad-feature"><span class="badge">${index + 1}</span><h3>${item}</h3><p>CAD 기반으로 산출 정보와 도면 위치를 연결합니다.</p></div>
      `).join("")}
    </div>
    <div class="contact-panel" style="margin-top:18px"><strong>프로그램 문의</strong>TEL 02-2203-1463 · MAIL sjlee@con-cost.com</div>
  `;
  return subShell("CAD적산", "CAD Estimate", title[0], title[1], copy[0], copy[1], "sub-visual3.jpg", body);
}

function prPage(path, query) {
  if (path === "/pr/pr2") {
    return subShell("PR센터", "PR Center", "특허 / 면허", "Patents / Licenses", "보유 기술과 사업 수행 역량을 소개합니다.", "Patents, licenses, and certificates.", "sub-visual4.jpg", `
      <div class="grid-3">${["CAD 산출 검증", "BIM 수량 산출", "공사비 컨설팅", "품질관리 인증", "전문건설 협력", "원가 검토 프로세스"].map(item => `<div class="info-card"><h3>${item}</h3><p>관련 인증과 업무 수행 근거를 게시하는 영역입니다.</p></div>`).join("")}</div>
    `);
  }
  if (path === "/pr/pr3") {
    return subShell("PR센터", "PR Center", "Partners", "Partners", "건설 프로젝트의 다양한 이해관계자와 협업합니다.", "Partners across construction projects.", "sub-visual4.jpg", `
      <div class="grid-3">${["토펙엔지니어링", "건설사", "설계사", "감리단", "시행사", "공공 발주처"].map(item => `<div class="info-card"><h3>${item}</h3><p>프로젝트 목적에 맞춰 공사비와 물량 검토를 지원합니다.</p></div>`).join("")}</div>
    `);
  }
  if (path === "/pr/pr4") {
    return subShell("PR센터", "PR Center", "E-Brochure", "E-Brochure", "회사 소개와 주요 서비스를 브로슈어 형태로 확인합니다.", "Company overview and service brochure.", "sub-visual4.jpg", `
      <div class="download-card"><h3>CONCOST E-Brochure</h3><p>온라인 브로슈어 영역입니다. 실제 PDF 파일이 준비되면 다운로드 링크를 연결할 수 있습니다.</p><a class="button" href="${routeTo("/customer/cust1")}">문의하기</a></div>
    `);
  }
  const detailId = Number(query.get("idx"));
  if (detailId) return newsDetail(detailId);
  return boardPage("News", "News", news, "/pr/pr1");
}

function boardPage(titleKo, titleEn, rows, basePath) {
  const perPage = 10;
  const term = state.search.trim().toLowerCase();
  const filtered = rows.filter(row => {
    if (!term) return true;
    const hay = `${row.title} ${row.author || ""} ${row.body || ""}`.toLowerCase();
    return hay.includes(term);
  });
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  state.page = Math.min(state.page, pages);
  const pageRows = filtered.slice((state.page - 1) * perPage, state.page * perPage);
  const table = pageRows.length ? `
    <table class="board-table">
      <thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회</th></tr></thead>
      <tbody>
        ${pageRows.map(row => `
          <tr>
            <td data-label="번호">${row.no || row.id}</td>
            <td data-label="제목" class="title"><a href="${routeTo(`${basePath}?idx=${row.id}`)}">${row.title}</a></td>
            <td data-label="작성자">${row.author || row.type || "관리자"}</td>
            <td data-label="작성일">${row.date}</td>
            <td data-label="조회">${Number(row.views || 0).toLocaleString()}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  ` : `<div class="empty">검색 결과가 없습니다.</div>`;
  const body = `
    <div class="board-tools">
      <span>${t[state.lang].total} <strong>${filtered.length}</strong>건</span>
      <form class="search-box" data-board-search>
        <select name="where">
          <option value="all">전체</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>
        <input name="keyword" value="${escapeHtml(state.search)}" maxlength="30" placeholder="${t[state.lang].keyword}">
        <button type="submit">${t[state.lang].search}</button>
      </form>
    </div>
    ${table}
    <div class="pagination">
      ${Array.from({ length: pages }, (_, i) => `<button type="button" class="${state.page === i + 1 ? "active" : ""}" data-page="${i + 1}">${i + 1}</button>`).join("")}
    </div>
  `;
  return subShell("PR센터", "PR Center", titleKo, titleEn, "게시판 목록, 검색, 페이지 이동 기능을 제공합니다.", "Board list, search, and pagination.", "sub-visual4.jpg", body);
}

function newsDetail(id) {
  const item = news.find(row => row.id === id) || news[0];
  return subShell("PR센터", "PR Center", "News", "News", "컨코스트 소식 상세보기입니다.", "News detail view.", "sub-visual4.jpg", `
    <article>
      <div class="detail-head">
        <h2>${item.title}</h2>
        <div class="detail-meta"><span>작성자 ${item.author}</span><span>작성일 ${item.date}</span><span>조회 ${item.views.toLocaleString()}</span></div>
      </div>
      <div class="detail-body">
        <p>${item.body}</p>
        <p>원본 CMS의 게시판 상세 화면과 동일한 흐름으로 목록에서 상세로 이동하고 다시 목록으로 돌아갈 수 있습니다.</p>
      </div>
      <a class="button ghost" href="${routeTo("/pr/pr1")}">${t[state.lang].detailBack}</a>
    </article>
  `);
}

function customerPage(path, query) {
  if (path === "/customer/cust2") {
    return subShell("고객지원", "Support", "채용안내", "Recruiting", "CONCOST와 함께 성장할 인재를 기다립니다.", "Join the CONCOST team.", "sub-visual5.jpg", `
      <div class="grid-3">
        ${["공사비 컨설턴트", "CAD/BIM 산출 담당", "경영지원"].map(item => `<div class="info-card"><h3>${item}</h3><p>책임감 있게 프로젝트 결과물을 만들고 팀과 협업할 수 있는 분을 찾습니다.</p></div>`).join("")}
      </div>
      <div class="contact-panel" style="margin-top:18px">JOBS : kdk1225@con-cost.com</div>
    `);
  }
  if (path === "/customer/cust3") {
    const detailId = Number(query.get("idx"));
    if (detailId) {
      const item = downloads.find(row => row.id === detailId) || downloads[0];
      return subShell("고객지원", "Support", "자료실", "Resources", "자료 상세보기입니다.", "Resource detail.", "sub-visual5.jpg", `
        <div class="detail-head"><h2>${item.title}</h2><div class="detail-meta"><span>${item.type}</span><span>${item.date}</span><span>조회 ${item.views}</span></div></div>
        <div class="detail-body"><p>실제 파일 업로드가 준비되면 이 영역에 다운로드 버튼을 연결할 수 있습니다.</p></div>
        <a class="button ghost" href="${routeTo("/customer/cust3")}">${t[state.lang].detailBack}</a>
      `);
    }
    return subShell("고객지원", "Support", "자료실", "Resources", "자료실 목록과 검색 기능을 제공합니다.", "Resource board with search.", "sub-visual5.jpg", boardInner(downloads, "/customer/cust3"));
  }
  return quotePage();
}

function boardInner(rows, basePath) {
  return `
    <div class="grid-2">
      ${rows.map(row => `
        <a class="download-card" href="${routeTo(`${basePath}?idx=${row.id}`)}">
          <h3>${row.title}</h3>
          <p>${row.type} · ${row.date} · 조회 ${row.views}</p>
        </a>
      `).join("")}
    </div>
  `;
}

function quotePage() {
  return subShell("고객지원", "Support", "견적요청", "Request Quote", "프로젝트 정보를 남기면 상담을 준비할 수 있습니다.", "Leave project information for a quote consultation.", "sub-visual5.jpg", `
    <form id="quote-form" novalidate>
      <div class="privacy-box">
        회사는 온라인 문의 상담을 위해 성명, 이메일, 전화번호 등 최소한의 개인정보를 수집합니다. 수집된 정보는 상담 목적에 한해 사용되며 목적 달성 후 내부 보존 기준에 따라 파기됩니다. 이용자는 동의를 거부할 수 있으나 온라인 상담 이용이 제한될 수 있습니다.
      </div>
      <label class="agree-line"><input type="checkbox" name="agree"> ${t[state.lang].privacyAgree}</label>
      <div class="form-grid">
        <label for="kind">구분</label>
        <select id="kind" name="kind"><option value="">상담 구분을 선택하세요.</option><option>일반문의</option><option>견적문의</option><option>방문문의</option></select>
        <label for="company">회사명</label>
        <input id="company" name="company">
        <label for="name">작성자</label>
        <input id="name" name="name">
        <label>이메일</label>
        <div class="field-row"><input name="email1" aria-label="email id"><span>@</span><input name="email2" aria-label="email domain"><select name="emailSelect"><option value="">직접입력</option><option>gmail.com</option><option>naver.com</option><option>hanmail.net</option><option>daum.net</option></select></div>
        <label>연락처</label>
        <div class="phone-row"><input name="tel1" maxlength="4" inputmode="numeric"><span>-</span><input name="tel2" maxlength="4" inputmode="numeric"><span>-</span><input name="tel3" maxlength="4" inputmode="numeric"></div>
        <label for="title">제목</label>
        <input id="title" name="title">
        <label for="content">문의내용</label>
        <textarea id="content" name="content"></textarea>
      </div>
      <div class="form-message" data-form-message></div>
      <p style="text-align:center;margin-top:22px"><button class="button" type="submit">${t[state.lang].submit}</button></p>
    </form>
  `);
}

function policyPage(path) {
  const isPrivate = path.endsWith("private");
  return subShell("고객지원", "Support", isPrivate ? "개인정보처리방침" : "이메일무단수집거부", isPrivate ? "Privacy Policy" : "Email Collection Policy", "정책 문서 페이지입니다.", "Policy page.", "sub-visual5.jpg", `
    <div class="info-card">
      <h3>${isPrivate ? "개인정보처리방침" : "이메일무단수집거부"}</h3>
      <p>${isPrivate ? "온라인 문의와 상담 과정에서 수집되는 개인정보는 상담 목적에 필요한 범위에서 처리됩니다." : "본 사이트에 게시된 이메일 주소는 자동 수집 프로그램 등으로 무단 수집할 수 없습니다."}</p>
    </div>
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
  document.querySelector("[data-open-drawer]")?.addEventListener("click", openDrawer);
  document.querySelectorAll("[data-close-drawer]").forEach(el => el.addEventListener("click", closeDrawer));
  document.querySelector("[data-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.querySelectorAll("[data-scroll-rail]").forEach(btn => btn.addEventListener("click", () => {
    const rail = document.querySelector("[data-rail]");
    if (rail) rail.scrollBy({ left: Number(btn.dataset.scrollRail) * rail.clientWidth * 0.85, behavior: "smooth" });
  }));
  document.querySelector("[data-board-search]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.search = form.get("keyword") || "";
    state.searchWhere = form.get("where") || "all";
    state.page = 1;
    render();
  });
  document.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", () => {
    state.page = Number(btn.dataset.page);
    render();
  }));
  bindQuoteForm();
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
    const required = [
      [form.elements.agree.checked, "개인정보처리방침에 동의해주세요."],
      [data.kind, "구분을 선택해주세요."],
      [data.name, "작성자를 입력해주세요."],
      [data.tel1 && data.tel2 && data.tel3, "연락처를 입력해주세요."],
      [/^\d+$/.test(`${data.tel1}${data.tel2}${data.tel3}`), "연락처는 숫자로만 입력해주세요."],
      [/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(`${data.email1}@${data.email2}`), "이메일 형식에 맞게 입력해주세요."],
      [data.title, "제목을 입력해주세요."],
      [data.content, "문의내용을 입력해주세요."]
    ];
    const failed = required.find(item => !item[0]);
    if (failed) {
      message.className = "form-message error";
      message.textContent = failed[1];
      return;
    }
    localStorage.setItem("concost:lastInquiry", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
    message.className = "form-message ok";
    message.textContent = t[state.lang].saved;
    form.reset();
  });
}

window.addEventListener("hashchange", () => {
  state.page = 1;
  render();
});

setInterval(() => {
  state.heroIndex = (state.heroIndex + 1) % heroImages.length;
  if ((parseRoute().path || "/") === "/") {
    const bg = document.querySelector(".hero-bg");
    if (bg) bg.style.backgroundImage = `url('${heroImages[state.heroIndex]}')`;
  }
}, 5500);

render();
