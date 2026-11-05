/**
 * ============================================================================
 *  CAIRNMARK PLAN SERVICES — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for every page, the footer, structured data
 *  (JSON-LD), the sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Optional items are hidden until set.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://cairnmark-plan-services.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Cairnmark Plan Services',
    tagline: 'Solo & Self-Directed 401(k) Plan Support and Education',
    publicNameConfirmed: false, // true once registered (Utah Division of Corporations DBA)
    owner: null, // optional — shown on About page only when provided
    foundingYear: null,

    phone: '(385) 475-4518',
    phoneE164: '+13854754518',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "service-area": the business meets clients at the client's location and
     * does not receive customers at its own address. Address stays hidden.
     * (Matches a Google Business Profile set up as a service business.)
     */
    locationType: 'service-area',
    address: { streetAddress: null, addressLocality: 'Salt Lake City', addressRegion: 'UT', postalCode: null, addressCountry: 'US' },
    geo: null,
    serviceArea: ['Salt Lake City, UT'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Meetings at your location in Salt Lake City, by appointment.',
    timeZoneLabel: 'Mountain Time',

    sameAs: [],
  },

  /** All confirmed by the owner. Disabled services disappear everywhere. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],

  about: { story: null, professionalBackground: null },

  form: { name: 'consultation' },

  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 19910626 — Salt Lake Valley and the Wasatch Range (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no people — sources in docs/MEDIA.md
    images: {
      city: { src: '/assets/media/city.webp', pos: '50% 60%', alt: 'Downtown Salt Lake City below the snow-covered Wasatch Range' },
      intro: { src: '/assets/media/intro.webp', pos: '50% 50%', alt: 'Snow on the Wasatch Mountains above the Salt Lake Valley' },
      office: { src: '/assets/media/office.webp', pos: '60% 40%', alt: 'Salt Lake City office buildings with snowy peaks behind' },
      workspace: { src: '/assets/media/workspace.webp', pos: '50% 50%', alt: 'Open planner, folders and a laptop on a white desk' },
      guide: { src: '/assets/media/guide.webp', pos: '45% 50%', alt: 'Stone cairn on a ridge above misty green mountains' },
      admin: { src: '/assets/media/admin.webp', pos: '50% 50%', alt: 'Open notebook with a fountain pen on a wooden desk' },
    },
  },
};
