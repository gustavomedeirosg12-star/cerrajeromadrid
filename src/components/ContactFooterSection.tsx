import { motion } from 'motion/react';
import { Phone, MessageCircle, Send, Lock, Zap, FileText, Instagram, Facebook, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    problema: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, telefono, problema, descripcion } = formData;
    
    // Mapeo amigable para el problema
    const problemaNombres: Record<string, string> = {
      puerta: "Apertura de Puerta",
      cerradura: "Cambio de Cerradura",
      coche: "Apertura de Coche",
      otro: "Otro problema"
    };

    const problemaFormat = problemaNombres[problema] || problema;
    
    // Construir el mensaje con emojis universales básicos
    let mensaje = `🔴 *NUEVO AVISO DE URGENCIA* 🔴\n\n`;
    mensaje += `👤 *Cliente:* ${nombre}\n`;
    mensaje += `📞 *Teléfono:* ${telefono}\n`;
    mensaje += `🔑 *Problema:* ${problemaFormat}\n`;
    
    if (descripcion) {
      mensaje += `📋 *Detalles:* ${descripcion}\n`;
    }
    
    mensaje += `\n📍 *Estado:* Esperando respuesta...`;

    // Codificar URL y abrir WhatsApp
    const url = `https://wa.me/34669881469?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section id="contacto" className="py-24 px-4 bg-[#0A0A0A] border-t-2 border-[#FFD700] relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-4">
              ¿Necesitas un cerrajero <span className="text-red-500 animate-pulse">ahora?</span>
            </h2>
            <p className="text-xl text-gray-400">Llámanos o escríbenos — respondemos en menos de 2 minutos</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Phone Column */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center group hover:border-[#FFD700]/50 transition-colors h-full">
              <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#FFD700]" />
              </div>
              <h3 className="text-gray-400 font-medium mb-2 uppercase tracking-widest text-sm">Teléfono 24H</h3>
              <p className="text-3xl font-bold text-white mb-2">669 88 14 69</p>
              
              <div className="flex flex-col items-center flex-grow justify-center py-4 opacity-70">
                <div className="text-xs text-[#FFD700] mb-3 font-semibold uppercase tracking-widest border border-[#FFD700]/30 rounded-full px-3 py-1 bg-[#FFD700]/5">
                  Llegamos en ~20 min
                </div>
                <div className="flex flex-col items-center gap-1.5 text-[#FFD700]/60 animate-bounce mt-2">
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <ArrowDown className="w-5 h-5 mt-1" />
                </div>
              </div>

              <a href="tel:+34669881469" className="w-full mt-auto bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold py-4 rounded-xl transition-colors shadow-[0_0_15px_rgba(255,215,0,0.3)] block">
                Llamar ahora
              </a>
            </div>

            {/* Form Column (Center, takes priority) */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.05)] h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-orange-500"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Presupuesto Rápido</h3>
              <p className="text-gray-400 text-sm mb-6">Explícanos tu problema y te daremos precio al instante por WhatsApp.</p>
              
              <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                <div className="relative">
                  <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} className="floating-input w-full rounded-lg text-white bg-[#1a1a1a] border-gray-700" placeholder=" " required />
                  <label htmlFor="nombre" className="floating-label">Tu Nombre</label>
                </div>
                <div className="relative">
                  <input type="tel" id="telefono" value={formData.telefono} onChange={handleChange} className="floating-input w-full rounded-lg text-white bg-[#1a1a1a] border-gray-700" placeholder=" " required />
                  <label htmlFor="telefono" className="floating-label">Tu Teléfono</label>
                </div>
                <div className="relative">
                  {/* Fixed select styling issues for dark mode */}
                  <select id="problema" value={formData.problema} onChange={handleChange} className="floating-input w-full rounded-lg text-white bg-[#1a1a1a] border-gray-700 appearance-none [&>option]:bg-[#1a1a1a] [&>option]:text-white focus:ring-0" required>
                    <option value="" disabled hidden></option>
                    <option value="puerta">🚪 Apertura de Puerta</option>
                    <option value="cerradura">🔐 Cambio de Cerradura</option>
                    <option value="coche">🚗 Apertura de Coche</option>
                    <option value="otro">❓ Otro problema</option>
                  </select>
                  <label htmlFor="problema" className="floating-label">¿Qué necesitas?</label>
                  {/* Custom arrow for select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFD700]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {formData.problema && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="relative pt-1"
                  >
                    <textarea 
                      id="descripcion" 
                      value={formData.descripcion} 
                      onChange={handleChange} 
                      rows={3} 
                      className="floating-input w-full rounded-lg text-white bg-[#1a1a1a] border-gray-700 resize-none p-3 pt-6" 
                      placeholder=" "
                    ></textarea>
                    <label htmlFor="descripcion" className="floating-label">Describe el problema (opcional)</label>
                  </motion.div>
                )}

                <button type="submit" className="w-full mt-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  Enviar por WhatsApp <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* WhatsApp Column */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center group hover:border-green-500/50 transition-colors h-full">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-gray-400 font-medium mb-2 uppercase tracking-widest text-sm">Chat Directo</h3>
              <p className="text-3xl font-bold text-white mb-2">Estamos en Línea</p>

              <div className="flex flex-col items-center flex-grow justify-center py-4 opacity-70">
                <div className="text-xs text-green-500 mb-3 font-semibold uppercase tracking-widest border border-green-500/30 rounded-full px-3 py-1 bg-green-500/5">
                  Atención Real 100%
                </div>
                <div className="flex flex-col items-center gap-1.5 text-green-500/60 animate-bounce mt-2">
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <ArrowDown className="w-5 h-5 mt-1" />
                </div>
              </div>

              <a href="https://wa.me/34669881469" target="_blank" rel="noopener noreferrer" className="w-full mt-auto bg-transparent border-2 border-green-500 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" /> Abrir chat
              </a>
            </div>
            
          </div>

          {/* Guarantees inline */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 pt-8 border-t border-gray-900">
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <Lock className="w-4 h-4 text-green-500" /> <span>Tus datos están protegidos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <Zap className="w-4 h-4 text-[#FFD700]" /> <span>Respuesta en 2 minutos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <FileText className="w-4 h-4 text-white" /> <span>Presupuesto sin compromiso</span>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] relative pt-16 pb-8 px-4 border-t border-gray-900 overflow-hidden">
        {/* Animated top line indicator */}
        <motion.div 
          initial={{ x: '-100%' }}
          whileInView={{ x: '100%' }}
          transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
          className="absolute top-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
        />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl text-white tracking-widest mb-2">CERRAJERÍA<span className="text-[#FFD700]">MADRID</span>24H</h2>
          <p className="text-gray-500 mb-8 max-w-md">Disponibles 24 horas, 365 días al año para cualquier urgencia en la Comunidad de Madrid.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-gray-400">
            <a href="/#" className="hover:text-white transition-colors">Inicio</a>
            <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="/#cobertura" className="hover:text-white transition-colors">Cobertura</a>
            <a href="/#contacto" className="hover:text-white transition-colors">Contacto</a>
            <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Garantía y Cookies</Link>
          </div>

          <div className="flex gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors" aria-label="Google">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© 2025 Cerrajería Madrid. Todos los derechos reservados.</p>
            <p>Empresa registrada en Madrid. Todos nuestros cerrajeros están certificados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
