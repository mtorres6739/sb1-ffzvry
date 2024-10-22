import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const StatItem: React.FC<{ icon: React.ElementType; value: string; label: string }> = ({ icon: Icon, value, label }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-gray-600">{label}</div>
  </motion.div>
);

const Statistics: React.FC = () => {
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
          RevAttitude by the Numbers
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StatItem 
            icon={Shield} 
            value="100%" 
            label="Customer Satisfaction Target" 
          />
          <StatItem 
            icon={Zap} 
            value="24/7" 
            label="Review Monitoring" 
          />
          <StatItem 
            icon={Target} 
            value="30%" 
            label="Average Response Rate Improvement" 
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;