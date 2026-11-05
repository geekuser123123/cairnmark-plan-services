import { pageHero, ctaBand, faqList, faqSchema, guideLayout, callout, SITE, ORG_ID } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Solo 401(k)', path: '/solo-401k/' },
];

const SECTIONS = [
  ['fit', 'Is a Solo 401(k) a fit?'],
  ['roles', 'How do contributions work?'],
  ['roth', 'What Roth options exist?'],
  ['when', 'When must things happen?'],
  ['money', 'Can I borrow, roll over or withdraw?'],
  ['report', 'What gets reported?'],
  ['vs', 'How does it compare?'],
  ['faq', 'Quick answers'],
];

const faqs = [
  { q: 'Does my spouse count as an employee?', a: '<p>A spouse who works in the business can participate without ending one-participant status, provided compensation is genuine and reasonable for work actually done.</p>' },
  { q: 'I’m a W-2 employee with a side business. Can I have one?', a: '<p>Often, yes — through the side business. Remember that the employee-deferral limit is shared across all 401(k) and 403(b) plans you participate in.</p>' },
  { q: 'What if I hire my first employee?', a: '<p>Once an employee meets the plan’s eligibility rules, they generally must be offered participation, and the plan usually stops being a one-participant plan. Talk to your provider before hiring.</p>' },
  { q: 'Can Cairnmark help me open one?', a: '<p>Yes. Our <a href="/plan-support/">plan setup help</a> walks you through setup with the provider you choose, and we can keep records and prepare Form 5500-EZ once it’s required.</p>' },
];

export default {
  path: '/solo-401k/',
  title: 'Solo 401(k) Guide | Cairnmark Plan Services, Salt Lake City',
  description:
    'Solo 401(k) basics for the self-employed: fit, employee and employer contributions, Roth options, timing rules, loans and rollovers, Form 5500-EZ and SEP/SIMPLE comparison.',
  crumbs,
  schema: [
    { '@type': 'Article', '@id': `${SITE}/solo-401k/#article`, headline: 'Solo 401(k) Guide', author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: `${SITE}/solo-401k/`, dateModified: new Date().toISOString().slice(0, 10) },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  kicker: 'Guide',
  title: 'Solo 401(k): a field guide for the self-employed',
  lead: 'One-participant 401(k) plans can give owner-only businesses generous savings room. Here’s how they generally work, and the details worth getting right.',
  crumbs,
  image: 'workspace',
  aside: `<dl class="facts"><div><dt>IRS term</dt><dd>One-participant 401(k)</dd></div><div><dt>Sections</dt><dd>${SECTIONS.length}</dd></div></dl>`,
})}

