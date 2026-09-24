const REASONS = [
  {
    title: "Official",
    body: "Every update is sourced from verified institutional channels to keep students informed and confident.",
    accent: "purple",
    icon: "shield",
  },
  {
    title: "Simple",
    body: "Designed to be easy to navigate and quick to understand, even when your day is already full.",
    accent: "light",
    icon: "spark",
  },
  {
    title: "Relevant",
    body: "Personalized signals help students see the information that matters most to their campus experience.",
    accent: "dark",
    icon: "target",
  },
  {
    title: "Connected",
    body: "Bring your institution, students, and community together through one consistent communication hub.",
    accent: "purple",
    icon: "connect",
  },
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 text-[#4F46E5]"
    >
      <rect
        x="16"
        y="14"
        width="32"
        height="36"
        rx="10"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 30.5L29 35.5L40 24.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 text-[#111111]"
    >
      <rect
        x="14"
        y="14"
        width="36"
        height="36"
        rx="10"
        fill="#E9E7FA"
        stroke="#111111"
        strokeWidth="2.5"
      />
      <path
        d="M32 20V44M20 32H44"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 text-[#4F46E5]"
    >
      <rect
        x="16"
        y="16"
        width="32"
        height="32"
        rx="14"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="32"
        cy="32"
        r="10"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 text-[#4F46E5]"
    >
      <rect
        x="14"
        y="18"
        width="14"
        height="14"
        rx="7"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="36"
        y="18"
        width="14"
        height="14"
        rx="7"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="25"
        y="32"
        width="14"
        height="14"
        rx="7"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M28 25h8M22 32l9 7M42 32l-9 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  shield: <ShieldIcon />,
  spark: <SparkIcon />,
  target: <TargetIcon />,
  connect: <ConnectIcon />,
};

export default function ReasonsSection() {
  return (
    <section className="pb-12 pt-10 md:pb-16 md:pt-12">
      <div className="container-page">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.64px] text-[#111111] md:text-[44px] md:leading-[48px]">
            Four reasons students and institutions choose us.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {REASONS.map((reason, index) => (
            <article
              key={reason.title}
              className={[
                "min-h-[240px] rounded-[26px] border p-6 shadow-[0_10px_30px_rgba(17,17,17,0.04)] md:p-8",
                reason.accent === "purple" &&
                  "border-[#DAD6FF] bg-[linear-gradient(135deg,#F5F3FF_0%,#EEF1FF_50%,#FFFFFF_100%)]",
                reason.accent === "light" &&
                  "border-[#E5E7EE] bg-[linear-gradient(135deg,#F6F8FB_0%,#F4F5F8_50%,#FFFFFF_100%)]",
                reason.accent === "dark" &&
                  "border-[#202229] bg-[linear-gradient(135deg,#17181E_0%,#111319_48%,#1A1E2A_100%)]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className={[
                      "flex h-16 w-16 items-center justify-center rounded-[18px] border",
                      reason.accent === "purple" &&
                        "border-[#CFC9FF] bg-[#EAE7FF]",
                      reason.accent === "light" &&
                        "border-[#D7DCE5] bg-[#ECEEF5]",
                      reason.accent === "dark" &&
                        "border-[#2A2D38] bg-[#1A1D27]",
                    ].join(" ")}
                  >
                    {icons[reason.icon]}
                  </span>
                  <h3
                    className={[
                      "text-[28px] font-medium leading-[34px] tracking-[-0.56px]",
                      reason.accent === "dark"
                        ? "text-white"
                        : "text-[#111111]",
                    ].join(" ")}
                  >
                    {reason.title}
                  </h3>
                </div>

                <span
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-full border text-[22px] font-medium",
                    index % 2 === 0
                      ? "border-[#1F1F1F] bg-white text-[#111111]"
                      : "border-[#D3D2F6] bg-[#EAE9FF] text-[#4F46E5]",
                  ].join(" ")}
                >
                  {index % 2 === 0 ? "✓" : "•"}
                </span>
              </div>

              <p
                className={[
                  "mt-6 max-w-[540px] text-[17px] leading-[24px]",
                  reason.accent === "dark"
                    ? "text-[#D5D5D9]"
                    : "text-[#3C3C3C]",
                ].join(" ")}
              >
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
