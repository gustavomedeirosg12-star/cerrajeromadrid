import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const barrios = [
  "Centro", "Salamanca", "Chamberí", "Retiro", "Arganzuela", 
  "Carabanchel", "Vallecas", "Moratalaz", "Ciudad Lineal", "Hortaleza", 
  "Fuencarral", "Moncloa", "Latina", "Usera", "Puente de Vallecas", 
  "Vicálvaro", "San Blas", "Barajas", "Alcorcón", "Getafe", 
  "Leganés", "Móstoles", "Fuenlabrada", "Alcalá de Henares"
];

export default function CoverageSection() {
  return (
    <section id="cobertura" className="py-24 px-4 bg-[#0A0A0A] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Abstract Map Graphic */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center py-10">
          <div className="relative w-full max-w-[400px] aspect-square bg-[#1a1a2e] rounded-full flex items-center justify-center border border-gray-800 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
            
            {/* Radar Pings */}
            <div className="absolute w-12 h-12 bg-[#FFD700] rounded-full animate-ping opacity-20"></div>
            <div className="absolute w-24 h-24 border border-[#FFD700] rounded-full animate-[sonar_2s_infinite] opacity-50"></div>
            <div className="absolute w-48 h-48 border border-b-[#FFD700] border-t-transparent border-l-transparent border-r-transparent rounded-full animate-spin opacity-30" style={{ animationDuration: '4s' }}></div>
            
            {/* Center Blinker */}
            <div className="absolute w-4 h-4 bg-[#FFD700] rounded-full shadow-[0_0_15px_#FFD700] z-10"></div>
            
            <MapPin className="absolute mt-[-30px] ml-[-1px] w-8 h-8 text-white drop-shadow-md z-20" fill="#FFD700" />
            
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
              <path d="M50 10 Q70 20 80 50 Q70 80 50 90 Q30 80 20 50 Q30 20 50 10 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>
        </div>

        {/* Content & Chips */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center lg:text-left"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">Cubrimos toda Madrid</h2>
            <p className="text-xl text-gray-400">Llegamos a cualquier barrio en menos de 30 minutos.</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {barrios.map((barrio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 15 }}
                className="bg-[#111111] border border-[rgba(255,215,0,0.2)] text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-colors cursor-default"
              >
                {barrio}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 p-6 bg-[rgba(255,215,0,0.05)] border border-dashed border-[#FFD700]/30 rounded-xl text-center lg:text-left"
          >
            <p className="text-gray-300 font-medium mb-4">¿No ves tu zona? Llámanos, seguro que llegamos.</p>
            <a href="tel:+34612345678" className="inline-block bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Consultar disponibilidad
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
