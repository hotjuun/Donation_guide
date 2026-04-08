import { useState } from "react";
import "./App.css";

const sections = [
  {
    id: "intro",
    emoji: "🏛️",
    title: "기부재단이란?",
    content: [
      {
        subtitle: "기부재단의 뜻",
        text: `기부재단은 "좋은 일에 쓰일 돈(기부금)을 모아서, 도움이 필요한 곳에 나눠주는 단체"예요. 마치 학교에서 반 친구들이 용돈을 모아서 어려운 이웃을 돕는 것과 비슷하지만, 훨씬 큰 규모로, 법적인 규칙에 따라 운영되는 거죠.`,
      },
      {
        subtitle: "왜 재단이 필요할까?",
        text: `개인이 직접 도움이 필요한 사람을 찾아서 돈을 전달하는 건 쉽지 않아요. 누가 정말 도움이 필요한지 파악하기도 어렵고, 돈이 제대로 쓰이는지 확인하기도 힘들죠. 기부재단은 이런 역할을 전문적으로 해주는 곳이에요. 기부자와 수혜자를 연결하는 "다리" 역할을 하는 거예요.`,
      },
      {
        subtitle: "비영리법인이란?",
        text: `일반 회사(영리법인)는 돈을 벌어서 주주에게 이익을 나눠주는 게 목적이에요. 반면 비영리법인은 돈을 버는 게 목적이 아니라, 사회에 도움이 되는 공익적인 활동을 하는 게 목적이에요. 기부재단은 대부분 비영리법인이에요.`,
      },
    ],
  },
  {
    id: "types",
    emoji: "📋",
    title: "기부금의 종류",
    content: [
      {
        subtitle: "법정기부금",
        text: `법에서 "이건 무조건 좋은 곳에 쓰이는 기부금이야!"라고 정해놓은 기부금이에요. 국가나 지방자치단체에 내는 기부금, 국군장병 위문금, 재해 구호금, 사립학교 장학금 등이 여기 해당해요. 세금 혜택이 가장 커서, 소득의 100%까지 공제받을 수 있어요.`,
      },
      {
        subtitle: "지정기부금",
        text: `정부(기획재정부)가 "이 단체는 믿을 만해!"라고 지정해준 단체에 내는 기부금이에요. 사회복지법인, 문화예술단체, 종교단체 등이 포함돼요. 소득의 30%까지(종교단체는 10%) 한도 내에서 세금 혜택을 받을 수 있어요.`,
      },
      {
        subtitle: "비지정기부금",
        text: `위 두 가지에 해당하지 않는 기부금이에요. 안타깝지만 세금 혜택을 전혀 받을 수 없어요. 그래서 기부할 때는 해당 단체가 법정 또는 지정기부금 단체인지 확인하는 게 중요해요!`,
      },
    ],
  },
  {
    id: "flow",
    emoji: "🔄",
    title: "모금 → 이관 → 배분",
    content: [
      {
        subtitle: "① 모금 단계",
        text: `기부재단이 개인이나 기업으로부터 기부금을 받는 단계예요. 온라인 모금, ARS, 계좌이체, 현물기부(물건으로 기부) 등 다양한 방법이 있어요. 1천만 원 이상을 모금하려면 반드시 행정안전부에 "기부금품 모집 등록"을 해야 해요.`,
      },
      {
        subtitle: '② 이관 — "단체→단체 돈 넘기기"',
        text: `"이관"이란 한 단체에서 다른 단체로 기부금의 관리 권한 자체를 옮기는 거예요. 택배로 비유하면 물류센터에서 물류센터로 물건이 옮겨가는 것과 같아요. 큰 모금 재단이 돈을 모은 뒤, 현장을 잘 아는 작은 단체한테 "이 돈 관리해줘"하고 맡기는 거죠. 넘겨받은 단체가 그 돈의 관리·사용·보고 책임을 함께 가져가요.`,
      },
      {
        subtitle: '③ 배분 — "수혜자에게 최종 전달"',
        text: `배분은 그 돈이 최종 목적지에 도착하는 거예요. 택배가 우리 집 현관에 놓이는 것처럼, 실제 도움이 필요한 사람이나 기관 손에 기부금이 들어가는 마지막 단계예요. 배분위원회에서 심사하고, 받는 사람은 인수확인서에 서명하고, 재단은 사후 보고서도 받아요.`,
      },
      {
        subtitle: "왜 이렇게 나눠놨을까?",
        text: `돈을 잘 모으는 조직과 돈을 잘 쓰는 조직이 다르기 때문이에요. 대형 재단은 모금 인프라가 좋고, 작은 현장 단체는 누가 도움이 필요한지를 잘 알아요. 역할을 나누는 게 효율적이고, 단계마다 기록이 남으니 투명성도 높아져요.`,
      },
    ],
  },
  {
    id: "tax",
    emoji: "💰",
    title: "세금과 기부금",
    content: [
      {
        subtitle: "기부하면 왜 세금을 깎아줄까?",
        text: `국가가 해야 할 공적인 일(복지, 교육, 문화 등)을 기부재단이 대신 해주기 때문이에요. "시민들의 기부금으로 나라가 해야 할 일을 해결해 줬으니, 세금을 좀 덜 내도 돼!"라는 뜻이에요.`,
      },
      {
        subtitle: "개인이 기부하면?",
        text: `1천만 원 이하를 기부하면 기부금의 15%를 세금에서 빼줘요(세액공제). 1천만 원을 초과하면 초과분에 대해 30%를 빼줘요. 예를 들어, 100만 원을 기부하면 → 15만 원을 세금에서 돌려받는 거예요! 올해 공제 한도를 넘겼다면? 10년까지 이월해서 내년, 내후년에 공제받을 수 있어요.`,
      },
      {
        subtitle: "기업(법인)이 기부하면?",
        text: `법인은 소득의 10% 한도 내에서 기부금을 비용(손금)으로 처리할 수 있어요. 비용으로 처리하면 그만큼 세금을 낼 소득이 줄어드니까, 결과적으로 세금을 덜 내는 효과가 있죠.`,
      },
    ],
  },
  {
    id: "rules",
    emoji: "📜",
    title: "재단의 규칙",
    content: [
      {
        subtitle: "80% 규칙",
        text: `기부재단은 수익사업 지출을 제외한 전체 지출의 80% 이상을 반드시 고유목적사업(원래 하기로 한 공익 활동)에 써야 해요. 나머지 20%만 운영비(직원 월급, 사무실 임대료 등)로 쓸 수 있다는 뜻이에요.`,
      },
      {
        subtitle: "투명한 공개 의무",
        text: `기부금을 얼마나 모았고, 어디에 썼는지를 매년 자기 홈페이지와 국세청 홈택스에 모두 공개해야 해요. 사업연도 종료 후 4개월 이내에 반드시 공시해야 합니다.`,
      },
      {
        subtitle: "기부금 영수증 관리",
        text: `기부금을 받으면 법에서 정한 서식에 따라 기부금 영수증을 발급하고, 그 발급 내역을 5년간 보관해야 해요. 가짜 영수증을 발급하면? 무거운 가산세가 붙고, "불성실 기부금수령단체"로 이름이 공개돼요.`,
      },
      {
        subtitle: "위반하면 어떻게 될까?",
        text: `규칙을 어기면 기부금 단체 지정이 취소될 수 있고, 증여세가 부과되며, "불성실 기부금수령단체"로 이름이 관보와 국세청 홈페이지에 공개돼요. 한 번 지정이 취소되면 3년간 다시 신청할 수 없어요.`,
      },
    ],
  },
  {
    id: "setup",
    emoji: "🏗️",
    title: "비영리법인 설립",
    content: [
      {
        subtitle: "비영리법인의 종류",
        text: `비영리법인은 크게 사단법인과 재단법인으로 나뉘어요. 사단법인은 "사람들이 모여서" 만든 단체예요(예: 학회, 협회). 회원이 핵심이죠. 반면 재단법인은 "재산이 모여서" 만든 단체예요. 누군가가 큰 돈이나 부동산을 출연(기부)해서 그 재산을 운용해 공익 활동을 하는 거예요. 기부재단은 대부분 재단법인 형태입니다. 그 위에 "공익법인"이라는 더 엄격한 자격이 있어요. 공익법인은 학자금·장학금·연구비 지급, 학술·자선 활동을 목적으로 하면서 정부 허가를 받은 곳이에요. 세금 혜택과 의무가 가장 강력해요.`,
      },
      {
        subtitle: "설립의 4단계",
        text: `① 정관 작성 — 단체의 이름, 목적, 사업 내용, 자산, 임원 구성 등을 정리한 "헌법"을 만들어요. ② 창립총회 또는 출연 — 사단법인은 발기인 모임에서 정관을 의결하고, 재단법인은 설립자가 재산을 출연한다는 의사를 명확히 해요. ③ 주무관청 허가 — 활동 분야의 중앙부처(교육은 교육부, 복지는 보건복지부 등)에 설립 허가 신청서를 내요. 심사에 보통 2~3개월 걸려요. ④ 등기 — 허가서를 받고 3주 안에 관할 등기소에 법인 설립 등기를 해야 법인격이 생겨요.`,
      },
      {
        subtitle: "필요한 자본과 요건",
        text: `재단법인은 보통 최소 출연재산 5억 원 이상을 요구해요(주무관청과 사업 규모에 따라 다름). 운영비 1년치도 함께 준비하는 게 안전해요. 사단법인은 정해진 최소 자본금은 없지만, 회원 수와 회비 구조가 안정적이어야 해요. 임원은 이사 5명 이상, 감사 2명 이상이 일반적이에요. 임원끼리 친족 비율 제한(보통 1/5 이내)도 있어요. 사무실 주소, 연락처, 회계 담당자도 필수예요.`,
      },
      {
        subtitle: "공익법인 지정받기",
        text: `법인을 만들었다고 자동으로 기부금 단체가 되는 건 아니에요. 기부자에게 세금 혜택을 주려면 별도로 "공익법인 지정"을 받아야 해요. 기획재정부에 신청서, 정관, 사업계획서, 예산서, 최근 회계자료를 제출하고, 심사를 거쳐 관보에 고시되면 그때부터 기부금 영수증을 발급할 수 있어요. 한 번 지정되면 보통 6년간 유효하고, 갱신해야 해요.`,
      },
      {
        subtitle: "흔한 실수와 주의점",
        text: `① "비영리=세금 면제"가 아니에요. 고유목적사업 외 수익사업은 법인세를 내야 해요. ② 임원에게 과도한 보수를 주거나 친족 위주로 운영하면 지정이 취소될 수 있어요. ③ 회계 분리를 제대로 하지 않으면 가장 많이 적발돼요. 고유목적사업과 수익사업 회계를 처음부터 따로 관리하세요. ④ 매년 결산서·공시를 빠뜨리면 가산세 + 단체 이름 공개라는 무거운 페널티가 있어요.`,
      },
    ],
  },
  {
    id: "receipt",
    emoji: "🧾",
    title: "기부금 영수증",
    content: [
      {
        subtitle: "기부금 영수증이란?",
        text: `기부금 영수증은 "내가 이 단체에 얼마를 기부했다"는 사실을 국세청에 증명하는 공식 서류예요. 이게 없으면 아무리 기부를 많이 해도 세금 혜택을 받을 수 없어요. 영수증에는 기부자 이름·주민번호, 단체 이름·고유번호, 기부 금액, 기부 유형(법정/지정), 발급 일자가 반드시 들어가야 해요. 법에서 정한 양식(소득세법 시행규칙 별지 제45호의2)을 따라야 효력이 있어요.`,
      },
      {
        subtitle: "받는 방법 — 3가지 경로",
        text: `① 단체에서 직접 발급 — 기부 후 단체 홈페이지나 이메일·우편으로 받을 수 있어요. 보통 연말(12월~1월)에 일괄 발급해요. ② 국세청 홈택스 자동 연동 — 큰 단체들은 홈택스 "연말정산 간소화 서비스"에 자동으로 자료를 넘겨요. 별도 요청 없이 1월 15일부터 조회 가능해요. ③ 카드사·페이 영수증 — 카드 자동기부, 카카오같이가치 등에서 한 기부는 결제 내역과 별개로 단체가 발급한 영수증이 필요해요. 결제 영수증만으로는 세금 공제가 안 돼요!`,
      },
      {
        subtitle: "연말정산에 활용하기",
        text: `직장인은 매년 1~2월 연말정산 때 활용해요. 홈택스 간소화 서비스에서 PDF로 내려받거나, 단체에서 받은 영수증을 회사 연말정산 담당자에게 제출하면 끝이에요. 개인사업자는 5월 종합소득세 신고할 때 세무대리인에게 전달하거나 직접 입력해요. 핵심 — 1천만 원 이하분은 15%, 초과분은 30%를 세액에서 깎아줘요. 한도를 넘긴 금액은 10년간 이월 공제 가능해요. 기부 시점에 영수증을 못 챙겼더라도 5년 안에 단체에 요청하면 재발급해줘요.`,
      },
      {
        subtitle: "현물 기부도 영수증을 받을 수 있나요?",
        text: `네, 받을 수 있어요. 옷, 책, 식품, 부동산, 주식 같은 현물도 기부 대상이에요. 다만 금액 평가가 필요해요. 시가(시장 가격)로 환산해서 영수증을 발급받는데, 부동산이나 주식처럼 평가가 까다로운 경우는 감정평가사 평가서가 필요할 수 있어요. 중고 의류·도서 같은 소액 현물은 단체가 자체 기준으로 평가해 발급해요. 단, 기증자 본인이 평가액을 마음대로 부풀릴 수는 없어요.`,
      },
      {
        subtitle: "가짜 영수증을 조심하세요",
        text: `매년 가짜 기부금 영수증을 발급하거나, 실제 기부하지 않은 금액을 부풀린 영수증으로 세금을 환급받으려는 사례가 적발돼요. 이건 명백한 조세범죄예요. 적발되면 환급받은 세금을 다 토해내는 것은 물론, 가산세 40%, 형사 처벌까지 받을 수 있어요. 단체 입장에서도 가짜 영수증을 발급하면 지정 취소 + "불성실 기부금수령단체" 명단 공개 + 거액의 가산세가 부과돼요. 영수증을 받았으면 단체 고유번호와 발급 내역이 홈택스에 정상 등록되어 있는지 한 번 확인하는 것이 안전해요.`,
      },
    ],
  },
  {
    id: "summary",
    emoji: "⭐",
    title: "핵심 요약",
    content: [
      {
        subtitle: "한눈에 정리",
        text: `기부재단은 국가가 다 하기 어려운 공익 활동을 시민의 힘으로 해내는 중요한 시스템이에요. 기부자는 세금 혜택을, 수혜자는 필요한 도움을, 사회는 더 나은 환경을 얻게 되죠. 다만, 이 시스템이 제대로 작동하려면 투명한 운영, 엄격한 법적 규제, 그리고 시민의 관심이 꼭 필요해요.`,
      },
    ],
  },
];

