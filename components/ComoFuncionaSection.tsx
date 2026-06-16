import { FadeUp } from '@/components/motion'

const WA_URL = 'https://wa.me/56959901887?text=Hola%2C+quiero+cotizar+un+viaje+con+Aconcagua+Turismo'

const PASOS = [
  {
    numero: '01',
    titulo: 'Escríbenos por WhatsApp',
    texto: 'Cuéntanos a dónde quieres ir, cuántos son y qué fecha tienes en mente. Sin formularios, sin esperas.',
  },
  {
    numero: '02',
    titulo: 'Te armamos la propuesta',
    texto: 'En menos de 24 horas tienes el presupuesto, el bus disponible y todos los detalles del viaje.',
  },
  {
    numero: '03',
    titulo: 'Confirmas y listo',
    texto: 'Reservas con un abono simple. El día del viaje el bus llega puntual a tu punto de encuentro.',
  },
]

export default function ComoFuncionaSection() {
  return (
    <section className="bg-brand-navy py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="text-center mb-12">
          <span className="inline-flex items-center border border-white/30 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Así de simple
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white">
            ¿Cómo funciona?
          </h2>
          <p className="mt-3 text-base text-white/60 max-w-md mx-auto">
            Reservar con nosotros toma menos de 5 minutos.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PASOS.map((paso, i) => (
            <FadeUp key={paso.numero} delay={i * 0.1}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                <span className="font-display text-5xl font-extrabold text-white/10 leading-none block mb-4">
                  {paso.numero}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {paso.texto}
                </p>
                {i < PASOS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-white/20 text-2xl z-10">→</div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-terracota text-white font-bold rounded-full px-8 py-4 text-base hover:opacity-90 active:scale-95 transition-all duration-200 min-h-[52px]"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.508 5.826L.057 23.25l5.563-1.459A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.587-.497-5.084-1.362l-.363-.217-3.302.866.882-3.222-.236-.374A9.949 9.949 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Empieza ahora — es gratis cotizar
          </a>
        </FadeUp>

      </div>
    </section>
  )
}
