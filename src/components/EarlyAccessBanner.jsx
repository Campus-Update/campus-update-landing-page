export default function EarlyAccessBanner() {
  return (
    <section className="bg-[#4F46E5] px-6 py-[158px]">
      <div className="mx-auto flex w-full max-w-[996px] flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D2D2D] bg-[#242424] px-3 py-1.5 shadow-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
            <path d="M11 21H8.25L9.5 13.75H5V11.53L13 3h2.75L14.5 10.25H19v2.22L11 21Z" />
          </svg>
          <span className="text-base font-medium leading-5 tracking-[-0.32px] text-white">
            Join waitlist
          </span>
        </span>

        <h2 className="mt-2.5 max-w-[596px] text-[32px] font-medium leading-[40px] tracking-[-0.8px] text-[#EEEDFD] md:text-[40px] md:leading-[48px]">
          Get Early Access to Campus Update
        </h2>
        <p className="mt-[25px] max-w-[596px] text-[18px] leading-[27px] text-[#DCDAFA]">
          Be amongst the first to experience Wait and launch a viral waitlist. Sign up to be
          notified when we launch!
        </p>

        <a
          href="#waitlist"
          className="mt-[30px] inline-flex rounded-full border border-white bg-gradient-to-b from-[#3E3C3C] to-[#2A2828] px-5 py-4 text-base leading-6 text-white transition-opacity hover:opacity-90"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  )
}
