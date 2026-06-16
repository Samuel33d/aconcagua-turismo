import Image from 'next/image'

const FOTOS: { src: string; alt: string; rowSpan: string }[] = [
  {
    src: '/galeria/galeria-01.webp',
    alt: 'Viaje con Aconcagua Turismo',
    rowSpan: 'lg:row-span-2',
  },
  {
    src: '/galeria/galeria-02.webp',
    alt: 'Excursión Aconcagua Turismo',
    rowSpan: '',
  },
  {
    src: '/galeria/galeria-03.webp',
    alt: 'Paisaje en ruta',
    rowSpan: '',
  },
  {
    src: '/galeria/galeria-04.webp',
    alt: 'Grupo de viaje Aconcagua',
    rowSpan: 'lg:row-span-2',
  },
  {
    src: '/galeria/galeria-05.jpg',
    alt: 'Aventura con Aconcagua Turismo',
    rowSpan: '',
  },
  {
    src: 'https://loremflickr.com/400/400/bus,travel,road?lock=32',
    alt: 'Bus en ruta por Chile',
    rowSpan: '',
  },
  {
    src: 'https://loremflickr.com/400/400/atacama,desert,landscape?lock=36',
    alt: 'Desierto de Atacama',
    rowSpan: '',
  },
  {
    src: 'https://loremflickr.com/400/400/valparaiso,colorful,houses?lock=37',
    alt: 'Valparaíso colorido',
    rowSpan: '',
  },
  {
    src: 'https://loremflickr.com/400/400/beach,ocean,sunset?lock=38',
    alt: 'Atardecer en la costa',
    rowSpan: '',
  },
]

export default function GaleriaSection() {
  return (
    <section id="galeria" className="bg-brand-light py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Galería de viajes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Así se vive viajar con nosotros
          </h2>
          <p className="text-base text-brand-dark max-w-md mx-auto">
            Fotos reales de nuestras excursiones y viajes privados. Síguenos en Instagram{' '}
            <a
              href="https://www.instagram.com/aconcagua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-terracota font-semibold hover:underline inline-block py-2"
            >
              @aconcaguaturismo
            </a>
          </p>
        </div>

        {/* Grid de fotos — row-span solo activo desde lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[160px] lg:grid-flow-dense">
          {FOTOS.map((foto) => (
            <div
              key={foto.src}
              className={`relative overflow-hidden rounded-xl ${foto.rowSpan}`}
            >
              {/* TODO: reemplazar con foto real del cliente */}
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover md:hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/aconcagua/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy font-semibold rounded-full px-6 py-3 min-h-[48px] hover:bg-brand-navy hover:text-white transition-colors duration-200"
          >
            Ver más en Instagram
          </a>
        </div>

      </div>
    </section>
  )
}
