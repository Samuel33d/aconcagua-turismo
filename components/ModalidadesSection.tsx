import { FadeUp } from '@/components/motion'

const WA_URL = 'https://wa.me/56959901887'

const EXCURSIONES_PUNTOS = [
  'Salidas desde Santiago',
  'Día completo (ida y vuelta)',
  'Guía y staff incluido',
  '6 destinos disponibles',
] as const

const PRIVADOS_PUNTOS = [
  'Cualquier destino de Chile',
  'Horarios a tu medida',
  'Bus completo para tu grupo',
  'Staff personalizado',
] as const

function Checkmark() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 shrink-0 w-5 h-5 text-brand-terracota"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.5L6.5 12L13 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ModalidadesSection() {
  return (
    <section
      id="modalidades"
      className="bg-brand-light py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <FadeUp className="mb-12 text-center lg:mb-16">
          <span className="inline-flex items-center border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Elige tu experiencia
          </span>
          <h2 className="font-display text-3xl font-extrabold text-brand-navy lg:text-4xl">
            ¿Cómo quieres viajar?
          </h2>
          <p className="mt-3 text-base text-brand-dark max-w-md mx-auto lg:text-lg">
            Tenemos dos formas de llevarte a donde quieras ir.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:justify-center">

          {/* ── Card 1: Excursiones Grupales ── */}
          <FadeUp className="bg-white rounded-2xl border border-brand-sky shadow-md p-6 lg:p-8 lg:max-w-md lg:w-full">

            {/* Ícono */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-sky mb-5">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-brand-navy"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bus de frente simplificado */}
                <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 17v2M17 17v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="5.5" y="12.5" width="3" height="2.5" rx="0.5" fill="currentColor" />
                <rect x="10.5" y="12.5" width="3" height="2.5" rx="0.5" fill="currentColor" />
                <rect x="15.5" y="12.5" width="3" height="2.5" rx="0.5" fill="currentColor" />
              </svg>
            </div>

            {/* Título */}
            <h3 className="font-display text-xl font-bold text-brand-navy mb-3 lg:text-2xl">
              Excursiones Grupales
            </h3>

            {/* Descripción */}
            <p className="text-base leading-relaxed text-brand-dark mb-6">
              Únetenos en una de nuestras salidas de día completo desde Santiago.
              Cupo limitado, staff incluido y todo organizado para que solo pienses en disfrutar.
            </p>

            {/* Lista */}
            <ul className="space-y-2.5 mb-8">
              {EXCURSIONES_PUNTOS.map((punto) => (
                <li key={punto} className="flex items-start gap-2.5 text-base text-brand-dark">
                  <Checkmark />
                  {punto}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#destinos"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full border-2 border-brand-navy text-brand-navy font-semibold text-sm px-6 py-3.5 hover:bg-brand-sky active:scale-95 transition-all duration-200"
            >
              Ver destinos
            </a>
          </FadeUp>

          {/* ── Card 2: Viajes Privados ── */}
          <FadeUp delay={0.1} className="relative bg-white rounded-2xl border-2 border-brand-navy shadow-md p-6 lg:p-8 lg:max-w-md lg:w-full">

            {/* Badge POPULAR */}
            <span className="absolute top-4 right-4 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Popular
            </span>

            {/* Ícono */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy mb-5">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Estrella */}
                <path
                  d="M12 2l2.9 5.9L21 9l-4.5 4.4 1.1 6.6L12 17l-5.6 3 1.1-6.6L3 9l6.1-1.1L12 2z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Título */}
            <h3 className="font-display text-xl font-bold text-brand-navy mb-3 lg:text-2xl">
              Viajes Privados
            </h3>

            {/* Descripción */}
            <p className="text-base leading-relaxed text-brand-dark mb-6">
              Reserva el bus completo para tu grupo. Sin horarios fijos, sin límites de destino
              — vamos a cualquier punto de Chile con tu equipo, familia o banda.
            </p>

            {/* Lista */}
            <ul className="space-y-2.5 mb-8">
              {PRIVADOS_PUNTOS.map((punto) => (
                <li key={punto} className="flex items-start gap-2.5 text-base text-brand-dark">
                  <Checkmark />
                  {punto}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-brand-terracota text-white font-semibold text-sm px-6 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              Cotizar viaje privado
            </a>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
