import React from 'react';
import { Users, Target, Award, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Expert Team",
      value: "20+",
      description: "Professional stylists and beauticians"
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Years of Excellence",
      value: "15+",
      description: "Serving our community"
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Satisfied Clients",
      value: "10,000+",
      description: "Happy and returning customers"
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Quality Services",
      value: "50+",
      description: "Professional beauty treatments"
    }
  ];

  return (
    <section className="py-24 bg-beige-light" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-navy mb-4">About Us</h2>
          <p className="text-xl font-lora text-gray-600">Welcome to Crazy Girls Salon!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-playfair text-navy mb-6">Our Story</h3>
            <p className="font-lora text-gray-700 mb-6">
              Crazy Girls Salon began as a dream to create a space where innovation meets elegance. Founded by a team of experienced beauty professionals, our journey started with a single vision: to transform everyday routines into extraordinary experiences.
            </p>
            <p className="font-lora text-gray-700">
              Today, our salon is known for its stylish ambiance, state-of-the-art techniques, and a dedicated team that treats each client like family.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Salon Interior"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h4 className="text-2xl font-playfair text-navy mb-2">{stat.value}</h4>
              <p className="font-lora text-gray-600 mb-2">{stat.title}</p>
              <p className="text-sm font-lora text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-playfair text-navy mb-6 text-center">Our Mission</h3>
          <p className="font-lora text-gray-700 text-center mb-12">
            Our mission is simple – to empower you to express your true self through exceptional beauty services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-playfair text-navy mb-4">What Sets Us Apart</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="font-lora text-gray-700">Passionate Experts committed to ongoing education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="font-lora text-gray-700">Personalized Experience for every client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="font-lora text-gray-700">Luxurious Environment with modern amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="font-lora text-gray-700">Quality and Safety as our top priorities</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Salon Service"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

