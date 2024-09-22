import Draggable from 'react-draggable';
import { useEffect, useState } from 'react';

import { LightningTime } from '@purduehackers/time';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import {
  faRepeat,
  faMagicWandSparkles,
  faBolt,
  faBoltLightning
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Countdown = ({ hackNightDate }: { hackNightDate: Date }) => {
  // Display state
  const [display, setDisplay] = useState('lightning');

  // Regular time countdown
  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  // Lightning time
  const [bolts, setBolts] = useState('0');
  const [zaps, setZaps] = useState('0');
  const [sparks, setSparks] = useState('0');
  const [charges, setCharges] = useState('0');

  const [boltColor, setBoltColor] = useState('#FFFFFF');
  const [zapColor, setZapColor] = useState('#FFFFFF');
  const [sparkColor, setSparkColor] = useState('#FFFFFF');

  useEffect(() => {
    const timer = setInterval(() => {
      /* Countdown */

      // Get difference between current date and upcoming date
      const currentTime = new Date();
      let timeDiff = hackNightDate.getTime() - currentTime.getTime();

      // Check for invalid upcoming date
      if (timeDiff <= 0) {
        // Default to next Friday 8pm
        hackNightDate.setDate(
          hackNightDate.getDate() + ((5 + 7 - hackNightDate.getDay()) % 7)
        );
        hackNightDate.setHours(20);
        hackNightDate.setMinutes(0);
        hackNightDate.setMilliseconds(0);

        // Update time diff
        timeDiff = hackNightDate.getTime() - currentTime.getTime();
      }

      // Calculate and update days, hours, minutes and seconds
      setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString());
      setHours(
        Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ).toString()
      );
      setMinutes(
        Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString()
      );
      setSeconds(Math.floor((timeDiff % (1000 * 60)) / 1000).toString());

      // Lightning time
      const lt = new LightningTime({
        staticBoltColors: [50, 250],
        staticZapColors: [250, 0],
        staticSparkColors: [250, 0]
      });

      // Create date object from time diff to pass to lightning time
      let timeDiffDate = new Date(timeDiff + 5 * 60 * 60 * 1000); // have to add 5 hours (I'm not sure why)

      // Convert countdown time to lightning time
      const convertedTime = lt.convertToLightning(timeDiffDate);
      const parts = lt.getParts(convertedTime.lightningString);
      const colors = convertedTime.colors;

      // Update lightning time units
      setBolts(parts.bolts);
      setZaps(parts.zaps);
      setSparks(parts.sparks);
      setCharges(parts.charges);

      setBoltColor(colors.boltColor);
      setZapColor(colors.zapColor);
      setSparkColor(colors.sparkColor);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Draggable handle=".handle">
      <div
        className="bg-black border-4 border-yellow-400 rounded-lg w-60 min-w-fit mx-auto z-20
                shadow-email shadow-gray-900/30 h-fit absolute top-8 left-20 sm:left-32 cursor-pointer"
      >
        <div
          className="rounded-t-lg px-2 py-1 border-b-2 border-black 
            flex flex-row items-end justify-between bg-black"
        >
          <div className="handle grow text-white font-bold font-mono">
            <FontAwesomeIcon icon={faWindows} size="1x" /> {display}.exe{' '}
          </div>
          <div>
            <button
              className="cursor-pointer px-1 text-white"
              onClick={() =>
                display == 'lightning'
                  ? setDisplay('countdown')
                  : setDisplay('lightning')
              }
            >
              <FontAwesomeIcon icon={faRepeat} size="1x" />
            </button>
            <button
              onClick={() =>
                alert('You have gained the ability to turn back time.')
              }
              className="cursor-pointer px-1 md:inline-block sm:hidden"
            >
              <FontAwesomeIcon
                icon={faMagicWandSparkles}
                size="1x"
                className="text-sky-400"
              />
            </button>
            {display == 'lightning' && (
              <Link
                href={'https://blog.purduehackers.com/posts/lightning-time'}
                target="_blank"
                className="cursor-pointer px-1"
              >
                <FontAwesomeIcon
                  icon={faBolt}
                  size="1x"
                  className="text-yellow-400"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="handle rounded-b-lg text-white px-4 py-0 flex flex-col justify-center items-center">
          {display == 'lightning' ? (
            <div className="text-[70px] font-digital">
              <span className="text-yellow-400">{days}</span>:
              <span style={{ color: boltColor }}>{bolts}</span>~
              <span style={{ color: zapColor }}>{zaps}</span>~
              <span style={{ color: sparkColor }}>{sparks}</span>
              <span className="text-[30px] font-digitalMono">|{charges}</span>
            </div>
          ) : (
            <div className="text-[70px] font-digital">
              <span className="text-yellow-400">{days}</span>
              <span className="text-[18px] font-digitalMono"></span>:
              <span style={{ color: zapColor }}>{hours}</span>
              <span className="text-[18px] font-digitalMono"></span>:
              <span style={{ color: sparkColor }}>{minutes}</span>
              <span className="text-[18px] font-digitalMono"></span>
              <span className="text-[30px] font-digitalMono">:{seconds}</span>
            </div>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Countdown;
