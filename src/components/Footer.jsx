const LINK_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Events', href: '#features' },
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'Why Us', href: '#why-us' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
  {
    heading: 'Institution',
    links: [
      { label: 'For Universities', href: '#' },
      { label: 'Partner With', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
]

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#141B34" aria-hidden="true">
      <path d="M18.9 3H22l-7.03 8.03L23.2 21h-6.56l-5.14-6.1L5.6 21H2.5l7.52-8.6L1.6 3h6.72l4.64 5.56L18.9 3Zm-1.15 16.1h1.72L7.08 4.8H5.24l12.51 14.3Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.5" fill="#141B34" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] px-4 pb-[28px] md:px-[27px]">
      <div className="relative overflow-hidden rounded-[20px] bg-[#111214]">
        {/* purple glow, bottom-left (Figma: Ellipse 21) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[186px] top-[334px] h-[320px] w-[355px] rounded-full bg-[#4F46E5] opacity-80 blur-[90px]"
        />

        <div className="relative px-6 pb-[33px] pt-[94px] md:px-[92px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            {/* Brand block */}
            <div>
              <div className="flex items-center gap-1.5">
                <img src="/logo-mark-white.svg" alt="Campus Update logo" className="h-[34px] w-[34px]" />
                <span className="text-[32px] font-medium leading-[38px] text-white">
                  Campus Update
                </span>
              </div>
              <p className="mt-5 max-w-[274px] text-xs leading-4 text-white">
                A digital campus information platform connecting students, staff and
                institutions across Africa.
              </p>
              <div className="mt-5 flex gap-2.5">
                <a
                  href="#"
                  aria-label="Campus Update on X"
                  className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#F5F5F5] transition-opacity hover:opacity-85"
                >
                  <XIcon />
                </a>
                <a
                  href="#"
                  aria-label="Campus Update on Instagram"
                  className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#F5F5F5] transition-opacity hover:opacity-85"
                >
                  <InstagramIcon />
                </a>
              </div>
              <p className="mt-5 text-xs leading-[13px] tracking-[-0.24px] text-[#EEEDFD]">
                All rights reserved © 2026 Campus Update
              </p>
            </div>

            {/* Link columns */}
            <div className="flex flex-wrap gap-x-16 gap-y-10 md:gap-x-24 xl:gap-x-[205px]">
              {LINK_COLUMNS.map((col) => (
                <nav key={col.heading} aria-label={col.heading}>
                  <p className="text-xs leading-[13px] tracking-[-0.24px] text-[#878889]">
                    {col.heading}
                  </p>
                  <ul className="mt-[15px] space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[13px] font-medium leading-[14px] tracking-[-0.26px] text-white transition-opacity hover:opacity-75"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          {/* Giant wordmark */}
          <div className="p-2.5">
            <p className="whitespace-nowrap text-[clamp(48px,12.1vw,210px)] leading-[1.09] tracking-[-0.02em] text-[#EEEDFD]">
              Campus Update
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
