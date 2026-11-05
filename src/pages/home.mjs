import { icon, SERVICES, faqList, faqSchema, ctaBand, B, esc, mediaImg, heroVideo, phoneHref } from '../lib.mjs';

const faqs = [
  { q: 'Who is Cairnmark for?', a: '<p>Salt Lake City business owners and self-employed professionals who have — or are considering — a Solo or self-directed 401(k), and want help with the setup, the records and the annual filing that come with it.</p>' },
  { q: 'Do you meet in person?', a: `<p>Yes. We meet clients at their home or office in ${esc(B.serviceArea.join(' and '))}, by appointment. We can also talk by phone first to see whether we’re a fit.</p>` },
  { q: 'Will you choose my investments?', a: '<p>No. You decide what your plan invests in. We help keep the plan’s paperwork and records in order and explain the rules that apply.</p>' },
  { q: 'Do you hold my retirement money?', a: '<p>Never. Plan assets stay in accounts titled to your plan with the provider and institutions you choose.</p>' },
  { q: 'What does Form 5500-EZ preparation include?', a: '<p>We confirm whether your one-participant plan must file for the year, prepare the return from your plan records, and walk you through it before you sign and file.</p>' },
  { q: 'How do I get started?', a: `<p>Call <a href="${phoneHref()}">${esc(B.phone)}</a> or use the <a href="/contact/">contact form</a>. Tell us where your plan stands and we’ll set up a time to meet.</p>` },
];

const MARKERS = [
  ['check', 'Start right', 'Set up a Solo or self-directed 401(k) with the provider you choose — paperwork, plan EIN and plan-titled accounts in order from day one.'],
  ['layers', 'Keep the trail', 'Contributions, purchases, sales and year-end values recorded as they happen, not reconstructed in a panic.'],
  ['doc', 'File on time', 'Form 5500-EZ prepared for your signature in the years your plan must file — and a clear answer in the years it doesn’t.'],
  ['chat', 'Ask before you act', 'A direct line for questions before a new investment, a hire, or a change in your business.'],
];

const LIFECYCLE = [
  ['01', 'Decide', 'Is a Solo or self-directed 401(k) the right tool? We explain the trade-offs.'],
  ['02', 'Set up', 'Plan document, adoption agreement, EIN, plan accounts — done with your provider.'],
  ['03', 'Fund', 'Employee deferrals and employer contributions, recorded by type and date.'],
  ['04', 'Invest', 'You direct investments the plan permits; we help keep the paper trail.'],
  ['05', 'Value', 'Year-end values gathered and documented for every plan asset.'],
  ['06', 'Report', 'Form 5500-EZ prepared when required; reminders before every deadline.'],
];

