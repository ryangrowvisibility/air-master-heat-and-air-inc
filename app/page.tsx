import Script from "next/script";
import Reveal from "./_components/reveal";
import Faq from "./_components/faq";

const BUSINESS = {
  name: "Air Master Heat and Air, Inc.",
  wordmark: "Air Master",
  wordmarkSuffix: "Heat & Air",
  legal: "Air Master Heat and Air, Inc.",
  since: 1986,
  now: 2026,
  owner: "Farid Farahvash",
  phone: "(916) 399-1585",
  phoneHref: "tel:+19163991585",
  address: "3513 La Grande Blvd, Sacramento, CA 95823",
  city: "Sacramento",
  region: "California",
  serviceArea: "Sacramento and the surrounding metro",
  rating: 4.7,
  reviewCount: 8,
  tagline: "Sacramento's heating and air, kept honest since 1986.",
};

const SERVICES = [
  {
    id: "I",
    signal: "amber",
    title: "AC Installation",
    body:
      "New central air systems sized by load calculation — never rule-of-thumb. Replacement condensers, coils, line-sets and thermostats matched to your Sacramento home's square footage, insulation, and orientation.",
    tags: ["Sizing", "Condenser", "Coil", "Line-set"],
  },
  {
    id: "II",
    signal: "amber",
    title: "AC Repair",
    body:
      "Same-week AC service through Sacramento's dry heat. Capacitor, contactor, compressor, refrigerant leaks and drain-line diagnostics — repaired to spec rather than upsold to replacement.",
    tags: ["Capacitor", "Compressor", "Refrigerant", "Drain"],
  },
  {
    id: "III",
    signal: "copper",
    title: "Heating Installation",
    body:
      "Gas and electric furnace installs, high-efficiency conversions, and heat-pump crossovers. All permits pulled and inspected — nothing gets bolted to a plenum that wouldn't pass Sacramento County.",
    tags: ["Furnace", "Heat pump", "Permits", "Inspected"],
  },
  {
    id: "IV",
    signal: "copper",
    title: "Furnace Repair",
    body:
      "Ignition, flame sensor, blower motor, gas valve and heat-exchanger diagnostics. Combustion analyzer on every call — carbon-monoxide safety is not a subscription, it's the baseline.",
    tags: ["Ignition", "Blower", "CO test", "Diagnostics"],
  },
  {
    id: "V",
    signal: "brass",
    title: "HVAC System Replacement",
    body:
      "Full change-outs — furnace, coil, condenser and thermostat — done in a day for most homes. Old equipment hauled, ductwork sealed, new system commissioned with a written start-up report.",
    tags: ["Change-out", "One-day", "Sealed duct", "Commissioned"],
  },
  {
    id: "VI",
    signal: "brass",
    title: "HVAC Maintenance",
    body:
      "Twice-a-year tune-ups keep manufacturer warranties valid and equipment on-book. Coil wash, blower service, refrigerant check, capacitor read, thermostat calibration — same protocol, every visit.",
    tags: ["Tune-up", "Coil wash", "Blower", "Warranty"],
  },
];

const PROCESS = [
  {
    time: "T-00",
    label: "The call",
    body:
      "You reach Farid or a technician directly — no voicemail carousel. We ask about the symptom, the equipment tag, and the age of the house before quoting a visit window.",
  },
  {
    time: "T-24",
    label: "Home visit & load calc",
    body:
      "For any install, we measure. Square footage, window exposure, insulation and duct layout drive the sizing — never a rule-of-thumb guess.",
  },
  {
    time: "T-48",
    label: "Written quote",
    body:
      "Line-item quote, no bundled mystery fee. If a repair beats a replacement, we say so — even when the ticket is smaller.",
  },
  {
    time: "T-72",
    label: "Scheduled install",
    body:
      "Same crew, arrive on time, drop cloths and boot covers on. Ductwork sealed, refrigerant charge weighed in, thermostat paired.",
  },
  {
    time: "T-96",
    label: "Commissioning",
    body:
      "Combustion analyzer on gas furnaces. Static-pressure read. Refrigerant subcooling verified. A written start-up sheet goes in your service binder.",
  },
  {
    time: "T+30",
    label: "First-season follow-up",
    body:
      "A month after install, we call. Anything odd — a rattle, a smell, a temperature swing — we come back before it becomes a repair.",
  },
];

