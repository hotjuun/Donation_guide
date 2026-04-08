import { useState } from "react";
import { sections, flowSteps, keywords } from "./content.js";
import "./App.css";

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
