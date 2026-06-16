'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Destinos',  href: '#destinos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Artistas',  href: '#artistas' },
] as const

const WA_URL = 'https://wa.me/56959901887'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[85px] flex items-center gap-6">

        {/* Logo — izquierda */}
        <Link href="/" className="shrink-0 mr-auto">
          <Image
            src="/logo.png"
            alt="Aconcagua Turismo"
            width={180}
            height={60}
            priority
            className="object-contain h-[60px] w-auto"
          />
        </Link>

        {/* Nav desktop — centro */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative text-[17px] font-semibold text-brand-dark hover:text-brand-terracota transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-brand-terracota after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburguesa — derecha */}
        <div className="flex items-center gap-4 ml-auto md:ml-8">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-brand-terracota text-white text-[15px] font-semibold px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap items-center"
          >
            Cotizar
          </a>

          {/* Hamburguesa — solo mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-brand-light transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-brand-dark transition-transform duration-300 origin-center ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-dark transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-dark transition-transform duration-300 origin-center ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Nav mobile — desplegable */}
      {menuOpen && (
        <nav
          className="absolute top-full left-0 right-0 z-40 border-t border-brand-sky bg-white px-4 pb-4 pt-2"
          aria-label="Navegación mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-3 rounded-md text-base font-semibold text-brand-dark hover:bg-brand-light hover:text-brand-terracota transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 pb-1">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-brand-terracota text-white text-[15px] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Cotizar
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
