import React, { useState } from 'react'
import Image from 'next/image'

function JoinUs() {
  const [water, setWater] = useState(false)

  return (
    <div className="bg-white-400 min-h-screen pt-20 mb-96 sm:mb-0 relative">
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
          className="relative -top-10 right-0 w-screen
                        flex flex-row justify-end"
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
      <div className="absolute sm:static -bottom-96 sm:bottom-0 flex flex-col items-center justify-center sm:pt-8">
        <div className="w-10/12 border-4 sm:w-auto border-black p-4 flex flex-col items-center rounded-xl shadow-blocks sm:shadow-none sm:border-none">
          <h1
            className="text-center font-bold text-4xl sm:text-6xl 
                        md:text-8xl w-10/12 sm:w-1/2 md:w-7/12 xl:w-1/2 leading-snug"
          >
            Ready to find your people?
          </h1>
        </div>
        <div
          className="flex flex-row justify-center gap-x-4 gap-y-6 items-center 
                        p-6 sm:p-12 sm:h-72 md:h-fit mb-16 sm:mb-5
                        w-2/3 lg:w-1/2 max-w-3xl min-w-fit md:mt-5"
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
          className="relative -top-10 cursor-pointer"
          onClick={() => setWater(true)}
        >
          {water ? (
            <div className="relative -top-4 animate-fade-in">
              <Image
                className="active:scale-95 transition-transform"
                src="/img/sadPlantB2.svg"
                alt="Sad Plant (watered)!"
                width={200}
                height={200}
              />
            </div>
          ) : (
            <Image
              className="active:scale-95 transition-transform"
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
  )
}

export default JoinUs
