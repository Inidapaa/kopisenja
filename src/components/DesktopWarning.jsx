import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/Background.jpg";
import logo from "../assets/logo.jpeg";

function DesktopWarning() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative px-6 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
        <img
          src={logo}
          alt="Logo Kopi Senja"
          className="w-32 h-32 rounded-full border-4 border-white/50 object-cover shadow-lg"
        />
        <ShieldAlert className="w-16 h-16 text-[#dccfc0]" />
        <h1 className="text-3xl font-semibold text-[#dccfc0] font-Poppins">
          Perangkat Tidak Didukung
        </h1>
        <p className="text-base text-white/80 leading-relaxed font-Poppins">
          Website Kopi Senja hanya dapat diakses melalui perangkat mobile atau
          iPad untuk menjaga pengalaman terbaik pelanggan. Silakan gunakan
          perangkat tersebut untuk melanjutkan pemesanan.
        </p>
        <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-sm text-white/80 font-Poppins">
          Admin masih dapat masuk melalui desktop untuk keperluan operasional.
        </div>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-2 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#504B38] hover:bg-[#3d392c] text-white text-base font-semibold transition-colors shadow-lg shadow-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dccfc0]"
        >
          Masuk Admin
        </button>
      </div>
    </div>
  );
}

export default DesktopWarning;


