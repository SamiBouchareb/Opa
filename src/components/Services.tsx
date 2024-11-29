import React from 'react';
import { Stethoscope, Activity, FileText, Microscope, ArrowRight, Syringe, Bone, Brain, Timer } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope />,
    title: 'Consultation Spécialisée',
    description: 'Évaluation approfondie de vos symptômes avec un diagnostic précis et un plan de traitement personnalisé.',
    features: [
      'Examen clinique complet',
      'Historique médical détaillé',
      'Plan de traitement sur mesure'
    ]
  },
  {
    icon: <Activity />,
    title: 'Suivi Thérapeutique',
    description: 'Surveillance régulière de votre progression et ajustement du traitement selon vos besoins.',
    features: [
      'Ajustement continu du traitement',
      'Évaluation de la progression',
      'Support médical constant'
    ]
  },
  {
    icon: <Bone />,
    title: 'Rhumatologie Interventionnelle',
    description: 'Procédures spécialisées pour le soulagement rapide de la douleur et l\'amélioration de la mobilité.',
    features: [
      'Infiltrations guidées',
      'Thérapie par viscosupplémentation',
      'Techniques mini-invasives'
    ]
  },
  {
    icon: <Brain />,
    title: 'Approche Holistique',
    description: 'Traitement global prenant en compte tous les aspects de votre santé pour des résultats optimaux.',
    features: [
      'Évaluation du mode de vie',
      'Conseils nutritionnels',
      'Gestion du stress'
    ]
  }
];

const quickServices = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Bilans Complets',
    description: 'Examens détaillés pour un diagnostic précis'
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: 'Traitements Innovants',
    description: 'Accès aux dernières avancées thérapeutiques'
  },
  {
    icon: <Syringe className="w-5 h-5" />,
    title: 'Infiltrations',
    description: 'Soulagement rapide des douleurs articulaires'
  },
  {
    icon: <Timer className="w-5 h-5" />,
    title: 'Consultations Urgentes',
    description: 'Disponibilité pour cas aigus'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Services
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services en rhumatologie, combinant expertise médicale et approche personnalisée
            pour diagnostiquer et traiter efficacement vos problèmes articulaires et musculaires.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white">
                  {React.cloneElement(service.icon, { className: 'w-8 h-8 group-hover:scale-110 transition-transform duration-300' })}
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-600 font-medium group/link cursor-pointer">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Services */}
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Services Complémentaires</h3>
            <p className="text-gray-600">Des solutions additionnelles pour une prise en charge complète</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <div 
                key={index}
                className="group flex items-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(service.icon, { 
                    className: 'text-blue-600 group-hover:text-white transition-colors'
                  })}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}