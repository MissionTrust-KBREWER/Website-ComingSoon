import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MissionTrust Advisors | Federal Security Advisory",
  description: "Mission-first Microsoft advisory focused on Zero Trust outcomes, with seamlessly integrated guidance for identity, Agentic AI, and government cloud strategy for Federal Civilian, DoW, and National Security organizations.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function Home() {
  const year = new Date().getFullYear();

  const CompassRose = ({ size = 28 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="#1E3A5F" strokeWidth="2" fill="none" />
      <polygon points="40,6 44,34 40,28 36,34" fill="#C9A84C" />
      <polygon points="74,40 46,44 52,40 46,36" fill="#C9A84C" />
      <polygon points="40,74 36,46 40,52 44,46" fill="#C9A84C" />
      <polygon points="6,40 34,36 28,40 34,44" fill="#C9A84C" />
      <polygon points="52,12 46,35 48,32 44,34" fill="#2D5282" />
      <polygon points="68,52 45,46 48,48 46,44" fill="#2D5282" />
      <polygon points="28,68 34,45 32,48 36,46" fill="#2D5282" />
      <polygon points="12,28 35,34 32,32 34,36" fill="#2D5282" />
      <polygon points="40,34 43,40 40,46 37,40" fill="#FFFFFF" />
    </svg>
  );

  const trustBadges = [
    "Federal Civilian | DoW | Intelligence Community",
    "20+ Years Federal Identity & Security Advisory",
    "Native Microsoft Configuration Guidance",
    "AI-Integrated Zero Trust Guidance",
  ];

  const outcomes = [
    "Lower total cost of ownership",
    "Better Zero Trust-aligned outcomes",
    "Measurable, auditable security posture",
    "Reduced vendor sprawl and integration complexity",
    "Faster compliance milestone achievement",
  ];

  const quickCapabilities = [
    "Zero Trust Architecture",
    "Microsoft 365 Security",
    "Azure Security Posture",
    "ICAM Modernization",
    "Non-Human Identity Security",
    "Agentic AI Integration",
    "FedRAMP and CMMC Alignment",
    "Executive Roadmapping",
  ];

  const audiences = [
    "Intelligence Community (IC) - National Security missions",
    "Department of War (DoW) - Components, PEOs, Program Offices",
    "Federal Civilian Agencies",
    "Defense Industrial Base (DIB) - Prime contractors and supply chain",
  ];

  const leadershipPriorities = [
    "Accelerating sovereign cloud understanding for the Microsoft field",
    "Improving technical answer quality for high-stakes customer engagements",
    "Shaping secure adoption patterns for Copilot and agentic AI",
    "Helping internal teams map Microsoft security capabilities to evolving federal requirements",
  ];

  const guidanceAndMedia = [
    { label: "DoW Zero Trust Strategy", href: "https://aka.ms/ZTforDoD" },
    { label: "CISA Zero Trust Maturity Model", href: "https://aka.ms/ZTforUSGov" },
    { label: "CMMC 2.0 Guidance", href: "https://aka.ms/AzureADCMMC" },
    { label: "FedRAMP High Guidance", href: "https://learn.microsoft.com/en-us/entra/standards/configure-for-fedramp-high-impact" },
    { label: "Phishing-Resistant Authentication Video", href: "https://www.youtube.com/playlist?list=PL3ZTgFEc7LysTnItcN7SJnJ6wpPJif2-k" },
    { label: "Microsoft Entra CBA Video", href: "https://youtu.be/jsKQxo-xGgA?si=_gKnquCot5LDf4HH" },
  ];

  const services = [
    {
      title: "Zero Trust Strategy & Architecture",
      description:
        "Independent advisory aligned to the DoW Zero Trust Strategy and CISA Zero Trust Maturity Model - with prescriptive Microsoft configuration guidance from the author of the Microsoft guidance.",
    },
    {
      title: "Microsoft 365 & Azure Security Optimization",
      description:
        "Unlock the full security capability of your existing M365 and Azure investment. Most agencies are underutilizing what they already own - we fix that, measurably.",
    },
    {
      title: "Identity & Access Modernization (ICAM)",
      description:
        "Entra ID architecture, phishing-resistant MFA, ADFS retirement, identity governance, privileged access, and non-human identity security - designed for Federal Civilian, DoW, and National Security environments.",
    },
    {
      title: "Agentic AI Integration & Security",
      description:
        "Practical guidance that seamlessly incorporates secure Copilot and agentic AI patterns into your Zero Trust architecture, including identity, access, governance, and knowledge grounding for mission use.",
    },
    {
      title: "Sovereign Cloud Strategy & Readiness",
      description:
        "Advisory for GCC, GCC High, and other sovereign cloud scenarios, helping teams align identity, security controls, and operating patterns to regulated mission requirements.",
    },
    {
      title: "FedRAMP, CMMC & Federal Compliance",
      description:
        "Gap assessments, control mapping, and native Microsoft configuration guidance to meet FedRAMP High, CMMC 2.0, and NIST 800-63 - using what you already have licensed.",
    },
    {
      title: "Executive Advisory & Briefings",
      description:
        "CIO and CISO-level briefings that translate requirements (EO 14028, OMB M-22-09, CISA ZTMM, DoW Zero Trust Strategy, CMMC) into real-world improved security outcomes.",
    },
    {
      title: "Independent Architecture Review",
      description:
        "Objective, senior-level assessment of your Microsoft security architecture, Conditional Access posture, and Zero Trust maturity - measured against federal frameworks and real-world threat scenarios.",
    },
  ];

  const processSteps = [
    {
      title: "Assess What You Already Own",
      description:
        "We map your existing Microsoft licensing, control posture, and roadmap obligations to identify fast, high-value improvements.",
    },
    {
      title: "Configure for Auditable Outcomes",
      description:
        "We provide implementation-level guidance for Zero Trust controls so teams can deliver measurable, defensible security outcomes.",
    },
    {
      title: "Execute a Federal-Ready Roadmap",
      description:
        "Leadership receives a sequenced plan that improves security, lowers cost, and accelerates compliance milestones without adding unnecessary tooling.",
    },
  ];

  const credentialChips = [
    "Cleared Advisor to Department of War and National Security Agencies",
    "20+ Years Federal & National Security Advisory",
    "Author: DoW ZT Strategy | CISA ZTMM | CMMC | FedRAMP High Guidance",
    "Federal Civilian | DoW | Intelligence Community",
    "Microsoft Principal Architect (2004-2026)",
    "Azure | Microsoft 365 | Microsoft Entra ID",
    "Serving the Federal Enterprise",
  ];

  const executiveOutcomes = [
    "Executive escalation support for mission-critical decisions",
    "Improved technical answer quality and RFI response confidence",
    "Stronger field readiness for high-stakes customer engagements",
  ];

  return (
    <div className="site-shell min-h-screen">
      <header className="top-nav mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="brand-lockup text-white" aria-label="MissionTrust Advisors">
          <CompassRose size={30} />
          <span className="brand-wordmark">
            <span className="top">MISSIONTRUST</span>
            <span className="bottom">ADVISORS</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
        <section className="hero-card section-reveal relative overflow-hidden rounded-4xl px-6 py-14 md:px-12 md:py-18" style={{ animationDelay: "60ms" }}>
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            Mission-First Microsoft Security Advisory
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Turn Existing Microsoft Security Investments into Mission Outcomes by Operationalizing What You Own at Lower Cost.
          </h1>
          <p className="hero-rotator mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--gold-300)] md:text-base">
            <span>Author of Official Microsoft Guidance.</span>
            <span>Better Security. Lower Cost. Zero Trust Done Right.</span>
            <span>AI-Critical Guidance, Seamlessly Integrated into Zero Trust.</span>
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            MissionTrust Advisors helps Federal Civilian, Department of War, and National Security organizations realize better Zero Trust outcomes from Microsoft capabilities they already own, while seamlessly incorporating AI-critical security guidance.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {trustBadges.map((badge, index) => (
              <p key={badge} className="trust-badge reveal-item" style={{ animationDelay: `${180 + index * 70}ms` }}>{badge}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://outlook.office.com/book/MissionTrustAdvisors1@MissionTrustAdvisors.onmicrosoft.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Schedule a Call
            </a>
            <a
              href="#services"
              className="btn-secondary"
            >
              View Core Capabilities
            </a>
          </div>
        </section>

        <section className="section-reveal mt-8 rounded-3xl border border-white/20 bg-[rgba(7,16,35,0.6)] px-5 py-5 md:px-7" style={{ animationDelay: "140ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Capabilities At A Glance</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {quickCapabilities.map((item) => (
              <p key={item} className="capability-chip">{item}</p>
            ))}
          </div>
        </section>

        <section className="message-band section-reveal mt-10 rounded-3xl px-6 py-6 md:px-8" style={{ animationDelay: "200ms" }}>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--gold-300)]">Core Value Proposition</p>
          <p className="mt-3 text-lg leading-relaxed text-white/90 md:text-2xl">Most agencies already own the tools needed for strong, auditable Zero Trust outcomes. MissionTrust closes the configuration and operationalization gap, with AI-critical guidance integrated from the start.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {outcomes.map((outcome) => (
              <span key={outcome} className="pill-chip">{outcome}</span>
            ))}
          </div>
        </section>

        <section id="services" className="section-reveal mt-16" style={{ animationDelay: "240ms" }}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:text-left">
            <h2 className="text-3xl font-semibold md:text-4xl" style={{ color: "#ffffff" }}>Advisory Services</h2>
            <p className="max-w-xl text-sm font-medium md:text-base" style={{ color: "#ffffff" }}>
              Auditable outcomes. Proven guidance. 20+ years of federal trust.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="service-card reveal-item" style={{ animationDelay: `${280 + index * 90}ms` }}>
                <h3 className="text-xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#334155" }}>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-reveal mt-16 grid gap-6 rounded-4xl bg-[rgba(8,20,47,0.7)] p-7 shadow-[0_24px_90px_rgba(6,12,25,0.4)] md:grid-cols-2 md:p-10" style={{ animationDelay: "320ms" }}>
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Who We Serve</h2>
          </div>
          <div className="grid gap-3">
            {audiences.map((audience) => (
              <p key={audience} className="audience-chip">{audience}</p>
            ))}
          </div>
        </section>

        <section id="process" className="section-reveal mt-16" style={{ animationDelay: "380ms" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.17em] text-[var(--gold-300)]">Our Process</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A 3-step approach</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/75 md:text-base">
            Better security outcomes begin by activating what you already own.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card reveal-item" style={{ animationDelay: `${420 + index * 90}ms` }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-300)]">Step 0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-reveal mt-20 rounded-4xl bg-[var(--paper-100)] px-7 py-10 md:px-10" style={{ animationDelay: "460ms" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--navy-600)]">CEO & Founder of MissionTrust Advisors</p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/keith-brewer-headshot.jpg"
              alt="Keith Brewer, Founder and Principal Advisor"
              width={320}
              height={320}
              className="h-52 w-52 rounded-full object-cover shadow-[0_16px_45px_rgba(15,23,42,0.28)] md:h-64 md:w-64"
              priority
            />
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">
            The Author of the Playbook. Now Working For You.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-700)]">
            20+ years advising Federal Civilian, DoW, and National Security agencies - now as your independent advisor.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            Keith Brewer is the founder and principal advisor of MissionTrust Advisors - a boutique advisory firm built on 20+ years of direct experience architecting identity security and Zero Trust solutions across Federal Civilian agencies, the Department of War, and National Security missions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            Before founding MissionTrust, Keith served as a Principal Identity & Security Architect at Microsoft and led strategic architecture work with U.S. Government customers in Identity and Network Access (IDNA) Customer Experience Engineering (CxE). He is the named author of Microsoft&apos;s official guidance for the <a href="https://aka.ms/ZTforDoD" target="_blank" rel="noreferrer" className="font-semibold text-[var(--ink-900)] underline decoration-[var(--ink-700)] underline-offset-2">DoW Zero Trust Strategy</a>, <a href="https://aka.ms/ZTforUSGov" target="_blank" rel="noreferrer" className="font-semibold text-[var(--ink-900)] underline decoration-[var(--ink-700)] underline-offset-2">CISA Zero Trust Maturity Model</a>, <a href="https://aka.ms/AzureADCMMC" target="_blank" rel="noreferrer" className="font-semibold text-[var(--ink-900)] underline decoration-[var(--ink-700)] underline-offset-2">CMMC 2.0</a>, and <a href="https://learn.microsoft.com/en-us/entra/standards/configure-for-fedramp-high-impact" target="_blank" rel="noreferrer" className="font-semibold text-[var(--ink-900)] underline decoration-[var(--ink-700)] underline-offset-2">FedRAMP High</a>. He also led Microsoft Security media on <a href="https://www.youtube.com/playlist?list=PL3ZTgFEc7LysTnItcN7SJnJ6wpPJif2-k" target="_blank" rel="noreferrer" className="font-semibold text-[var(--ink-900)] underline decoration-[var(--ink-700)] underline-offset-2">phishing-resistant authentication</a> and <a href="https://youtu.be/jsKQxo-xGgA?si=_gKnquCot5LDf4HH" target="_blank" rel="noreferrer" className="font-semibold text-[var(--ink-900)] underline decoration-[var(--ink-700)] underline-offset-2">migrating to Microsoft Entra Certificate-Based Authentication (CBA)</a>.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            MissionTrust was founded on a simple but powerful premise: most agencies already own everything they need to achieve strong, auditable Zero Trust outcomes. Stitching together multiple vendor products is complex and in many cases not possible. The result is a fragmented admin and user experience that often fails to achieve the desired security outcome. Simply put, starting with a goal of implementing the Microsoft security products most agencies already own that natively integrate with Microsoft 365 and Azure workloads leads to better Zero Trust outcomes. This is where MissionTrust Advisors excels: helping agencies improve the overall security posture, administrative capability, and increased SOC visibility, with reduced complexity and cost, often while improving user experience.
          </p>

          <div className="mt-6 rounded-2xl border border-[rgba(11,31,60,0.12)] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--navy-700)]">Executive Advisory Outcomes</p>
            <div className="mt-3 space-y-2">
              {executiveOutcomes.map((outcome) => (
                <p key={outcome} className="text-sm leading-relaxed text-[var(--ink-800)]">{outcome}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {credentialChips.map((chip) => (
              <span key={chip} className="credential-chip">{chip}</span>
            ))}
          </div>
          <p className="mt-5 text-sm text-[var(--ink-600)]">Keith Brewer | CEO & Founder, MissionTrust Advisors</p>
        </section>

        <section className="section-reveal mt-16 grid gap-6 rounded-4xl bg-[var(--paper-100)] px-7 py-10 md:grid-cols-2 md:px-10" style={{ animationDelay: "500ms" }}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--navy-600)]">Selected Leadership Priorities</p>
            <div className="mt-5 space-y-3">
              {leadershipPriorities.map((priority) => (
                <p key={priority} className="rounded-2xl border border-[rgba(11,31,60,0.1)] bg-white px-4 py-3 text-sm leading-relaxed text-[var(--ink-800)] shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                  {priority}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--navy-600)]">Selected Guidance & Media</p>
            <div className="mt-5 grid gap-3">
              {guidanceAndMedia.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[rgba(11,31,60,0.1)] bg-white px-4 py-3 text-sm font-medium text-[var(--ink-900)] shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-0.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-reveal mt-20 rounded-4xl border border-white/20 bg-[rgba(6,14,33,0.7)] px-7 py-10 md:px-10" style={{ animationDelay: "520ms" }}>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Are You Ready to Realize a Better Zero Trust Posture?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/78 md:text-base">
            If you are ready to improve your Zero Trust posture while reducing cost and complexity, MissionTrust will map a focused advisory path aligned to your mission, mandate deadlines, and budget reality.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-1">
            <a
              href="https://outlook.office.com/book/MissionTrustAdvisors1@MissionTrustAdvisors.onmicrosoft.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-white/60">Schedule a Call</p>
              <p className="mt-2 text-lg font-semibold text-white">Schedule online</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-8 text-xs text-white/55 md:px-10">
        <a href="#top" className="brand-lockup mb-4 inline-flex text-white/85" aria-label="MissionTrust Advisors">
          <CompassRose size={24} />
          <span className="brand-wordmark">
            <span className="top">MISSIONTRUST</span>
            <span className="bottom">ADVISORS</span>
          </span>
        </a>
        <div className="mb-3 flex flex-wrap gap-4 text-xs text-white/70">
          <a href="mailto:Keith@missiontrustadvisors.com" className="hover:text-white">Keith@missiontrustadvisors.com</a>
          <a href="https://www.linkedin.com/in/Keith-Brewer" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
        <p>© {year} MissionTrust Advisors | Federal Civilian, DoW, and National Security Advisory</p>
      </footer>
    </div>
  );
}
