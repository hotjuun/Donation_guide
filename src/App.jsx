import { useState } from "react";

const sections = [
  {
    id: "intro",
    emoji: "🏛️",
    title: "기부재단이란?",
    color: "#2D6A4F",
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
    color: "#9B2226",
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
    color: "#005F73",
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
    color: "#6B21A8",
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
    color: "#B5651D",
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
    id: "summary",
    emoji: "⭐",
    title: "핵심 요약",
    color: "#E63946",
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
  { label: "재단 관리", desc: "회계 · 보고", icon: "🏛️" },
  { label: "이관", desc: "다른 단체로 전달", icon: "🔀" },
  { label: "배분", desc: "수혜자에게 전달", icon: "🎁" },
  { label: "수혜자", desc: "도움받는 사람", icon: "🤝" },
];

function AdBanner({ position }) {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #f0f0ec, #e8e8e4)",
        border: "1px dashed #ccc",
        borderRadius: 10,
        padding: "14px 16px",
        textAlign: "center",
        margin: position === "top" ? "0 0 16px" : "16px 0",
        color: "#999",
        fontSize: 11,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 2 }}>광고 영역 ({position === "top" ? "상단" : position === "mid" ? "중간" : "하단"})</div>
      <div>Google AdSense 코드를 이 위치에 삽입하세요</div>
      <div style={{ fontSize: 10, marginTop: 4, color: "#bbb" }}>
        &lt;ins class="adsbygoogle" ...&gt;&lt;/ins&gt;
      </div>
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
    <div
      style={{
        background: "linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 100%)",
        borderRadius: 14,
        padding: 20,
        border: "1px solid #DDD6FE",
        marginTop: 16,
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: "#6B21A8", marginBottom: 14 }}>
        🧮 기업 기부금 세금 계산기 (만 원 스케일)
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 140 }}>
          <label style={{ fontSize: 11, color: "#6B21A8", fontWeight: 600 }}>회사 수입 (원)</label>
          <input
            type="range" min="5000" max="50000" step="1000" value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6B21A8" }}
          />
          <div style={{ fontSize: 16, fontWeight: 700, color: "#4C1D95" }}>{income.toLocaleString()}원</div>
        </div>
        <div style={{ flex: 1, minWidth: 140 }}>
          <label style={{ fontSize: 11, color: "#6B21A8", fontWeight: 600 }}>기부금 (원)</label>
          <input
            type="range" min="0" max={maxDonation} step="100" value={Math.min(donation, maxDonation)}
            onChange={(e) => setDonation(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6B21A8" }}
          />
          <div style={{ fontSize: 16, fontWeight: 700, color: "#4C1D95" }}>{effectiveDonation.toLocaleString()}원
            <span style={{ fontSize: 10, color: "#888", fontWeight: 400 }}> (한도: 소득의 10%)</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 130, background: "white", borderRadius: 10, padding: 14, textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>기부 안 했을 때 세금</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#E63946" }}>{taxNoDonation.toLocaleString()}원</div>
        </div>
        <div style={{ flex: 1, minWidth: 130, background: "white", borderRadius: 10, padding: 14, textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>기부 후 세금</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#2D6A4F" }}>{taxWithDonation.toLocaleString()}원</div>
        </div>
        <div style={{ flex: 1, minWidth: 130, background: "white", borderRadius: 10, padding: 14, textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>절약한 세금</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#6B21A8" }}>{taxSaved.toLocaleString()}원</div>
        </div>
      </div>

      <div style={{ marginTop: 12, background: "#4C1D95", borderRadius: 10, padding: 12, color: "white", fontSize: 13, lineHeight: 1.6 }}>
        <strong>{effectiveDonation.toLocaleString()}원</strong> 기부 → 세금 <strong>{taxSaved.toLocaleString()}원</strong> 절약 → 실제 부담 <strong>{realCost.toLocaleString()}원</strong>
        <br />
        <span style={{ fontSize: 11, opacity: 0.8 }}>→ 나라가 {taxSaved.toLocaleString()}원을 보태준 셈!</span>
      </div>
    </div>
  );
}

function PersonalTaxExample() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
        borderRadius: 14,
        padding: 20,
        border: "1px solid #FDE68A",
        marginTop: 12,
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: "#B45309", marginBottom: 10 }}>
        💡 개인 기부 세금 예시 (만 원 스케일)
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.8, color: "#78350F" }}>
        직장인 김씨가 <strong>1,000원</strong> 기부하면?
        <br />→ 1,000원 × 15% = <strong>150원</strong> 세금 환급!
        <br /><br />
        만약 <strong>1,500원</strong>을 기부하면?
        <br />&nbsp;&nbsp;• 1,000원 × 15% = 150원
        <br />&nbsp;&nbsp;• 500원(초과분) × 30% = 150원
        <br />&nbsp;&nbsp;• 합계: <strong>300원</strong> 환급!
      </div>
      <div style={{ marginTop: 12, background: "#92400E", borderRadius: 8, padding: 10, color: "white", fontSize: 12 }}>
        핵심: "기부하면 나라가 일부를 보태주는 것이지, 기부로 돈을 버는 건 아니다."
      </div>
    </div>
  );
}

