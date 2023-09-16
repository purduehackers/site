export default function Sponsor(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-amber-100 border-b-[3px] border-black">
        <div className="py-16 sm:py-20 flex flex-col gap-y-4">
          <h1 className="text-center text-4xl sm:text-7xl sm:tracking-tight font-bold flex justify-center items-center">
            <img
              src="/ph-logo.svg"
              alt="Logo"
              className="self-center flex-shrink-0 h-[1em] w-auto"
            />
            Sponsor Purdue Hackers
          </h1>
        </div>
      </header>
      <article className="mt-8 sm:mt-12 mb-8 sm:mb-12 text-lg font-serif flex flex-col items-start gap-y-4 justify-center w-11/12 sm:w-full max-w-2xl mx-auto">
        <p>hey</p>
      </article>
    </div>
  )
}
