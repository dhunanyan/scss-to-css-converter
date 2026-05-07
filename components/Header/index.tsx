import Link from 'next/link';

import { Icons } from '@components/icons';
import { siteContent } from '@data';

import './Header.scss';

export const Header = () => {
  const { brand, header } = siteContent;

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <span className="header__logo-icon" aria-label={brand.logoAlt}>
            <Icons.Logo size={40} />
          </span>
          <span className="header__logo-text">{brand.name}</span>
        </div>

        <nav className="header__nav" aria-label={header.ariaLabel}>
          {header.links.map((link) => (
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
};