${guideLayout(
  SECTIONS,
  `
<section id="fit" aria-labelledby="c1">
  <h2 id="c1"><span class="sec-n">Question 1</span>Is a Solo 401(k) a fit?</h2>
  <p>A Solo 401(k) is a standard 401(k) profit-sharing plan that covers only the business owner — and a spouse or co-owners where applicable. It may be a fit if:</p>
  <ul class="ticks">
    <li>You earn self-employment or business income.</li>
    <li>No one besides owners and spouses meets the plan’s eligibility rules.</li>
    <li>You’ve checked related businesses you own under controlled-group rules.</li>
    <li>You’re comfortable with — or want help with — the annual paperwork.</li>
  </ul>
  ${callout('<p>Planning to hire? An eligible employee generally ends “solo” status. Plan the change with your provider first.</p>', 'warn')}
</section>

<section id="roles" aria-labelledby="c2">
  <h2 id="c2"><span class="sec-n">Question 2</span>How do contributions work?</h2>
  <div class="duo">
    <div><h3>As employee</h3><p><strong>Elective deferrals</strong>, pre-tax or Roth, up to the annual limit, plus catch-ups from age 50 and a higher catch-up at ages 60–63 under SECURE 2.0. The limit is per person across all your 401(k) and 403(b) plans.</p></div>
    <div><h3>As employer</h3><p><strong>Profit-sharing contributions</strong>: generally up to 25% of W-2 compensation for incorporated businesses; for sole proprietors, based on net self-employment earnings after the half-SE-tax and contribution deductions (roughly 20% of net earnings).</p></div>
  </div>
  <p>Both together are capped by the overall §415(c) limit, plus catch-ups. The IRS updates limits most years — confirm current figures on IRS.gov or with your CPA.</p>
</section>

<section id="roth" aria-labelledby="c3">
  <h2 id="c3"><span class="sec-n">Question 3</span>What Roth options exist?</h2>
  <ul>
    <li><strong>Roth deferrals</strong> if the plan offers them — no income limit, unlike Roth IRA contributions.</li>
    <li><strong>Roth employer contributions</strong>, permitted by SECURE 2.0 when the plan and provider support them.</li>
    <li><strong>In-plan Roth conversions</strong> of pre-tax balances, where allowed — generally taxable in the year converted.</li>
  </ul>
</section>

<section id="when" aria-labelledby="c4">
  <h2 id="c4"><span class="sec-n">Question 4</span>When must things happen?</h2>
  <ul>
    <li>A new plan can generally be adopted up to the business’s tax-filing deadline, including extensions, for <strong>employer</strong> contributions for that year.</li>
    <li>SECURE 2.0 lets sole proprietors and single-member LLCs that adopt a new plan after year-end make <strong>first-year deferrals</strong> up to their individual return’s original due date.</li>
    <li>Incorporated owners generally defer from paychecks issued after the plan exists and an election is made.</li>
  </ul>
</section>

<section id="money" aria-labelledby="c5">
  <h2 id="c5"><span class="sec-n">Question 5</span>Can I borrow, roll over or withdraw?</h2>
  <ul>
    <li><strong>Loans</strong>, if the plan allows: generally up to the lesser of $50,000 or 50% of the vested balance, repaid at least quarterly within five years.</li>
    <li><strong>Rollovers in</strong> from other qualified plans, 403(b)s, governmental 457(b)s and traditional IRAs, if the plan accepts them. Roth IRA money can’t be rolled into a 401(k).</li>
    <li><strong>Withdrawals</strong> before 59½ are generally taxable plus a 10% additional tax unless an exception applies. RMDs generally begin at 73 (75 from 2033); Roth 401(k) accounts no longer require lifetime RMDs.</li>
  </ul>
</section>

<section id="report" aria-labelledby="c6">
  <h2 id="c6"><span class="sec-n">Question 6</span>What gets reported?</h2>
  <p>Once total assets across your one-participant plans exceed <strong>$250,000</strong> at year-end — and always in the plan’s final year — the plan generally files <strong>Form 5500-EZ</strong> by the last day of the seventh month after year-end (July 31 for calendar-year plans). Form 5558 extends the deadline by 2½ months. <a href="/plan-support/">We prepare it</a> for your review and signature.</p>
</section>

<section id="vs" aria-labelledby="c7">
  <h2 id="c7"><span class="sec-n">Question 7</span>How does it compare?</h2>
  <div class="table-wrap"><table class="table">
    <thead><tr><th scope="col"></th><th scope="col">Solo 401(k)</th><th scope="col">SEP IRA</th><th scope="col">SIMPLE IRA</th></tr></thead>
    <tbody>
      <tr><th scope="row">Employee deferrals</th><td>Yes</td><td>No</td><td>Yes, lower limit</td></tr>
      <tr><th scope="row">Loans</th><td>If plan allows</td><td>No</td><td>No</td></tr>
      <tr><th scope="row">Covers</th><td>Owners &amp; spouses</td><td>Eligible employees</td><td>Eligible employees</td></tr>
      <tr><th scope="row">Annual filing</th><td>5500-EZ above $250k</td><td>Generally none</td><td>Generally none</td></tr>
    </tbody>
  </table></div>
</section>

<section id="faq" aria-labelledby="c8">
  <h2 id="c8"><span class="sec-n">Quick answers</span>Quick answers</h2>
  ${faqList(faqs)}
  <p class="source">Official source: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>. General education only; see our <a href="/disclosures/">disclosures</a>.</p>
</section>
`,
)}

${ctaBand({ heading: 'Considering a Solo 401(k)?', text: 'Let’s meet at your office in Salt Lake City and talk through setup and the support you’d want afterward.', button: 'Schedule a Meeting' })}
`,
};
