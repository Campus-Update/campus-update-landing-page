const STEPS = [
  {
    num: '01',
    title: 'Choose Your Institution',
    body: 'Search and select your university or college from our growing network of partner institutions.',
    bg: '#4F46E5',
    chipBorder: '#2F2A89',
    activeDot: 0,
  },
  {
    num: '02',
    title: 'Personalize Your Profile',
    body: 'Set your faculty, department and level so Campus Update surfaces what is most relevant to you.',
    bg: '#1F1F1F',
    chipBorder: '#4F46E5',
    activeDot: 1,
  },
  {
    num: '03',
    title: 'Stay Connected',
    body: 'Receive official news, announcements, events and opportunities all from verified institutional sources.',
    bg: '#4F46E5',
    chipBorder: '#2F2A89',
    activeDot: 2,
  },
]

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
      <path d="M11 21H8.25L9.5 13.75H5V11.53L13 3h2.75L14.5 10.25H19v2.22L11 21Z" />
    </svg>
  )
}

function StepCard({ step }) {
  return (
    <article
      className="flex min-h-[336px] flex-col justify-between rounded-xl p-8"
      style={{ backgroundColor: step.bg }}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex h-[39px] w-9 items-center justify-center rounded-lg border bg-gradient-to-b from-white to-[#E0E0E0] font-display text-[15px] font-semibold leading-none tracking-[-0.3px] text-black shadow-chip"
          style={{ borderColor: step.chipBorder }}
        >
          {step.num}
        </span>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full bg-white ${i === step.activeDot ? 'opacity-100' : 'opacity-40'}`}
            />
          ))}
        </span>
      </div>

      <div>
        <h3 className="text-[28px] font-medium leading-[35px] tracking-[-0.56px] text-white">
          {step.title}
        </h3>
        <p className="mt-6 text-[17px] leading-[21px] tracking-[-0.34px] text-brand-soft">
          {step.body}
        </p>
      </div>
    </article>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pb-[117px] pt-[96px] lg:pt-[117px]">
      {/* Section header */}
      <div className="container-page flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D2D2D] bg-[#242424] px-3 py-1.5 shadow-badge">
          <BoltIcon />
          <span className="text-sm font-medium leading-[17.5px] tracking-[-0.28px] text-white">
            How it works
          </span>
        </span>
        <h2 className="mt-5 text-[32px] font-medium leading-[40px] text-black md:text-[40px] md:leading-[44px]">
          From sign-up to informed in minutes
        </h2>
        <p className="mt-5 max-w-[867px] text-[20px] leading-[22px] text-black">
          No complex setup. Just choose your institution, set your profile, and Campus Update
          does the rest.
        </p>
      </div>

      {/* Steps + imagery */}
      <div className="mx-auto mt-16 w-full max-w-[1348px] px-6 lg:mt-[88px]">
        <div className="grid gap-8 lg:grid-cols-[388px_minmax(0,1fr)] lg:gap-12">
          <div className="flex flex-col gap-[30px]">
            {STEPS.map((step) => (
              <StepCard key={step.num} step={step} />
            ))}
          </div>

          <div className="flex flex-col gap-[29px]">
            <img
              src="/images/phone-news.png"
              alt="Hand holding a phone showing the Campus Update news feed"
              className="aspect-[864/693] w-full rounded-[10px] object-cover"
            />
            <img
              src="/images/news-web.png"
              alt="Live news headlines on a screen"
              className="aspect-[864/347] w-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