export default {
  path: '/',
  title: 'Cairnmark Plan Services | Solo 401(k) Support in Salt Lake City, UT',
  description:
    'Solo and self-directed 401(k) plan support in Salt Lake City: plan setup help, Form 5500-EZ preparation, recordkeeping, ongoing support and plain-English education.',
  schema: [faqSchema(faqs)],
  bodyClass: 'is-home',
  body: () => `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__bg" aria-hidden="true">${heroVideo()}<div class="hero__fallback"></div></div>
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="kicker kicker--light">Salt Lake City · ${esc(B.tagline)}</p>
      <h1 id="hero-h">Every retirement plan needs <em>clear markers.</em></h1>
      <p class="hero__lead">Cairnmark helps Salt Lake City business owners set up and run Solo and self-directed 401(k) plans — organized records, Form 5500-EZ on time, and answers in plain English. We meet you where you work.</p>
      <div class="btn-row">
        <a class="btn btn--accent btn--lg" href="/contact/">Schedule a Meeting</a>
        <a class="btn btn--glass btn--lg" href="${phoneHref()}">${icon('phone')} ${esc(B.phone)}</a>
      </div>
    </div>
    <ul class="hero__stack" aria-label="What we help with">
      ${MARKERS.map(([ic, t]) => `<li>${icon(ic)}<span>${t}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="markers-h">
  <div class="container">
    <div class="head head--split">
      <div><p class="kicker">What we do</p><h2 id="markers-h">Four markers that keep a plan on track</h2></div>
      <p>A cairn tells hikers they’re on the right path. Our work does the same for your 401(k): small, steady markers that keep you compliant and confident.</p>
    </div>
    <div class="markers">
      ${MARKERS.map(([ic, t, d], i) => `<article class="marker"><span class="marker__n">0${i + 1}</span>${icon(ic, 'marker__icon')}<h3>${t}</h3><p>${d}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="visit-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('city', { cls: 'split__img', label: 'Salt Lake City' })}</figure>
    <div class="split__text">
      <p class="kicker">We come to you</p>
      <h2 id="visit-h">Plan support that meets you in Salt Lake City</h2>
      <p class="lead">Your plan records live where you do business, so that’s where we meet. Appointments at your home or office across Salt Lake City, ${esc(B.hours?.length ? 'Monday through Friday, 9 AM to 5 PM' : 'by appointment')}.</p>
      <ul class="ticks">
        <li>In-person working sessions at your location</li>
        <li>Phone check-ins between meetings</li>
        <li>Coordination with your CPA, attorney or plan provider</li>
      </ul>
      <div class="btn-row"><a class="btn btn--dark" href="/contact/">Book a visit</a><a class="link-arrow" href="/plan-support/">How plan support works ${icon('arrow')}</a></div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="life-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">The plan lifecycle</p><h2 id="life-h">From first decision to annual report</h2><p>Where Cairnmark fits at each stage of a Solo or self-directed 401(k).</p></div>
    <ol class="trail">
      ${LIFECYCLE.map(([n, t, d]) => `<li><span class="trail__n">${n}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section section--ink" aria-labelledby="split-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker kicker--light">Clear responsibilities</p><h2 id="split-h">Yours, ours, and your provider’s</h2></div><p>Knowing who does what is the first rule of a well-run self-directed plan.</p></div>
    <div class="resp">
      <div class="resp__col"><h3>You decide</h3><ul><li>Whether to adopt a plan, and which provider</li><li>Contribution amounts and timing</li><li>Every investment the plan makes</li><li>Reviewing and signing plan filings</li></ul></div>
      <div class="resp__col resp__col--us"><h3>Cairnmark handles</h3><ul><li>Setup help and paperwork checklists</li><li>Contribution, transaction and valuation records</li><li>Form 5500-EZ preparation</li><li>Deadline reminders and answers</li></ul></div>
      <div class="resp__col"><h3>Your provider supplies</h3><ul><li>The plan document and updates</li><li>Plan accounts and custody, where applicable</li><li>Its own statements and notices</li></ul></div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="svc-h">
  <div class="container split split--top">
    <div class="split__text sticky-col">
      <p class="kicker">Services</p>
      <h2 id="svc-h">Support and education, side by side</h2>
      <p class="lead">Hands-on administrative help when you need the work done; clear education when you need to understand the rules.</p>
      <a class="btn btn--accent" href="/services/">See all services</a>
    </div>
    <div class="svc-stack">
      ${SERVICES.map((s) => `<a class="svc-line" href="/services/#${s.id}">${icon(s.icon, 'svc-line__icon')}<span><strong>${s.title}</strong>${s.short}</span>${icon('arrow', 'svc-line__go')}</a>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="faq-h">
  <div class="container faq-wrap">
    <div class="faq-wrap__head"><p class="kicker">FAQ</p><h2 id="faq-h">Before we meet</h2><p>More in the <a href="/faq/">full FAQ</a>.</p></div>
    ${faqList(faqs)}
  </div>
</section>

${ctaBand({ heading: 'Let’s mark the path for your plan.', text: 'Schedule a meeting at your home or office in Salt Lake City. We’ll look at where your plan stands and what would help.', button: 'Schedule a Meeting' })}
`,
};
