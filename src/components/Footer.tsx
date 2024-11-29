import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Gradient Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-blue-400 rounded-full opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-cyan-400 rounded-lg opacity-10 transform -rotate-12"></div>
        <div className="absolute top-40 left-1/4 w-24 h-24 border-4 border-blue-300 transform rotate-12 opacity-10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="relative space-y-4 backdrop-blur-sm rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Dr. Abdeali</h3>
            <p className="text-blue-100 leading-relaxed">
              Spécialiste en rhumatologie avec plus de 40 ans d'expérience. 
              Expert en diagnostic et traitement des maladies rhumatismales.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative backdrop-blur-sm rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Navigation Rapide</h3>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative space-y-4 backdrop-blur-sm rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="https://goo.gl/maps/yourMapLink" className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-blue-800/50 group-hover:bg-blue-700/50 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>124 Bd Rahal El Meskini, Casablanca 20120</span>
              </a>
              <a href="tel:+212522319741" className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-blue-800/50 group-hover:bg-blue-700/50 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+212 5223-19741</span>
              </a>
              <div className="flex items-center space-x-3 text-blue-100 group">
                <div className="p-2 rounded-lg bg-blue-800/50 group-hover:bg-blue-700/50 transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <span>Lun - Ven: 09:00–17:00</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="relative backdrop-blur-sm rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Horaires</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-lg bg-blue-800/30 backdrop-blur-sm">
                <span className="text-blue-100">Lun - Ven</span>
                <span className="text-white font-medium">09:00–17:00</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-blue-800/30 backdrop-blur-sm">
                <span className="text-blue-100">Samedi</span>
                <span className="text-white font-medium">09:00–12:30</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-blue-800/30 backdrop-blur-sm">
                <span className="text-blue-100">Dimanche</span>
                <span className="text-white font-medium">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-blue-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              &copy; {currentYear} Dr. Abdeali. Tous droits réservés.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Retour en haut</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to your CSS */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;