import Image from 'next/image'
import { FadeLeft, FadeRight } from '@/components/motion'

const WA_URL = 'https://wa.me/56959901887'
const WA_DESTINO = 'https://wa.me/56959901887?text=Hola%2C+quiero+consultar+sobre+destinos+disponibles'
const WA_PASAJEROS = 'https://wa.me/56959901887?text=Hola%2C+quiero+cotizar+un+viaje+para+mi+grupo'

const FOTO_CARDS = [
  {
    src: 'https://loremflickr.com/300/420/atacama,desert?lock=1',
    alt: 'Desierto de Atacama, Chile',
    heightClass: 'lg:h-[240px]',
    mobileHeight: 'h-[190px]',
    highlight: false,
    destino: 'Atacama',
    href: '#destinos',
  },
  {
    src: 'https://loremflickr.com/300/500/andes,mountains,snow?lock=2',
    alt: 'Montañas de los Andes',
    heightClass: 'lg:h-[340px]',
    mobileHeight: 'h-[210px]',
    highlight: true,
    destino: 'Valle Nevado',
    href: '#destinos',
  },
  {
    src: 'https://loremflickr.com/300/380/valparaiso,colorful,houses?lock=21',
    alt: 'Valparaíso, Chile',
    heightClass: 'lg:h-[280px]',
    mobileHeight: 'h-[200px]',
    highlight: false,
    destino: 'Valparaíso',
    href: '#destinos',
  },
] as const

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-brand-dark via-brand-navy to-[#1a4a8a] pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden"
    >
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* ── COLUMNA IZQUIERDA: Copy ── */}
          <FadeLeft className="flex-shrink-0 lg:w-[55%]">

            <span className="inline-flex items-center gap-2 border border-white/30 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              🌍 Turismo y Viajes Especiales — Santiago de Chile
            </span>

            <h1 className="font-display font-extrabold text-white leading-tight mb-3 text-[2rem] lg:text-[3.25rem]">
              Chile te espera.
            </h1>
            <p className="font-script text-brand-sky text-[2.2rem] lg:text-[3.5rem] leading-none mb-5">
              nos encargamos de todo.
            </p>

            <p className="text-base leading-relaxed text-white/75 max-w-prose mb-8 lg:text-lg">
              Excursiones grupales y viajes privados en bus desde Santiago.
              Staff incluido, destinos increíbles y experiencia que marca la diferencia.
            </p>

            {/* Barra de cotización — campos funcionales con link a WA */}
            <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">

                <a
                  href={WA_DESTINO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100 hover:bg-brand-light transition-colors duration-150 group"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-terracota shrink-0" aria-hidden="true">
                    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
                    <circle cx="12" cy="8" r="2" fill="white" />
                  </svg>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Destino</p>
                    <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-terracota transition-colors">¿A dónde quieres ir?</p>
                  </div>
                </a>

                <a
                  href={WA_PASAJEROS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100 hover:bg-brand-light transition-colors duration-150 group"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-terracota shrink-0" aria-hidden="true">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Pasajeros</p>
                    <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-terracota transition-colors">¿Cuántos son?</p>
                  </div>
                </a>

                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-terracota text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity min-h-[56px]"
                >
                  Cotizar
                </a>

              </div>
            </div>

            <p className="mt-4 text-xs text-white/50 font-medium">
              ✓ Staff incluido&nbsp; · &nbsp;✓ Buses propios&nbsp; · &nbsp;✓ Puntualidad garantizada
            </p>

          </FadeLeft>

          {/* ── COLUMNA DERECHA: Foto-cards con nombre de destino ── */}
          <FadeRight delay={0.2} className="mt-10 lg:mt-0 lg:flex-1">
            <div className="relative flex gap-3 overflow-x-auto pb-2 md:overflow-x-visible md:justify-center lg:justify-end lg:items-end lg:gap-4">

              {FOTO_CARDS.map((card) => (
                <a
                  key={card.src}
                  href={card.href}
                  className={[
                    'shrink-0 w-[130px]',
                    'md:w-auto md:flex-1 lg:max-w-[200px]',
                    card.mobileHeight,
                    card.heightClass,
                    'rounded-2xl overflow-hidden relative group block',
                    card.highlight ? 'ring-2 ring-brand-sky ring-offset-2 ring-offset-brand-navy' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={300}
                    height={500}
                    sizes="(max-width: 768px) 130px, 200px"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-0 right-0 text-center font-script text-white text-lg drop-shadow leading-tight px-1">
                    {card.destino}
                  </span>
                </a>
              ))}

              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-brand-dark to-transparent md:hidden" />
            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  )
}
