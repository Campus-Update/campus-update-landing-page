import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#' },
  { label: 'Why Us', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="pt-[39px]">
      <div className="container-page relative">
        <nav className="relative flex h-20 items-center justify-between" aria-label="Main">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5">
            <img src="/logo-mark.svg" alt="Campus Update logo" className="h-[34px] w-[34px]" />
            <span className="font-logo text-[20px] leading-6 text-brand-ink">Campus Update</span>
          </a>

          {/* Centered pill nav (desktop) */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full border border-[#DEE5ED] bg-[#F5F5F5] py-2.5 pl-2.5 pr-4 shadow-nav-pill backdrop-blur-md lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? 'rounded-full border border-[#DEE5ED] bg-white px-4 py-3 text-base leading-6 text-[#211D21]'
                    : 'rounded-lg px-3 py-3 text-base leading-6 text-[#413941] transition-colors hover:text-black'
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#waitlist"
            className="hidden rounded-full border border-white bg-gradient-to-b from-[#3E3C3C] to-[#2A2828] px-5 py-4 text-base leading-6 text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Join the Waitlist
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DEE5ED] bg-[#F5F5F5] text-brand-ink lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="absolute inset-x-6 top-full z-20 mt-2 flex flex-col gap-1 rounded-2xl border border-[#DEE5ED] bg-white p-4 shadow-nav-pill lg:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  link.active
                    ? 'rounded-full bg-[#F5F5F5] px-4 py-3 text-base text-[#211D21]'
                    : 'rounded-full px-4 py-3 text-base text-[#413941] hover:bg-[#F5F5F5]'
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-b from-[#3E3C3C] to-[#2A2828] px-5 py-3 text-center text-base text-white"
            >
              Join the Waitlist
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
