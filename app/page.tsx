import type { ReactNode } from "react";
import Reveal from "./_components/reveal";

const BIZ = {
  name: "Air Master Heat and Air, Inc.",
  owner: "Farid Farahvash",
  ownerFirst: "Farid",
  since: 1986,
  phone: "(916) 399-1585",
  phoneHref: "tel:+19163991585",
  street: "3513 La Grande Blvd",
  cityLine: "Sacramento, CA 95823",
  rating: 4.7,
  reviewCount: 8,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Air%20Master%20Heat%20and%20Air%2C%20Inc&query_place_id=ChIJc3eD3DrGmoARPyPZSB7G6zY",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=3513%20La%20Grande%20Blvd%2C%20Sacramento%2C%20CA%2095823",
  mapEmbed:
    "https://maps.google.com/maps?q=3513%20La%20Grande%20Blvd%2C%20Sacramento%2C%20CA%2095823&z=12&output=embed",
};

const YEARS = new Date().getFullYear() - BIZ.since;

/* ---------- icons (24px line, 2px stroke) ---------- */
type IconProps = { className?: string };
const svg = (path: ReactNode) =>
  function Icon({ className = "h-6 w-6" }: IconProps) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {path}
      </svg>
    );
  };

const PhoneIcon = svg(
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
);
const SnowIcon = svg(
  <>
    <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" />
    <path d="m9 4 3 3 3-3M9 20l3-3 3 3M4 9l3 3-3 3M20 9l-3 3 3 3" />
  </>
);
const FlameIcon = svg(
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.6 1.5 2.8 2.5 2.8z" />
);
const WrenchIcon = svg(
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
);
const RefreshIcon = svg(
  <>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
  </>
);
const ClipboardIcon = svg(
  <>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4" />
  </>
);
const HomeIcon = svg(
  <>
    <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </>
);
const CalendarIcon = svg(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </>
);
const UsersIcon = svg(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
  </>
);
const TagIcon = svg(
  <>
    <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
    <circle cx="7" cy="7" r="1.5" />
  </>
);
const PinIcon = svg(
  <>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </>
);
const ChevronDown = svg(<path d="m6 9 6 6 6-6" />);
const ArrowRight = svg(<path d="M5 12h14M13 6l6 6-6 6" />);

