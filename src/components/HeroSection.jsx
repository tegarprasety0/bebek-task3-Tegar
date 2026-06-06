import { useState } from 'react'
import foto from '../assets/foto.jpg'

function HeroSection({ nama, deskripsi }) {
  const [tampilDeskripsi, setTampilDeskripsi] = useState(true)

  return (
    <main id="home" className="max-w-7xl mx-auto px-6 py-12 space-y-12">

      <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={foto}
          alt="Foto Universitas"
          className="w-full object-cover"
          style={{ aspectRatio: '21/9' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-gray-100 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-950">{nama}</h1>

        <button
          onClick={() => setTampilDeskripsi(!tampilDeskripsi)}
          className="bg-[#E65C00] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#FF8C00] transition"
        >
          {tampilDeskripsi ? 'Sembunyikan' : 'Tampilkan'} Deskripsi
        </button>

        {tampilDeskripsi && (
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {deskripsi}
          </p>
        )}
      </div>

    </main>
  )
}

export default HeroSection