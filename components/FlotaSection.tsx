import Image from 'next/image'
import { FadeUp } from '@/components/motion'

const buses = [
  {
    imgSrc: 'https://loremflickr.com/800/500/bus,coach?lock=10',
    nombre: 'Bus Semipiso',
    descripcion:
      'Ideal para excursiones grupales y viajes de un día. Cómodo, ágil y con excelente visibilidad.',
    capacidad: 'Hasta 45 pasajeros',
    equipamiento: ['Aire acondicionado', 'Asientos reclinables', 'TV a bordo'],
    premium: false,
  },
  {
    imgSrc: 'https://loremflickr.com/800/500/luxury,bus,coach?lock=11',
    nombre: 'Bus Salón Cama',
    descripcion:
      'Para viajes largos y grupos VIP. El máximo confort en carretera — usado por artistas y corporativos.',
    capacidad: 'Hasta 36 pasajeros',
    equipamiento: [
      'Asientos cama reclinables',
      'Baño a bordo',
      'WiFi',
      'Frigobar',
    ],
    premium: true,
  },
  {
    imgSrc: 'https://loremflickr.com/800/500/minibus,van?lock=12',
    nombre: 'Minibus Ejecutivo',
    descripcion:
      'Para grupos pequeños y traslados ejecutivos. Versátil y de fácil acceso a cualquier destino.',
    capacidad: 'Hasta 19 pasajeros',
    equipamiento: ['Aire acondicionado', 'USB charging', 'Asientos premium'],
    premium: false,
  },
]

export default function FlotaSection() {
  return (
    <section id="flota" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="text-center mb-12">
          <span className="inline-flex items-center border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Nuestra flota
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Buses propios, cómodos y puntuales
          </h2>
          <p className="text-base text-brand-dark max-w-2xl mx-auto">
            Viaja en nuestras unidades propias, equipadas y con mantenimiento al día. Sin sorpresas en la ruta.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {buses.map((bus, i) => (
            <FadeUp key={bus.nombre} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden border border-brand-sky bg-white shadow-sm h-full">
                <div className="relative h-[200px]">
                  {bus.premium && (
                    <span className="absolute top-3 left-3 z-10 bg-brand-navy text-white text-xs font-bold rounded-full px-3 py-1">
                      PREMIUM
                    </span>
                  )}
                  <Image
                    src={bus.imgSrc}
                    alt={bus.nombre}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 lg:p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-1">
                    {bus.nombre}
                  </h3>
                  <p className="text-base text-brand-dark mb-4">
                    {bus.descripcion}
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-brand-blue shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    <span className="text-sm font-semibold text-brand-navy">
                      {bus.capacidad}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {bus.equipamiento.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-brand-terracota shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span className="text-sm text-brand-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-12 text-center">
          <p className="text-base text-brand-dark mb-4">
            ¿Necesitas toda la unidad para tu grupo o evento?
          </p>
          <a
            href="https://wa.me/56959901887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-terracota text-white font-semibold rounded-full px-8 py-3.5 min-h-[48px] hover:opacity-90 transition-opacity"
          >
            Cotizar flota privada
          </a>
        </FadeUp>

      </div>
    </section>
  )
}
