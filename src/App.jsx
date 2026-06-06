import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ContactSection from './components/ContactSection'

const universitas = {
  nama: "Universitas Sriwijaya",
  deskripsi: "Universitas Sriwijaya (UNSRI) adalah Perguruan Tinggi Negeri terkemuka di Sumatera Selatan. Memiliki 10 fakultas dengan kampus utama di Indralaya (Ogan Ilir) dan kampus kota di Palembang, UNSRI dikenal sebagai salah satu kampus terluas di Asia Tenggara dengan luas lahan mencapai 712 hektare.",
  kontak: {
    alamat: "Kampus Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan 30662",
    telepon: "(0711) 580645",
    email: "humas@unsri.ac.id",
    website: "www.unsri.ac.id",
  }
}

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header namaUniversitas={universitas.nama} />
      <HeroSection 
        nama={universitas.nama} 
        deskripsi={universitas.deskripsi} 
      />
      <ContactSection kontak={universitas.kontak} />
    </div>
  )
}

export default App