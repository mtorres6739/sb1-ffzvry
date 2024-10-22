import React from 'react';
import { UserPlus, Link as LinkIcon, Settings, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    { 
      icon: UserPlus, 
      title: "Sign Up", 
      description: "Choose your plan and create your account",
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: LinkIcon, 
      title: "Connect", 
      description: "Link your Google My Business profile",
      color: "from-purple-400 to-purple-600"
    },
    { 
      icon: Settings, 
      title: "Customize", 
      description: "Set up your review funnel and templates",
      color: "from-green-400 to-green-600"
    },
    { 
      icon: TrendingUp, 
      title: "Grow", 
      description: "Watch your reviews and rankings improve",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;