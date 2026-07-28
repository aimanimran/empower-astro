// =====================================================================
// CENTRAL SITE DATA
// ---------------------------------------------------------------------
// The practice info below (phone, address, hours, etc.) now lives in
// site.json and is editable from the CMS at /admin -> "Website Pages" ->
// "Practice Info & Contact Details". Editing it there updates the nav,
// footer, contact page, and schema.org metadata everywhere at once.
//
// `resourceTopics`, `navItems`, and `footerLinks` below are left as code
// (not CMS-editable) because they define the site's navigation structure
// and page routing — changing a slug here without also creating/renaming
// the matching page would break links.
// =====================================================================
import siteContent from './site.json';

export const site = {
  ...siteContent,
  url: 'https://empowerpsychiatryil.com',
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