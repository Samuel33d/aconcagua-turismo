'use client'

import { useState } from 'react'

const DESTINOS = [
  'Valle Nevado & Torrellones',
  'Portillo & Laguna del Inca',
  'Valparaíso',
  'Viña del Mar',
  'Desierto de Atacama',
  'Playa El Canelo',
]

const PASAJEROS = [
  '1 – 10 pasajeros',
  '11 – 20 pasajeros',
  '21 – 30 pasajeros',
  '31 – 45 pasajeros',
  '45+ pasajeros',
]

export default function CotizadorBar() {
  const [destino, setDestino] = useState('')
  const [pasajeros, setPasajeros] = useState('')

  function handleCotizar() {
    const partes: string[] = ['Hola, quiero cotizar un viaje con Aconcagua Turismo.']
    if (destino) partes.push(`Destino: ${destino}.`)
    if (pasajeros) partes.push(`Pasajeros: ${pasajeros}.`)
    const mensaje = encodeURIComponent(partes.join(' '))
    window.open(`https://wa.me/56959901887?text=${mensaje}`, '_blank')
  }

  return (
    <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row">

        {/* Select Destino */}
        <div className="flex items-center gap-3 px-5 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-terracota shrink-0" aria-hidden="true">
            <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
            <circle cx="12" cy="8" r="2" fill="white" />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Destino</p>
            <select
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              className="w-full text-sm font-semibold text-brand-dark bg-transparent border-none outline-none cursor-pointer appearance-none"
            >
              <option value="">¿A dónde quieres ir?</option>
              {DESTINOS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Select Pasajeros */}
        <div className="flex items-center gap-3 px-5 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-terracota shrink-0" aria-hidden="true">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">Pasajeros</p>
            <select
              value={pasajeros}
              onChange={(e) => setPasajeros(e.target.value)}
              className="w-full text-sm font-semibold text-brand-dark bg-transparent border-none outline-none cursor-pointer appearance-none"
            >
              <option value="">¿Cuántos son?</option>
              {PASAJEROS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Botón Cotizar */}
        <button
          onClick={handleCotizar}
          className="flex items-center justify-center gap-2 bg-brand-terracota text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity min-h-[56px] cursor-pointer"
        >
          Cotizar
        </button>

      </div>
    </div>
  )
}
