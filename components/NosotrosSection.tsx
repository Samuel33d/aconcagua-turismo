import { FadeUp, FadeLeft, FadeRight } from '@/components/motion'

const STATS = [
  { valor: '+10', label: 'años de experiencia' },
  { valor: '+500', label: 'excursiones realizadas' },
  { valor: '+15k', label: 'pasajeros transportados' },
  { valor: '6', label: 'destinos en Chile' },
]

const VALORES = [
  {
    titulo: 'Flota propia',
    texto: 'Buses propios, mantenidos y con conductores de planta. Sin terceros, sin sorpresas en ruta.',
  },
  {
    titulo: 'Puntualidad real',
    texto: 'Salimos a la hora que acordamos. Tu tiempo importa tanto como el destino.',
  },
  {
    titulo: 'Servicio personalizado',
    texto: 'Cada viaje se arma a medida. Desde excursiones familiares hasta giras de artistas.',
  },
]

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Columna izquierda — copy */}
          <FadeLeft>
            <span className="inline-flex items-center border border-brand-terracota text-brand-terracota text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              Quiénes somos
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-brand-navy mb-5 leading-tight">
              Más de una década llevando personas a los mejores rincones de Chile
            </h2>
            <p className="text-base text-brand-dark leading-relaxed mb-4">
              Aconcagua Turismo nació en Santiago con una sola idea: que viajar por Chile sea cómodo, seguro y memorable. Hoy operamos excursiones grupales, viajes privados y traslados para artistas y empresas con flota propia.
            </p>
            <p className="text-base text-brand-dark leading-relaxed mb-8">
              Conocemos cada ruta, cada paso de montaña y cada playa. No somos intermediarios — somos la empresa que conduce, organiza y acompaña de principio a fin.
            </p>

            <div className="space-y-4">
              {VALORES.map((v) => (
                <div key={v.titulo} className="flex gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-terracota/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-terracota" />
                  </div>
                  <div>
                    <span className="font-semibold text-brand-navy text-sm">{v.titulo} — </span>
                    <span className="text-sm text-brand-dark">{v.texto}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeLeft>

          {/* Columna derecha — stats */}
          <FadeRight>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-6 flex flex-col justify-between ${
                    i === 0 ? 'bg-brand-navy text-white' : 'bg-brand-light'
                  }`}
                >
                  <span className={`font-display text-4xl font-extrabold ${i === 0 ? 'text-white' : 'text-brand-terracota'}`}>
                    {s.valor}
                  </span>
                  <span className={`text-sm font-medium mt-2 ${i === 0 ? 'text-white/70' : 'text-brand-dark'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-brand-terracota/5 border border-brand-terracota/20 p-6">
              <p className="font-script text-2xl text-brand-navy mb-2 leading-snug">
                "De las micros de Santiago al Salón Cama"
              </p>
              <p className="text-sm text-brand-dark">
                La Combo Tortuga empezó tocando en las micros de Santiago. Hoy recorren Chile en nuestro Bus Salón Cama. Esa es la diferencia que hacemos.
              </p>
            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  )
}
