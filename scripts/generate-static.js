// 빌드 후 dist/ 에 AI/SEO 자산을 주입합니다 (디자인 영향 0).
// - <head> 에 JSON-LD (Article + FAQPage + Breadcrumb)
// - dist/llms.txt, dist/llms-full.txt (LLM 표준 — llmstxt.org)
//
// JSON-LD FAQPage 안에 모든 본문 텍스트가 들어있으므로,
// JS 미실행 크롤러(GPTBot/ClaudeBot/PerplexityBot)도 전체 내용을 가져갑니다.

import { sections } from '../src/content.js';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');
const SITE = 'https://hotjuun.github.io/Donation_guide';

// ─── 1. JSON-LD ────────────────────────────────────────────
const faqEntities = sections.flatMap((s) =>
  s.content.map((item) => ({
    '@type': 'Question',
    name: item.subtitle,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.text,
    },
  }))
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '기부재단의 모든 것 — 쉬운 가이드',
      description:
        '기부재단의 운영, 모금-이관-배분 흐름, 세금 혜택, 비영리법인 설립, 기부금 영수증, 80% 규칙 등을 중학생도 이해할 수 있게 정리한 종합 가이드',
      image: `${SITE}/og.png`,
      url: `${SITE}/`,
      inLanguage: 'ko-KR',
      author: { '@type': 'Organization', name: '기부재단 가이드' },
      publisher: {
        '@type': 'Organization',
        name: '기부재단 가이드',
        logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: sections.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        item: `${SITE}/#${s.id}`,
      })),
    },
  ],
};

// ─── 2. Patch dist/index.html — JSON-LD only ──────────────
const indexPath = resolve(distDir, 'index.html');
let html = readFileSync(indexPath, 'utf8');

const ldScript = `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`;
html = html.replace('</head>', ldScript);

writeFileSync(indexPath, html);

// ─── 4. llms.txt (llmstxt.org spec) ───────────────────────
const llmsTxt = `# 기부재단의 모든 것

> 중학생도 이해할 수 있게 풀어 쓴 기부재단·기부금 종합 가이드입니다. 기부재단의 정의, 기부금의 종류, 모금-이관-배분 흐름, 세금 혜택, 비영리법인 설립, 기부금 영수증 발급, 80% 규칙 등 핵심 주제를 다룹니다.

## 섹션
${sections.map((s) => `- [${s.title}](${SITE}/#${s.id}): ${s.content[0].subtitle} 외 ${s.content.length - 1}개 항목`).join('\n')}

## 전체 콘텐츠
- [llms-full.txt](${SITE}/llms-full.txt): 모든 섹션의 본문 텍스트 (마크다운)
`;
writeFileSync(resolve(distDir, 'llms.txt'), llmsTxt);

// ─── 5. llms-full.txt — 전체 본문 마크다운 ────────────────
const llmsFullTxt = `# 기부재단의 모든 것 — 쉬운 가이드

기부금은 어떻게 모이고, 어디로 가고, 어떤 규칙을 따를까?
중학생도 이해할 수 있게 풀어 쓴 종합 가이드.

출처: ${SITE}/

${sections
  .map(
    (s) => `## ${s.title}

${s.content.map((item) => `### ${item.subtitle}\n\n${item.text}`).join('\n\n')}`
  )
  .join('\n\n')}

---

## 관련 법률
- 법인세법 제24조 (기부금)
- 소득세법 제59조의4 (기부금 세액공제)
- 상속세 및 증여세법 제16조·제48조 (공익법인 출연재산)
- 공익법인의 설립·운영에 관한 법률
- 기부금품의 모집 및 사용에 관한 법률
`;
writeFileSync(resolve(distDir, 'llms-full.txt'), llmsFullTxt);

console.log('✓ Injected JSON-LD into index.html and generated llms.txt / llms-full.txt');
