import Draggable from 'react-draggable'
import { useState, useContext } from 'react'

import { DraggableContext } from '../context/DraggableContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPaperPlane,
  faPencil,
  faCircle,
  faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { emails } from '../utils/data'

const Email = () => {
  const { draggable } = useContext(DraggableContext)

  const [open, setOpen] = useState([true, false, false, false, false, false])
  const [read, setRead] = useState([true, false, false, false, false, false])

  const [password, setPassword] = useState('')
  const [showPW, setShowPW] = useState(false)

  const [showScrollReminder, setShowScrollReminder] = useState(true)

  return (
    <div className="bg-teal-500 min-h-screen sm:p-24 pb-8">
      <div className="flex flex-col w-11/12 sm:w-full lg:w-4/5 mx-auto relative">
        <div
          className="border-2 border-black flex justify-between items-center bg-white
              w-full h-12 px-8 mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-gray-900/70"
        >
          <div className="w-12 flex justify-between text-[8px] text-amber-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <div className="w-24 flex justify-between text-2xl">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-300"
              onClick={() => setShowPW(true)}
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="cursor-pointer hover:text-amber-300"
              onClick={() => setShowPW(true)}
            />
            <FontAwesomeIcon
              icon={faPencil}
              className="cursor-pointer hover:text-amber-300"
              onClick={() => setShowPW(true)}
            />
          </div>
        </div>
        {showPW && (
          <Draggable disabled={!draggable} handle=".handle">
            <div
              className="border-2 border-black w-9/12 sm:w-96 sm:min-w-fit mx-auto
                shadow-email shadow-gray-900/30 h-fit absolute z-[100] left-20 sm:left-52"
            >
              <div className="handle border-b-2 border-black flex flex-row bg-gray-800 cursor-pointer">
                <p
                  className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                  onClick={() => setShowPW(false)}
                >
                  x
                </p>
                <div className="grow" />
                <p className="text-white">password</p>
                <div className="grow" />
              </div>
              <div className="bg-black text-white p-8 flex flex-col justify-center items-center">
                <input
                  className="bg-black w-full sm:w-3/5 py-1 text-center"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </Draggable>
        )}
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between w-full relative">
          <div
            className="overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 min-w-fit
                border-4 border-black flex flex-col bg-white w-11/12 sm:w-7/12 md:w-64 h-[32rem] shadow-email shadow-gray-900/70"
          >
            {emails.map((email, i) => {
              return (
                <div
                  className={`border-b-2 border-black flex flex-col bg-white w-full p-4 overflow-y-hidden
                      hover:bg-gray-100 cursor-pointer ${
                        !read[i] && 'border-r-0 border-r-amber-300'
                      }`}
                  key={i}
                  onClick={() => {
                    let newOpen = open
                    newOpen[i] = true
                    setOpen((newOpen) => [...newOpen])

                    let newRead = read
                    newRead[i] = true
                    setRead((newRead) => [...newRead])
                  }}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {!read[i] && (
                        <div className="bg-blue-400 w-2 h-2 rounded ml-1 mr-4"></div>
                      )}
                      {open[i] && (
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          className="text-gray-300 mr-4"
                        />
                      )}
                      {!open[i] && read[i] && (
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-amber-300 mr-4"
                        />
                      )}
                      <div>
                        <p className="text-xs text-gray-400 font font-sans">
                          {email.author}
                        </p>
                        <h4
                          className={`${
                            !read[i] && 'font-medium text-black-400'
                          }`}
                        >
                          {email.subject}
                        </h4>
                      </div>
                    </div>
                    {false && (
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-300"
                      />
                    )}
                    {false && (
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        className="text-gray-300"
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          {open[0] && (
            <Draggable handle=".handle">
              <div
                className="border-2 border-black w-11/12 sm:w-[36rem] sm:min-w-[30rem] mr-12 
                  shadow-email shadow-gray-900/30 h-fit z-0 top-5 left-4 relative"
              >
                <div
                  className={`flex flex-col items-center ${
                    showScrollReminder
                      ? 'opacity-100'
                      : 'opacity-0 transition-opacity'
                  }`}
                >
                  <div className="absolute bottom-4 border-2 border-black bg-white p-1 text-sm font-bold animate-bounce">
                    <p>👇 scroll to read 👁</p>
                  </div>
                </div>
                <div className="border-b-2 border-black flex flex-row bg-gray-300 cursor-pointer">
                  <p
                    className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                    onClick={() => {
                      let newOpen = open
                      newOpen[0] = false
                      setOpen((newOpen) => [...newOpen])
                    }}
                  >
                    x
                  </p>
                  <div className="grow handle" />
                  <p className="handle">email</p>
                  <div className="grow handle" />
                  <div />
                </div>
                <div
                  className="bg-white pl-2 pr-3 py-2 overflow-scroll h-96 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
                  onScroll={() => setShowScrollReminder(false)}
                >
                  <p className="font-bold">
                    from:{' '}
                    <span className="font-normal">
                      zap@
                      <span className="bg-black text-white">REDACTED</span>
                    </span>
                  </p>
                  <p className="font-bold">
                    subject: <span className="font-normal">an invitation</span>
                  </p>
                  <br />
                  <div className="flex flex-col gap-y-4 text-mxs">
                    <p>Dear Hacker,</p>
                    <p>
                      <span className="font-bold">
                        Shipping a technical project
                      </span>{' '}
                      that you’re proud of is among the most{' '}
                      <span className="font-bold">
                        {' '}
                        validating and rewarding{' '}
                      </span>{' '}
                      things you can do as a young person. College is the best
                      time in our lives to do it—but{' '}
                      <span className="font-bold">
                        actually doing it is soooooooooo hard.
                      </span>{' '}
                      You have to find something you’d enjoy building, feels
                      unique, and allows you to learn new things, but not too
                      many new things, otherwise you’ll give up. Then, you have
                      to find the time and motivation to actually build the
                      thing—all while being pulled in every direction by
                      academic and social oligations.
                    </p>
                    <p>
                      It’s no surprise most students simply don’t bother, &
                      graduate never having made something they’re proud of.
                    </p>
                    <p>
                      <span className="font-bold">
                        Purdue Hackers is a student organization
                      </span>{' '}
                      (AKA magical universe) full of radically kind, inclusive,
                      and weirdo creative people who{' '}
                      <span className="font-bold">
                        learn new things & ship projects together.
                      </span>
                    </p>
                    <p>
                      Many of us grew up never having found our people until we
                      were united by our shared love of making things. Via our
                      community, workshops, and Hack Nights, we want to create
                      an environment where{' '}
                      <span className="font-bold">
                        you can find your people too
                      </span>
                      , and make magic with them. ✨
                    </p>
                    <p>
                      If you go to Purdue—whether you've never written code
                      before, or are highly technical, whether you're an art
                      major or a CS major—
                      <span className="font-bold">
                        we invite you to join our universe.
                      </span>
                    </p>
                  </div>
                  <br />
                  <p className="text-mxs">See you soon,</p>
                  <p className="text-mxs">💛⚡️ The Purdue Hackers community</p>
                </div>
              </div>
            </Draggable>
          )}
          {emails.map((email, i) => {
            if (i != 0 && open[i])
              return (
                <Draggable
                  handle=".handle"
                  defaultPosition={{ x: -100 - 40 * i, y: 10 + 18 * i }}
                >
                  <div
                    className={`border-2 border-black w-11/12 sm:w-[32rem] sm:min-w-[28rem]
                    shadow-email shadow-gray-900/30 h-fit absolute z-[${i}0] overflow-hidden`}
                  >
                    <div className="border-b-2 border-black flex flex-row bg-gray-300 cursor-pointer">
                      <p
                        className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                        onClick={() => {
                          let newOpen = open
                          newOpen[i] = false
                          setOpen((newOpen) => [...newOpen])
                        }}
                      >
                        x
                      </p>
                      <div className="grow handle" />
                      <p className="handle">email</p>
                      <div className="grow handle" />
                    </div>
                    <div className="bg-white pl-2 pr-3 py-2 overflow-scroll h-fit max-h-[26rem] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                      <p className="font-bold">
                        from: <span className="font-normal">{email.email}</span>
                      </p>
                      <p className="font-bold">
                        subject:{' '}
                        <span className="font-normal">{email.subject}</span>
                      </p>
                      <br />
                      <div className="flex flex-col gap-y-4 text-mxs overflow-x-hidden">
                        <p
                          dangerouslySetInnerHTML={{ __html: email.content }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </Draggable>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Email
