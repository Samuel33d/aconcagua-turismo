import Image from 'next/image'
import { FadeUp } from '@/components/motion'

interface Destino {
  nombre: string
  slug: string
  imgSrc: string
  colSpan: string
  altura: string
  waText: string
}

const WA_BASE = 'https://wa.me/56959901887?text=Hola%2C+me+interesa+cotizar+una+excursi%C3%B3n+a+'

const DESTINOS: Destino[] = [
  {
    nombre: 'Valle Nevado & Torrellones',
    slug: 'valle-nevado',
    imgSrc: 'https://loremflickr.com/800/500/snow,skiing,mountain?lock=4',
    colSpan: 'col-span-1 lg:col-span-2',
    altura: 'h-[220px] lg:h-[320px]',
    waText: 'Valle+Nevado+y+Torrellones',
  },
  {
    nombre: 'Portillo & Laguna del Inca',
    slug: 'portillo',
    imgSrc: 'https://loremflickr.com/800/500/mountain,lake,andes?lock=5',
    colSpan: 'col-span-1',
    altura: 'h-[220px]',
    waText: 'Portillo+y+Laguna+del+Inca',
  },
  {
    nombre: 'Valparaíso',
    slug: 'valparaiso',
    imgSrc: 'https://loremflickr.com/800/500/valparaiso,colorful,houses?lock=20',
    colSpan: 'col-span-1',
    altura: 'h-[220px]',
    waText: 'Valpara%C3%ADso',
  },
  {
    nombre: 'Viña del Mar',
    slug: 'vina-del-mar',
    imgSrc: 'https://loremflickr.com/800/500/beach,resort,ocean?lock=7',
    colSpan: 'col-span-1 lg:col-span-2',
    altura: 'h-[220px] lg:h-[320px]',
    waText: 'Vi%C3%B1a+del+Mar',
  },
  {
    nombre: 'Desierto de Atacama',
    slug: 'atacama',
    imgSrc: 'https://loremflickr.com/800/500/atacama,desert?lock=8',
    colSpan: 'col-span-1',
    altura: 'h-[220px]',
    waText: 'Desierto+de+Atacama',
  },
  {
    nombre: 'Playa El Canelo',
    slug: 'playa-canelo',
    imgSrc: 'https://loremflickr.com/800/500/beach,coast,pacific?lock=9',
    colSpan: 'col-span-1',
    altura: 'h-[220px]',
    waText: 'Playa+El+Canelo',
  },
]

export default function DestinosSection() {
  return (
    <section id="destinos" className="bg-brand-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FadeUp className="mb-10 text-center lg:mb-14">
          <span className="inline-flex items-center border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Nuestros destinos
          </span>
          <h2 className="font-display text-3xl font-extrabold text-brand-navy lg:text-4xl">
            A dónde te llevamos
          </h2>
          <p className="mt-3 text-base text-brand-dark max-w-md mx-auto lg:text-lg">
            Seis destinos cuidadosamente elegidos. Salimos desde Santiago y te devolvemos el mismo día.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DESTINOS.map((destino, i) => (
            <FadeUp
              key={destino.slug}
              delay={i * 0.08}
              className={`${destino.colSpan} ${destino.altura}`}
            >
              <a
                href={`${WA_BASE}${destino.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl w-full h-full"
              >
                <Image
                  src={destino.imgSrc}
                  alt={`Excursión a ${destino.nombre}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4 text-center">
                  <span className="font-script text-2xl md:text-3xl text-white drop-shadow-md leading-tight break-words">
                    {destino.nombre}
                  </span>
                  <span className="mt-1 text-xs text-white/80 font-display tracking-wide">
                    Ver excursión →
                  </span>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
