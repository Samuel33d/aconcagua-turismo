import { FadeLeft, FadeUp } from '@/components/motion'

const SERVICIOS = [
  {
    id: 'staff',
    titulo: 'Staff incluido en cada salida',
    texto:
      'Conductor experimentado y guía de apoyo en cada viaje. Tú solo llega al punto de encuentro — nosotros nos encargamos del resto.',
    icono: (
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Persona */}
        <circle cx="9" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 22v-6a4 4 0 0 1 8 0v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Bandera de guía */}
        <line
          x1="16" y1="2" x2="16" y2="12"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        />
        <path
          d="M16 2 L21 4.5 L16 7Z"
          fill="currentColor"
          stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'buses',
    titulo: 'Flota propia de buses',
    texto:
      'Vehículos propios, mantenidos y cómodos. Sin intermediarios — el bus que sale es el que reservaste, con el espacio que necesitas.',
    icono: (
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="5" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 17v2M18 17v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="4.5" y="6.5" width="4" height="2.5" rx="0.5" fill="currentColor" />
        <rect x="10" y="6.5" width="4" height="2.5" rx="0.5" fill="currentColor" />
        <rect x="15.5" y="6.5" width="4" height="2.5" rx="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'destinos',
    titulo: 'Llegamos a cualquier destino',
    texto:
      'Valle Nevado, Atacama, la costa o donde necesites — si es Chile, lo conocemos y te llevamos con toda la planificación resuelta.',
    icono: (
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Columna izquierda — Heading */}
          <FadeLeft className="lg:w-[35%] shrink-0 mb-10 lg:mb-0">
            <span className="inline-flex items-center border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Lo que nos hace diferentes
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-brand-navy mt-4 mb-4">
              Por qué viajar con nosotros
            </h2>
            <p className="text-base text-brand-dark leading-relaxed">
              Más de una década llevando personas a los mejores rincones de Chile.
            </p>
          </FadeLeft>

          {/* Columna derecha — 3 cards en fila */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SERVICIOS.map((servicio, i) => (
              <FadeUp key={servicio.id} delay={i * 0.1} className="flex flex-col items-start gap-4 p-5 rounded-2xl bg-brand-light">
                <div className="w-12 h-12 rounded-full bg-brand-sky flex items-center justify-center shrink-0">
                  {servicio.icono}
                </div>
                <h3 className="font-display text-base font-bold text-brand-navy">
                  {servicio.titulo}
                </h3>
                <p className="text-base text-brand-dark leading-relaxed">
                  {servicio.texto}
                </p>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
