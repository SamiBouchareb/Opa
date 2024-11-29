import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  isLocalGuide?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Salima Nosser",
    text: "C'est le meilleur de toute la région de Casablanca. Des connaissances illimitées et une approche unique que je n'ai vue qu'avec des médecins en France. Merci infiniment docteur, car sans vous, j'aurais pu être handicapée. Allah itawel liik fi romrek. Amin.",
    rating: 5
  },
  {
    name: "Wafa Ourghite",
    text: "Le médecin est très compétent, mes douleurs ont disparu dès la première semaine. Merci docteur 🙏🏻",
    rating: 5
  },
  {
    name: "Afaf El Abdioui",
    text: "Bonjour, Merci beaucoup Docteur, vous m'avez sauvée. On m'avait dit que je devais me faire opérer pour ma hernie discale, et je suis allée voir le Docteur Bouchareb. Dès la première séance, j'ai ressenti un soulagement, c'était vraiment spectaculaire ! Après 3 séances, les douleurs ont disparu. Je ne peux pas assez remercier le docteur 🙏",
    rating: 5
  },
  {
    name: "Issam FTH",
    text: "J'ai beaucoup apprécié ce médecin qui est très intelligent, compétent et à jour dans ce domaine. Je confirme qu'il est le meilleur et comme l'a dit le monsieur avant moi, c'est un miracle. Il écoute et fait de son mieux pour transmettre les informations simplement. Merci beaucoup Docteur. L'assistante est également très gentille. Merci pour le service.",
    rating: 5,
    isLocalGuide: true
  },
  {
    name: "Mehdi EL BOUKILI",
    text: "Je ne peux que le recommander chaleureusement, un médecin très compétent et merveilleux. Merci beaucoup Docteur.",
    rating: 5,
    isLocalGuide: true
  },
  {
    name: "ADIL BENMOUSSA",
    text: "Dès la première consultation, je confirme un médecin compétent et excellent Hamdoulah, et après une semaine de traitement, j'ai oublié les douleurs. Merci beaucoup Docteur",
    rating: 5,
    isLocalGuide: true
  },
  {
    name: "Aziz El Hadouni",
    text: "Le meilleur rhumatologue du Maroc (Docteur miracle), après cinq ans de consultations avec d'autres médecins (Casablanca, Marrakech et Safi), les douleurs ont disparu dès la première séance. Je le remercie beaucoup. اللهم بارك",
    rating: 5
  },
  {
    name: "Mouna Mouline",
    text: "Excellent médecin!!",
    rating: 5
  },
  {
    name: "I. Maj",
    text: "Excellent rhumatologue, compétent et pertinent",
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-xl p-8 mx-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-bl-full transform translate-x-8 -translate-y-8" />
      
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-blue-500/20 transform group-hover:scale-110 transition-transform duration-300">
        <Quote size={40} />
      </div>

      {/* Header */}
      <div className="flex items-start space-x-4 mb-6 relative">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            {testimonial.name.charAt(0)}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">{testimonial.name}</h3>
          <div className="flex items-center space-x-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        {testimonial.isLocalGuide && (
          <span className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full shadow-md">
            Guide Local
          </span>
        )}
      </div>

      {/* Testimonial Text */}
      <div className="relative">
        <p className="text-gray-600 leading-relaxed text-sm">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Témoignages de nos patients
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg">
          Découvrez les expériences de nos patients avec Dr. Abdeali
        </p>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
            ))}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
