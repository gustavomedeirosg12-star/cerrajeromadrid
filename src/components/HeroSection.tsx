import { motion } from 'motion/react';
import ParticleNetwork from './ParticleNetwork';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const titleChars = "CERRAJERO EN MADRID".split("");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-16 px-4">
      <ParticleNetwork />
      <div className="absolute inset-0 bg-scanline pointer-events-none z-10"></div>
      
      {/* Radar Effect on load */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[rgba(255,215,0,0.1)] rounded-full animate-[sonar_2s_ease-out_1] z-0 pointer-events-none origin-center"></div>
      
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-[rgba(255,215,0,0.1)] border border-[rgba(255,215,0,0.3)] text-[#FFD700] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          DISPONIBLE 24H · 7 DÍAS
        </motion.div>

        {/* Hero Title with Typing Effect */}
        <h1 className="font-heading text-6xl md:text-8xl lg:text-[100px] leading-tight md:leading-none tracking-tighter mb-4 text-white">
          {titleChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-lg md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto mb-8"
        >
          Llegamos en 15-30 minutos. <span className="text-white font-bold">Sin desplazamiento a medianoche.</span>
        </motion.p>

        {/* Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="flex items-center gap-3 bg-[rgba(0,0,0,0.5)] border border-gray-800 backdrop-blur-md px-6 py-3 rounded-lg mb-10"
        >
          <Clock className="w-5 h-5 text-[#FFD700]" />
          <span className="text-gray-200">Tiempo estimado de llegada:</span>
          <span className="text-[#FFD700] font-bold text-xl inline-flex gap-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            >2</motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, type: "spring" }}
            >0</motion.span>
            <span>min</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-12"
        >
          <motion.a 
            variants={itemVariants}
            href="tel:+34669881469"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold text-xl md:text-2xl px-8 py-5 rounded-xl transition-colors animate-[pulse-glow_2s_infinite] shadow-[0_0_20px_rgba(255,215,0,0.4)] relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
            <Phone className="w-6 h-6 animate-bounce" />
            LLAMAR AHORA — 669 88 14 69
          </motion.a>

          <motion.a 
            variants={itemVariants}
            href="https://wa.me/34669881469"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold text-lg md:text-xl px-8 py-5 rounded-xl transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Mini Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 font-medium"
        >
          <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#FFD700]" /> Sin desplazamiento nocturno</div>
          <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#FFD700]" /> Presupuesto gratis</div>
          <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#FFD700]" /> Garantía en todos los trabajos</div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-20"
      >
        <span className="text-xs uppercase tracking-widest">Descubrir</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
