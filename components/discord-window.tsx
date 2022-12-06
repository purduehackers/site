import Image from 'next/future/image'
import Draggable from 'react-draggable'

const DiscordWindow = ({
  channel,
  content,
  pfpImageSrc,
  username,
  imageSrc
}: {
  channel: string
  content: string
  pfpImageSrc: string
  username: string
  imageSrc?: string
}) => {
  return (
    <Draggable handle=".handle">
      <div
        className="border-2 border-black w-11/12 sm:w-96 mr-12 
      shadow-email shadow-gray-900/30 h-fit z-0 top-5 left-4 relative"
      >
        <div className="flex flex-row bg-gray-discord-darker cursor-pointer text-gray-100">
          <div className="flex flex-row border-b-2 border-black">
            <p className="px-2 border-r-2 border-black bg-red-700 hover:bg-red-600">
              x
            </p>
            <p className="px-2 border-r-2 border-black bg-yellow-700 hover:bg-yellow-600">
              -
            </p>
            <p className="px-2 border-r-2 border-black bg-green-700 hover:bg-green-600">
              +
            </p>
          </div>
          <div className="grow handle" />
          <p className="handle">{channel}</p>
          <div className="grow handle" />
          <div />
        </div>
        <div className="border-black flex flex-col bg-gray-discord p-2 text-white text-sm">
          <div className="flex flex-row gap-4">
            <div>
              <div className="w-8">
                <Image
                  src={pfpImageSrc}
                  alt="Profile picture"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="rounded-full w-auto h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gold-discord">{username}</p>
              {content}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default DiscordWindow
