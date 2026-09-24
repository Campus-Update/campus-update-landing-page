function Badge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D2D2D] bg-[#242424] px-3 py-1.5 shadow-badge">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
        <path d="M11 21H8.25L9.5 13.75H5V11.53L13 3h2.75L14.5 10.25H19v2.22L11 21Z" />
      </svg>
      <span className="text-base font-medium leading-5 tracking-[-0.32px] text-white">
        Why Campus Update
      </span>
    </span>
  )
}

function CardText({ title, body }) {
  return (
    <div>
      <h3 className="text-[26px] font-medium leading-[33px] tracking-[-0.52px] text-[#D8D8D8]">
        {title}
      </h3>
      <p className="mt-[25px] text-base leading-6 tracking-[-0.16px] text-white/55">{body}</p>
    </div>
  )
}

const cardBase = 'rounded-[20px] border-2 border-[#262626] p-8'

export default function ReasonsSection() {
  return (
    <section id="why-us" className="bg-white pb-[131px] pt-[131px]">
      {/* Header */}
      <div className="mx-auto flex w-full max-w-[1326px] flex-col items-center px-6 text-center">
        <Badge />
        <h2 className="mt-5 text-[32px] font-medium leading-[40px] text-black md:text-[40px] md:leading-[44px]">
          Four reasons students and institutions choose us.
        </h2>
      </div>

      {/* Bento grid */}
      <div className="mx-auto mt-10 w-full max-w-[1249px] px-6">
        <div className="flex flex-col gap-[27px]">
          {/* Row 1 */}
          <div className="grid gap-[41px] lg:grid-cols-[684fr_476fr]">
            {/* Official */}
            <article className={`${cardBase} flex flex-col items-center gap-5 bg-[#4F46E5] lg:flex-row`}>
              <div className="max-w-[251px] flex-1">
                <CardText
                  title="Official"
                  body="Get information from trusted institutional sources, not unverified group chats or rumour mills."
                />
              </div>
              <img
                src="/images/bento-official.png"
                alt=""
                className="h-[321px] w-[302px] shrink-0 rounded-[20px] object-cover"
              />
            </article>

            {/* Relevant */}
            <article className={`${cardBase} flex flex-col gap-5 bg-[#111214]`}>
              <CardText
                title="Relevant"
                body="Receive content that matches your profile, department and interests  nothing more, nothing less."
              />
              <img
                src="/images/bento-relevant.png"
                alt=""
                className="h-[200px] w-full rounded-[20px] object-cover"
              />
            </article>
          </div>

          {/* Row 2 */}
          <div className="grid gap-[41px] lg:grid-cols-[476fr_684fr]">
            {/* Simple */}
            <article className={`${cardBase} flex flex-col gap-5 bg-[#111214]`}>
              <CardText
                title="Simple"
                body="Everything important lives in one clean, easy-to-navigate platform. Zero learning curve."
              />
              <img
                src="/images/bento-simple.png"
                alt=""
                className="h-[200px] w-full rounded-[20px] object-cover"
              />
            </article>

            {/* Connected */}
            <article className={`${cardBase} flex flex-col items-center gap-5 bg-[#4F46E5] lg:flex-row`}>
              <div className="max-w-[251px] flex-1">
                <CardText
                  title="Connected"
                  body="Stay connected to everything happening across your campus community, in real time"
                />
              </div>
              <img
                src="/images/bento-connected.png"
                alt=""
                className="h-[321px] w-[302px] shrink-0 rounded-[20px] object-cover"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
