import { icon, pageHero, ctaBand, faqList, faqSchema, guideLayout, callout, mediaImg, SITE, ORG_ID } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Self-Directed 401(k)', path: '/self-directed-401k/' },
];

const SECTIONS = [
  ['what', 'What does “self-directed” mean?'],
  ['how', 'How is the plan put together?'],
  ['who', 'Who can sponsor one?'],
  ['hold', 'What can the plan hold?'],
  ['avoid', 'What must you avoid?'],
  ['tax', 'Can the plan owe tax?'],
  ['duties', 'What paperwork comes with it?'],
  ['ira', 'Why not a self-directed IRA?'],
  ['more', 'More questions'],
];

const faqs = [
  { q: 'Can my 401(k) buy a rental property along the Wasatch Front?', a: '<p>If the plan document allows real estate, yes — as a pure investment. The plan holds title, pays every expense and receives all rent. You and family members covered by the rules can’t live there, vacation there or do the work yourselves.</p>' },
  { q: 'Can the plan invest in my own company?', a: '<p>Generally that’s a prohibited transaction, because your company is a disqualified person. Some specialized structures exist, but they carry significant complexity and IRS scrutiny — get specialized legal advice first.</p>' },
  { q: 'Do I need a custodian?', a: '<p>Not always. Many owner-only plans use a trustee-directed setup where the trustee (often you) manages plan accounts directly. Others use a specialty custodian for alternative assets. Your provider will explain its approach.</p>' },
  { q: 'How often must I value plan assets?', a: '<p>At least annually, at fair market value, with support for how each value was determined — especially for real estate and private investments.</p>' },
];

export default {
  path: '/self-directed-401k/',
  title: 'Self-Directed 401(k) Questions Answered | Cairnmark Plan Services',
  description:
    'A question-by-question guide to Self-Directed 401(k) plans: plan parts, eligibility, permitted assets, prohibited transactions, UBTI, Form 5500-EZ and IRA comparison.',
  crumbs,
  schema: [
    { '@type': 'Article', '@id': `${SITE}/self-directed-401k/#article`, headline: 'Self-Directed 401(k) Questions Answered', author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: `${SITE}/self-directed-401k/`, dateModified: new Date().toISOString().slice(0, 10) },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  kicker: 'Guide',
  title: 'The Self-Directed 401(k), one question at a time',
  lead: 'Eight questions every business owner should be able to answer before directing a 401(k) into alternative investments.',
  crumbs,
  image: 'guide',
  aside: `<dl class="facts"><div><dt>Format</dt><dd>Questions &amp; answers</dd></div><div><dt>Sections</dt><dd>${SECTIONS.length}</dd></div></dl>`,
})}

