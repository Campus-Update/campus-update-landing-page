export default function CampusShowcase() {
  return (
    <section className="pb-16 pt-8 md:pb-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-[30px] border border-[#2A2A2A] bg-[#0e0c12] p-3 shadow-[0_30px_80px_rgba(17,17,17,0.12)] md:p-4">
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              src="/images/footer.jpg"
              alt="Students gathered together on campus"
              className="h-[320px] w-full object-cover object-center md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 via-[#0B0B0F]/10 to-transparent" />
          </div>

          <div className="px-3 pb-4 pt-5 md:px-5 md:pb-6 md:pt-6">
            <div className="rounded-[22px] bg-[#f7f7f7] p-4 text-[#111111] shadow-[0_12px_30px_rgba(17,17,17,0.12)] md:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#e9e4ff] text-[18px] font-semibold text-[#4F46E5]">
                    C
                  </span>
                  <div>
                    <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-[#5A5A5A]">
                      Campus Update
                    </p>
                    <p className="text-[11px] text-[#6E6E6E]">
                      Official campus digest
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-[#D8D8D8] bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#404040]">
                  Live
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-[18px] bg-[#0c0d12] px-4 py-3 text-center md:px-6 md:py-5">
              <h2 className="text-[38px] font-medium leading-[0.96] tracking-[-0.08em] text-white md:text-[88px]">
                Campus Update
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