function Stars({ className = "h-5 w-5" }: IconProps) {
  return (
    <span className="inline-flex text-amber" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

/* ---------- content (from the CRM research record) ---------- */
const SERVICES = [
  {
    icon: SnowIcon,
    title: "AC Repair",
    body:
      "Air conditioner blowing warm air, short-cycling, making a new noise, or not turning on at all? Sacramento summers don't leave much room to wait. Call and describe what the system is doing, and we'll get it diagnosed and running again.",
  },
  {
    icon: SnowIcon,
    title: "AC Installation",
    body:
      "Adding central air or upgrading an old unit? We install new air conditioning systems for Sacramento homes and walk you through the options in plain language so you know what you're buying and why.",
  },
  {
    icon: FlameIcon,
    title: "Furnace Repair",
    body:
      "No heat, a furnace that won't stay lit, or one that runs but never warms the house? We repair residential furnaces and heating systems so your home is comfortable again when the cold nights come.",
  },
  {
    icon: FlameIcon,
    title: "Heating Installation",
    body:
      "When it's time for a new furnace or heating system, we handle the installation from start to finish. You get a straight answer on what your home needs, not a sales pitch.",
  },
  {
    icon: RefreshIcon,
    title: "Full HVAC System Replacement",
    featured: true,
    body:
      "Replacing the whole heating and cooling system at once is one of the jobs customers mention most. If your system is older and the repairs keep adding up, we'll replace it with a new one and leave you with a home that heats and cools the way it should.",
  },
  {
    icon: ClipboardIcon,
    title: "HVAC Maintenance",
    body:
      "Regular tune-ups help catch small problems before they become breakdowns and keep your system running efficiently. A good time to schedule is spring for the AC and fall for the furnace.",
  },
];

const FAQS = [
  {
    q: "Where are you located?",
    a: `Our shop is at ${BIZ.street}, ${BIZ.cityLine}, in South Sacramento. Most work happens at your home, so the easiest first step is to call ${BIZ.phone}.`,
  },
  {
    q: "What areas do you serve?",
    a: "Sacramento and the surrounding areas. If you're not sure whether we cover your neighborhood, give us a call and ask.",
  },
  {
    q: "How long have you been in business?",
    a: `Since ${BIZ.since}. Air Master is a Sacramento family HVAC company led by owner ${BIZ.owner}, and has been taking care of local homes for ${YEARS} years.`,
  },
  {
    q: "Do you work on homes or businesses?",
    a: "Our focus is residential heating and air conditioning: repairs, new installations, full system replacements and maintenance for Sacramento homes.",
  },
  {
    q: "Should I repair my system or replace it?",
    a: "It depends on the age of the system, how often it has needed repairs, and what the repair would cost compared with a new unit. If your system is older and breaking down more often, replacement is often the better long-term value. We'll look at your system and give you an honest recommendation either way.",
  },
  {
    q: "How do I get a price for my job?",
    a: `Call ${BIZ.phone} and tell us what's going on. We'll talk through the problem and set up a time to take a look. Customers often mention our reasonable pricing.`,
  },
  {
    q: "What are your hours?",
    a: `Our hours aren't listed online yet. Call ${BIZ.phone} and we'll let you know when we can get to you.`,
  },
];

const STEPS = [
  {
    title: "Call us",
    body: `Call ${BIZ.phone} and tell us what your heating or AC is doing, or what you'd like installed.`,
  },
  {
    title: "We take a look",
    body: "We set up a time to come out to your home and check the system.",
  },
  {
    title: "Straight answer",
    body: "We explain what we found and your options, repair or replace, in plain language.",
  },
  {
    title: "Job done right",
    body: "The work gets done properly, and your home is comfortable again.",
  },
];

const NAV = [
  ["Services", "#services"],
  ["Reviews", "#reviews"],
  ["About", "#about"],
  ["Service Area", "#area"],
  ["FAQ", "#faq"],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: BIZ.name,
  telephone: "+1-916-399-1585",
  foundingDate: String(BIZ.since),
  founder: { "@type": "Person", name: BIZ.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.street,
    addressLocality: "Sacramento",
    addressRegion: "CA",
    postalCode: "95823",
    addressCountry: "US",
  },
  areaServed: "Sacramento, CA and surrounding areas",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BIZ.rating,
    reviewCount: BIZ.reviewCount,
  },
};

function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-bold uppercase tracking-wider text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-ink-2">{children}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-navy-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="inline-flex items-center gap-2">
            <PinIcon className="h-4 w-4" /> Serving Sacramento and surrounding areas
          </span>
          <span>Family-owned since {BIZ.since}</span>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Air Master Heat and Air, home">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
              <SnowIcon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block whitespace-nowrap font-heading text-lg font-black text-navy-deep">Air Master</span>
              <span className="block whitespace-nowrap text-xs font-semibold text-ink-2">Heat and Air, Inc.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 font-semibold text-ink lg:flex" aria-label="Main">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-orange">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={BIZ.phoneHref}
              className="hidden font-bold text-navy-deep transition-colors hover:text-orange md:inline"
            >
              {BIZ.phone}
            </a>
            <a href={BIZ.phoneHref} className="btn btn-primary hidden sm:inline-flex">
              <PhoneIcon className="h-5 w-5" /> Call Now
            </a>
            <a
              href={BIZ.phoneHref}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange text-white sm:hidden"
              aria-label={`Call ${BIZ.phone}`}
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="bg-gradient-to-b from-navy-tint to-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-navy-soft px-3 py-1 text-sm font-semibold text-navy">
                <HomeIcon className="h-4 w-4" /> Sacramento family HVAC company since {BIZ.since}
              </p>
              <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.6rem)] font-black">
                Heating &amp; Air Conditioning Repair and Installation in Sacramento
              </h1>
              <p className="mt-5 max-w-xl text-lg text-ink-2 md:text-xl">
                AC and furnace repair, new installations and full system replacements for Sacramento
                homes. Air Master has served Sacramento since {BIZ.since}, led by owner {BIZ.owner},
                and customers keep saying the same thing: quality work at reasonable prices.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={BIZ.phoneHref} className="btn btn-primary text-lg">
                  <PhoneIcon className="h-5 w-5" /> Call {BIZ.phone}
                </a>
                <a href="#services" className="btn btn-outline text-lg">
                  See our services
                </a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink">
                <Stars />
                <span>
                  <strong>{BIZ.rating}</strong> from {BIZ.reviewCount} customer reviews
                </span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Since {BIZ.since}</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Family-owned</span>
              </p>
            </div>

            <div className="space-y-4">
              <figure className="card p-6 md:p-7">
                <Stars />
                <blockquote className="mt-3 font-heading text-xl font-bold leading-snug text-navy-deep">
                  Had the whole system replaced: very good work, and reasonably priced.
                </blockquote>
                <figcaption className="mt-4 text-sm text-ink-2">
                  From a customer review &middot; Full system replacement
                </figcaption>
              </figure>
              <div className="card p-6">
                <h2 className="font-body text-sm font-bold uppercase tracking-wider text-navy">
                  Quick facts
                </h2>
                <dl className="mt-3 space-y-3 text-[0.98rem]">
                  <div className="flex gap-3">
                    <CalendarIcon className="h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="sr-only">In business since</dt>
                      <dd>Serving Sacramento since {BIZ.since}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <PinIcon className="h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd>
                        {BIZ.street}, {BIZ.cityLine}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <PhoneIcon className="h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="sr-only">Phone</dt>
                      <dd>
                        <a href={BIZ.phoneHref} className="font-bold text-navy-deep underline-offset-4 hover:underline">
                          {BIZ.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-navy text-white" aria-label="Why customers trust Air Master">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: <Stars className="h-4 w-4" />, label: `${BIZ.rating}-star rating`, sub: `${BIZ.reviewCount} customer reviews` },
              { icon: <CalendarIcon className="h-6 w-6 text-amber" />, label: `Since ${BIZ.since}`, sub: `${YEARS} years in Sacramento` },
              { icon: <UsersIcon className="h-6 w-6 text-amber" />, label: "Family-owned", sub: `Led by ${BIZ.owner}` },
              { icon: <HomeIcon className="h-6 w-6 text-amber" />, label: "Residential HVAC", sub: "Heating and cooling" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5">{item.icon}</span>
                <span>
                  <span className="block font-bold">{item.label}</span>
                  <span className="block text-sm text-white/80">{item.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <SectionHeading eyebrow="Our services" title="Heating and Cooling Services in Sacramento">
              From a quick AC repair on a hot afternoon to replacing an entire system, Air Master
              handles residential heating and air conditioning work of every size.
            </SectionHeading>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 50}>
                  <article
                    className={`card flex h-full flex-col p-6 transition-shadow duration-200 hover:shadow-lg ${
                      s.featured ? "border-2 border-navy" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-soft text-navy">
                        <s.icon />
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-ink-2">{s.body}</p>
                    <a
                      href={BIZ.phoneHref}
                      className="mt-5 inline-flex items-center gap-1.5 font-bold text-navy hover:text-orange"
                    >
                      Call about this <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-navy-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <SectionHeading
              eyebrow="Reviews"
              title={`Rated ${BIZ.rating} out of 5 from ${BIZ.reviewCount} Customer Reviews`}
              center
            >
              Two things come up again and again when Sacramento homeowners talk about Air Master:
              the quality of the work, and the fair price.
            </SectionHeading>
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <figure className="card h-full p-8 md:p-10">
                  <Stars className="h-6 w-6" />
                  <blockquote className="mt-4 font-heading text-2xl font-bold leading-snug text-navy-deep md:text-3xl">
                    Had the whole system replaced: very good work, and reasonably priced.
                  </blockquote>
                  <figcaption className="mt-5 text-ink-2">
                    From a customer review &middot; Full HVAC system replacement
                  </figcaption>
                </figure>
              </Reveal>
              <div className="grid gap-6">
                <Reveal delay={60}>
                  <div className="card flex gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-soft text-navy">
                      <WrenchIcon />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">Quality work</h3>
                      <p className="mt-1 text-ink-2">
                        Customers describe well-done installations and repairs, including complete
                        system replacements.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className="card flex gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-soft text-navy">
                      <TagIcon />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">Reasonable prices</h3>
                      <p className="mt-1 text-ink-2">
                        Fair pricing is the other theme reviewers mention.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            <p className="mt-10 text-center">
              <a
                href={BIZ.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                See Air Master on Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading eyebrow="About us" title={`A Sacramento Family Business Since ${BIZ.since}`} />
              <div className="mt-6 space-y-4 text-lg text-ink-2">
                <p>
                  Air Master Heat and Air has been keeping Sacramento homes comfortable since{" "}
                  {BIZ.since}. It&apos;s a family company, led by owner {BIZ.owner}, and it has
                  stayed local through {YEARS} years of Sacramento summers and winters.
                </p>
                <p>
                  The work covers the full range of home heating and cooling: fixing an air
                  conditioner or furnace that has stopped working, installing new equipment, replacing
                  an entire system, and keeping it maintained afterward.
                </p>
                <p>
                  The reputation is simple, and it comes from customers rather than advertising: good
                  work at reasonable prices. When you call, you&apos;re talking to a local family
                  business, not a national call center.
                </p>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: CalendarIcon, title: `${YEARS} years in Sacramento`, body: `Serving local homes since ${BIZ.since}.` },
                { icon: UsersIcon, title: "Family-owned and led", body: `${BIZ.owner} runs the company.` },
                { icon: TagIcon, title: "Fair, reasonable prices", body: "The theme customers mention most." },
                { icon: WrenchIcon, title: "Repair, replace, maintain", body: "Heating and cooling under one roof." },
              ].map((d, i) => (
                <Reveal key={d.title} delay={i * 50}>
                  <li className="card h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <d.icon />
                    </span>
                    <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
                    <p className="mt-1 text-ink-2">{d.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-navy-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <SectionHeading eyebrow="How it works" title="Getting Your Heating or AC Fixed" center />
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <li className="card h-full p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-ink-2">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Service area" title="Serving Sacramento and Surrounding Areas">
                Air Master is based on La Grande Blvd in South Sacramento and works in homes across
                Sacramento and the surrounding communities.
              </SectionHeading>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Sacramento", "South Sacramento", "Surrounding areas"].map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-line bg-navy-tint px-4 py-1.5 font-semibold text-navy"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-ink-2">
                Not sure if you&apos;re in the area? Call{" "}
                <a href={BIZ.phoneHref} className="font-bold text-navy underline-offset-4 hover:underline">
                  {BIZ.phone}
                </a>{" "}
                and ask.
              </p>
            </div>
            <div className="card overflow-hidden p-0">
              <iframe
                title="Map of Air Master Heat and Air, 3513 La Grande Blvd, Sacramento"
                src={BIZ.mapEmbed}
                className="h-[320px] w-full md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-navy-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeading eyebrow="FAQ" title="Common Questions" center />
            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="card group px-6 py-1">
                  <summary className="flex items-center justify-between gap-4 py-4 text-lg font-bold text-navy-deep">
                    {f.q}
                    <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-navy" />
                  </summary>
                  <p className="pb-5 text-ink-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy-deep py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1200px] px-4 text-center md:px-6">
            <h2 className="text-3xl font-black text-white md:text-4xl">
              Need heating or AC help? Call {BIZ.ownerFirst}&apos;s team today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Sacramento&apos;s family heating and air company since {BIZ.since}.
            </p>
            <a href={BIZ.phoneHref} className="btn btn-primary mt-8 px-8 text-xl">
              <PhoneIcon className="h-6 w-6" /> Call {BIZ.phone}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pb-24 pt-12 md:pb-12">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-heading text-lg font-black text-navy-deep">{BIZ.name}</p>
            <p className="mt-2 text-ink-2">
              {BIZ.street}
              <br />
              {BIZ.cityLine}
            </p>
            <p className="mt-2">
              <a href={BIZ.phoneHref} className="font-bold text-navy hover:text-orange">
                {BIZ.phone}
              </a>
            </p>
          </div>
          <div>
            <p className="font-bold text-navy-deep">Services</p>
            <ul className="mt-2 space-y-1 text-ink-2">
              {SERVICES.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-navy-deep">Service area</p>
            <p className="mt-2 text-ink-2">Sacramento, CA and surrounding areas</p>
            <p className="mt-4 text-ink-2">Family-owned since {BIZ.since}</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1200px] px-4 text-sm text-ink-2 md:px-6">
          &copy; {new Date().getFullYear()} {BIZ.name}
        </p>
      </footer>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={BIZ.phoneHref} className="btn btn-primary">
          <PhoneIcon className="h-5 w-5" /> Call
        </a>
        <a href={BIZ.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <PinIcon className="h-5 w-5" /> Directions
        </a>
      </div>
    </>
  );
}
