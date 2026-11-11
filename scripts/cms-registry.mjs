/**
 * Which content files appear in the website editors, under which heading,
 * and friendly labels/help text for fields. Field TYPES are worked out
 * automatically by scripts/cms-config.mjs from the JSON itself.
 *
 * Adding a page: create src/content/<...>.json, add an entry below,
 * run "npm run cms:config", commit both generated configs.
 */

/** Sections in Sveltia CMS (Pages CMS shows one flat list in the same order). */
export const GROUPS = [
  { name: 'gala', label: 'The next gala' },
  { name: 'pages', label: 'Pages' },
  { name: 'gallery', label: 'Gallery' },
  { name: 'settings', label: 'Site settings' },
];

export const ENTRIES = [
  {
    group: 'gala',
    name: 'event',
    label: 'Next gala: date, venue & dress code',
    file: 'src/content/event.json',
    description: 'Set the date (YYYY-MM-DD) and the countdown appears on the home page automatically. Leave the date empty to show "Date to be announced".',
  },
  { group: 'pages', name: 'page-home', label: 'Home page', file: 'src/content/pages/home.json' },
  { group: 'pages', name: 'page-award-night', label: 'The Gala Night', file: 'src/content/pages/award-night.json' },
  { group: 'pages', name: 'page-sankofa', label: 'What is Sankofa', file: 'src/content/pages/sankofa.json' },
  { group: 'pages', name: 'page-nomination', label: 'Nominate (award categories)', file: 'src/content/pages/nomination.json' },
  { group: 'pages', name: 'page-tickets', label: 'Tickets & tables (prices)', file: 'src/content/pages/tickets.json' },
  { group: 'pages', name: 'page-cawap', label: 'CAWAP', file: 'src/content/pages/cawap.json' },
  { group: 'pages', name: 'page-contact', label: 'Contact & sponsorship', file: 'src/content/pages/contact.json' },
  {
    group: 'gallery',
    name: 'gallery',
    label: 'Gallery albums & photos',
    file: 'src/content/gallery.json',
    description: 'Each album is a folder in the gallery. Add photos by uploading them or by pasting a Cloudinary link. Drag photos to reorder.',
  },
  { group: 'settings', name: 'site', label: 'Contact details, WhatsApp & social links', file: 'src/content/site.json' },
  { group: 'settings', name: 'navigation', label: 'Main menu', file: 'src/content/navigation.json' },
  {
    group: 'settings',
    name: 'seo',
    label: 'Google: page titles & descriptions',
    file: 'src/content/seo.json',
    description: 'What Google and social media show for each page. Titles under 65 characters, descriptions under 160.',
  },
];

/** Friendly labels and help text, by field name (used wherever that name appears). */
export const FIELD_HINTS = {
  site: { label: 'Share preview defaults (Facebook, WhatsApp, LinkedIn, X)', description: 'Used for every page that has no picture of its own.' },
  imageAlt: { label: 'Picture description (for blind visitors and social apps)' },
  locale: { label: 'Language code', description: 'en_CA' },
  date: { label: 'Gala date', type: 'date', description: 'Leave empty until the date is confirmed.' },
  dateText: { label: 'Text shown when there is no date yet' },
  editionLabel: { label: 'Title of the next gala' },
  venueName: { label: 'Venue name' },
  venueAddress: { label: 'Venue address' },
  dressCode: { label: 'Dress code' },
  note: { label: 'Note for guests' },
  lastEdition: { label: 'Last gala (shown under the date)' },
  when: { label: 'Date (as text)' },
  eyebrow: { label: 'Small gold line above the heading' },
  heading: { label: 'Heading' },
  intro: { label: 'Introduction' },
  body: { label: 'Text', description: 'Leave an empty line between paragraphs.' },
  image: { label: 'Photo', description: 'Upload a photo (JPG, under 2 MB) or paste a Cloudinary link.' },
  images: { label: 'Photos', itemName: 'photo' },
  photo: { label: 'Photo', type: 'image' },
  slides: { label: 'Hero photos (they fade one into the next)', itemName: 'photo' },
  photos: { label: 'Photos in this album', description: 'Upload photos or paste Cloudinary links. Drag to reorder.', itemName: 'photo' },
  cover: { label: 'Album cover photo' },
  slug: { label: 'Web address of the album', description: 'Lowercase words joined by dashes, e.g. gala-2026. It becomes /gallery/gala-2026. Never change it after publishing.' },
  layout: { label: 'Photo shape in the grid', description: 'portrait (most photos) or landscape (wide cards like the nominee flyers)' },
  theme: { label: 'Theme / subtitle' },
  year: { label: 'Year' },
  featured: { label: 'Highlight this tier ("Most loved")' },
  price: { label: 'Price (as shown, e.g. $1,000)' },
  guests: { label: 'Guests (e.g. Table for 10)' },
  features: { label: "What's included", itemName: 'feature' },
  priceNote: { label: 'Note under the prices' },
  whatsappNumber: { label: 'WhatsApp number', description: 'Country code + number, digits only, e.g. 16475815901' },
  whatsappMessage: { label: 'Message pre-filled in WhatsApp' },
  web3formsAccessKey: { label: 'Web3Forms access key (contact form)', description: 'From web3forms.com (free). Empty = the form opens the visitor\'s email app instead.' },
  nominationForm: { label: 'Nomination form link (Google Form)' },
  cawapWebsite: { label: 'CAWAP website' },
  shareImage: { label: 'Photo shown when the site is shared' },
  socials: { label: 'Social media links' },
  url: { label: 'Link (full https:// address)' },
  to: { label: 'Page (e.g. /tickets)' },
  link: { label: 'Link', description: 'A page like /gallery/gala-2025 or a full https:// address.' },
  path: { label: 'Page address (e.g. /tickets)' },
  display: { label: 'Phone (as shown)' },
  officeAddress: { label: 'Office address' },
  ribbon: { label: 'Words in the red scrolling ribbon', itemName: 'phrase' },
  topics: { label: 'Topics in the contact form', itemName: 'topic' },
  points: { label: 'Bullet points', itemName: 'point' },
  question: { label: 'Question' },
  answer: { label: 'Answer' },
};
