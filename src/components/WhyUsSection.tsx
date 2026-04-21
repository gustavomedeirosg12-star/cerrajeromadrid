import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';
import { Check } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { prefix: "🏆 +", value: 2400, label: "aperturas realizadas", decimals: 0 },
  { prefix: "⭐ ", value: 4.9, suffix: "/5", label: "valoración media en Google", decimals: 1 },
  { prefix: "⏱️ ", value: 18, suffix: " min", label: "tiempo medio de llegada", decimals: 0 },
  { prefix: "✅ ", value: 97, suffix: "%", label: "clientes satisfechos", decimals: 0 }
];

const benefits = [
  "Cerrajeros certificados y con experiencia",
  "Cobertura en toda la Comunidad de Madrid",
  "Precios transparentes sin sorpresas",
  "Garantía de 6 meses en todas las cerraduras instaladas",
  "Aceptamos todas las formas de pago",
  "Factura oficial con IVA incluido"
];

export default function WhyUsSection() {
  const [glitchActive, setGlitchActive] = useState(false);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111118] relative z-10 border-t border-gray-900 border-b">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
              setGlitchActive(true);
              setTimeout(() => setGlitchActive(false), 1000);
            }}
            className="mb-12"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-2">
              <span className={`glitch ${glitchActive ? 'glitch-active' : ''}`} data-text="¿Por qué elegirnos?">
                ¿Por qué elegirnos?
              </span>
            </h2>
            <p className="text-gray-400 text-lg">La opción más segura y rápida de Madrid</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#16161c] border border-gray-800 border-l-4 border-l-[#FFD700] rounded-r-lg p-5"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter 
                    to={stat.value} 
                    decimals={stat.decimals} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </div>
                <div className="text-sm text-gray-400 leading-tight block">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(255,215,0,0.1)] flex items-center justify-center border border-[rgba(255,215,0,0.3)]">
                  <Check className="w-3.5 h-3.5 text-[#FFD700]" strokeWidth={3} />
                </div>
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-[#FFD700] opacity-5 blur-[100px] rounded-full"></div>
            
            {/* Keyhole SVG Animation */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <motion.path 
                d="M100 40 C75 40 55 60 55 85 C55 102 65 117 80 125 L80 160 L120 160 L120 125 C135 117 145 102 145 85 C145 60 125 40 100 40 Z M100 110 C86 110 75 99 75 85 C75 71 86 60 100 60 C114 60 125 71 125 85 C125 99 114 110 100 110 Z" 
                fill="#111" 
                stroke="#FFD700" 
                strokeWidth="2"
              />
              <motion.g
                animate={{ rotate: [0, 90, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }}
                style={{ originX: "100px", originY: "85px" }}
              >
                <path d="M96 65 h8 v40 h-8 z" fill="#FFD700" />
                <circle cx="100" cy="85" r="12" fill="#FFD700" />
                <path d="M96 100 h15 v5 h-15 z" fill="#FFD700" />
                <path d="M96 108 h10 v5 h-10 z" fill="#FFD700" />
              </motion.g>
            </svg>
            
            {/* Decorative circles */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-[rgba(255,215,0,0.2)] rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-4 border border-[rgba(255,215,0,0.1)] rounded-full"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
