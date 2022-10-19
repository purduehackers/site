import React, { useState } from 'react'
import Image from 'next/image'

function JoinUs() {
  const [water, setWater] = useState(false)

  return (
    <div className="min-h-screen pt-20 bg-white-400">
      <div className="relative">
        <div className="absolute top-0 left-0">
          <div className="relative top-10">
            <Image
              src="/img/thisGuy.svg"
              alt="This Guy!"
              width={200}
              height={200}
            />
          </div>
          <div
            className="relative right-0 flex flex-row justify-end w-screen -top-10"
          >
            <Image src="/img/dino.svg" alt="Dino!" width={200} height={200} />
          </div>
          <div className="relative -top-10">
            <Image
              src="/img/floatCat.svg"
              alt="Float Cat!"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:pt-8">
          <div className="z-10 flex flex-col items-center p-4 border-black backdrop-blur-md border-y-4 sm:border-none sm:backdrop-blur-none">
            <h2
              className="w-3/5 text-5xl font-bold leading-snug text-center sm:text-6xl md:text-8xl sm:w-1/2 md:w-7/12 xl:w-1/2"
            >
              Ready to find your people?
            </h2>
          </div>
          <div
            className="flex flex-row items-center justify-center w-2/3 max-w-3xl p-6 mb-16 gap-x-4 gap-y-6 sm:p-12 sm:h-72 md:h-fit sm:mb-5 lg:w-1/2 min-w-fit md:mt-5"
          >
            <a
              href="https://events.purduehackers.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="footer-btn bg-amber-300">Browse Events</button>
            </a>
            <a
              href="https://puhack.horse/discord-site-refer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="footer-btn bg-amber-300">Join Discord</button>
            </a>
          </div>
          <div
            className="relative cursor-pointer -top-10"
            onClick={() => setWater(true)}
          >
            {water ? (
              <div className="relative -top-4 animate-fade-in">
                <Image
                  className="transition-transform active:scale-95"
                  src="/img/sadPlantB2.svg"
                  alt="Sad Plant (watered)!"
                  width={200}
                  height={200}
                />
              </div>
            ) : (
              <Image
                className="transition-transform active:scale-95"
                src="/img/sadPlantB1.svg"
                alt="Sad Plant!"
                width={165}
                height={165}
              />
            )}
            <div
              className={`font-pixel text-xs text-center 
                              mt-3 animate-bounce ${water ? 'hidden' : ''}`}
            >
              Click to Water
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
