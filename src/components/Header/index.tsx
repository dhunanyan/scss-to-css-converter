import Image from 'next/image';
import Link from 'next/link';

import './Header.scss';

const links = [
  { href: 'https://dhunanyan.com', label: 'Portfolio' },
  { href: 'https://github.com/dhunanyan', label: 'GitHub' },
  { href: 'https://linkedin.com/in/dhunanyan', label: 'LinkedIn' },
];

export const Header = () => (
  <header className="header">
    <div className="header__container container">
      <Link
        href="https://dhunanyan.com"
        className="header__brand"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/i_new-logo.svg"
          alt="Dhunanyan logo"
          width={36}
          height={36}
          className="header__logo"
          priority
        />
        <span className="header__title">SCSS to CSS Converter</span>
      </Link>

      <nav className="header__nav" aria-label="External links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="header__link"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
