import {
  Instagram,
  Discord,
  Github,
  Twitter
} from '@icons-pack/react-simple-icons';

const FooterLinks = () => (
  <div className="flex flex-row justify-center gap-x-8">
    <a
      href="https://github.com/purduehackers"
      className="transition hover:scale-110"
      target="_blank"
    >
      <Github height={32} width={32} />
    </a>
    <a
      href="https://puhack.horse/discord"
      className="transition hover:scale-110 hover:text-discord-vibrant"
      target="_blank"
    >
      <Discord height={32} width={32} />
    </a>
    <a
      href="https://instagram.com/purduehackers"
      className="transition hover:scale-110 hover:text-[#c32aa3]"
      target="_blank"
    >
      <Instagram height={32} width={32} />
    </a>
    <a
      href="https://twitter.com/purduehackers"
      className="transition hover:scale-110 hover:text-[#1DA1F2]"
      target="_blank"
    >
      <Twitter height={32} width={32} />
    </a>
  </div>
);

export default FooterLinks;
