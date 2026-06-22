import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MissionTrust Advisors | Coming Soon",
  description: "Mission-First Microsoft Security. Coming Soon.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function ComingSoonPage() {
  const year = new Date().getFullYear();
  const sectors = ["Federal Civilian", "Department of War", "National Security"];

  const CompassRose = ({ size = 34 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="#2A5A8D" strokeWidth="1.6" fill="none" />
      <line x1="8" y1="40" x2="72" y2="40" stroke="#2A5A8D" strokeWidth="1" strokeOpacity="0.45" />
      <line x1="40" y1="8" x2="40" y2="72" stroke="#2A5A8D" strokeWidth="1" strokeOpacity="0.45" />
      <polygon points="40,8 44,34 40,28 36,34" fill="#C9A84C" />
      <polygon points="72,40 46,44 52,40 46,36" fill="#C9A84C" />
      <polygon points="40,72 36,46 40,52 44,46" fill="#C9A84C" />
      <polygon points="8,40 34,36 28,40 34,44" fill="#C9A84C" />
      <polygon points="53,14 46,34 48,32 44,34" fill="#173B66" />
      <polygon points="66,53 46,46 48,48 46,44" fill="#173B66" />
      <polygon points="27,66 34,46 32,48 36,46" fill="#173B66" />
      <polygon points="14,27 34,34 32,32 34,36" fill="#173B66" />
      <polygon points="40,34 44,40 40,46 36,40" fill="#FFFFFF" />
      <polygon points="40,36 42,40 40,44 38,40" fill="#0B1F3C" />
    </svg>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(90deg,#010C1F_0%,#071A36_50%,#0E2A49_100%)] text-white">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--gold-400)]" />

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:px-6 md:px-10">
        <section className="w-full max-w-[540px]">
          <div className="mx-auto inline-flex items-center justify-center">
            <CompassRose size={72} />
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[0.005em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            MISSION
            <span className="text-[var(--gold-400)]">TRUST</span>
          </h1>

          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.34em] text-[#D6E7F8] sm:text-base md:text-lg">
            ADVISORS
          </p>

          <div className="mx-auto mt-3 h-px w-16 bg-[var(--gold-400)] sm:w-20 sm:mt-4" />

          <p className="mx-auto mt-5 max-w-2xl text-base italic text-[#F2F7FF] sm:text-lg md:text-2xl">
            "Mission-First Microsoft Security"
          </p>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-300)] sm:mt-5 sm:text-base md:text-lg">
            Coming Soon
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-xs text-[#A9C4DE] sm:text-sm md:text-base">
            {sectors.join("  |  ")}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-xs text-white/75 sm:text-sm md:text-base">
            For current inquiries: {" "}
            <a href="mailto:contact@missiontrustadvisors.com" className="font-semibold text-white underline decoration-[var(--gold-300)] underline-offset-4">
              contact@missiontrustadvisors.com
            </a>
          </p>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-8 text-center text-xs text-white/55 md:px-10">
        <p>© {year} MissionTrust Advisors</p>
      </footer>
    </div>
  );
}
