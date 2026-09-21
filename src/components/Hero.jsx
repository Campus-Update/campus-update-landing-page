export default function Hero() {
  return (
    <section className="pb-16 pt-[72px] lg:pt-[93px]">
      <div className="container-page">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-24 xl:gap-[216px]">
          {/* Left column */}
          <div className="max-w-[791px] flex-1">
            <h1 className="font-display text-[40px] font-semibold uppercase leading-[56px] text-black md:text-[54px] md:leading-[76px] xl:text-[64px] xl:leading-[90px]">
              Everything happening on campus, in one place.
            </h1>
            <p className="mt-5 text-[20px] leading-[22px] text-[#555555]">
              Verified school news, announcements, events and dates. Published by your
              institution. Delivered to your phone.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="#waitlist"
                className="rounded-full bg-gradient-to-r from-brand-purple to-brand-deep px-6 py-4 text-[17px] leading-[26px] text-white shadow-cta transition-[filter] hover:brightness-110"
              >
                Get Started
              </a>
              <span aria-hidden="true" className="h-[25px] w-px bg-black/15" />
              <a href="#how-it-works" className="group flex items-center gap-1.5 text-[17px] leading-[26px] text-[#3D3D3D]">
                View feature
                <svg
                  className="transition-transform group-hover:translate-x-0.5"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 10h13" />
                  <path d="M11.5 4.5L17 10l-5.5 5.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — waitlist capture */}
          <div id="waitlist" className="w-full lg:w-[480px] lg:shrink-0">
            <span className="inline-flex rounded-full bg-brand-soft px-3 py-1.5 text-base leading-6 text-brand-mid">
              Join Waitlist
            </span>
            <h2 className="mt-5 text-2xl font-medium leading-[29px] tracking-[-0.48px] text-brand-purple">
              Get Early Access to Campus Update
            </h2>
            <form
              className="mt-5 flex h-[62px] items-center rounded-full bg-brand-purple pr-6 shadow-input"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="h-[54px] min-w-0 flex-1 rounded-l-full rounded-r-md bg-[#F2F2F2] px-4 text-[17px] text-black placeholder:text-[#666666] focus:outline-none"
              />
              <button type="submit" className="shrink-0 pl-4 text-[17px] leading-[26px] text-white">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>

        {/* Campus photo */}
        <div className="mt-12 overflow-hidden rounded-[20px] lg:mt-[47px]">
          <img
            src="/images/campus-hero.png"
            alt="Students walking across a university campus quad"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
