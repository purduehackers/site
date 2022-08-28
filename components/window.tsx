const Window = () => (
  <div className="bg-sky-300">
    <div className="mt-8 border-2 border-black w-11/12 sm:w-1/2 mx-auto mb-20">
      <div className="border-b-2 border-black flex flex-row px-1 bg-gray-300">
        <p className="pr-1 border-r-2 border-black">x</p>
        <div className="grow" />
        <p>email</p>
        <div className="grow" />
        <div />
      </div>
      <div className="bg-white p-2">
        <p className="font-sm font-bold">
          from:{' '}
          <span className="font-normal">
            zap@
            <span className="border border-black px-1 bg-gray-200">
              REDACTED
            </span>
          </span>
        </p>
        <p className="font-sm font-bold">
          subject: <span className="font-normal">an invitation</span>
        </p>
        <br />
        <p>
          Building and shipping a technical project that you’re proud of is
          among the most validating and rewarding things you can do as a young
          person.
        </p>
      </div>
    </div>
  </div>
)

export default Window
