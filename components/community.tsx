import DiscordWindow from './discord-window'
import { discordMessages } from '../utils/data'

const Community = () => (
  <div className="bg-yellow-discord-role">
    <div className="flex flex-col p-6 sm:p-12">
      <h1 className="text-5xl sm:text-9xl font-bold">1. Community</h1>
      <div className="flex flex-col items-center mt-8">
        {discordMessages.map((message, i) => (
          <DiscordWindow key={i} {...message} />
        ))}
      </div>
    </div>
  </div>
)

export default Community
