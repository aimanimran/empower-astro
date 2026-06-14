// =====================================================================
// CENTRAL SITE DATA
// ---------------------------------------------------------------------
// Edit values here and they cascade everywhere: nav, footer, contact
// info, schema.org metadata, etc. This is also what the CMS writes to
// (see public/admin/config.yml -> "Site Settings" collection if you
// later promote these into the CMS).
// =====================================================================

export const site = {
  name: 'Empower Psychiatry',
  legalName: 'Empower Psychiatry PLLC',
  fullName: 'Empower Complete Care Psychiatry',
  url: 'https://empowerpsychiatryil.com',
  phone: '630-326-3840',
  phoneRaw: '6303263840',
  fax: '630-326-3848',
  faxRaw: '6303263848',
  emailAppointments: 'Appointments@EmpowerMDIL.com',
  emailOffice: 'Office@EmpowerMDIL.com',
  bookingUrl: 'https://empowerpsychiatryil.clientsecure.me',
  address: {
    street: '303 E Army Trail Rd, Suite 111',
    locality: 'Bloomingdale',
    region: 'IL',
    postalCode: '60108',
    country: 'US',
  },
  mapUrl:
    'https://maps.google.com/?q=303+E+Army+Trail+Rd,+Suite+111,+Bloomingdale,+IL+60108',
  insurances:
    'Accepting Medicaid and most commercial insurance plans including Aetna, Aetna Better Health, Ambetter, BCBS, BCBS Community Health Plan, Humana, Cigna, County Care, United Behavioral, Medicare, Meridian, Molina, WellCare.',
};

// Resources sub-pages — used by the nav dropdown AND the resources index grid.
// Add/remove one entry here and both places update.
export const resourceTopics = [
  {
    title: 'Anxiety Disorders',
    navTitle: 'Anxiety Disorders',
    slug: 'anxiety-resources',
    cardTitle: 'Anxiety Disorders',
    description:
      'Learn about generalized anxiety, panic attacks, social anxiety, physical symptoms of stress, and evidence-based treatment options.',
  },
  {
    title: 'Depression & Bipolar',
    navTitle: 'Depression & Bipolar',
    slug: 'depression-resources',
    cardTitle: 'Depression & Bipolar Disorder',
    description:
      'Educational resources about mood disorders, emotional regulation, treatment approaches, medications, therapy, and long-term wellness.',
  },
  {
    title: 'ADHD',
    navTitle: 'ADHD',
    slug: 'adhd-resources',
    cardTitle: 'ADHD',
    description:
      'Information about attention difficulties, executive functioning, school and workplace challenges, medication, and behavioral support.',
  },
  {
    title: 'OCD & PTSD',
    navTitle: 'OCD & PTSD',
    slug: 'ocd-ptsd-resources',
    cardTitle: 'OCD & PTSD',
    description:
      'Educational information about obsessive thoughts, compulsive behaviors, trauma, emotional stress, and recovery support.',
  },
  {
    title: 'Autism Spectrum',
    navTitle: 'Autism Spectrum',
    slug: 'autism-resources',
    cardTitle: 'Autism Spectrum Disorder',
    description:
      'Resources for developmental concerns, sensory differences, social communication, and family support.',
  },
  {
    title: 'Child & Family',
    navTitle: 'Child & Family',
    slug: 'child-family-resources',
    cardTitle: 'Child & Family Support',
    description:
      'Parenting support, school guidance, behavioral resources, and child psychiatry educational tools.',
  },
  {
    title: 'Dementia & Cognitive Health',
    navTitle: 'Dementia & Cognitive Health',
    slug: 'dementia-resources',
    cardTitle: 'Dementia & Cognitive Health',
    description:
      'Educational information about memory concerns, caregiving, aging-related mental health conditions, and cognitive wellness.',
  },
];

// Top-level nav. `dropdown` items render a caret + submenu.
export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    dropdown: [{ label: 'Blog', href: '/blog' }],
  },
  { label: 'Services', href: '/services' },
  { label: 'Patient Feedback', href: '/feedback' },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: resourceTopics.map((t) => ({
      label: t.title,
      href: `/resources/${t.slug}`,
    })),
  },
  { label: 'Contact Us', href: '/contact' },
];

// Footer "Links" column
export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Patient Feedback', href: '/feedback' },
  { label: 'Resources', href: '/resources' },
  { label: 'Appointment', href: '/contact' },
];
