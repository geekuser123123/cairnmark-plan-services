import { icon, pageHero, ctaBand, esc, B, cfg, phoneHtml, mediaImg } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about/' },
];

const VALUES = [
  ['compass', 'Guide, don’t steer', 'We show you the path and the rules; you choose the route.'],
  ['layers', 'Build steadily', 'Like a cairn, good records are built one stone at a time.'],
  ['handshake', 'Show up', 'We meet at your location and return calls promptly.'],
  ['eye', 'Say it plainly', 'Clear language, clear roles, no surprises.'],
];

export default {
  path: '/about/',
  title: 'About Cairnmark Plan Services | Salt Lake City',
  description:
    'About Cairnmark Plan Services: in-person Solo and self-directed 401(k) plan support and education for Salt Lake City business owners, built on clear roles and steady records.',
  crumbs,
  pageType: 'AboutPage',
  body: () => `
${pageHero({
  kicker: 'About',
  title: 'Named for the markers that keep travelers on course',
  lead: `${esc(B.publicName)} helps Salt Lake City business owners keep their Solo and self-directed 401(k) plans organized, current and understood — one clear marker at a time.`,
  crumbs,
  image: 'city',
})}

<section class="section" aria-labelledby="who-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">Who we are</p>
      <h2 id="who-h">Local, in-person plan support</h2>
      <p class="lead">Salt Lake City runs on independent work — consultants, contractors, clinicians, developers, family businesses. Many open a Solo 401(k) to save more, then find the plan comes with paperwork nobody mentioned.</p>
      <p>${esc(B.publicName)} handles that side of things with you: setup done properly, records kept current, Form 5500-EZ prepared when it’s due, and the rules explained along the way. We meet at your home or office, by appointment.</p>
      ${cfg.about.story ? `<div class="prose">${cfg.about.story}</div>` : ''}
      ${B.owner ? `<p><strong>Founded by:</strong> ${esc(B.owner)}</p>` : ''}
    </div>
    <figure class="split__media">${mediaImg('office', { cls: 'split__img', label: 'Cairnmark' })}</figure>
  </div>
</section>

<section class="section section--ink" aria-labelledby="name-h">
  <div class="container narrow center">
    <p class="kicker kicker--light">Why “Cairnmark”</p>
    <h2 id="name-h" class="statement">On Utah trails, a cairn is a small stack of stones that says: <em>you’re on the right path.</em> That’s the job we do for your plan.</h2>
  </div>
</section>

<section class="section" aria-labelledby="values-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">How we work</p><h2 id="values-h">Four commitments</h2></div>
    <div class="markers">${VALUES.map(([ic, t, d], i) => `<article class="marker"><span class="marker__n">0${i + 1}</span>${icon(ic, 'marker__icon')}<h3>${t}</h3><p>${d}</p></article>`).join('')}</div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="std-h">
  <div class="container split split--top">
    <div class="split__text"><p class="kicker">Standards</p><h2 id="std-h">What you can count on</h2></div>
    <ul class="standards">
      <li><strong>Agreed scope.</strong> We confirm what we handle, what your provider handles and what stays with you.</li>
      <li><strong>Your decisions stay yours.</strong> We’re not a plan fiduciary, trustee, custodian, registered investment adviser or broker-dealer, and we don’t give legal or tax advice.</li>
      <li><strong>Hands off plan money.</strong> Assets stay in accounts titled to your plan.</li>
      <li><strong>Current guidance.</strong> We follow IRS and Department of Labor rules and update our work as they change.</li>
      <li><strong>Privacy.</strong> Your information is handled as described in our <a href="/privacy-policy/">Privacy Policy</a>.</li>
      ${cfg.about.professionalBackground ? `<li>${cfg.about.professionalBackground}</li>` : ''}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="area-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('guide', { cls: 'split__img', label: 'Wasatch Front' })}</figure>
    <div class="split__text">
      <p class="kicker">Where we work</p>
      <h2 id="area-h">Serving ${esc(B.serviceArea.join(' & '))}</h2>
      <p>We meet business owners and self-employed professionals at their homes and offices in ${esc(B.serviceArea.join(' and '))}, by appointment.</p>
      <p class="contact-line">${icon('phone')} ${phoneHtml()}</p>
      <a class="btn btn--dark" href="/contact/">Schedule a meeting</a>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Let’s meet where you work.', text: 'Tell us about your plan and we’ll set up a time at your home or office in Salt Lake City.', button: 'Schedule a Meeting' })}
`,
};
