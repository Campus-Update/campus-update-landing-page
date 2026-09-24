const FEATURE_ITEMS = [
  {
    title: "Official News",
    body: "Stay in the loop with verified updates from your institution and trusted campus channels.",
    tone: "primary",
  },
  {
    title: "Announcements",
    body: "Never miss deadlines, events or important alerts that affect your student life.",
    tone: "secondary",
  },
  {
    title: "Events",
    body: "Discover what is happening on campus and join the moments that matter most.",
    tone: "primary",
  },
  {
    title: "School Calendar",
    body: "Keep track of academic milestones, office hours, and important schedule changes.",
    tone: "secondary",
  },
  {
    title: "Personalized Feed",
    body: "Follow your faculty, clubs and departments for updates that match your campus journey.",
    tone: "accent",
  },
  {
    title: "Health Notifications",
    body: "Receive timely guidance and campus updates when safety and wellbeing matter most.",
    tone: "secondary",
  },
  {
    title: "Student Resources",
    body: "Connect with support, opportunities, and practical information built around student needs.",
    tone: "primary",
  },
  {
    title: "Campus Community",
    body: "Stay connected to what your peers are learning, organizing, and celebrating.",
    tone: "accent",
  },
];

const toneMap = {
  primary: "from-[#483DEB] via-[#4F46E5] to-[#F3F4FF]",
  secondary: "from-[#181A21] via-[#222532] to-[#F5F5F7]",
  accent: "from-[#5E5BEF] via-[#4F46E5] to-[#F5F5FF]",
};

function FeatureIcon({ index }) {
  const common = "h-6 w-6 text-white";

  if (index % 3 === 0) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={common}
      >
        <path
          d="M6 18.5V9.5C6 7.84 7.34 6.5 9 6.5H15C16.66 6.5 18 7.84 18 9.5V18.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8.5 9.5H15.5M8.5 13H15.5M8.5 16.5H12.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (index % 3 === 1) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={common}
      >
        <path
          d="M8 16L12 4L16 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 12H17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={common}>
      <path
        d="M12 3.5v9.75M18.5 12.5l-6.5 6.5-6.5-6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="pb-10 pt-10 md:pb-16 lg:pt-20">
      <div className="container-page">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1F1F1F] bg-[#111111] px-3 py-1.5 text-sm font-medium text-white shadow-badge">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4F46E5] text-[10px] text-white">
              ✦
            </span>
            Features
          </span>
          <h2 className="mt-5 text-[32px] font-medium leading-[40px] tracking-[-0.64px] text-[#111111] md:text-[44px] md:leading-[48px]">
            Built for every part of campus life
          </h2>
          <p className="mt-5 text-[20px] leading-[22px] text-[#3C3C3C]">
            From academics to student life, keep every campus update in one
            trusted place.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FEATURE_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[22px] border border-[#D9D9D9] bg-white p-2 shadow-[0_12px_28px_rgba(31,31,31,0.06)]"
            >
              <div
                className={`relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[18px] bg-gradient-to-br ${toneMap[item.tone]} p-5 sm:p-6`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_82%,rgba(255,255,255,0.55),transparent_24%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_42%)]" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm">
                    <FeatureIcon index={index} />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                    Live
                  </span>
                </div>

                <div className="relative space-y-2">
                  <h3 className="text-[26px] font-medium leading-[30px] tracking-[-0.52px] text-white">
                    {item.title}
                  </h3>
                  <p className="max-w-[36ch] text-[14px] leading-[20px] text-white/80">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
