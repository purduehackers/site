import Draggable from 'react-draggable'
import { useEffect, useState } from 'react'

import { LightningTime } from '@purduehackers/time'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const Countdown = () => {
    const [bolts, setBolts] = useState('0')
    const [zaps, setZaps] = useState('0')
    const [sparks, setSparks] = useState('0')
    const [charges, setCharges] = useState('0')

    const [boltColor, setBoltColor] = useState('#FFFFFF')
    const [zapColor, setZapColor] = useState('#FFFFFF')
    const [sparkColor, setSparkColor] = useState('#FFFFFF')

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date()
            const lt = new LightningTime({
                staticBoltColors: [50, 250],
                staticZapColors: [250, 0],
                staticSparkColors: [250, 0]
            })

            var countDownDate = new Date("Jul 25, 2021 2:42:20");

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
            console.log('updated!')
        }, 100)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <Draggable>
            <div
                className="border-2 border-white rounded-lg w-86 sm:w-96 sm:min-w-fit mx-auto
                shadow-email shadow-gray-900/30 h-fit absolute top-8 left-20 sm:left-32 cursor-pointer"
            >
                <div className="rounded-t-lg px-2 border-b-2 border-black flex flex-row bg-black">
                    <div className="text-white font-bold font-mono">
                        <FontAwesomeIcon icon={faWindows} size="1x" />{' '}
                        countdown.exe
                    </div>
                </div>
                <div className="bg-black rounded-b-lg text-white px-8 flex flex-col justify-center items-center">
                    <div className="sm:text-[150px] text-[100px] font-digital">
                        <span style={{color: boltColor}}>{bolts}</span>~
                        <span style={{color: zapColor}}>{zaps}</span>~
                        <span style={{color: sparkColor}}>{sparks}</span>
                        <span className="text-[30px] font-digitalMono">|{charges}</span>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default Countdown