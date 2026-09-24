export default function EarlyAccessBanner() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-page">
        <div className="rounded-[32px] bg-gradient-to-r from-[#4F46E5] via-[#4A43DD] to-[#413CC8] px-6 py-10 text-center text-white shadow-[0_30px_60px_rgba(79,70,229,0.28)] md:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium tracking-[0.1em] text-white/90 uppercase">
            Early Access
          </span>
          <h2 className="mt-6 text-[32px] font-medium leading-[40px] tracking-[-0.64px] md:text-[44px] md:leading-[52px]">
            Get Early Access to Campus Update
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[18px] leading-[26px] text-white/80">
            Be the first to hear when Campus Update launches at your school and
            start receiving the updates that matter.
          </p>
          <a
            href="#waitlist"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white transition hover:bg-white/15"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
