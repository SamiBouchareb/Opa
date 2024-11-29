import React from 'react';
import { Stethoscope, Calendar, Phone, Clock, MapPin, Star } from 'lucide-react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="relative h-full">
        <img 
          src="/images/Marokko-Casablanca-211744.jpeg"
          alt="Paysage urbain de Casablanca"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/40 to-slate-900/60">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-slate-900/20 backdrop-blur-[1px]" />
        </div>

        {/* Navbar */}
        <Navbar />

        <div className="relative h-full container mx-auto px-4">
          {/* Main content container */}
          <div className="h-full flex flex-col justify-center max-w-4xl pt-20 md:pt-0">
            {/* Top badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8 border border-white/10 w-fit">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-50 text-xs md:text-sm font-medium whitespace-nowrap">Accepte de Nouveaux Patients</span>
            </div>

            {/* Main heading group */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 p-2 md:p-3 rounded-xl border border-blue-400/20 shadow-lg shadow-blue-500/5">
                  <Stethoscope className="text-blue-500 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                  Dr. Abdelali
                </h1>
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-4xl text-blue-50/90 font-medium">
                Rhumatologue Expert <span className="text-blue-300">à Casablanca</span>
              </h2>
              
              <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl">
                Dédié à fournir des soins rhumatologiques exceptionnels avec plus de 15 ans d'expertise. 
                Spécialisé dans les plans de traitement personnalisés et les approches thérapeutiques innovantes.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <button className="group flex items-center justify-center space-x-2 md:space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                <span>Planifier une Consultation</span>
              </button>
              <button className="group flex items-center justify-center space-x-2 md:space-x-3 bg-white/10 hover:bg-white/15 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl font-semibold backdrop-blur-sm transition-all border border-white/10 hover:border-white/20 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span>Nous Contacter</span>
              </button>
            </div>

            {/* Bottom stats/info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center space-x-2 md:space-x-3 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/10">
                <Clock className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-slate-200">Lun-Ven: 9h00 - 17h00</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/10">
                <MapPin className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-slate-200">Centre de Casablanca</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border border-white/10">
                <Star className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-slate-200">Spécialiste Hautement Reconnu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}