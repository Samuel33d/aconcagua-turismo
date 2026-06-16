import Image from 'next/image'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/motion'

const WA_ARTISTAS_URL =
  'https://wa.me/56959901887?text=Hola%2C+necesito+cotizar+un+viaje+privado+para+artistas+o+eventos'

const ARTISTAS = [
  {
    nombre: 'La Combo Tortuga',
    genero: 'Cumbia · Santiago · Desde 2011',
    imgSrc: 'https://loremflickr.com/600/400/concert,cumbia,band?lock=15',
    imgAlt: 'La Combo Tortuga en concierto',
    logros: [
      '4× Premio Pulsar al Artista del Año',
      'Sold out Movistar Arena — nov 2024',
      '10 músicos en escena, giras por todo Chile',
    ],
    instagram: '@lacombotortuga',
  },
  {
    nombre: 'La Sonora Palacios',
    genero: 'Cumbia Chilena · Santiago · Desde 1962',
    imgSrc: 'https://loremflickr.com/600/400/orchestra,tropical,music?lock=16',
    imgAlt: 'La Sonora Palacios en escena',
    logros: [
      'Creadores de la cumbia chilena',
      'Premio Presidente de la República 2013',
      'Primera Teletón de Chile (1978)',
    ],
    instagram: '@sonorapalacios',
  },
  {
    nombre: 'Quique Neira',
    genero: 'Reggae · Santiago · Desde 1991',
    imgSrc: 'https://loremflickr.com/600/400/reggae,concert,musician?lock=17',
    imgAlt: 'Quique Neira en concierto',
    logros: [
      'Lollapalooza Chile 2018',
      '1.er latinoamericano en Reggae Gold Awards Jamaica',
      '321K seguidores en Instagram',
    ],
    instagram: '@quiqueneiraoficial',
  },
  {
    nombre: 'Los Jaivas',
    genero: 'Rock Andino · Viña del Mar · Desde 1963',
    imgSrc: 'https://loremflickr.com/600/400/rock,folk,andean?lock=18',
    imgAlt: 'Los Jaivas en concierto',
    logros: [
      'Premio Nacional de Música de Chile 2004',
      'Premio Presidente de la República 2003',
      'La banda más influyente de Chile y Sudamérica',
    ],
    instagram: '@losjaivasoficial',
  },
] as const

function StarIcon() {
  return (
    <span className="text-brand-terracota text-base leading-none shrink-0" aria-hidden="true">
      ★
    </span>
  )
}

export default function ArtistasSection() {
  return (
    <section
      id="artistas"
      className="bg-brand-navy py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado centrado */}
        <FadeUp className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center border border-brand-sky text-brand-sky text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Artistas &amp; Giras VIP
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white mb-4">
            El bus que eligen los artistas
          </h2>
          <p className="text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-4">
            Bandas y solistas que confían en nuestros buses para recorrer Chile.
            El mismo confort y discreción que exigen los profesionales,
            disponible para tu grupo o evento.
          </p>
          {/* Hook narrativo — La Combo Tortuga empezó en micros */}
          <p className="text-sm text-brand-sky/80 max-w-md mx-auto border-l-2 border-brand-terracota pl-4 text-left">
            La Combo Tortuga empezó tocando en las micros de Santiago.
            Hoy recorren Chile en nuestro Bus Salón Cama.
          </p>
        </FadeUp>

        {/* Grid de artistas */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTAS.map((artista) => (
            <StaggerItem
              key={artista.nombre}
              className="bg-white/15 supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20"
            >
              {/* Imagen con overlay y nombre */}
              <div className="relative h-[180px]">
                {/* TODO: reemplazar con foto oficial del artista — solicitar al cliente imagen autorizada */}
                <Image
                  src={artista.imgSrc}
                  alt={artista.imgAlt}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end pb-3 px-4">
                  <span className="font-script text-2xl text-white drop-shadow-lg leading-none break-words">
                    {artista.nombre}
                  </span>
                  <span className="text-xs text-white/70 font-display mt-1">
                    {artista.genero}
                  </span>
                </div>
              </div>

              {/* Logros verificables */}
              <div className="p-4 space-y-2">
                {artista.logros.map((logro) => (
                  <div key={logro} className="flex items-start gap-2">
                    <StarIcon />
                    <span className="text-sm text-white/85 leading-snug">{logro}</span>
                  </div>
                ))}
                <p className="text-xs text-white/40 pt-1">{artista.instagram}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.2} className="mt-12 text-center">
          <a
            href={WA_ARTISTAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-terracota text-white font-semibold rounded-full px-8 py-3.5 min-h-[48px] hover:opacity-90 transition-opacity"
          >
            Cotiza tu gira o evento
          </a>
          <p className="text-xs text-white/40 mt-4">
            También trabajamos con eventos corporativos, bodas y grupos universitarios
          </p>
        </FadeUp>

      </div>
    </section>
  )
}
