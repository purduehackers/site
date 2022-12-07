import { Home } from 'react-feather'
import { Instagram, Discord, Github } from '@icons-pack/react-simple-icons'

const FooterLinks = () => (
  <div className="flex flex-row justify-center gap-x-8">
    <a
      href="https://purduehackers.com"
      className="hover:text-gray-600 transition"
      target="_blank"
    >
      <Home height={32} width={32} />
    </a>
    <a
      href="https://github.com/purduehackers"
      className="hover:text-gray-600 transition"
      target="_blank"
    >
      <Github height={32} width={32} />
    </a>
    <a
      href="https://instagram.com/purduehackers"
      className="hover:text-gray-600 transition"
      target="_blank"
    >
      <Instagram height={32} width={32} />
    </a>
    <a
      href="https://puhack.horse/discord"
      className="hover:text-gray-600 transition"
      target="_blank"
    >
      <Discord height={32} width={32} />
    </a>
  </div>
)

export default FooterLinks
