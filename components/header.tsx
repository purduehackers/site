const Header = () => (
  <div className="py-12 lg:py-0 lg:h-screen bg-amber-100 flex flex-col justify-center items-center gap-y-4">
    <div className="shadow-blocks shadow-gray-800 border-4 bg-amber-400 border-black p-6 rounded-sm w-10/12 lg:w-auto">
      <h1 className="text-center font-bold text-6xl sm:text-8xl lg:text-9xl">
        Purdue Hackers
      </h1>
    </div>
    <div className="w-10/12 sm:w-1/2 mx-auto">
      <div className="shadow-blocks shadow-gray-800 border-4 bg-white border-black p-4 rounded-sm">
        <p className="text-lg sm:text-xl font-bold">
          💛⚡️ A community of students who collaborate, learn, and build
          kick-ass technical projects
        </p>
      </div>
    </div>
  </div>
)

export default Header
