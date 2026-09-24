export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white">
      <div className="container-page py-10 md:py-14">
        <div className="rounded-[30px] border border-white/10 bg-[#111318] p-6 shadow-[0_20px_50px_rgba(10,10,14,0.35)] md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4F46E5] text-xl font-semibold text-white">
                C
              </span>
              <div>
                <p className="text-xl font-semibold tracking-[-0.04em]">
                  Campus Update
                </p>
                <p className="text-sm text-white/60">
                  Stay connected to campus life
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-white/70 md:gap-8">
              <a href="#" className="transition hover:text-white">
                Home
              </a>
              <a href="#" className="transition hover:text-white">
                Features
              </a>
              <a href="#" className="transition hover:text-white">
                Why Us
              </a>
              <a href="#" className="transition hover:text-white">
                Resources
              </a>
            </nav>
          </div>

          <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/45">
                Product
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/45">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Students
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Institutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/45">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a
                    href="mailto:hello@campusupdate.com"
                    className="hover:text-white"
                  >
                    hello@campusupdate.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Campus Update. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
