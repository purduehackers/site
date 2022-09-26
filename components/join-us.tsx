import Image from 'next/image'

const JoinUs = () => (
    <div className="bg-white-400 min-h-screen pt-20 relative">
        <div className="absolute top-0 left-0">
            <div className="relative top-10">
                <Image
                    src = "/img/thisGuy.svg" 
                    alt="Sad Plant!"
                    width={200}
                    height={200}/>
            </div>
            <div className="relative top-10">
                <Image
                    src = "/img/dino.svg" 
                    alt="Sad Plant!"
                    width={200}
                    height={200}/>
            </div>
            <div className="relative top-10">
                <Image
                    src = "/img/floatCat.svg" 
                    alt="Sad Plant!"
                    width={200}
                    height={200}/>
            </div>
        </div>
        <div className="flex flex-col items-center p-6 sm:p-6">
            <h2 className="text-6xl text-center sm:text-6xl 
                w-1/3 leading-loose">
                Ready to find your people?
            </h2>
            <div className="flex flex-col md:flex-row p-6 sm:p-12 w-2/3
                    justify-between max-w-3xl md: min-w-fit mt-5">
                <button className="border-solid border-black border-4 relative
                        px-2 py-2 w-48 h-24 min-w-fit rounded-3xl font-bold font-mono
                        text-sm shadow-dark-y-md hover:shadow-none hover:top-2">
                    Sign Up for Events
                </button>
                <a href="https://discord.gg/EXX7baDYS5"
                    rel="noopener noreferrer"
                    target="_blank">
                    <button className="border-solid border-black border-4 relative
                            px-2 py-2 w-48 h-24 min-w-fit rounded-3xl font-bold font-mono
                            text-sm shadow-dark-y-md hover:shadow-none hover:top-2">
                        Join Discord
                    </button>
                </a>
            </div>
            <div className="relative -top-10 cursor-pointer">
                <Image
                    className="active:scale-95 transition-transform"
                    src = "/img/sadPlant.svg" 
                    alt="Sad Plant!"
                    width={200}
                    height={200}/>
                <div className="font-pixel text-xs text-center 
                        mt-3 animate-bounce">
                    Click to Water
                </div>
            </div>
        </div>
    </div>
)

export default JoinUs