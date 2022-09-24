import Image from 'next/image'

const JoinUs = () => (
    <div className="bg-white-400 min-h-screen pt-20">
        <div className="flex flex-col items-center p-6 sm:p-12">
            <h2 className="text-6xl text-center sm:text-7xl w-1/2">
                Ready to find your people?
            </h2>
            <div className="flex flex-col md:flex-row p-6 sm:p-12 w-2/3
                    justify-between max-w-3xl md: min-w-fit">
                <button className="border-solid border-black border-4
                        px-2 py-2 w-52 h-24 min-w-fit rounded-3xl font-bold
                        shadow-dark-y-md font-mono">
                    Sign Up for Events
                </button>
                <a href="https://discord.gg/EXX7baDYS5"
                    rel="noopener noreferrer"
                    target="_blank">
                    <button className="border-solid border-black border-4
                            px-2 py-2 w-52 h-24 min-w-fit rounded-3xl font-bold
                            shadow-dark-y-md font-mono">
                        Join Discord
                    </button>
                </a>
            </div>
            <div className="relative">
                <Image 
                    src = "/img/sadPlant.svg" 
                    alt="Sad Plant!"
                    width={200}
                    height={200}/>
            </div>
        </div>
    </div>
)

export default JoinUs