const FAQ = [
  {
    q: "How long has Air Master been in Sacramento?",
    a: "Since 1986. Farid Farahvash has led the shop for the full four decades, and the work runs on repeat customers and referrals — a Sacramento family HVAC company, not a franchise.",
  },
  {
    q: "What areas do you serve?",
    a: "Sacramento and the surrounding metro — Elk Grove, Rancho Cordova, Citrus Heights, North Highlands, Arden-Arcade, Natomas, Rio Linda, Fair Oaks. Call to confirm if you're outside this ring.",
  },
  {
    q: "Do you charge for estimates on installs?",
    a: "No. New-system estimates and full change-out quotes are free. Repair diagnostics carry a service-call fee, which we credit back if you approve the repair on the same visit.",
  },
  {
    q: "Are you licensed?",
    a: "Yes — California HVAC contractor operating as Air Master Heat and Air, Inc. License and insurance details are shared before any work begins and appear on every written quote.",
  },
  {
    q: "How fast can you get out for a broken AC in July?",
    a: "Same-day or next-morning through most of Sacramento's summer. We keep repair slots open specifically for outages, because 108°F afternoons don't wait for a scheduled tune-up.",
  },
  {
    q: "Do you handle full system replacements, or just repairs?",
    a: "Both. Full change-outs — furnace, coil, condenser, thermostat — are done in a single day for most Sacramento homes. Repairs are handled to spec first; replacement is recommended only when the math no longer works.",
  },
  {
    q: "What brands do you install?",
    a: "Major residential HVAC brands with strong Sacramento parts availability — the equipment we install has to be serviceable in 15 years by any competent technician, not just us.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Yes — a twice-a-year tune-up protocol that keeps manufacturer warranties valid and catches capacitor and refrigerant issues before they take a system down.",
  },
];

const REVIEW_THEMES = [
  {
    context: "Full system replacement",
    signal: "amber",
    quote:
      "Replaced the whole system; very good work and reasonably priced.",
  },
  {
    context: "Reviewer summary — Birdeye",
    signal: "copper",
    quote:
      "Quality work at reasonable prices.",
  },
  {
    context: "Review theme — 4.7 stars",
    signal: "brass",
    quote:
      "Sacramento family HVAC company, since 1986.",
  },
];