export default function DonationGuide() {
  const [activeSection, setActiveSection] = useState("intro");
  const [expandedCards, setExpandedCards] = useState({});

  const currentSection = sections.find((s) => s.id === activeSection);

  const toggleCard = (idx) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div
      style={{
        fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
        background: "#FAFAF8",
        minHeight: "100vh",
        color: "#1a1a1a",
      }}
    >
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)",
          padding: "32px 24px 28px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -30, right: -20, fontSize: 120, opacity: 0.08, transform: "rotate(-15deg)" }}>🏛️</div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, opacity: 0.7, marginBottom: 8, fontWeight: 600 }}>
            중학생을 위한 쉬운 가이드
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.3, letterSpacing: -0.5 }}>
            기부재단의 모든 것
          </h1>
          <p style={{ fontSize: 14, opacity: 0.85, marginTop: 8, lineHeight: 1.6, fontWeight: 400 }}>
            기부금은 어떻게 모이고, 어디로 가고, 어떤 규칙을 따를까?
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "16px 16px 0" }}>
        <AdBanner position="top" />
      </div>

      {/* Flow Diagram */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ background: "white", borderRadius: 16, padding: "20px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #eee" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#666", marginBottom: 14, textAlign: "center", textTransform: "uppercase", letterSpacing: 2 }}>
            기부금의 여정
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "nowrap", gap: 2, overflowX: "auto" }}>
            {flowSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <div style={{ textAlign: "center", minWidth: 56 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === 0 ? "#E8F5E9" : i === flowSteps.length - 1 ? "#FFF3E0" : "#E3F2FD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, margin: "0 auto 4px" }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#333" }}>{step.label}</div>
                  <div style={{ fontSize: 9, color: "#888", marginTop: 1 }}>{step.desc}</div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div style={{ color: "#ccc", fontSize: 14, margin: "0 2px", marginBottom: 18, flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ maxWidth: 600, margin: "16px auto 0", padding: "0 16px" }}>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => { setActiveSection(s.id); setExpandedCards({}); }}
              style={{
                padding: "8px 14px", borderRadius: 20, border: "none",
                background: activeSection === s.id ? s.color : "#f0f0ec",
                color: activeSection === s.id ? "white" : "#555",
                fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                transition: "all 0.2s ease",
              }}
            >
              {s.emoji} {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 600, margin: "16px auto", padding: "0 16px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: currentSection.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
            {currentSection.emoji}
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: currentSection.color, letterSpacing: -0.3 }}>
            {currentSection.title}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {currentSection.content.map((item, idx) => {
            const isOpen = expandedCards[idx] !== false;
            return (
              <div key={idx} style={{ background: "white", borderRadius: 14, border: "1px solid #eee", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <button
                  onClick={() => toggleCard(idx)}
                  style={{ width: "100%", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 8, background: `${currentSection.color}15`, color: currentSection.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#222" }}>{item.subtitle}</span>
                  </div>
                  <span style={{ fontSize: 16, color: "#999", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 16px 16px", fontSize: 13.5, lineHeight: 1.8, color: "#444", borderTop: "1px solid #f5f5f5", paddingTop: 14 }}>
                    {item.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tax section extras */}
        {activeSection === "tax" && (
          <>
            <TaxCalculator />
            <PersonalTaxExample />
          </>
        )}

        {/* Mid ad */}
        {(activeSection === "flow" || activeSection === "rules") && <AdBanner position="mid" />}

        {/* Summary extras */}
        {activeSection === "summary" && (
          <div style={{ marginTop: 16, background: "#FFF5F5", borderRadius: 14, padding: 20, border: "1px solid #FED7D7" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#E63946", marginBottom: 12 }}>
              📌 꼭 기억할 키워드 5가지
            </div>
            {[
              ["공익법인", "돈벌이가 아닌 사회에 도움되는 활동을 하는 법인"],
              ["법정·지정기부금", "세금 혜택이 있는 공식 인정 기부금"],
              ["이관 vs 배분", "중간 전달(단체→단체) vs 최종 전달(단체→수혜자)"],
              ["80% 규칙", "전체 지출의 80% 이상을 고유사업에 사용"],
              ["투명 공시", "기부금 모금·사용 내역을 매년 인터넷에 공개"],
            ].map(([keyword, desc], i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < 4 ? 8 : 0, alignItems: "baseline" }}>
                <span style={{ background: "#E63946", color: "white", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                  {keyword}
                </span>
                <span style={{ fontSize: 12.5, color: "#666", lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom ad */}
        <AdBanner position="bottom" />

        {/* Related Laws Footer */}
        <div style={{ padding: 16, background: "#f8f8f6", borderRadius: 12, border: "1px solid #eee" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#888", marginBottom: 8 }}>📚 관련 법률</div>
          <div style={{ fontSize: 11, color: "#999", lineHeight: 1.7 }}>
            법인세법 제24조(기부금) · 소득세법 제59조의4(기부금 세액공제) · 상속세 및 증여세법 제16조·제48조(공익법인 출연재산) · 공익법인의 설립·운영에 관한 법률 · 기부금품의 모집 및 사용에 관한 법률
          </div>
        </div>
      </div>
    </div>
  );
}
