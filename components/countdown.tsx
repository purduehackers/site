import Draggable from 'react-draggable'
import { useEffect, useState } from 'react'

import { LightningTime } from '@purduehackers/time'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faRepeat, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons'

const Countdown = ({hackNightDate} : {hackNightDate: Date}) => {
    // Display state
    const [display, setDisplay] = useState('lightning')

    // Regular time countdown
    const [days, setDays] = useState('5')
    const [hours, setHours] = useState('16')
    const [minutes, setMinutes] = useState('54')
    const [seconds, setSeconds] = useState('33')

    // Lightning time 
    const [bolts, setBolts] = useState('0')
    const [zaps, setZaps] = useState('0')
    const [sparks, setSparks] = useState('0')
    const [charges, setCharges] = useState('0')

    const [boltColor, setBoltColor] = useState('#FFFFFF')
    const [zapColor, setZapColor] = useState('#FFFFFF')
    const [sparkColor, setSparkColor] = useState('#FFFFFF')

    //let countDownDate = new Date(2024, 8, 20, 20, 0, 0).getTime()
    let countDownDate = hackNightDate.getTime()

    useEffect(() => {
        const timer = setInterval(() => {
            // Countdown 
            const currentTime = new Date()
            let timeDiff = countDownDate - currentTime.getTime()

            // Time calculations for days, hours, minutes and seconds
            setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString())
            setHours(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString())
            setMinutes(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString())
            setSeconds(Math.floor((timeDiff % (1000 * 60)) / 1000).toString())

            // Lightning time
            const lt = new LightningTime({
                staticBoltColors: [50, 250],
                staticZapColors: [250, 0],
                staticSparkColors: [250, 0]
            })

            const convertedTime = lt.convertToLightning(currentTime)
            const parts = lt.getParts(convertedTime.lightningString)
            const colors = convertedTime.colors

            setBolts(parts.bolts)
            setZaps(parts.zaps)
            setSparks(parts.sparks)
            setCharges(parts.charges)

            setBoltColor(colors.boltColor)
            setZapColor(colors.zapColor)
            setSparkColor(colors.sparkColor)
        }, 100)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <Draggable>
            <div
                className="bg-black border-4 border-yellow-400 rounded-lg w-60 min-w-fit mx-auto z-20
                shadow-email shadow-gray-900/30 h-fit absolute top-8 left-20 sm:left-32 cursor-pointer"
            >
                <div className="rounded-t-lg px-2 border-b-2 border-black flex flex-row bg-black">
                    <div className="text-white font-bold font-mono">
                        <FontAwesomeIcon icon={faWindows} size="1x" />{' '}
                        {display}.exe {' '}
                        <FontAwesomeIcon icon={faRepeat} size="1x" 
                            onClick={() => (display == 'lightning') ? setDisplay('countdown') : setDisplay('lightning')}/> {' '}
                        <FontAwesomeIcon icon={faMagicWandSparkles} size="1x" />
                    </div>
                </div>
                <div className="rounded-b-lg text-white py-0 flex flex-col justify-center items-center">
                    {display == 'lightning' ?
                        <div className="text-[70px] font-digital">
                            <span style={{color: boltColor}}>{bolts}</span>~
                            <span style={{color: zapColor}}>{zaps}</span>~
                            <span style={{color: sparkColor}}>{sparks}</span>
                            <span className="text-[30px] font-digitalMono">|{charges}</span>
                        </div>
                        :
                        <div className="text-[70px] font-digital">
                            <span style={{color: boltColor}}>{days}</span>:
                            <span style={{color: zapColor}}>{hours}</span>:
                            <span style={{color: sparkColor}}>{minutes}</span>
                            <span className="text-[30px] font-digitalMono">:{seconds}</span>
                        </div>}
                </div>
            </div>
        </Draggable>
    )
}

export default Countdown