const flowSteps = [
  { label: "기부자", desc: "개인 · 기업", icon: "👤" },
  { label: "모금", desc: "기부금 접수", icon: "💵" },
  { label: "재단", desc: "회계 · 보고", icon: "🏛️" },
  { label: "이관", desc: "단체로 전달", icon: "🔀" },
  { label: "배분", desc: "수혜자 전달", icon: "🎁" },
  { label: "수혜자", desc: "도움받는 사람", icon: "🤝" },
];

const keywords = [
  ["공익법인", "돈벌이가 아닌 사회에 도움되는 활동을 하는 법인"],
  ["법정·지정기부금", "세금 혜택이 있는 공식 인정 기부금"],
  ["이관 vs 배분", "중간 전달(단체→단체) vs 최종 전달(단체→수혜자)"],
  ["80% 규칙", "전체 지출의 80% 이상을 고유사업에 사용"],
  ["투명 공시", "기부금 모금·사용 내역을 매년 인터넷에 공개"],
];

function AdSlot({ position }) {
  // Google AdSense slot — 승인 후 아래 ins 태그로 교체하세요.
  // <ins className="adsbygoogle" style={{display:'block'}}
  //   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //   data-ad-slot="XXXXXXXXXX"
  //   data-ad-format="auto"
  //   data-full-width-responsive="true" />
  return (
    <div className="ad" data-ad-position={position}>
      <div className="ad-label">Sponsored · {position}</div>
      <div className="ad-hint">Google AdSense slot</div>
    </div>
  );
}

