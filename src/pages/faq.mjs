import { pageHero, ctaBand, faqList, faqSchema, B, esc, phoneHref } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq/' },
];

const GROUPS = [
  {
    id: 'about-us',
    title: 'About Cairnmark',
    faqs: [
      { q: 'Where do you meet clients?', a: `<p>At your home or office in ${esc(B.serviceArea.join(' and '))}, by appointment. A first conversation can happen by phone.</p>` },
      { q: 'What are your hours?', a: '<p>Monday through Friday, 9:00 AM to 5:00 PM Mountain Time.</p>' },
      { q: 'What exactly do you do?', a: '<p>Plan setup help, records and valuations, Form 5500-EZ preparation and ongoing support for Solo and self-directed 401(k) plans — plus education and planning meetings. See <a href="/services/">Services</a>.</p>' },
      { q: 'Do you make decisions about my plan?', a: '<p>No. You stay the plan sponsor and decision-maker. We do administrative work at your direction and explain the rules.</p>' },
      { q: 'Will you talk to my CPA?', a: '<p>Yes, with your permission. Coordinating with your CPA, attorney or plan provider is part of ongoing support.</p>' },
    ],
  },
  {
    id: 'solo-basics',
    title: 'Solo & self-directed basics',
    faqs: [
      { q: 'What’s the difference between a Solo and a self-directed 401(k)?', a: '<p>“Solo” describes who the plan covers — owners and spouses only. “Self-directed” describes what it may invest in — assets beyond a fund menu, if the document allows. A plan can be either or both.</p>' },
      { q: 'Can I open one without a business?', a: '<p>No. A 401(k) needs an employer sponsor; for the self-employed, that’s your own business.</p>' },
      { q: 'Can my spouse join the plan?', a: '<p>Generally yes, if your spouse earns genuine compensation from the business. It doesn’t end one-participant status.</p>' },
      { q: 'What happens when I hire?', a: '<p>Employees who meet the plan’s eligibility rules generally must be covered, which usually ends one-participant status and adds testing and reporting.</p>' },
    ],
  },
  {
    id: 'filing-records',
    title: 'Filing & records',
    faqs: [
      { q: 'When does my plan have to file Form 5500-EZ?', a: '<p>Generally in any year total one-participant plan assets exceed $250,000 at year-end, and in the final plan year regardless of assets.</p>' },
      { q: 'What’s the deadline?', a: '<p>The last day of the seventh month after the plan year ends — July 31 for calendar-year plans. Form 5558 extends it by 2½ months.</p>' },
      { q: 'Who signs it?', a: '<p>The plan sponsor or administrator — usually you. We prepare it for your review and signature.</p>' },
      { q: 'I think I missed a filing. What should I do?', a: '<p>Act soon. IRS penalty relief programs may be available for late filers in some situations. We can help rebuild records and prepare returns; your tax professional should advise on relief options.</p>' },
      { q: 'What records should a self-directed plan keep?', a: '<p>Contributions by type and deposit date, every purchase and sale, income and expenses by asset, year-end fair market values with support, and plan documents and amendments.</p>' },
    ],
  },
  {
    id: 'investing-rules',
    title: 'Investing rules',
    faqs: [
      { q: 'What can a self-directed 401(k) own?', a: '<p>Whatever its plan document permits and federal law doesn’t prohibit — commonly real estate, private loans, private company interests, qualifying bullion and public securities. Collectibles are not allowed.</p>' },
      { q: 'Who counts as a disqualified person?', a: '<p>Generally you, your spouse, your ancestors and lineal descendants and their spouses, your business, plan fiduciaries and service providers, and entities 50% or more owned by those persons.</p>' },
      { q: 'What happens after a prohibited transaction?', a: '<p>The disqualified person generally owes a 15% excise tax on the amount involved per year, rising to 100% if it isn’t corrected in time. Speak to an ERISA attorney promptly.</p>' },
      { q: 'Will you recommend investments?', a: '<p>No. We explain the rules; investment decisions are yours, ideally with a licensed adviser.</p>' },
    ],
  },
  {
    id: 'start',
    title: 'Getting started',
    faqs: [
      { q: 'How do I schedule a meeting?', a: `<p>Call <a href="${phoneHref()}">${esc(B.phone)}</a> or use the <a href="/contact/">contact form</a>.</p>` },
      { q: 'What should I gather first?', a: '<p>Your business type, your plan provider and recent statements if you already have a plan, and any notices you’ve received. If you don’t have a plan yet, just bring your questions.</p>' },
    ],
  },
];

const all = GROUPS.flatMap((g) => g.faqs);

export default {
  path: '/faq/',
  title: 'FAQ | Solo 401(k) Support in Salt Lake City — Cairnmark',
  description:
    'Answers about Cairnmark’s in-person plan support, Solo and self-directed 401(k) basics, Form 5500-EZ deadlines, plan records and the rules for self-directed investing.',
  crumbs,
  schema: [faqSchema(all)],
  body: () => `
${pageHero({ kicker: 'FAQ', title: 'Straight answers before we meet', lead: `${all.length} answers about plans, filings, rules and working with Cairnmark.`, crumbs })}

<div class="container faq-page">
  <nav class="faq-page__nav" aria-label="FAQ topics">
    <p class="guide__toc-h">Topics</p>
    <ol>${GROUPS.map((g) => `<li><a href="#${g.id}">${g.title}<span>${g.faqs.length}</span></a></li>`).join('')}</ol>
  </nav>
  <div class="faq-page__body">
    ${GROUPS.map((g) => `<section id="${g.id}" class="faq-group" aria-labelledby="${g.id}-h"><h2 id="${g.id}-h">${g.title}</h2>${faqList(g.faqs)}</section>`).join('')}
    <p class="source">General information only — not investment, legal or tax advice. See our <a href="/disclosures/">disclosures</a>.</p>
  </div>
</div>

${ctaBand({ heading: 'Ask us in person.', text: 'Bring your questions to a meeting at your home or office in Salt Lake City.', button: 'Schedule a Meeting' })}
`,
};
