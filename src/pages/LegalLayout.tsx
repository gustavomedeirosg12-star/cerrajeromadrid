import { useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ title, children }: { title: string, children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-12 pb-24 px-4 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#FFD700] hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Volver al Inicio
        </Link>
        
        <h1 className="font-heading text-4xl md:text-6xl text-white mb-10 pb-4 border-b border-gray-800">
          {title}
        </h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-400 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>strong]:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}