function TaxCalculator() {
  const [income, setIncome] = useState(10000);
  const [donation, setDonation] = useState(1000);
  const taxRate = 0.09;
  const maxDonation = income * 0.1;
  const effectiveDonation = Math.min(donation, maxDonation);
  const taxNoDonation = Math.round(income * taxRate);
  const taxWithDonation = Math.round((income - effectiveDonation) * taxRate);
  const taxSaved = taxNoDonation - taxWithDonation;
  const realCost = effectiveDonation - taxSaved;

  return (
    <div className="calc">
      <div className="calc-title">🧮 기업 기부금 세금 계산기</div>

      <div className="calc-grid">
        <div className="calc-field">
          <label>회사 수입</label>
          <input
            type="range" min="5000" max="50000" step="1000" value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
          <div className="calc-value">{income.toLocaleString()}원</div>
        </div>
        <div className="calc-field">
          <label>기부금</label>
          <input
            type="range" min="0" max={maxDonation} step="100"
            value={Math.min(donation, maxDonation)}
            onChange={(e) => setDonation(Number(e.target.value))}
          />
          <div className="calc-value">
            {effectiveDonation.toLocaleString()}원
            <small>한도: 소득의 10%</small>
          </div>
        </div>
      </div>

      <div className="calc-results">
        <div className="calc-card">
          <div className="calc-card-label">기부 안 했을 때</div>
          <div className="calc-card-num">{taxNoDonation.toLocaleString()}원</div>
        </div>
        <div className="calc-card">
          <div className="calc-card-label">기부 후 세금</div>
          <div className="calc-card-num">{taxWithDonation.toLocaleString()}원</div>
        </div>
        <div className="calc-card">
          <div className="calc-card-label">절약한 세금</div>
          <div className="calc-card-num">{taxSaved.toLocaleString()}원</div>
        </div>
      </div>

      <div className="calc-summary">
        <strong>{effectiveDonation.toLocaleString()}원</strong> 기부 →
        세금 <strong>{taxSaved.toLocaleString()}원</strong> 절약 →
        실제 부담 <strong>{realCost.toLocaleString()}원</strong>
        <small>나라가 {taxSaved.toLocaleString()}원을 보태준 셈이에요.</small>
      </div>
    </div>
  );
}

