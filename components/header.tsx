const Header = () => (
  <div className="h-screen bg-amber-100 flex flex-col justify-center items-center gap-y-4">
    <div className="shadow-blocks shadow-gray-600 border-4 bg-amber-400 border-black p-6 rounded-md">
      <h1 className="text-center font-bold text-4xl sm:text-8xl md:text-9xl">
        Purdue Hackers
      </h1>
    </div>
    <div className="w-10/12 sm:w-1/2 mx-auto">
      <div className="shadow-blocks shadow-gray-600 border-4 bg-white border-black p-6 rounded-md">
        <p className="text-lg sm:text-xl font-bold">
          A community of students who collaborate, learn, and build kick-ass
          technical projects 💛⚡️
        </p>
      </div>
    </div>
  </div>
)

export default Header
