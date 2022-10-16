import Draggable from 'react-draggable'
import { useState, useEffect, useContext } from 'react'

import {
  DraggableContext,
  DraggableInterface
} from '../context/DraggableContext'

import Image from 'next/future/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faLeftLong,
  faRightLong,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const HackNight = () => {
  const { draggable, setDraggable } = useContext(DraggableContext)

  return (
    <div className="bg-gray-dark min-h-screen">
      <div className="p-6 sm:p-12">
        <h1 className="text-5xl sm:text-9xl font-bold text-white">
          3. Hack Night
        </h1>
        <div className="flex flex-col items-center">
          <Draggable
            disabled={!draggable}
            handle=".handle"
            defaultPosition={{ x: 180, y: 60 }}
          >
            <div
              className="border-solid border-black border-2 z-10
                w-full md:w-2/3 lg:w-1/2 rounded-xl bg-white relative top-0 right-0"
            >
              <div
                className="handle w-full bg-gray-300 rounded-t-lg px-2 text-black font-mono font-bold
                  border-black border-solid border-b-2 flex justify-between items-center cursor-pointer"
              >
                <div>
                  <FontAwesomeIcon icon={faWindows} size="1x" /> Window
                </div>
                <FontAwesomeIcon icon={faXmark} size="1x" />
              </div>
              <div
                className="w-full h-6 bg-white flex justify-end items-center
                  border-solid border-b-black border-b-2"
              >
                <div className="flex w-full h-full justify-between">
                  <FontAwesomeIcon icon={faEllipsis} className="text-xl px-2" />
                  <div
                    className="flex w-16 justify-between h-full 
                      border-solid border-black border-l-2 px-2"
                  >
                    <FontAwesomeIcon icon={faLeftLong} className="text-xl" />
                    <FontAwesomeIcon icon={faRightLong} className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="p-6 m-0">
                <div className="border-solid border-black border-2 p-8 rounded-xl">
                  <h2 className="font-bold text-3xl mb-4">
                    The Night is Nigh 🌙
                  </h2>
                  <p className="text-mxs">
                    Have you ever felt burdened by the weight of your
                    ever-increasing responsibilities? Do you want to escape from
                    reality, to a plane of existence far away from the endless
                    monotony of daily life? Well, you can't. But you know what
                    you can do? Come to Hack Night!
                  </p>
                  <br />
                  <p className="text-mxs">
                    Hack night is uninterrupted time for you to work on personal
                    projects of all kinds—anything from a little hack that you
                    ship by the end of the night, to part of a larger project.
                    What you work on is up to you, but organizers will be there
                    to provide technical & brainstorming help. There's only one
                    rule: no working on homework. It's friday night, plus you
                    have the rest of the week to work on your homework! This is
                    time to work on something that excites you—let's make magic
                    happen ✨💫
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable
            disabled={!draggable}
            handle=".handle"
            defaultPosition={{ x: -280, y: -80 }}
          >
            <div
              className="border-solid border-white border-2 
                w-full sm:w-3/5 md:w-3/5 lg:w-2/5 h-64 rounded-xl font-bold font-mono bg-black z-5"
            >
              <div
                className="handle w-full bg-gray-300 rounded-t-lg px-2 cursor-pointer
                  border-black border-solid border-b-4 flex justify-between items-center"
              >
                <div>
                  <FontAwesomeIcon icon={faWindows} size="1x" />{' '}
                  wackhacker@hacknight:~$
                </div>
                <FontAwesomeIcon icon={faXmark} size="1x" />
              </div>
              <div
                className="px-4 text-green-500 text-sm overflow-scroll 
                  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
              >
                <p>hacknight login: wackhacker</p>
                <p>Password: </p>
                <p>Last login: Fri May 04 16:16:08 on tty2</p>
                <p>wackhacker@hacknight:~$ _</p>
                <p>Adding user 'hacker' ...</p>
                <p>Creating home directory '/dir' ...</p>
                <p>Copying files from '/etc/skel' ...</p>
                <p>Is this information correct? [Y/n]</p>
              </div>
            </div>
          </Draggable>
          <Draggable
            disabled={!draggable}
            handle=".handle"
            defaultPosition={{ x: 250, y: -150 }}
          >
            <div
              className="border-solid border-white border-2 
                w-fit h-fit rounded-xl font-bold font-mono bg-black"
            >
              <div
                className="handle w-full bg-gray-300 rounded-t-lg px-2 cursor-pointer
                  border-black border-solid border-b-4 flex justify-between items-center"
              >
                <div>
                  <FontAwesomeIcon icon={faWindows} size="1x" /> awesomeness.png
                </div>
                <FontAwesomeIcon icon={faXmark} size="1x" />
              </div>
              <Image
                src="/img/hackNight.png"
                alt="Hack Night!"
                width={400}
                height={300}
                draggable={false}
              />
            </div>
          </Draggable>
          <Draggable disabled={!draggable} handle=".handle">
            <div
              className="w-fit h-fit border-solid border-white border-4
                rounded-xl font-mono font-bold"
            >
              <div
                className="handle w-full bg-gray-300 rounded-t-lg px-2 text-xs cursor-pointer
                  border-black border-solid border-b-4 flex justify-between items-center"
              >
                <div>blobfish.temp</div>
              </div>
              <Image
                src="/img/blob.png"
                alt="temporary blobfiss"
                width={110}
                height={110}
              />
            </div>
          </Draggable>
          <Draggable>
            <div className="cursor-pointer">
              <Image
                src="/img/keyboard3.png"
                alt="Keyboard"
                width={400}
                height={300}
                draggable={false}
              />
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  )
}

export default HackNight
