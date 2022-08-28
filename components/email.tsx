const Email = () => (
  <div className="bg-teal-300">
    <div className="mt-8 border-2 border-black w-11/12 sm:w-1/2 mx-auto mb-8">
      <div className="border-b-2 border-black flex flex-row px-1 bg-gray-300">
        <p className="pr-1 border-r-2 border-black">x</p>
        <div className="grow" />
        <p>email</p>
        <div className="grow" />
        <div />
      </div>
      <div className="bg-white pl-2 pr-3 py-2 overflow-scroll h-96 scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <p className="font-bold">
          from:{' '}
          <span className="font-normal">
            zap@
            <span className="border border-black px-1 bg-gray-200">
              REDACTED
            </span>
          </span>
        </p>
        <p className="font-bold">
          subject: <span className="font-normal">an invitation</span>
        </p>
        <br />
        <div className="flex flex-col gap-y-4 text-mxs">
          <p>
            Shipping a technical project that you’re proud of is among the most
            validating and rewarding things you can do as a young person. The
            euphoria that comes with it makes you feel unstoppable. And, as
            software engineers, we’re extraordinarly lucky that simply doing the
            thing we love every day also counts as “advancing our careers”.
          </p>
          <p>
            College is the best time in your life to wildly experiment and build
            cool, creative projects. But actually doing it is soooooooooo hard.
            Before you can ship something you feel proud of, you have to find
            something you’d enjoy building, feels unique, and allows you to
            learn new things, but not too many new things, otherwise you’ll give
            up. Then, you have to find the time and motivation to actually build
            the thing—and you have to do this outside of your classes, which are
            already highly time-consuming and energy-draining, and also outside
            of constant social obligations.
          </p>
          <p>
            As students, we’re constantly being pulled in every direction—so
            it’s no surprise most students simply don’t bother, & graduate never
            having made something they’re proud of.
          </p>
          <p>
            If only there were a community full of friendly, weird, creative, &
            amazing people people who encouraged you to build projects, & helped
            you carve out real time in your schedule to do it. A community where
            you could finally find <span className="italic">your people</span>,
            who you connect with on a deep level. Who make you feel loved,
            valued, and seen for who you are, and who invite you to make magic
            with them.
          </p>
          <p>I mean, that would be life-changing, wouldn’t it?</p>
        </div>
        <br />
        <p>Regards,</p>
        <p>💛⚡️ The Purdue Hackers community</p>
      </div>
    </div>
  </div>
)

export default Email
