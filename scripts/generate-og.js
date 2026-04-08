import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../public');
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f4f7f5"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1f7a60"/>
      <stop offset="100%" stop-color="#0f5d47"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- decorative grid lines -->
  <g stroke="#e5e8eb" stroke-width="1">
    <line x1="0" y1="160" x2="${W}" y2="160"/>
    <line x1="0" y1="${H - 120}" x2="${W}" y2="${H - 120}"/>
  </g>

  <!-- left accent bar -->
  <rect x="80" y="180" width="6" height="270" rx="3" fill="url(#accent)"/>

  <!-- eyebrow chip -->
  <g transform="translate(80, 110)">
    <rect width="180" height="42" rx="21" fill="#e8f3ef"/>
    <text x="90" y="28" text-anchor="middle"
      font-family="Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif"
      font-size="18" font-weight="700" fill="#1f7a60" letter-spacing="2">
      EASY GUIDE
    </text>
  </g>

  <!-- title -->
  <text x="110" y="270"
    font-family="Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif"
    font-size="84" font-weight="800" fill="#191f28" letter-spacing="-2">
    기부재단의 모든 것
  </text>

  <!-- subtitle line 1 -->
  <text x="110" y="345"
    font-family="Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif"
    font-size="32" font-weight="500" fill="#4e5968">
    기부금은 어떻게 모이고, 어디로 가고,
  </text>
  <text x="110" y="390"
    font-family="Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif"
    font-size="32" font-weight="500" fill="#4e5968">
    어떤 규칙을 따를까?
  </text>

  <!-- topic chips -->
  <g transform="translate(110, 450)">
    ${['기부재단', '기부금 종류', '모금·이관·배분', '세금 혜택', '80% 규칙']
      .map((label, i) => {
        const x = i * 184;
        return `
          <g transform="translate(${x}, 0)">
            <rect width="170" height="50" rx="25" fill="#ffffff" stroke="#e5e8eb" stroke-width="1.5"/>
            <text x="85" y="32" text-anchor="middle"
              font-family="Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif"
              font-size="19" font-weight="600" fill="#191f28">${label}</text>
          </g>
        `;
      })
      .join('')}
  </g>

  <!-- footer URL -->
  <text x="110" y="${H - 70}"
    font-family="Pretendard, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif"
    font-size="22" font-weight="600" fill="#8b95a1">
    hotjuun.github.io/Donation_guide
  </text>

  <!-- right side big emoji decoration -->
  <text x="${W - 120}" y="${H - 80}" text-anchor="end"
    font-size="280" opacity="0.08">🏛️</text>
</svg>
`;

const resvg = new Resvg(svg, {
  font: {
    loadSystemFonts: true,
    defaultFontFamily: 'Malgun Gothic',
  },
  fitTo: { mode: 'width', value: W },
});

const pngBuffer = resvg.render().asPng();
const outPath = resolve(outDir, 'og.png');
writeFileSync(outPath, pngBuffer);
console.log(`✓ Generated ${outPath} (${pngBuffer.length.toLocaleString()} bytes)`);
