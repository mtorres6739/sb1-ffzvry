import React from 'react';
import { TrendingUp, Users, Award, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueProposition: React.FC = () => {
  const benefits = [
    { 
      icon: TrendingUp, 
      title: "Boost Your Rankings", 
      description: "Improve your local SEO and appear higher in Google search results with our proven optimization strategies.",
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: Users, 
      title: "Attract More Customers", 
      description: "Build trust and credibility with potential customers through authentic, positive reviews and enhanced online presence.",
      color: "from-purple-400 to-purple-600"
    },
    { 
      icon: Award, 
      title: "Stand Out from Competitors", 
      description: "Differentiate your business with a strong online reputation and professional review management system.",
      color: "from-green-400 to-green-600"
    },
    { 
      icon: BarChart, 
      title: "Track Your Progress", 
      description: "Monitor your review growth and performance with detailed analytics and comprehensive reporting tools.",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose RevAttitude?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg shadow-lg"></div>
              <div className="relative h-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group-hover:border-transparent flex flex-col">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;