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

        {/* Logo */}
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

        {/* Nav desktop */}
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

        {/* Derecha: CTA desktop + WA mobile + hamburguesa */}
        <div className="flex items-center gap-3 ml-auto md:ml-8">
          {/* CTA desktop */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-brand-terracota text-white text-[15px] font-semibold px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap items-center"
          >
            Cotizar
          </a>

          {/* WhatsApp icon — solo mobile, siempre visible */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar por WhatsApp"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-brand-terracota hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.508 5.826L.057 23.25l5.563-1.459A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.587-.497-5.084-1.362l-.363-.217-3.302.866.882-3.222-.236-.374A9.949 9.949 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>

          {/* Hamburguesa */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-brand-light transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block h-0.5 w-6 bg-brand-dark transition-transform duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-brand-dark transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-brand-dark transition-transform duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Nav mobile desplegable */}
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
