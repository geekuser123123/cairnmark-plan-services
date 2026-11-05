import { icon, pageHero, ctaBand, faqList, faqSchema, callout, mediaImg, B, esc, SITE, ORG_ID } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Plan Support', path: '/plan-support/' },
];

const faqs = [
  { q: 'Does my plan need to file Form 5500-EZ this year?', a: '<p>A one-participant plan generally must file for any plan year in which total assets in all of the employer’s one-participant plans exceed $250,000 at year-end, and for its final plan year. We check this with you every year.</p>' },
  { q: 'Who signs and submits the return?', a: '<p>You do, as plan sponsor or plan administrator. We prepare it and walk through it with you; it can be filed electronically through the Department of Labor’s EFAST2 system or on paper with the IRS.</p>' },
  { q: 'My records are a mess. Can you still help?', a: '<p>Yes. We start by gathering statements and documents, rebuild a contribution and transaction log, and identify any missed filings. If late returns are involved, IRS relief programs may apply — we’ll recommend involving your tax professional.</p>' },
  { q: 'Can you tell me if an investment is allowed?', a: '<p>We can explain the general rules and point out issues worth checking, but we don’t approve or recommend investments. For specific transactions, check with your plan provider, CPA or an ERISA attorney.</p>' },
  { q: 'Does your support make you a fiduciary to my plan?', a: '<p>Our role is administrative and educational support at your direction. We don’t take discretionary authority over plan assets or investments. For questions about fiduciary status in your situation, consult an ERISA attorney.</p>' },
];

const SUPPORT = [
  { icon: 'check', title: 'Plan setup help', lede: 'Getting the foundations right is the cheapest compliance you’ll ever buy.', items: ['Information checklist for your provider’s adoption agreement', 'Help completing setup forms', 'Plan EIN and plan-titled account checklist', 'One-page summary of your plan’s features'] },
  { icon: 'layers', title: 'Records & valuations', lede: 'The paper trail a self-directed plan depends on, kept current.', items: ['Contribution log by type, source and deposit date', 'Purchase, sale, income and expense records per asset', 'Year-end valuation summary with supporting documents', 'An annual plan binder for you and your CPA'] },
  { icon: 'doc', title: 'Form 5500-EZ preparation', lede: 'The annual return many one-participant plans owe once assets pass $250,000.', items: ['Yearly check of whether a filing is required', 'Return prepared from your plan records', 'Review meeting before you sign', 'Help choosing electronic or paper filing'] },
  { icon: 'shield', title: 'Ongoing support', lede: 'Someone to call when your plan meets real life.', items: ['Reminders ahead of key plan-year dates', 'Questions before new investments or changes', 'Guidance when hiring, restructuring or closing', 'Coordination with your CPA, attorney or provider'] },
];

export default {
  path: '/plan-support/',
  title: 'Solo & Self-Directed 401(k) Plan Support | Salt Lake City, UT',
  description:
    'Plan setup help, records and valuations, Form 5500-EZ preparation and ongoing support for Solo and self-directed 401(k) plans in Salt Lake City, at your location.',
  crumbs,
  schema: [
    {
      '@type': 'Service',
      '@id': `${SITE}/plan-support/#service`,
      name: 'Solo & Self-Directed 401(k) Plan Support',
      serviceType: 'Retirement plan administrative support',
      provider: { '@id': ORG_ID },
      areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
      description: 'Plan setup help, recordkeeping and valuation support, Form 5500-EZ preparation and ongoing support for one-participant and self-directed 401(k) plans.',
    },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  kicker: 'Plan support',
  title: 'Steady, hands-on support for owner-run 401(k) plans',
  lead: 'Solo and self-directed plans give you control — and a list of administrative duties. Cairnmark helps you keep up with them, working at your direction and alongside your plan provider.',
  crumbs,
  image: 'admin',
  aside: `<dl class="facts"><div><dt>Plans</dt><dd>Solo &amp; self-directed 401(k)</dd></div><div><dt>Meetings</dt><dd>At your location</dd></div><div><dt>Area</dt><dd>${esc(B.serviceArea.join(' · '))}</dd></div></dl>`,
})}

<section class="section" aria-labelledby="sup-h">
  <div class="container">
    <div class="head"><p class="kicker">The work</p><h2 id="sup-h">What plan support covers</h2></div>
    <div class="support">
      ${SUPPORT.map((s, i) => `<article class="support__item">
        <div class="support__head"><span class="support__n">0${i + 1}</span>${icon(s.icon, 'support__icon')}</div>
        <h3>${s.title}</h3><p class="support__lede">${s.lede}</p>
        <ul class="ticks">${s.items.map((x) => `<li>${x}</li>`).join('')}</ul>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="bound-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">Boundaries</p>
      <h2 id="bound-h">Where our role stops</h2>
      <p class="lead">You remain the plan’s sponsor and, usually, its trustee. Clear limits protect you and the plan.</p>
      <ul class="crosses">
        <li>We never hold, move or invest plan money.</li>
        <li>We don’t recommend or approve investments.</li>
        <li>We aren’t your plan’s trustee, custodian or fiduciary.</li>
        <li>We don’t give legal or tax advice — we loop in your professionals.</li>
        <li>We don’t sign returns for you; filings carry your signature.</li>
      </ul>
    </div>
    <figure class="split__media">${mediaImg('office', { cls: 'split__img', label: 'Working sessions' })}</figure>
  </div>
</section>

<section class="section" aria-labelledby="how-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">How we work together</p><h2 id="how-h">A simple rhythm</h2></div>
    <ol class="rhythm">
      <li><span>1</span><h3>First conversation</h3><p>By phone or at your office: your business, your plan and where you want help.</p></li>
      <li><span>2</span><h3>Agree the scope</h3><p>What we’ll handle, what your provider handles, what stays with you.</p></li>
      <li><span>3</span><h3>Get current</h3><p>New plan: setup with your provider. Existing plan: records gathered and gaps closed.</p></li>
      <li><span>4</span><h3>Stay current</h3><p>Records kept up, reminders sent, questions answered through the year.</p></li>
      <li><span>5</span><h3>Close the year</h3><p>Values documented; Form 5500-EZ prepared for your signature when required.</p></li>
    </ol>
  </div>
</section>

<section class="section section--sand" aria-labelledby="ps-faq-h">
  <div class="container narrow">
    <div class="head head--center"><p class="kicker">Questions</p><h2 id="ps-faq-h">Plan support FAQ</h2></div>
    ${faqList(faqs)}
    ${callout('<p>Administrative support is not a substitute for professional advice. For tax treatment, legal compliance or investment suitability, consult a qualified CPA, ERISA attorney or licensed adviser.</p>')}
  </div>
</section>

${ctaBand({ heading: 'Ready to get your plan current?', text: 'New plan or existing one, we’ll meet you at your location and map out the support that fits.', button: 'Schedule a Meeting' })}
`,
};
