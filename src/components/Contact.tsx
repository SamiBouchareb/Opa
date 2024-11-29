import React from 'react';
import { MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';

interface OpeningHours {
  days: string[];
  hours: string;
  isToday: boolean;
}

const openingHours: OpeningHours[] = [
  { 
    days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    hours: '09:00–17:00',
    isToday: false
  },
  { 
    days: ['Samedi'],
    hours: '09:00–12:30',
    isToday: false
  },
  { 
    days: ['Dimanche'],
    hours: 'Fermé',
    isToday: false
  }
];

const Contact: React.FC = () => {
  // Update isToday based on current day
  React.useEffect(() => {
    const today = new Date().getDay();
    openingHours.forEach((timeSlot) => {
      const dayIndices = timeSlot.days.map(day => {
        const dayMap: { [key: string]: number } = {
          'Lundi': 1, 'Mardi': 2, 'Mercredi': 3, 'Jeudi': 4,
          'Vendredi': 5, 'Samedi': 6, 'Dimanche': 0
        };
        return dayMap[day];
      });
      timeSlot.isToday = dayIndices.includes(today);
    });
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Prenez rendez-vous ou visitez notre cabinet pour une consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Notre adresse</h3>
                  <p className="text-gray-600 leading-relaxed">
                    124 Bd Rahal El Meskini<br />
                    Casablanca 20120, Maroc
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Téléphone</h3>
                  <a href="tel:+212522319741" className="text-blue-600 hover:text-blue-700 font-medium">
                    +212 5223-19741
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Horaires d'ouverture</h3>
                </div>
              </div>
              <div className="space-y-2">
                {openingHours.map((timeSlot, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center p-2 rounded-xl transition-colors ${
                      timeSlot.isToday 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium flex items-center">
                      {timeSlot.isToday && (
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      )}
                      {timeSlot.days.length > 1 ? (
                        `${timeSlot.days[0]} - ${timeSlot.days[timeSlot.days.length - 1]}`
                      ) : (
                        timeSlot.days[0]
                      )}
                    </span>
                    <span className={timeSlot.isToday ? 'font-semibold' : ''}>
                      {timeSlot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-xl p-2 h-[600px] transform transition-all duration-300 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846508843305!2d-7.6326611!3d33.5891528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282387b785d%3A0x3488829b8de1177b!2s124%20Bd%20Rahal%20El%20Meskini%2C%20Casablanca%2020120%2C%20Morocco!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;