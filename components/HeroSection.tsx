import Image from 'next/image'
import { FadeLeft, FadeRight } from '@/components/motion'
import CotizadorBar from '@/components/CotizadorBar'

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

            <CotizadorBar />

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
