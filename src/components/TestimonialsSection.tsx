import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos M.",
    location: "Chamberí",
    initials: "CM",
    color: "bg-blue-600",
    text: "Me quedé encerrado fuera de casa a las 2 de la mañana. En 18 minutos estaban aquí. Profesionales y sin dañar la puerta. Muy recomendables."
  },
  {
    name: "Ana L.",
    location: "Salamanca",
    initials: "AL",
    color: "bg-purple-600",
    text: "Cambié todas las cerraduras tras una mudanza. Trabajo impecable, precio justo y factura al momento. Repetiré sin duda."
  },
  {
    name: "Miguel R.",
    location: "Vallecas",
    initials: "MR",
    color: "bg-green-600",
    text: "Se me cerró el coche con las llaves dentro en plena calle. Vinieron rapidísimo y lo abrieron sin rayar nada. 10 de 10."
  },
  {
    name: "Laura P.",
    location: "Retiro",
    initials: "LP",
    color: "bg-red-600",
    text: "Servicio de madrugada, amables y muy rápidos. El precio fue exactamente el que me dijeron por teléfono. Sin sorpresas."
  },
  {
    name: "Javier S.",
    location: "Hortaleza",
    initials: "JS",
    color: "bg-orange-600",
    text: "Instalaron una cerradura de seguridad en menos de una hora. Explicaron todo el proceso. Excelente profesionalidad."
  },
  {
    name: "María F.",
    location: "Moncloa",
    initials: "MF",
    color: "bg-teal-600",
    text: "Atención al cliente increíble. Solucionaron mi problema en minutos y a un precio muy razonable para ser urgencia nocturna."
  }
];

export default function TestimonialsSection() {
  // Duplicate array to create a seamless infinite loop effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#0d0d0d] relative z-10 border-t border-gray-900 overflow-hidden" 
             style={{ backgroundImage: 'radial-gradient(rgba(255,215,0,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-white mb-6"
        >
          Lo que dicen nuestros clientes
        </motion.h2>
        
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <Star className="w-8 h-8 text-[#FFD700]" fill="#FFD700" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full relative py-4">
        {/* Left and right fade gradients for smooth entrance/exit */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
        
        {/* Carousel Track */}
        <div className="flex w-max hover:[animation-play-state:paused] animate-[carousel_40s_linear_infinite]">
          {repeatedTestimonials.map((testimonial, index) => (
            <div key={index} className="w-[300px] md:w-[400px] flex-shrink-0 mx-4">
              <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z"/>
                  </svg>
                  <span className="text-xs text-gray-500 font-medium">Reseña verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual Navigation Dots (Passive) */}
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#FFD700]' : 'bg-gray-700'}`}></div>
        ))}
      </div>
    </section>
  );
}
