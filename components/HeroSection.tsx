import Image from 'next/image'
import { FadeLeft, FadeRight } from '@/components/motion'

const WA_URL = 'https://wa.me/56959901887'

const FOTO_CARDS = [
  {
    src: 'https://loremflickr.com/300/420/atacama,desert?lock=1',
    alt: 'Desierto de Atacama, Chile',
    heightClass: 'lg:h-[240px]',
    mobileHeight: 'h-[190px]',
    highlight: false,
  },
  {
    src: 'https://loremflickr.com/300/500/andes,mountains,snow?lock=2',
    alt: 'Montañas de los Andes',
    heightClass: 'lg:h-[340px]',
    mobileHeight: 'h-[210px]',
    highlight: true,
  },
  {
    src: 'https://loremflickr.com/300/380/valparaiso,colorful,houses?lock=21',
    alt: 'Valparaíso, Chile',
    heightClass: 'lg:h-[280px]',
    mobileHeight: 'h-[200px]',
    highlight: false,
  },
] as const

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/*
          Mobile/tablet: columna — copy arriba, cards abajo
          Desktop (lg): fila — copy izquierda 55%, cards derecha 45%
        */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* ── COLUMNA IZQUIERDA: Copy ── */}
          <FadeLeft className="flex-shrink-0 lg:w-[55%]">

            {/* Eyebrow badge — píldora con borde terracota */}
            <span className="inline-flex items-center gap-2 border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              🌍 Turismo y Viajes Especiales
            </span>

            {/* H1 — keyword en Island Moments + terracota, resto en Montserrat */}
            <h1 className="font-display font-extrabold text-brand-navy leading-tight mb-5 text-[2rem] lg:text-[3.25rem]">
              Chile te espera,<br />
              <span className="font-script text-brand-terracota">
                nos encargamos
              </span>
              <span className="font-display"> de todo.</span>
            </h1>

            {/* Subtexto */}
            <p className="text-base leading-relaxed text-brand-dark max-w-prose mb-8 lg:text-lg">
              Excursiones grupales y viajes privados en bus desde Santiago.
              Staff incluido, destinos increíbles y experiencia que marca la diferencia.
            </p>

            {/* Barra de cotización rápida — reemplaza los 2 botones CTA */}
            <div className="mt-2 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="flex flex-col sm:flex-row">

                {/* Campo Destino */}
                <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-brand-terracota shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
                    <circle cx="12" cy="8" r="2" fill="white" />
                  </svg>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Destino</p>
                    <p className="text-sm font-semibold text-brand-dark">¿A dónde quieres ir?</p>
                  </div>
                </div>

                {/* Campo Pasajeros */}
                <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-brand-terracota shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Pasajeros</p>
                    <p className="text-sm font-semibold text-brand-dark">¿Cuántos son?</p>
                  </div>
                </div>

                {/* CTA Cotizar */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-terracota text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity min-h-[56px] sm:rounded-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="6" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Cotizar
                </a>

              </div>
            </div>

            {/* Trust strip */}
            <p className="mt-4 text-xs text-brand-blue/70 font-medium">
              ✓ Staff incluido&nbsp; · &nbsp;✓ Buses propios&nbsp; · &nbsp;✓ Puntualidad garantizada
            </p>

          </FadeLeft>

          {/* ── COLUMNA DERECHA: Foto-cards escalonadas ── */}
          {/*
            Mobile: fila horizontal scrolleable
            Tablet (md): fila de 3 centradas, sin scroll
            Desktop (lg): fila con cards escalonadas verticalmente usando self-end/self-start
          */}
          <FadeRight delay={0.2} className="mt-10 lg:mt-0 lg:flex-1">
            <div className="relative flex gap-3 overflow-x-auto pb-2 md:overflow-x-visible md:justify-center lg:justify-end lg:items-end lg:gap-4">

              {FOTO_CARDS.map((card) => (
                <div
                  key={card.src}
                  className={[
                    /* Ancho fijo en mobile para que sean scrolleables */
                    'shrink-0 w-[130px]',
                    /* En tablet y desktop crecen */
                    'md:w-auto md:flex-1 lg:max-w-[200px]',
                    /* Altura: mobile fija, desktop escalonada */
                    card.mobileHeight,
                    card.heightClass,
                    /* Forma */
                    'rounded-2xl overflow-hidden relative',
                    /* Borde highlight solo en card central */
                    card.highlight
                      ? 'ring-2 ring-brand-sky ring-offset-2'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {/* TODO: reemplazar con foto real */}
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={300}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover"
                  />

                </div>
              ))}

              {/* Gradiente fade en mobile para indicar scroll */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent md:hidden" />
            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  )
}
