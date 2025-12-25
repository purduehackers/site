import { useEffect, useState } from 'react';
import { madeWith } from '../utils/data';
import FooterLinks from './footer-links';

const Footer = () => {
  const [randomMadeWith, setRandomMadeWith] = useState('');
  useEffect(() => {
    setRandomMadeWith(madeWith[Math.floor(Math.random() * madeWith.length)]);
  }, []);
  return (
    <div className="bg-amber-100 border-t-4 border-black py-12 px-4">
      <div className="max-w-xl mx-auto flex flex-col gap-6 text-center">
        <p className="text-lg">
          Made with {randomMadeWith} •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://github.com/purduehackers/site"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
            >
              Open source
            </a>
          </span>{' '}
          •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://vercel.com?utm_source=purdue-hackers&utm_campaign=oss"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
            >
              Powered by ▲Vercel
            </a>
          </span>{' '}
          •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://phack.rs/donate-hcb"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
            >
              Donate (501(c)(3) nonprofit)
            </a>
          </span>
        </p>
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
