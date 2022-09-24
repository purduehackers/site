const JoinUs = () => (
    <div className="bg-white-400 min-h-screen">
        <div className="flex flex-col items-center p-6 sm:p-12">
            <h2 className="text-6xl text-center sm:text-7xl w-1/2">
                Ready to find your people?
            </h2>
            <div className="flex flex-col sm:flex-row p-6 sm:p-12">
                <button className="border-solid border-black border-4
                        px-2 py-2 w-52 h-24 min-w-fit rounded-3xl font-bold
                        shadow-dark-y-md font-mono">
                    Sign Up for Events
                </button>
                <button className="border-solid border-black border-4
                        px-2 py-2 w-52 h-24 min-w-fit rounded-3xl font-bold
                        shadow-dark-y-md font-mono">
                    Join Discord
                </button>
            </div>
        </div>
    </div>
)

export default JoinUs