${guideLayout(
  SECTIONS,
  `
<section id="what" aria-labelledby="q1">
  <h2 id="q1"><span class="sec-n">Question 1</span>What does “self-directed” mean?</h2>
  <p>It means the plan document lets participants direct investments across a broad range of assets, rather than picking from a short menu of funds. The plan is still an ordinary 401(k) under the Internal Revenue Code: same contribution limits, same distribution rules, same reporting.</p>
  <p>For people who work for themselves, a self-directed 401(k) is nearly always a <a href="/solo-401k/">Solo 401(k)</a> whose document permits alternative assets.</p>
  ${callout('<p><strong>Remember:</strong> the plan document sets the boundaries. If it doesn’t permit an asset, a loan or a Roth feature, the plan can’t offer it.</p>')}
</section>

<section id="how" aria-labelledby="q2">
  <h2 id="q2"><span class="sec-n">Question 2</span>How is the plan put together?</h2>
  <div class="parts">
    <div>${icon('briefcase')}<h3>Sponsor</h3><p>Your business adopts and maintains the plan.</p></div>
    <div>${icon('doc')}<h3>Document</h3><p>Defines eligibility, contributions, loans and permitted assets.</p></div>
    <div>${icon('shield')}<h3>Trustee</h3><p>Holds plan assets in trust — often the owner in a Solo plan.</p></div>
    <div>${icon('layers')}<h3>Accounts</h3><p>Bank, brokerage or custodial accounts titled to the plan under its own EIN.</p></div>
  </div>
  <p>Some providers set up a trustee-directed (“checkbook”) arrangement where the trustee pays for investments from a plan bank account; others route alternative assets through a custodian. Either way, every transaction must be documented.</p>
</section>

<section id="who" aria-labelledby="q3">
  <h2 id="q3"><span class="sec-n">Question 3</span>Who can sponsor one?</h2>
  <ul>
    <li><strong>A business with earned income</strong> — sole proprietorships, LLCs, partnerships and corporations. W-2 wages alone don’t qualify you to sponsor a plan.</li>
    <li><strong>Owner-only businesses</strong> for one-participant plans. Eligible employees generally must be covered, which changes the plan.</li>
    <li><strong>Mind related businesses:</strong> controlled-group rules can treat companies you own as one employer.</li>
    <li><strong>Mind part-timers:</strong> the SECURE Act and SECURE 2.0 Act added long-term part-time eligibility rules.</li>
  </ul>
</section>

<figure class="guide__figure">${mediaImg('workspace', { cls: 'guide__img', label: 'Planning' })}</figure>

<section id="hold" aria-labelledby="q4">
  <h2 id="q4"><span class="sec-n">Question 4</span>What can the plan hold?</h2>
  <p>Federal law restricts a few assets rather than listing allowed ones. Within those limits, your plan document and provider decide. Common self-directed holdings:</p>
  <div class="chips">
    <span>${icon('home')}Real estate</span><span>${icon('handshake')}Private notes &amp; loans</span><span>${icon('building')}Private company &amp; LLC interests</span><span>${icon('coins')}Qualifying bullion</span><span>${icon('growth')}Public securities</span>
  </div>
  <p><strong>Off-limits:</strong> collectibles — art, antiques, gems, stamps, most coins, alcoholic beverages and similar items. Acquiring one in an individually directed account is treated as a distribution (IRC §408(m)).</p>
  <p class="muted">Alternative assets can be illiquid, hard to value and higher-risk. Nothing here recommends any investment.</p>
</section>

<section id="avoid" aria-labelledby="q5">
  <h2 id="q5"><span class="sec-n">Question 5</span>What must you avoid?</h2>
  <p>IRC §4975 prohibits most transactions between the plan and <strong>disqualified persons</strong>: you; your spouse; your parents, grandparents, children and grandchildren and their spouses; your business; plan fiduciaries and service providers; and entities 50% or more owned by these persons. Siblings generally aren’t included.</p>
  <div class="dont">
    <div><strong>No</strong> buying from or selling to a disqualified person.</div>
    <div><strong>No</strong> loans between the plan and a disqualified person, or personal guarantees of plan debt.</div>
    <div><strong>No</strong> personal use of plan property — not even briefly.</div>
    <div><strong>No</strong> doing paid or unpaid work on plan property yourself.</div>
  </div>
  ${callout('<p>Prohibited transactions generally trigger a 15% excise tax on the amount involved each year, rising to 100% if not corrected in time. Speak to an ERISA attorney promptly if you suspect a problem.</p>', 'warn')}
</section>

<section id="tax" aria-labelledby="q6">
  <h2 id="q6"><span class="sec-n">Question 6</span>Can the plan owe tax?</h2>
  <ul>
    <li><strong>UBTI</strong> — income from an active trade or business, often through an LLC or partnership the plan owns. Plans with $1,000 or more of gross unrelated business income generally file Form 990-T.</li>
    <li><strong>UDFI</strong> — income from property bought with borrowed money. Qualified plans, unlike IRAs, may qualify for an exception for certain debt-financed real estate under IRC §514(c)(9), if its conditions are met.</li>
  </ul>
</section>

<section id="duties" aria-labelledby="q7">
  <h2 id="q7"><span class="sec-n">Question 7</span>What paperwork comes with it?</h2>
  <ul class="ticks">
    <li>Form 5500-EZ when one-participant plan assets exceed $250,000 at year-end, and in the final year — generally due the last day of the seventh month after year-end.</li>
    <li>Annual fair-market valuations of every asset, with support.</li>
    <li>Contribution records by type and deposit date.</li>
    <li>Plan document amendments and restatements when the law changes.</li>
    <li>Form 1099-R for any distribution.</li>
  </ul>
  <p>This is exactly what our <a href="/plan-support/">plan support</a> is built around.</p>
</section>

<section id="ira" aria-labelledby="q8">
  <h2 id="q8"><span class="sec-n">Question 8</span>Why not a self-directed IRA?</h2>
  <div class="table-wrap"><table class="table">
    <thead><tr><th scope="col"></th><th scope="col">Self-directed IRA</th><th scope="col">Self-directed 401(k)</th></tr></thead>
    <tbody>
      <tr><th scope="row">Needs a business</th><td>No</td><td>Yes</td></tr>
      <tr><th scope="row">Holds assets</th><td>IRA custodian</td><td>Plan trust</td></tr>
      <tr><th scope="row">Participant loans</th><td>Not permitted</td><td>If the plan allows</td></tr>
      <tr><th scope="row">Roth income limits</th><td>Apply to Roth IRA contributions</td><td>None for Roth deferrals</td></tr>
      <tr><th scope="row">Leveraged real estate</th><td>UDFI generally applies</td><td>§514(c)(9) exception may apply</td></tr>
      <tr><th scope="row">Annual reporting</th><td>Custodian files</td><td>Sponsor files 5500-EZ when required</td></tr>
    </tbody>
  </table></div>
</section>

<section id="more" aria-labelledby="q9">
  <h2 id="q9"><span class="sec-n">More</span>More questions</h2>
  ${faqList(faqs)}
  <p class="source">General education, not advice. Official sources: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>; <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" rel="noopener" target="_blank">IRS — Prohibited Transactions</a>. See our <a href="/disclosures/">disclosures</a>.</p>
</section>
`,
)}

${ctaBand({ heading: 'Want a second set of eyes on your plan?', text: 'We’ll meet you in Salt Lake City and help keep your self-directed 401(k) records and filings in order.', button: 'Schedule a Meeting' })}
`,
};
