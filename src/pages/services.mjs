import { icon, pageHero, ctaBand, SERVICES, SITE, ORG_ID, B, esc, callout } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services/' },
];

const DETAIL = {
  planSetup: {
    desc: 'We sit down with you and work through setup alongside the plan provider you pick, so the plan, its EIN and its accounts start out correct.',
    for: 'Owner-only businesses ready to open a Solo or self-directed 401(k), or still deciding.',
    covers: ['Checklist of what your provider will ask for', 'Help completing adoption and setup forms', 'Plan EIN and plan-titled accounts', 'A one-page summary of your plan’s features'],
  },
  filing: {
    desc: 'Each year your one-participant plan must file, we prepare Form 5500-EZ from your records and review it with you before you sign.',
    for: 'Plans over $250,000 at year-end, plans in their final year, and plans with missed years to catch up.',
    covers: ['Yearly “do we file?” check', 'Return prepared from plan records', 'Review meeting before signature', 'Electronic (EFAST2) or paper filing guidance'],
  },
  recordkeeping: {
    desc: 'We maintain the plan’s paper trail: contributions, transactions and documented year-end values for every asset.',
    for: 'Plans holding real estate, private investments or several accounts — and anyone who wants records a CPA can rely on.',
    covers: ['Contribution log by type and date', 'Per-asset transaction records', 'Year-end valuation summary', 'Annual plan binder'],
  },
  ongoing: {
    desc: 'A direct line through the plan year for reminders and questions — before you invest, hire, restructure or wind down.',
    for: 'Plan sponsors who want to check in before acting.',
    covers: ['Key-date reminders', 'Questions before changes or new investments', 'Business changes that affect the plan', 'Coordination with your other professionals'],
  },
  education: {
    desc: 'A clear explanation of how self-directed 401(k) plans work and the rules that keep them qualified.',
    for: 'Owners weighing self-direction who want the full picture first.',
    covers: ['Plan parts and roles', 'Allowed and prohibited assets', 'Disqualified persons', 'Ongoing duties'],
  },
  solo401k: {
    desc: 'How owner-only plans work: who qualifies, how the two contribution roles fit together, Roth choices and annual filing.',
    for: 'Freelancers, consultants and owners with no eligible employees beyond owners and spouses.',
    covers: ['Eligibility and hiring', 'Employee vs. employer contributions', 'Roth deferrals and conversions', 'Timing and Form 5500-EZ'],
  },
  consultation: {
    desc: 'A meeting at your home or office in Salt Lake City to talk through your plan and agree on next steps.',
    for: 'Anyone who prefers a conversation to a stack of articles.',
    covers: ['Your situation, start to finish', 'Straight answers', 'Which support would help, if any', 'No obligation to proceed'],
  },
};

const groups = [
  ['admin', 'Plan support', 'Hands-on administrative help for Solo and self-directed 401(k) plans, at your location.'],
  ['education', 'Education & meetings', 'Know the rules before you act.'],
];

export default {
  path: '/services/',
  title: 'Services | Solo 401(k) Setup, Form 5500-EZ & Records — Salt Lake City',
  description:
    'Cairnmark services in Salt Lake City: Solo 401(k) setup help, Form 5500-EZ preparation, records and valuations, ongoing support, education and in-person planning meetings.',
  crumbs,
  schema: SERVICES.map((s) => ({
    '@type': 'Service',
    '@id': `${SITE}/services/#${s.id}`,
    name: s.title,
    description: DETAIL[s.key].desc,
    provider: { '@id': ORG_ID },
    areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
    url: `${SITE}/services/#${s.id}`,
  })),
  body: () => `
${pageHero({
  kicker: 'Services',
  title: 'Seven ways we help owner-run 401(k) plans',
  lead: 'Plan support and education for Solo and self-directed 401(k) plans across Salt Lake City — delivered at your home or office.',
  crumbs,
  image: 'office',
})}

<section class="section section--tight">
  <div class="container">
    <nav class="pills" aria-label="Jump to a service">${SERVICES.map((s) => `<a href="#${s.id}">${s.title}</a>`).join('')}</nav>
    ${callout(`<p><strong>Our role.</strong> ${esc(B.publicName)} provides administrative support and education at your direction, alongside your plan provider. We are not a plan fiduciary, trustee, custodian, registered investment adviser or broker-dealer; we never hold or invest plan assets; and we don’t give legal or tax advice.</p>`)}
  </div>
</section>

${groups
  .map(
    ([g, title, sub]) => `<section class="section${g === 'education' ? ' section--fog' : ''}" aria-labelledby="g-${g}">
  <div class="container">
    <div class="head"><p class="kicker">${g === 'admin' ? 'Support' : 'Education'}</p><h2 id="g-${g}">${title}</h2><p>${sub}</p></div>
    <div class="svc-list">
      ${SERVICES.filter((s) => s.group === g)
        .map(
          (s) => `<article class="svc-row" id="${s.id}" aria-labelledby="${s.id}-h">
        <div class="svc-row__main">${icon(s.icon, 'svc-row__icon')}<div><h3 id="${s.id}-h">${s.title}</h3><p>${DETAIL[s.key].desc}</p><p class="svc-row__for"><strong>Who it’s for:</strong> ${DETAIL[s.key].for}</p></div></div>
        <div class="svc-row__side"><ul class="ticks">${DETAIL[s.key].covers.map((c) => `<li>${c}</li>`).join('')}</ul><a class="btn btn--dark btn--sm" href="/contact/?interest=${encodeURIComponent(s.title)}">Ask about this service</a></div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`,
  )
  .join('')}

${ctaBand({ heading: 'Not sure what you need?', text: 'Tell us where your plan stands and we’ll suggest the right starting point.' })}
`,
};
