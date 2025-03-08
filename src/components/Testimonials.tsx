import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "The aimbot is incredibly smooth and customizable. I've been using it for months without any detection issues.",
      author: "Alex K.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      game: "Valorant",
      date: "2 months ago"
    },
    {
      content: "Customer support is amazing. They helped me set everything up and were available whenever I had questions.",
      author: "Sarah M.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      game: "Valorant",
      date: "1 month ago"
    },
    {
      content: "The ESP features are game-changing. Being able to see enemies through walls gives me a huge advantage.",
      author: "Michael T.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      game: "Valorant",
      date: "3 weeks ago"
    },
    {
      content: "I've tried other cheats before, but ValorantEdge is by far the most reliable and feature-rich option available.",
      author: "Jessica R.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      game: "Valorant",
      date: "1 week ago"
    },
    {
      content: "The recoil control is perfect. I can now hit shots I never could before. Worth every penny!",
      author: "David L.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      game: "Valorant",
      date: "2 days ago"
    },
    {
      content: "I was skeptical at first, but after using the Ultimate Bundle for a week, I've ranked up twice already!",
      author: "Emma W.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      game: "Valorant",
      date: "5 days ago"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };
  
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div id="testimonials" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            What Our Customers Say
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative overflow-hidden group"
              >
                <div className="absolute -top-6 -left-6 opacity-10 text-purple-300 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={80} />
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 relative z-10">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      className="h-10 w-10 rounded-full object-cover border-2 border-purple-500" 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">{testimonial.author}</p>
                      <p className="text-xs text-gray-400">{testimonial.game} Player</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          {pageCount > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button 
                onClick={prevPage}
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {[...Array(pageCount)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full ${
                    currentPage === i ? 'bg-purple-500' : 'bg-gray-600'
                  } transition-colors duration-200`}
                />
              ))}
              <button 
                onClick={nextPage}
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;