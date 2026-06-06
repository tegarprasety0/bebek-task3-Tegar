function ContactSection({ kontak }) {
  return (
    <section id="contacts" className="bg-white py-20 mt-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-950 mb-6">Kontak</h2>
        
        <p className="text-lg text-gray-700">📍 {kontak.alamat}</p>
        <p className="text-lg text-gray-700">☎️ Telepon: {kontak.telepon}</p>
        <p className="text-lg text-gray-700">📧 Email: {kontak.email}</p>
        <p className="text-lg text-gray-700">🌐 Website: {kontak.website}</p>
        <p className="text-lg text-gray-700 font-medium mt-6">📖 Tugas BEBEK ~ Tegar Prasetyo</p>
      </div>
    </section>
  )
}

export default ContactSection