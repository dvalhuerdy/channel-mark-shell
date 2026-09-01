export const site = {
  name: 'Channel Mark Shell',
  legalName: 'Channel Mark Shell LLC',
  shortName: 'Channel Mark',
  tagline: 'Quality construction from the ground up.',
  license: 'CGC1529824',
  phone: '(239) 984-2678',
  phoneHref: 'tel:2399842678',
  email: 'admin@channelmarkshell.com',
  contactName: 'David Moreira',
  address: '916 SE 8th Pl, Cape Coral, FL 33990',
  hours: 'Mon–Fri · 8:00 AM – 4:30 PM',
  city: 'Cape Coral, FL',
  serviceArea: 'Cape Coral, Fort Myers & Southwest Florida',
};

export const PERSONALITY_TAGS = ['Dependable', 'Precise', 'Hardworking', 'Local'];

export const BRAND_ONE_PAGE = [
  {
    label: 'What we do',
    copy: 'Site development, flat work, shell, masonry, beam forming, slab & footing work, framing.',
  },
  {
    label: 'Who we serve',
    copy: 'Custom home builders, GCs and commercial developers in Cape Coral, Fort Myers and greater SWFL.',
  },
  {
    label: 'Why us',
    copy: 'Three decades of pours, an in-house crew, and work that passes inspection the first time.',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    slug: 'site-work',
    name: 'Site Work',
    short: 'Clearing, grading, and layout — set before the first form goes up.',
    description:
      'Clearing, rough grading, and building layout staked to plan. We set benchmarks and control points before anyone pours a footer, so every trade behind us is working off the same mark.',
    points: ['Site clearing & grading', 'Building layout & staking', 'Benchmark & control points', 'Utility rough-in coordination'],
  },
  {
    slug: 'flat-work',
    name: 'Flat Work',
    short: 'Slabs, sidewalks, and driveways poured flat, level, and on grade.',
    description:
      'Slab-on-grade, sidewalks, driveways, and pool decks — formed, reinforced, and finished to grade and tolerance. Flat work is unforgiving; we check elevation before the truck ever shows up.',
    points: ['Slab-on-grade', 'Driveways & sidewalks', 'Pool decks & patios', 'Vapor barrier & reinforcement'],
  },
  {
    slug: 'shell',
    name: 'Shell',
    short: 'Footers, stem walls, and tie beams — the structure everything sits on.',
    description:
      'Footers, stem walls, columns, and tie beams poured to spec and to code. This is the part of the job nobody photographs and everything above it depends on.',
    points: ['Footers & foundations', 'Stem walls & columns', 'Tie beams & lintels', 'Post-Ian wind & flood detailing'],
  },
  {
    slug: 'masonry',
    name: 'Masonry',
    short: 'Block laid square, plumb, and true — every course, every corner.',
    description:
      'CMU block work laid square and plumb, course by course, with cells filled and reinforced to plan. Corners get checked twice; the wall only gets built once.',
    points: ['CMU block laying', 'Reinforced cells & bond beams', 'Corner & opening framing', 'Stucco-ready prep'],
  },
  {
    slug: 'beam-forming',
    name: 'Beam Forming',
    short: 'Tie beams and lintels formed, reinforced, and poured to hold.',
    description:
      'Formwork and steel for tie beams and lintels, set to elevation and inspected before the pour. It ties the whole shell together — literally.',
    points: ['Tie beam formwork', 'Lintel forming', 'Rebar placement & tying', 'Phase-inspection ready'],
  },
  {
    slug: 'framing',
    name: 'Framing',
    short: 'Wood and steel framing carried from a set shell to a closed-in structure.',
    description:
      'Framing carried straight off the shell we set — walls, trusses, and roof structure squared to the block below it, so nothing has to be corrected on the way up.',
    points: ['Wall framing', 'Truss & roof structure', 'Wind-load bracing', 'Rough-in ready hand-off'],
  },
];

export const TRUST_POINTS = [
  { label: 'Licensed General Contractor', value: site.license },
  { label: 'Experience', value: '30+ Years in the Field' },
  { label: 'Insured', value: 'Certificate on Request' },
  { label: 'Service Area', value: 'Southwest Florida' },
];

export const STATS = [
  { n: '30', sfx: '+', label: 'Years in the Field', sub: 'Licensed general contractor' },
  { n: '6', sfx: '', label: 'Core Trades', sub: 'Site work through framing' },
  { n: 'CGC', sfx: '1529824', label: 'State License', sub: 'Certificate on request' },
  { n: '100', sfx: '%', label: 'Licensed & Insured', sub: 'Full peace of mind' },
];
