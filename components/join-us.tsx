import React, { useState } from 'react'
import Image from 'next/image'

function JoinUs() {
    const [water, setWater] = useState(false)
    
    return (
        <div className="bg-white-400 min-h-screen pt-20 relative">
            <div className="absolute top-0 left-0">
                <div className="relative top-10">
                    <Image
                        src = "/img/thisGuy.svg" 
                        alt="Sad Plant!"
                        width={200}
                        height={200}/>
                </div>
                <div className="relative -top-10 right-0 w-screen
                        flex flex-row justify-end">
                    <Image
                        src = "/img/dino.svg" 
                        alt="Sad Plant!"
                        width={200}
                        height={200}/>
                </div>
                <div className="relative -top-10">
                    <Image
                        src = "/img/floatCat.svg" 
                        alt="Sad Plant!"
                        width={200}
                        height={200}/>
                </div>
            </div>
            <div className="flex flex-col items-center pt-8">
                <h2 className="text-center text-5xl sm:text-6xl 
                        md:text-7xl w-3/5 sm:w-1/2 md:w-7/12 xl:w-5/12 leading-loose">
                    Ready to find your people?
                </h2>
                <div className="flex flex-col justify-between items-center 
                        md:flex-row p-6 sm:p-12 h-64 sm:h-72 md:h-fit mb-16 sm:mb-5
                        w-2/3 lg:w-1/2 max-w-3xl min-w-fit md:mt-5">
                    <a href="https://events.purduehackers.com/"
                        rel="noopener noreferrer"
                        target="_blank">
                        <button className="footer-btn">
                            Browse Events
                        </button>
                    </a>
                    <a href="https://discord.gg/EXX7baDYS5"
                        rel="noopener noreferrer"
                        target="_blank">
                        <button className="footer-btn">
                            Join Discord
                        </button>
                    </a>
                </div>
                <div className="relative -top-10 cursor-pointer"
                        onClick={() => setWater(true)}>
                    {!water && 
                        <Image
                            className="active:scale-95 transition-transform"
                            src = "/img/sadPlantB1.svg" 
                            alt="Sad Plant!"
                            width={165}
                            height={165}/>}
                    {water && 
                        <div className="relative -top-4 animate-fade-in">
                            <Image
                            className="active:scale-95 transition-transform"
                            src = "/img/sadPlantB2.svg" 
                            alt="Sad Plant!"
                            width={200}
                            height={200}/>
                        </div>}
                    <div className="font-pixel text-xs text-center 
                            mt-3 animate-bounce">
                        Click to Water
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default JoinUs