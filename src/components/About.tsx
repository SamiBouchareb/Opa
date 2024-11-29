import React from 'react';
import { Award, BookOpen, Users, Star, GraduationCap, Stethoscope, Calendar, Globe, ArrowRight, Activity, Bone } from 'lucide-react';

const achievements = [
  {
    year: '2008',
    title: 'Diplôme de Médecine',
    institution: 'Faculté de Médecine de Casablanca'
  },
  {
    year: '2013',
    title: 'Spécialisation en Rhumatologie',
    institution: 'CHU Ibn Rochd'
  },
  {
    year: '2015',
    title: 'Formation Avancée en Rhumatologie Interventionnelle',
    institution: 'Paris, France'
  },
  {
    year: '2018',
    title: 'Certification en Échographie Musculo-squelettique',
    institution: 'EULAR'
  }
];

const specialties = [
  {
    icon: <Stethoscope />,
    title: 'Rhumatologie Interventionnelle',
    description: 'Techniques mini-invasives pour le soulagement rapide de la douleur',
    treatments: [
      'Infiltrations écho-guidées',
      'Viscosupplémentation',
      'PRP-Thérapie'
    ],
    color: 'blue'
  },
  {
    icon: <Activity />,
    title: 'Maladies Auto-immunes',
    description: 'Diagnostic et traitement des pathologies auto-immunes complexes',
    treatments: [
      'Polyarthrite rhumatoïde',
      'Lupus érythémateux',
      'Sclérodermie'
    ],
    color: 'indigo'
  },
  {
    icon: <Bone />,
    title: 'Rhumatismes Inflammatoires',
    description: 'Prise en charge globale des maladies inflammatoires',
    treatments: [
      'Spondylarthrite',
      'Arthrite psoriasique',
      'Goutte chronique'
    ],
    color: 'purple'
  },
  {
    icon: <BookOpen />,
    title: 'Pathologies Articulaires',
    description: 'Traitement des affections articulaires chroniques et aiguës',
    treatments: [
      'Arthrose',
      'Tendinites',
      'Bursites'
    ],
    color: 'rose'
  },
  {
    icon: <Activity />,
    title: 'Ostéoporose',
    description: 'Prévention et traitement de la fragilité osseuse',
    treatments: [
      'Densitométrie osseuse',
      'Supplémentation adaptée',
      'Traitement préventif'
    ],
    color: 'cyan'
  },
  {
    icon: <Users />,
    title: 'Médecine du Sport',
    description: 'Prise en charge des athlètes et sportifs amateurs',
    treatments: [
      'Lésions sportives',
      'Rééducation sportive',
      'Prévention'
    ],
    color: 'emerald'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À Propos du Dr. Abdelali
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Expert en rhumatologie avec une vaste expérience dans le diagnostic et le traitement 
            des maladies rhumatismales et musculo-squelettiques.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-4" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-2xl transform -rotate-2 transition-transform group-hover:rotate-0" />
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img 
                src="/images/IMG_6268 (2).jpg" 
                alt="Dr. Abdelali"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-gray-800 font-semibold">
                  <span className="text-blue-600">40+</span> ans d'expérience
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Rhumatologue Expert</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                Un expert dévoué à votre santé articulaire et musculo-squelettique
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Fort de plus de 40 années d'expérience, le Dr. Abdelali combine expertise médicale 
                et approche personnalisée pour offrir les meilleurs soins en rhumatologie. Sa pratique 
                est fondée sur l'écoute attentive et l'utilisation des dernières avancées thérapeutiques.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Formation Continue</h4>
                    <p className="text-sm text-gray-600">Mise à jour régulière des connaissances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Approche Internationale</h4>
                    <p className="text-sm text-gray-600">Formation en France et au Maroc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Spécialités Médicales</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise complète en rhumatologie pour répondre à tous vos besoins de santé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  specialty.color === 'blue' ? 'from-blue-50 to-blue-100/20' :
                  specialty.color === 'indigo' ? 'from-indigo-50 to-indigo-100/20' :
                  specialty.color === 'purple' ? 'from-purple-50 to-purple-100/20' :
                  specialty.color === 'rose' ? 'from-rose-50 to-rose-100/20' :
                  specialty.color === 'cyan' ? 'from-cyan-50 to-cyan-100/20' :
                  'from-emerald-50 to-emerald-100/20'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content Container */}
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 ${
                        specialty.color === 'blue' ? 'bg-blue-100' :
                        specialty.color === 'indigo' ? 'bg-indigo-100' :
                        specialty.color === 'purple' ? 'bg-purple-100' :
                        specialty.color === 'rose' ? 'bg-rose-100' :
                        specialty.color === 'cyan' ? 'bg-cyan-100' :
                        'bg-emerald-100'
                      } rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300`} />
                      <div className={`relative w-14 h-14 ${
                        specialty.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        specialty.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' :
                        specialty.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                        specialty.color === 'rose' ? 'bg-gradient-to-br from-rose-500 to-rose-600' :
                        specialty.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' :
                        'bg-gradient-to-br from-emerald-500 to-emerald-600'
                      } rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {React.cloneElement(specialty.icon, { className: 'w-7 h-7' })}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className={`text-xl font-bold text-gray-800 mb-3 ${
                    specialty.color === 'blue' ? 'group-hover:text-blue-600' :
                    specialty.color === 'indigo' ? 'group-hover:text-indigo-600' :
                    specialty.color === 'purple' ? 'group-hover:text-purple-600' :
                    specialty.color === 'rose' ? 'group-hover:text-rose-600' :
                    specialty.color === 'cyan' ? 'group-hover:text-cyan-600' :
                    'group-hover:text-emerald-600'
                  } transition-colors duration-300`}>
                    {specialty.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {specialty.description}
                  </p>

                  {/* Treatments List */}
                  <ul className="space-y-3">
                    {specialty.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          specialty.color === 'blue' ? 'bg-blue-500' :
                          specialty.color === 'indigo' ? 'bg-indigo-500' :
                          specialty.color === 'purple' ? 'bg-purple-500' :
                          specialty.color === 'rose' ? 'bg-rose-500' :
                          specialty.color === 'cyan' ? 'bg-cyan-500' :
                          'bg-emerald-500'
                        }`} />
                        <span className="text-sm text-gray-600">{treatment}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Indicator */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                    specialty.color === 'blue' ? 'bg-blue-500' :
                    specialty.color === 'indigo' ? 'bg-indigo-500' :
                    specialty.color === 'purple' ? 'bg-purple-500' :
                    specialty.color === 'rose' ? 'bg-rose-500' :
                    specialty.color === 'cyan' ? 'bg-cyan-500' :
                    'bg-emerald-500'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className={`absolute inset-0 ${
                      specialty.color === 'blue' ? 'bg-blue-400' :
                      specialty.color === 'indigo' ? 'bg-indigo-400' :
                      specialty.color === 'purple' ? 'bg-purple-400' :
                      specialty.color === 'rose' ? 'bg-rose-400' :
                      specialty.color === 'cyan' ? 'bg-cyan-400' :
                      'bg-emerald-400'
                    } rounded-full animate-ping`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Journey Section */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative">
              <span className="relative inline-block">
                Parcours Professionnel
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {/* 2023 - Present */}
                <div className="relative" data-aos="fade-up">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Cabinet Privé à Casablanca</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Consultation en rhumatologie et prise en charge des maladies ostéoarticulaires.
                      Expertise en échographie ostéoarticulaire et infiltrations écho-guidées.
                    </p>
                  </div>
                </div>

                {/* 1983 - 2023 */}
                <div className="relative" data-aos="fade-up" data-aos-delay="100">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-1 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">1983</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Chef de Service de Rhumatologie</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Direction du service de rhumatologie à l'hôpital militaire Mohammed V de Rabat.
                      Formation des médecins résidents et encadrement de la recherche clinique.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">Formation médicale</span>
                      <span className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium">Recherche clinique</span>
                      <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">Direction de service</span>
                    </div>
                  </div>
                </div>

                {/* 1978 - 1983 */}
                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">1978</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Spécialisation en Rhumatologie</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Formation spécialisée en rhumatologie à l'Université de Montpellier, France.
                      Acquisition d'expertise en diagnostic et traitement des maladies rhumatismales.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">Université de Montpellier</span>
                      <span className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium">Spécialisation</span>
                    </div>
                  </div>
                </div>

                {/* 1972 - 1978 */}
                <div className="relative" data-aos="fade-up" data-aos-delay="300">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-1 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">1972</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Formation Médicale Initiale</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Études de médecine à la Faculté de Médecine de Rabat.
                      Formation générale en sciences médicales et pratique clinique.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">Faculté de Médecine de Rabat</span>
                      <span className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium">Médecine Générale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer group">
            <span>Prendre Rendez-vous</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}