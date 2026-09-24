const ICONS = {
  news: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M19.5 8.5v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1" />
      <path d="M19.5 8.5h-2a1 1 0 0 0-1 1v7.5a1.5 1.5 0 0 0 3 0v-7a1.5 1.5 0 0 1 0-1.5Z" />
      <path d="M8 8.5h5.5M8 12.5h5.5M8 16.5h3.5" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M3.5 10v4a1 1 0 0 0 1 1H7l4.5 4a1 1 0 0 0 1.5-.87V5.87A1 1 0 0 0 11.5 5L7 9H4.5a1 1 0 0 0-1 1Z" />
      <path d="M17 9.5a4 4 0 0 1 0 5M19.5 7.5a7 7 0 0 1 0 9" />
    </svg>
  ),
  timeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M4.5 6v12" />
      <circle cx="4.5" cy="8" r="1" fill="#111214" stroke="none" />
      <circle cx="4.5" cy="16" r="1" fill="#111214" stroke="none" />
      <path d="M9 7.5h10M9 15.5h12" />
      <circle cx="16" cy="7.5" r="1.75" fill="#fff" />
      <circle cx="18" cy="15.5" r="1.75" fill="#fff" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M3.5 10.5h17M8 3.5v4M16 3.5v4M8 14h3M8 17h3M14 14h2M14 17h2" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M7.5 17.5c.8-2.2 2.5-3.5 4.5-3.5s3.7 1.3 4.5 3.5" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111214" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M18 15.5H6c1.2-1.2 1.5-3 1.5-5a4.5 4.5 0 0 1 9 0c0 2 .3 3.8 1.5 5Z" />
      <path d="M10.5 18.5a1.5 1.5 0 0 0 3 0M18.5 8l1.5-1.5M5.5 8 4 6.5" />
    </svg>
  ),
}

const FEATURES = [
  {
    icon: 'news',
    title: 'Official News',
    titleClass: 'text-[29px] leading-[36px] tracking-[-0.58px]',
    body: 'Access verified news published directly by your institution. No rumours, no third-party sources.',
    cardClass: 'bg-gradient-to-br from-[#1F1F1F] to-[#414143] border border-[#262626]',
  },
  {
    icon: 'megaphone',
    title: 'Announcements',
    titleClass: 'text-[29px] leading-[36px] tracking-[-0.58px]',
    body: 'Never miss critical notices, policy updates or important messages from academic and admin offices.',
    cardClass: 'bg-gradient-to-br from-[#4F46E5] to-[#201C5C] border-2 border-[#262626]',
  },
  {
    icon: 'timeline',
    title: 'Events',
    titleClass: 'text-[29px] leading-[36px] tracking-[-0.58px]',
    body: 'Discover campus events, workshops, career fairs, seminars and social gatherings all in one feed.',
    cardClass: 'bg-gradient-to-br from-[#1F1F1F] to-[#414143] border border-[#262626]',
  },
  {
    icon: 'calendar',
    title: 'School Calendar',
    titleClass: 'text-[26px] leading-[33px] tracking-[-0.52px]',
    body: 'Stay aligned with exam schedules, registration deadlines and key academic dates.',
    cardClass: 'bg-gradient-to-br from-[#4F46E5] to-[#2C277F] border-2 border-[#262626]',
  },
  {
    icon: 'user',
    title: 'Personalized Feed',
    titleClass: 'text-[26px] leading-[33px] tracking-[-0.52px]',
    body: 'Content tailored to your faculty, department and level. No irrelevant noise just your information.',
    cardClass: 'bg-gradient-to-br from-[#1F1F1F] to-[#414143] border border-[#262626]',
  },
  {
    icon: 'bell',
    title: 'Instant Notifications',
    titleClass: 'text-[26px] leading-[33px] tracking-[-0.52px]',
    body: 'Real-time push alerts for the announcements and updates that need your immediate attention.',
    cardClass: 'bg-gradient-to-br from-[#4F46E5] to-[#2C277F] border-2 border-[#262626]',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white pb-[152px] pt-[131px]">
      <div className="mx-auto w-full max-w-[1348px] px-6">
        {/* Header */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D2D2D] bg-[#242424] px-3 py-1.5 shadow-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
            <path d="M11 21H8.25L9.5 13.75H5V11.53L13 3h2.75L14.5 10.25H19v2.22L11 21Z" />
          </svg>
          <span className="text-base font-medium leading-5 tracking-[-0.32px] text-white">Features</span>
        </span>
        <h2 className="mt-[25px] text-[32px] font-medium leading-[40px] text-black md:text-[40px] md:leading-[44px]">
          Built for every part of campus life
        </h2>
        <p className="mt-[25px] max-w-[840px] text-[20px] leading-[22px] text-black">
          One platform that brings together everything students and staff need to stay
          genuinely informed.
        </p>
        <a
          href="#waitlist"
          className="mt-[25px] inline-flex rounded-full border border-white bg-gradient-to-b from-[#3E3C3C] to-[#2A2828] px-5 py-4 text-base leading-6 text-white transition-opacity hover:opacity-90"
        >
          Explore all features
        </a>

        {/* Cards */}
        <div className="mt-[51px] grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-5 xl:gap-y-11">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={`flex h-[300px] flex-col justify-center gap-[25px] rounded-[20px] p-8 ${f.cardClass}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#2F2A89] bg-gradient-to-b from-white to-[#E0E0E0] shadow-chip">
                {ICONS[f.icon]}
              </span>
              <div>
                <h3 className={`font-medium text-[#D8D8D8] ${f.titleClass}`}>{f.title}</h3>
                <p className="mt-[25px] text-base leading-6 tracking-[-0.16px] text-white/55">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