export default function Page() {
  const yearSpan = BUSINESS.now - BUSINESS.since;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: BUSINESS.legal,
    image: undefined,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3513 La Grande Blvd",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95823",
      addressCountry: "US",
    },
    areaServed: BUSINESS.serviceArea,
    foundingDate: `${BUSINESS.since}`,
    founder: { "@type": "Person", name: BUSINESS.owner },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: `${BUSINESS.rating}`,
      reviewCount: `${BUSINESS.reviewCount}`,
    },
    priceRange: "$$",
    description:
      "Sacramento residential HVAC contractor since 1986. Full system replacements, AC and furnace repair, installation, and maintenance.",
  };

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============ HEADER ============ */}
      <header className="relative z-40 pt-6">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-[1.35rem] leading-none font-semibold tracking-tight text-[color:var(--cream)]">
              Air Master
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">
              Heat &amp; Air · Est. 1986
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[0.78rem] font-mono uppercase tracking-[0.22em] text-[color:var(--cream-2)]">
            <a href="#since" className="hover:text-[color:var(--amber)] transition-colors duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>Since 1986</a>
            <a href="#services" className="hover:text-[color:var(--amber)] transition-colors duration-300">Services</a>
            <a href="#process" className="hover:text-[color:var(--amber)] transition-colors duration-300">Process</a>
            <a href="#standards" className="hover:text-[color:var(--amber)] transition-colors duration-300">Standards</a>
            <a href="#contact" className="hover:text-[color:var(--amber)] transition-colors duration-300">Contact</a>
          </nav>
          <a
            href={BUSINESS.phoneHref}
            className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--hairline-2)] bg-[color:var(--ink-2)] pl-4 pr-1.5 py-1.5 hover:border-[color:var(--amber)] transition-all duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
          >
            <span className="relative flex items-center gap-2">
              <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-[color:var(--amber)]" />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--cream)]">
                {BUSINESS.phone}
              </span>
            </span>
            <span className="ml-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--amber)] text-[color:var(--ink)] group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M6 18L18 6M9 6h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </header>

      {/* ============ HERO — EDITORIAL SPLIT ============ */}
      <section id="top" className="relative z-10 pt-24 pb-32">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--hairline-2)] px-3.5 py-1.5 mb-10">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--brass)]">
                    Vol. XL · Sacramento · Est. 1986
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display font-medium leading-[0.90] tracking-[-0.03em] text-[15vw] md:text-[10.5vw] lg:text-[8.5rem] xl:text-[10rem] text-[color:var(--cream)]">
                  Sacramento&apos;s
                  <br />
                  <span className="italic font-light text-[color:var(--sand)]">heat &amp; air,</span>
                  <br />
                  kept honest
                  <br />
                  <span className="text-[color:var(--amber)]">since 1986</span>
                  <span className="text-[color:var(--amber)]">.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-10 max-w-2xl font-body text-lg md:text-xl leading-relaxed text-[color:var(--cream-2)]">
                  Four decades of Sacramento heat waves, Delta breezes, and Tule-fog mornings — the same family shop, the same phone number, the same technician who tells you if a repair beats a replacement. Owner-led by <span className="text-[color:var(--brass)]">{BUSINESS.owner}</span>.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS.phoneHref}
                    className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--amber)] pl-6 pr-1.5 py-1.5 text-[color:var(--ink)] font-semibold transition-all duration-500 hover:bg-[color:var(--gold)] active:scale-[0.98]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                  >
                    <span className="font-display text-base tracking-tight">Call Farid — {BUSINESS.phone}</span>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[color:var(--ink)] text-[color:var(--amber)] group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                        <path d="M6 18L18 6M9 6h9v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                  <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-2)] px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--cream)] hover:border-[color:var(--copper)] hover:text-[color:var(--copper)] transition-all duration-500">
                    Six services →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right column — asymmetric trust column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Reveal delay={140}>
                <div className="bezel">
                  <div className="bezel-inner p-7">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">A · Tenure</span>
                      <span className="font-mono text-[0.66rem] text-[color:var(--brass)]">1986 → 2026</span>
                    </div>
                    <div className="font-display text-[7rem] leading-none tracking-[-0.04em] text-[color:var(--brass)]">
                      {yearSpan}
                    </div>
                    <div className="mt-3 font-body text-sm text-[color:var(--cream-2)]">
                      Years of Sacramento residential HVAC — one shop, one family, one phone number.
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="bezel">
                  <div className="bezel-inner p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">B · Rating</span>
                      <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-[color:var(--amber)]" />
                    </div>
                    <div className="flex items-baseline gap-3">
                      <div className="font-display text-5xl font-semibold text-[color:var(--cream)]">{BUSINESS.rating.toFixed(1)}</div>
                      <div className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[color:var(--copper)]">
                        {"★".repeat(5)} · {BUSINESS.reviewCount} reviews
                      </div>
                    </div>
                    <div className="mt-3 font-body text-sm text-[color:var(--cream-2)]">
                      Small, honest review pool — every one from a real Sacramento home.
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="bezel">
                  <div className="bezel-inner p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">C · Now on-call</span>
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[color:var(--amber)]">Live</span>
                    </div>
                    <div className="font-display text-2xl font-medium text-[color:var(--cream)]">Farid Farahvash</div>
                    <div className="mt-1 font-body text-sm text-[color:var(--cream-2)]">
                      Owner. Answers the phone.
                    </div>
                    <div className="mt-4 pt-4 border-t border-[color:var(--hairline)] flex items-center justify-between">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--sand)]">Sacramento, CA</span>
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--brass)]">40 yr trade</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE — SIGNAL BAND ============ */}
      <section aria-hidden className="relative z-10 border-y border-[color:var(--hairline)] bg-[color:var(--ink-2)] py-5 overflow-hidden">
        <div className="marquee-track flex items-center gap-16 whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 font-mono text-[0.78rem] uppercase tracking-[0.28em] text-[color:var(--cream-2)]">
              <span>Central AC</span><span className="text-[color:var(--amber)]">●</span>
              <span>Gas Furnace</span><span className="text-[color:var(--copper)]">●</span>
              <span>Heat Pump Change-Out</span><span className="text-[color:var(--brass)]">●</span>
              <span>Coil Wash</span><span className="text-[color:var(--amber)]">●</span>
              <span>Duct Sealing</span><span className="text-[color:var(--copper)]">●</span>
              <span>Refrigerant Recharge</span><span className="text-[color:var(--brass)]">●</span>
              <span>Thermostat Pairing</span><span className="text-[color:var(--amber)]">●</span>
              <span>Combustion Analysis</span><span className="text-[color:var(--copper)]">●</span>
              <span>Since 1986</span><span className="text-[color:var(--brass)]">●</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SINCE 1986 — YEAR-SPAN CHAPTER ============ */}
      <section id="since" className="relative z-10 py-32">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ I</span>
                  <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">The tenure column</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="font-display font-light leading-none tracking-[-0.04em] flex items-baseline gap-6">
                  <span className="text-[6rem] md:text-[8rem] text-[color:var(--cream)]">1986</span>
                  <span className="font-mono text-[color:var(--sand)] text-3xl">→</span>
                  <span className="text-[6rem] md:text-[8rem] text-[color:var(--amber)]">2026</span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 font-body text-lg text-[color:var(--cream-2)] leading-relaxed max-w-lg">
                  The shop started in the year the Kings arrived from Kansas City. It has outlasted seven mayors, four building codes, and three refrigerant standards. Same family. Same phone number. Same commitment to a system that will still work in fifteen years.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { yr: "1986", note: "Air Master opens — La Grande Blvd, South Sacramento" },
                  { yr: "1994", note: "R-22 era peaks; first HVAC efficiency ratings appear" },
                  { yr: "2006", note: "Sacramento Title 24 tightens; load-calc becomes the shop standard" },
                  { yr: "2020", note: "R-410A crosses over; heat-pump conversions accelerate" },
                  { yr: "2024", note: "Farid still on-call — 38 unbroken years at the helm" },
                  { yr: "2026", note: "Fortieth year — same shop, same phone number" },
                ].map((e, i) => (
                  <Reveal key={e.yr} delay={80 + i * 60}>
                    <div className="bezel">
                      <div className="bezel-inner p-5">
                        <div className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[color:var(--copper)]">Milestone · {String(i + 1).padStart(2, "0")}</div>
                        <div className="mt-2 font-display text-3xl font-medium text-[color:var(--brass)]">{e.yr}</div>
                        <div className="mt-2 font-body text-sm text-[color:var(--cream-2)] leading-snug">{e.note}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — DETAIL CARDS (Bento asymmetry) ============ */}
      <section id="services" className="relative z-10 py-32 border-t border-[color:var(--hairline)]">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ II</span>
                  <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">The service ledger</span>
                </div>
                <h2 className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-5xl md:text-7xl text-[color:var(--cream)]">
                  Six protocols.<br />
                  <span className="italic font-light text-[color:var(--sand)]">One family shop.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm font-body text-base text-[color:var(--cream-2)] leading-relaxed">
                Residential heating and air across the Sacramento metro — the six protocols we&apos;ve refined over forty years. Each one written down. Each one measurable. Each one owner-signed.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {SERVICES.map((s, i) => {
              const wide = i === 0 || i === 4;
              return (
                <Reveal key={s.id} delay={60 + i * 60}>
                  <div className={`bezel h-full ${wide ? "md:col-span-4" : "md:col-span-2"}`}>
                    <div className="bezel-inner p-7 h-full flex flex-col">
                      <div className="flex items-baseline justify-between mb-4">
                        <span
                          className="font-mono text-[0.66rem] uppercase tracking-[0.32em]"
                          style={{ color: `var(--${s.signal})` }}
                        >
                          Protocol {s.id}
                        </span>
                        <span
                          className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: `var(--${s.signal})` }}
                        />
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-[color:var(--cream)]">
                        {s.title}
                      </h3>
                      <p className="mt-4 font-body text-[15px] text-[color:var(--cream-2)] leading-relaxed">
                        {s.body}
                      </p>
                      <div className="mt-6 pt-5 border-t border-[color:var(--hairline)] flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[color:var(--sand)] border border-[color:var(--hairline-2)] rounded-full px-2.5 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="lg:col-span-4" />
        </div>
      </section>

      {/* ============ PROCESS — NUMBERED T-CODE ============ */}
      <section id="process" className="relative z-10 py-32 bg-[color:var(--ink-2)] border-y border-[color:var(--hairline)]">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ III</span>
                  <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">Call · to · commissioning</span>
                </div>
                <h2 className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-5xl md:text-7xl text-[color:var(--cream)]">
                  Six steps<br />
                  <span className="italic font-light text-[color:var(--sand)]">start to warm.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm font-body text-base text-[color:var(--cream-2)] leading-relaxed">
                Every install and full-system replacement runs this timeline. Nothing skipped, nothing rushed — and everything written on paper you keep.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.time} delay={60 + i * 60}>
                <div className="bezel h-full">
                  <div className="bezel-inner p-7 h-full flex flex-col">
                    <div className="flex items-baseline justify-between mb-6">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[color:var(--copper)]">
                        {p.time}
                      </span>
                      <span className="font-display text-6xl font-light text-[color:var(--brass)] leading-none tracking-[-0.04em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[color:var(--cream)] leading-tight">
                      {p.label}
                    </h3>
                    <p className="mt-3 font-body text-[15px] text-[color:var(--cream-2)] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEW THEMES — PULL-QUOTE + CARD SET ============ */}
      <section id="reviews" className="relative z-10 py-32">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ IV</span>
              <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">What Sacramento says</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <blockquote className="font-display font-light leading-[1.02] tracking-[-0.03em] text-[8vw] md:text-[5rem] text-[color:var(--cream)]">
                  <span className="text-[color:var(--amber)]">“</span>Replaced the whole system;<br />
                  <span className="italic text-[color:var(--sand)]">very good work</span> and reasonably priced.<span className="text-[color:var(--amber)]">”</span>
                </blockquote>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex items-center gap-4">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--copper)]">
                    Sacramento homeowner · full system replacement · Birdeye
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-4 space-y-4">
              {REVIEW_THEMES.map((t, i) => (
                <Reveal key={i} delay={140 + i * 60}>
                  <div className="bezel">
                    <div className="bezel-inner p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="font-mono text-[0.66rem] uppercase tracking-[0.28em]"
                          style={{ color: `var(--${t.signal})` }}
                        >
                          {t.context}
                        </span>
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: `var(--${t.signal})` }}
                        />
                      </div>
                      <p className="font-body text-[15px] text-[color:var(--cream)] leading-snug italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STANDARDS — LONG-FORM DARK BAND ============ */}
      <section id="standards" className="relative z-10 py-32 bg-[color:var(--ink-2)] border-y border-[color:var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ V</span>
              <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">Farid&apos;s standards column</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl text-[color:var(--cream)] max-w-4xl">
              A system that will<br />
              <span className="italic font-light text-[color:var(--sand)]">still work in fifteen years.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
            <Reveal delay={160}>
              <p className="font-body text-lg leading-[1.7] text-[color:var(--cream-2)]">
                <span className="font-display float-left text-7xl leading-[0.85] mr-3 mt-1 text-[color:var(--brass)]">F</span>orty years of Sacramento homes have taught us the same lesson over and over: the cheapest fix on Tuesday is often the most expensive fix by August. So we don&apos;t rule-of-thumb size systems, we don&apos;t skip the load calculation, and we don&apos;t recommend a replacement when a repair still has good years left in it. The math has to work — for our shop and for your household.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="space-y-6">
                <p className="font-body text-lg leading-[1.7] text-[color:var(--cream-2)]">
                  Every install is commissioned. Refrigerant charges are weighed in, not eyeballed. Combustion analyzers on every gas furnace call. Static-pressure reads on the return trunk. Every number recorded on a start-up sheet you keep — because in fifteen years, when a different technician opens the panel, that sheet is what tells them what shape the system was in the day we left it.
                </p>
                <p className="font-body text-lg leading-[1.7] text-[color:var(--cream-2)]">
                  Reviews call it &ldquo;<span className="text-[color:var(--gold)] italic">quality work at reasonable prices</span>&rdquo;. What that means, in our shop, is that we quote the honest number, we do the honest work, and we sign our name — <span className="text-[color:var(--brass)]">{BUSINESS.owner}</span> — to the invoice.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ — ACCORDION ============ */}
      <section id="faq" className="relative z-10 py-32">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ VI</span>
                  <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">Questions we get</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-5xl md:text-6xl text-[color:var(--cream)]">
                  What Sacramento<br />
                  <span className="italic font-light text-[color:var(--sand)]">homeowners ask.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 font-body text-base text-[color:var(--cream-2)] leading-relaxed max-w-md">
                  Forty years of the same questions in July, and different ones in January. Here&apos;s what most callers want to know before we roll a truck.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Faq items={FAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT — PHONE-CARD HERO + SPLIT ============ */}
      <section id="contact" className="relative z-10 py-32 bg-[color:var(--ink-2)] border-t border-[color:var(--hairline)]">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--brass)]">§ VII</span>
              <span className="h-px w-16 bg-[color:var(--hairline-2)]" />
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">The direct line</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bezel">
              <div className="bezel-inner p-10 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-8">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--copper)] mb-6">
                      Answering right now — <span className="text-[color:var(--amber)]">●</span> live
                    </p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="group inline-block font-display font-medium leading-none tracking-[-0.05em] text-[color:var(--cream)] hover:text-[color:var(--amber)] transition-colors duration-500"
                      style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)", fontSize: "clamp(3rem, 9vw, 8rem)" }}
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="mt-8 font-body text-lg text-[color:var(--cream-2)] max-w-xl leading-relaxed">
                      Farid or a technician picks up. No voicemail carousel, no offshore call center. If it&apos;s an outage, we say so — and we schedule same-day when we can.
                    </p>
                  </div>
                  <div className="lg:col-span-4 space-y-4">
                    <div className="border-t border-[color:var(--hairline)] pt-4">
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)] mb-1">Shop</div>
                      <div className="font-body text-base text-[color:var(--cream)]">3513 La Grande Blvd<br />Sacramento, CA 95823</div>
                    </div>
                    <div className="border-t border-[color:var(--hairline)] pt-4">
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)] mb-1">Service area</div>
                      <div className="font-body text-base text-[color:var(--cream)]">Sacramento &amp; the surrounding metro — Elk Grove, Rancho Cordova, Citrus Heights, North Highlands, Natomas, Arden-Arcade, Rio Linda, Fair Oaks.</div>
                    </div>
                    <div className="border-t border-[color:var(--hairline)] pt-4">
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)] mb-1">Owner</div>
                      <div className="font-body text-base text-[color:var(--cream)]">{BUSINESS.owner} · on-call since 1986</div>
                    </div>
                    <div className="border-t border-[color:var(--hairline)] pt-4">
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)] mb-1">Licensing</div>
                      <div className="font-body text-base text-[color:var(--cream)]">California HVAC contractor · fully licensed &amp; insured. Details shared before any work begins.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative z-10 py-16">
        <div className="mx-auto max-w-[100rem] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="font-display text-2xl font-semibold text-[color:var(--cream)] tracking-tight">Air Master</div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)] mt-1">Heat &amp; Air · Since 1986</div>
              <p className="mt-4 font-body text-sm text-[color:var(--cream-2)] max-w-xs leading-relaxed">
                Owner-led Sacramento residential HVAC. Four decades of quality work at reasonable prices.
              </p>
            </div>
            <div className="md:justify-self-center">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">Direct</div>
              <a href={BUSINESS.phoneHref} className="mt-2 block font-display text-2xl font-medium text-[color:var(--cream)] hover:text-[color:var(--amber)] transition-colors">
                {BUSINESS.phone}
              </a>
              <div className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">On the map</div>
              <a href={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}`} target="_blank" rel="noreferrer" className="mt-1 block font-body text-sm text-[color:var(--cream)] hover:text-[color:var(--copper)] transition-colors">
                {BUSINESS.address}
              </a>
            </div>
            <div className="md:justify-self-end">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--sand)]">Legal</div>
              <div className="mt-2 font-body text-sm text-[color:var(--cream-2)]">
                {BUSINESS.legal}<br />
                California licensed HVAC contractor<br />
                &copy; {new Date().getFullYear()} — All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
