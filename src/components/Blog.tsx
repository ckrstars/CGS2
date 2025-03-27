import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const Blog = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-navy mb-4">
            Latest Beauty Trends & Tips
          </h2>
          <p className="text-xl font-lora text-gray-600">
            Welcome to the Crazy Girls Salon Blog!
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="font-lora text-gray-700 mb-8">
            At Crazy Girls Salon, we believe that beauty is a journey, not just a destination. In this blog post, we're excited to share the latest trends in beauty, expert tips from our stylists, and insights into the services that keep our clients looking and feeling fabulous.
          </p>

          <h3 className="text-2xl font-playfair text-navy mb-4">
            Embracing the Art of Eyebrow & Facial Hair Styling
          </h3>
          <p className="font-lora text-gray-700 mb-4">
            Your eyebrows are the frame to your face. Our expert technicians specialize in precision eyebrow threading and tinting to create the perfect look for every face shape.
          </p>
          <ul className="list-disc pl-6 mb-8 font-lora text-gray-700">
            <li>Consistency is Key: Regular threading keeps your brows neat and balanced.</li>
            <li>Tinting Tips: Complement your skin tone with subtle eyebrow tinting for a fuller, well-defined look.</li>
            <li>Stay On Trend: Explore different shapes and styles to update your look seasonally.</li>
          </ul>

          <h3 className="text-2xl font-playfair text-navy mb-4">
            The Smooth Revolution: Waxing Services That Deliver
          </h3>
          <p className="font-lora text-gray-700 mb-4">
            Smooth, glowing skin is always in style. At Crazy Girls Salon, we offer a variety of waxing services designed for comfort and lasting results.
          </p>
          <ul className="list-disc pl-6 mb-8 font-lora text-gray-700">
            <li>Pre-Waxing Prep: Exfoliate and moisturize to achieve the best results.</li>
            <li>Post-Wax Care: Use soothing creams to maintain smoothness and prevent irritation.</li>
            <li>Innovative Techniques: Our experienced professionals use advanced methods that minimize discomfort.</li>
          </ul>

          <h3 className="text-2xl font-playfair text-navy mb-4">
            Pamper Yourself with Our Body Massage & Relaxation Treatments
          </h3>
          <p className="font-lora text-gray-700 mb-4">
            In today's fast-paced world, self-care is more important than ever. Our range of massage and body relaxation services is designed to melt away stress and rejuvenate your body and mind.
          </p>

          {/* Comment Section */}
          <div className="mt-12 bg-beige-light p-8 rounded-lg">
            <h4 className="text-xl font-playfair text-navy mb-4">Leave a Comment</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 font-lora"
                  rows={4}
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full font-lora transition-all duration-300"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;