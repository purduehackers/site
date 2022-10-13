import Draggable from "react-draggable";
import { useState, useEffect, useContext } from "react";

import { DraggableContext, DraggableInterface } from "../context/DraggableContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faPencil, faCircle } from '@fortawesome/free-solid-svg-icons'

const Email = () => {
  const { draggable, setDraggable } = useContext(DraggableContext);

  return (
    <div className="bg-teal-500 min-h-screen p-24">
      <div className="border-2 border-black flex justify-between items-center bg-white
            w-11/12 sm:w-4/5 mx-auto h-12 mb-8 shadow-email">
        <div>

        </div>
      </div>
      <Draggable
          disabled={!draggable}
          handle=".handle">
        <div className="mt-8 border-2 border-black w-11/12 sm:w-[36rem] mx-auto mb-8 shadow-email">
          <div className="handle border-b-2 border-black flex flex-row bg-gray-300 cursor-pointer">
            <p className="px-2 border-r-2 border-black bg-red-400">x</p>
            <div className="grow" />
            <p>email</p>
            <div className="grow" />
            <div />
          </div>
          <div className="bg-white pl-2 pr-3 py-2 overflow-scroll h-96 scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            <p className="font-bold">
              from:{' '}
              <span className="font-normal">
                zap@
                <span className="mx-1 bg-black text-white">
                  REDACTED
                </span>
              </span>
            </p>
            <p className="font-bold">
              subject: <span className="font-normal">an invitation</span>
            </p>
            <br />
            <div className="flex flex-col gap-y-4 text-mxs">
              <p>Dear Hacker,</p>
              <p>
                Shipping a technical project that you’re proud of is among the most
                validating and rewarding things you can do as a young person.
                College is the best time in our lives to do it—but actually doing it
                is soooooooooo hard. Before you can ship something you feel proud
                of, you have to find something you’d enjoy building, feels unique,
                and allows you to learn new things, but not too many new things,
                otherwise you’ll give up. Then, you have to find the time and
                motivation to actually build the thing—all while being pulled in
                every direction by academic and social oligations.
              </p>
              <p>
                It’s no surprise most students simply don’t bother, & graduate never
                having made something they’re proud of.
              </p>
              <p>
                If only there were a community full of friendly, weird, creative, &
                amazing people people who encouraged you to build projects, & helped
                you carve out real time in your schedule to do it. A community where
                you could finally find <span className="italic">your people</span>,
                who you connect with on a deep level. Who make you feel loved,
                valued, and seen for who you are, and who invite you to make magic
                with them.
              </p>
              <p>I mean, that would be life-changing, wouldn’t it?</p>
            </div>
            <br />
            <p className="text-mxs">Regards,</p>
            <p className="text-mxs">💛⚡️ The Purdue Hackers community</p>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Email