export function SignOff(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 font-main print:hidden">
      <hr className="border-2 border-amber-400 w-1/2 mx-auto my-4" />
      <p className="font-bold text-xl">With 💛,</p>
      <div className="flex flex-col text-base">
        <p className="flex items-center gap-1">
          <img
            src="/ph-logo.svg"
            alt="Logo"
            className="self-center flex-shrink-0 h-[1em] w-auto pointer-events-none"
          />
          Purdue Hackers
        </p>
        <p>purduehackers@gmail.com</p>
      </div>
    </div>
  )
}
