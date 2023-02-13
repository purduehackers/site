import Draggable from 'react-draggable'
import { useEffect, useState } from 'react'

import { LightningTime } from '@purduehackers/time'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons'

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
        <Draggable handle=".handle">
            <div
                className="border-2 border-black w-9/12 sm:w-96 sm:min-w-fit mx-auto
                shadow-email shadow-gray-900/30 h-fit absolute z-[100] top-8 left-20 sm:left-32"
            >
                <div className="handle border-b-2 border-black flex flex-row bg-gray-800 cursor-pointer">
                    <p
                        className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                    >
                        <FontAwesomeIcon
                        icon={faXmark}
                        className="text-xs"
                        />
                    </p>
                    <div className="grow" />
                    <p className="text-white">_</p>
                    <div className="grow" />
                </div>
                <div className="bg-black text-white px-8 flex flex-col justify-center items-center">
                    <div className="md:text-[200px] sm:text-[200px] text-[100px] font-digital">
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