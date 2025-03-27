import React, { useState } from 'react';
import { Scissors, Spa, Paintbrush, Camera, Sparkles, Heart } from 'lucide-react';

/**
 * Main App component for Crazy Girls Salon
 */
function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="app min-h-screen bg-beige-light">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-navy text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="font-playfair text-2xl font-bold text-gold">Crazy Girls Salon</div>
            <div className="hidden md:flex space-x-8">
              <a onClick={() => scrollToSection('home')} 
                className={`cursor-pointer hover:text-gold transition-colors ${activeSection === 'home' ? 'text-gold' : ''}`}>Home</a>
              <a onClick={() => scrollToSection('services')} 
                className={`cursor-pointer hover:text-gold transition-colors ${activeSection === 'services' ? 'text-gold' : ''}`}>Services</a>
              <a onClick={() => scrollToSection('about')} 
                className={`cursor-pointer hover:text-gold transition-colors ${activeSection === 'about' ? 'text-gold' : ''}`}>About</a>
              <a onClick={() => scrollToSection('testimonials')} 
                className={`cursor-pointer hover:text-gold transition-colors ${activeSection === 'testimonials' ? 'text-gold' : ''}`}>Testimonials</a>
              <a onClick={() => scrollToSection('contact')} 
                className={`cursor-pointer hover:text-gold transition-colors ${activeSection === 'contact' ? 'text-gold' : ''}`}>Contact</a>
              <a onClick={() => scrollToSection('booking')} 
                className="bg-gold hover:bg-gold/80 px-4 py-2 rounded-full text-white transition-all">Book Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair mb-6">
              Discover True Relaxation
            </h1>
            <p className="text-xl md:text-2xl font-lora mb-8 max-w-2xl mx-auto">
              Experience luxury wellness and rejuvenation at its finest
            </p>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105">
              Book Your Experience
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Section */}
        <section id="services" className="mb-24 scroll-mt-20">
          <h2 className="text-4xl font-playfair text-navy mb-16 text-center relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gold after:mx-auto after:mt-4">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <Scissors className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Hair Styling</h3>
                <p className="text-gray-700">Our expert stylists provide cuts, colors, and styling tailored to your unique look and personality.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-navy">from $30</span>
                  <button className="text-gold hover:text-gold/80 font-medium">Learn more →</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <Spa className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Spa Treatments</h3>
                <p className="text-gray-700">Indulge in our rejuvenating facials and massages designed to relax and revitalize your body and mind.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-navy">from $45</span>
                  <button className="text-gold hover:text-gold/80 font-medium">Learn more →</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <Paintbrush className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Nail Care</h3>
                <p className="text-gray-700">Our premium manicures and pedicures will keep your nails looking perfect for any occasion.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-navy">from $25</span>
                  <button className="text-gold hover:text-gold/80 font-medium">Learn more →</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <Camera className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Makeup</h3>
                <p className="text-gray-700">Professional makeup services for weddings, special events, or whenever you want to look your absolute best.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-navy">from $35</span>
                  <button className="text-gold hover:text-gold/80 font-medium">Learn more →</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <Heart className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Waxing</h3>
                <p className="text-gray-700">Our gentle waxing treatments ensure smooth, beautiful skin with minimal discomfort.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-navy">from $15</span>
                  <button className="text-gold hover:text-gold/80 font-medium">Learn more →</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <Sparkles className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Bridal Packages</h3>
                <p className="text-gray-700">Comprehensive beauty services to make you and your bridal party look stunning on your special day.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-navy">from $150</span>
                  <button className="text-gold hover:text-gold/80 font-medium">Learn more →</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105">
              View All Services
            </button>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <h2 className="text-4xl font-playfair text-navy mb-16 text-center relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gold after:mx-auto after:mt-4">About Us</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Salon Interior" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover" 
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gold">Our Story</h3>
                <p className="text-lg text-gray-700">
                  At Crazy Girls Salon, we believe in providing an exceptional experience that leaves you feeling refreshed, 
                  confident, and beautiful. Our team of skilled professionals is dedicated to delivering the highest quality 
                  services in a luxurious and welcoming environment.
                </p>
                <p className="text-lg text-gray-700">
                  Founded in 2015, our salon has quickly become known for its attention to detail, premium products, 
                  and personalized approach to beauty and wellness.
                </p>
                <p className="text-lg text-gray-700">
                  We use only the finest products and stay current with the latest trends and techniques to ensure 
                  that every client receives the best possible service.
                </p>
                <div className="pt-4">
                  <button className="bg-navy hover:bg-navy/80 text-white font-lora py-3 px-8 rounded-full transition-all transform hover:scale-105">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="mb-24 py-16 bg-beige-dark/20 rounded-xl shadow-inner px-8 scroll-mt-20">
          <h2 className="text-4xl font-playfair text-navy mb-16 text-center relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gold after:mx-auto after:mt-4">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">SJ</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Sarah Johnson</h3>
                  <div className="text-gold flex">★★★★★</div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "The best salon experience I've ever had! The staff was professional and friendly, and my hair looks amazing. I'll definitely be coming back."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">MP</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Michelle Parker</h3>
                  <div className="text-gold flex">★★★★★</div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "I love how relaxed I feel after my spa treatments here. The atmosphere is so peaceful and the staff truly cares about your experience. Truly a luxury experience!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Jennifer Davis</h3>
                  <div className="text-gold flex">★★★★★</div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "My nails have never looked better! The attention to detail and the care they take with every client is impressive. This is now my go-to salon."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105">
              See More Reviews
            </button>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="mb-24 scroll-mt-20">
          <h2 className="text-4xl font-playfair text-navy mb-16 text-center relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gold after:mx-auto after:mt-4">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gold">Get in Touch</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" 
                      placeholder="Enter your email" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Message</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold h-32" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="bg-gold hover:bg-gold/90 text-white font-bold py-3 px-8 rounded-lg transition-all w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-navy text-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-gold">Visit Our Salon</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2 text-gold">Address</h4>
                    <p className="text-white/80">123 Beauty Lane, Luxury District, New York, NY 10001</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2 text-gold">Hours</h4>
                    <p className="text-white/80">Monday - Friday: 9am - 8pm</p>
                    <p className="text-white/80">Saturday: 9am - 6pm</p>
                    <p className="text-white/80">Sunday: 10am - 5pm</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2 text-gold">Contact</h4>
                    <p className="text-white/80">Phone: (555) 123-4567</p>
                    <p className="text-white/80">Email: info@crazygirlssalon.com</p>
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-gold hover:bg-gold/90 text-white font-bold py-3 px-8 rounded-lg transition-all w-full">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section id="booking" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-playfair text-navy mb-16 text-center relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gold after:mx-auto after:mt-4">Book an Appointment</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" 
                      placeholder="Enter your email" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Service Type</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">
                      <option>Select a service</option>
                      <option>Hair Styling</option>
                      <option>Spa Treatment</option>
                      <option>Nail Care</option>
                      <option>Makeup</option>
                      <option>Waxing</option>
                      <option>Bridal Package</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Preferred Time</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">
                      <option>Select a time</option>
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Special Requests</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold h-32" 
                    placeholder="Any special requests or preferences?"
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-gold hover:bg-gold/90 text-white font-bold py-3 px-8 rounded-lg transition-all w-full text-lg">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold">Crazy Girls Salon</h3>
              <p className="text-white/70 mb-4">
                Experience luxury wellness and rejuvenation at its finest. Our team is dedicated to making you look and feel your best.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Hair Styling</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Spa Treatments</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Nail Care</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Makeup</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Waxing</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Bridal Packages</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Home</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Services</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Book Now</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold">Hours</h3>
              <ul className="space-y-2">
                <li className="text-white/70">Monday: 9am - 8pm</li>
                <li className="text-white/70">Tuesday: 9am - 8pm</li>
                <li className="text-white/70">Wednesday: 9am - 8pm</li>
                <li className="text-white/70">Thursday: 9am - 8pm</li>
                <li className="text-white/70">Friday: 9am - 8pm</li>
                <li className="text-white/70">Saturday: 9am - 6pm</li>
                <li className="text-white/70">Sunday: 10am - 5pm</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Crazy Girls Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 