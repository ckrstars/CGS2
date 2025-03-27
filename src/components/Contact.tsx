import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-beige-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-navy mb-4">Contact Us</h2>
          <p className="text-xl font-lora text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-playfair text-navy mb-6">Visit Our Salon</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-playfair text-lg text-navy mb-2">Location</h4>
                  <p className="font-lora text-gray-600">
                    123 Relaxation Ave<br />
                    Wellness City, WC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-playfair text-lg text-navy mb-2">Phone</h4>
                  <p className="font-lora text-gray-600">
                    <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-playfair text-lg text-navy mb-2">Email</h4>
                  <p className="font-lora text-gray-600">
                    <a href="mailto:info@crazygirlssalon.com" className="hover:text-gold transition-colors">
                      info@crazygirlssalon.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-playfair text-lg text-navy mb-2">Hours</h4>
                  <div className="font-lora text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                    <p>Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-playfair text-lg text-navy mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;