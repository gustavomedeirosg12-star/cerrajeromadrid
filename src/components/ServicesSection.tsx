import { motion } from 'motion/react';
import GlassCard3D from './GlassCard3D';
import { Key, Lock, Car, Archive, Copy, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Lock,
    title: "Apertura de Puertas",
    desc: "¿Cerrado fuera? Te abrimos sin daños",
    time: "En 15 min"
  },
  {
    icon: Key,
    title: "Cambio de Cerraduras",
    desc: "Seguridad renovada en tu hogar",
    time: "En 30 min"
  },
  {
    icon: Car,
    title: "Apertura de Vehículos",
    desc: "Coche cerrado con llaves dentro",
    time: "En 20 min"
  },
  {
    icon: Archive,
    title: "Cajas Fuertes",
    desc: "Apertura y reparación profesional",
    time: "Cita previa"
  },
  {
    icon: Copy,
    title: "Duplicado de Llaves",
    desc: "Copia de cualquier llave o mando",
    time: "Inmediato"
  },
  {
    icon: AlertTriangle,
    title: "Urgencias 24H",
    desc: "Disponibles toda la noche y festivos",
    time: "Siempre"
  }
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 px-4 bg-scanline relative z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white inline-block relative pb-2"
          >
            Nuestros Servicios
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-1 bg-[#FFD700] origin-left w-full"
            />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard3D className="h-full group cursor-pointer">
                <div className="flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl bg-[rgba(255,215,0,0.1)] border border-[#FFD700]/30 flex flex-shrink-0 items-center justify-center mb-6 text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors"
                  >
                    <service.icon className="w-8 h-8" strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FFD700] transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-sm font-semibold tracking-wide bg-black border border-[rgba(34,197,94,0.3)] text-green-400 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                      ⚡ {service.time}
                    </span>
                  </div>
                </div>
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
