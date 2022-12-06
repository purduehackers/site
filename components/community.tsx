import DiscordWindow from './discord-window'
import { discordMessages } from '../utils/data'

const Community = () => (
  <div className="bg-yellow-discord-role">
    <div className="flex flex-col p-6 sm:p-12">
      <h1 className="text-5xl sm:text-9xl text-center sm:text-left font-bold">
        Community
      </h1>
      <div className="flex flex-col items-center">
        <div className="z-10 flex flex-col gap-2 absolute translate-y-40 w-11/12 p-4 border-4 border-black shadow-email shadow-gray-900/70 bg-white max-w-xl">
          <h1 className="font-bold text-3xl sm:text-4xl text-center mb-3">
            Find Your People 🌈
          </h1>
          <p>
            The heart & soul of Purdue Hackers is our community on Discord with
            1000+ people. Share what you've made in{' '}
            <span className="channel-name">#ship</span>, chat about rainbows in{' '}
            <span className="channel-name">#lounge</span>, share your music
            musings in <span className="channel-name">#music</span>, ask for
            technical help in <span className="channel-name">#code</span>
            —wherever you look, you'll find friendly, kind, radically inclusive,
            and <span className="italic">really cool</span> people. It's also
            where we announce upcoming events.
          </p>
          <p>
            Enter a world of magic, find people who push you to be your best
            self, and make things together.
          </p>
          <a
            href="https://puhack.horse/discord"
            target="_blank"
            className="mx-auto mt-4"
          >
            <button className="p-2 border-2 border-black hover:bg-blue-discord-light transition duration-100 font-bold text-center mx-auto text-xl">
              Join the Community
            </button>
          </a>
        </div>
        <div id="messages" className="flex flex-col items-center mt-8 sm:mt-16">
          {discordMessages.map((message, i) => (
            <DiscordWindow key={i} {...message} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Community
