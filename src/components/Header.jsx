import logo from '../assets/logo.png'

function Header({ namaUniversitas }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="#home" className="flex items-center space-x-3 hover:opacity-80 transition">
          <img src={logo} alt="Logo" className="w-10 h-10 object-cover" />
          <span className="font-bold text-xl text-gray-950">{namaUniversitas}</span>
        </a>

        <nav className="flex space-x-6 font-medium text-sm">
          <a href="#home" className="text-[#E65C00] hover:text-[#FF8C00] transition">Beranda</a>
          <a href="#contacts" className="text-gray-600 hover:text-[#E65C00] transition">Kontak</a>
        </nav>

      </div>
    </header>
  )
}

export default Header