function PersonalTaxExample() {
  return (
    <div className="example">
      <div className="example-title">💡 개인 기부 세금 예시</div>
      <div className="example-body">
        직장인 김씨가 <strong>1,000원</strong> 기부하면?
        <br />→ 1,000원 × 15% = <strong>150원</strong> 세금 환급!
        <br /><br />
        만약 <strong>1,500원</strong>을 기부하면?
        <br />· 1,000원 × 15% = 150원
        <br />· 500원(초과분) × 30% = 150원
        <br />· 합계: <strong>300원</strong> 환급!
      </div>
      <div className="example-note">
        핵심 — 기부하면 나라가 일부를 보태주는 것이지, 기부로 돈을 버는 건 아니에요.
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("intro");
  const [expandedCards, setExpandedCards] = useState({});

  const current = sections.find((s) => s.id === activeSection);
  const toggleCard = (idx) =>
    setExpandedCards((prev) => ({ ...prev, [idx]: !(prev[idx] ?? true) }));

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">EASY GUIDE</span>
          <h1>기부재단의 모든 것</h1>
          <p>기부금은 어떻게 모이고, 어디로 가고, 어떤 규칙을 따를까?</p>
        </div>
      </header>

      <main className="container">
        <AdSlot position="top" />

        <section className="flow">
          <div className="flow-title">기부금의 여정</div>
          <div className="flow-steps">
            {flowSteps.map((s, i) => (
              <div key={i} className="flow-step">
                <div className="flow-icon">{s.icon}</div>
                <div className="flow-label">{s.label}</div>
                <div className="flow-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <nav className="tabs">
          <div className="tabs-inner">
            {sections.map((s) => (
              <button
                key={s.id}
                className={`tab ${activeSection === s.id ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(s.id);
                  setExpandedCards({});
                }}
              >
                {s.emoji} {s.title}
              </button>
            ))}
          </div>
        </nav>

        <div className="section-head">
          <span className="section-emoji">{current.emoji}</span>
          <h2 className="section-title">{current.title}</h2>
        </div>

        <div className="cards">
          {current.content.map((item, idx) => {
            const isOpen = expandedCards[idx] ?? true;
            return (
              <div key={idx} className="card">
                <button className="card-head" onClick={() => toggleCard(idx)}>
                  <div className="card-head-left">
                    <div className="card-num">{idx + 1}</div>
                    <span className="card-subtitle">{item.subtitle}</span>
                  </div>
                  <span className={`card-arrow ${isOpen ? "open" : ""}`}>▾</span>
                </button>
                {isOpen && <div className="card-body">{item.text}</div>}
              </div>
            );
          })}
        </div>

        {activeSection === "tax" && (
          <>
            <TaxCalculator />
            <PersonalTaxExample />
          </>
        )}

        {(activeSection === "flow" || activeSection === "rules") && (
          <AdSlot position="mid" />
        )}

        {activeSection === "summary" && (
          <div className="keywords">
            <div className="keywords-title">📌 꼭 기억할 키워드 5가지</div>
            {keywords.map(([k, d], i) => (
              <div key={i} className="keyword-row">
                <span className="keyword-tag">{k}</span>
                <span className="keyword-desc">{d}</span>
              </div>
            ))}
          </div>
        )}

        <AdSlot position="bottom" />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-title">관련 법률</div>
          <p className="footer-text">
            법인세법 제24조(기부금) · 소득세법 제59조의4(기부금 세액공제) ·
            상속세 및 증여세법 제16조·제48조(공익법인 출연재산) ·
            공익법인의 설립·운영에 관한 법률 ·
            기부금품의 모집 및 사용에 관한 법률
          </p>
          <div className="footer-meta">© 기부재단 가이드 — 중학생을 위한 쉬운 안내서</div>
        </div>
      </footer>
    </>
  );
}
