import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingTier: React.FC<{
  title: string;
  price: string;
  features: string[];
  ctaLink: string;
  recommended?: boolean;
  bestValue?: boolean;
  delay?: number;
}> = ({ title, price, features, ctaLink, recommended = false, bestValue = false, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full transform hover:scale-105 transition-all duration-300 ${
        recommended ? 'border-2 border-blue-500' : ''
      } ${bestValue ? 'border-2 border-green-500' : ''}`}
    >
      {recommended && (
        <div className="bg-blue-500 text-white text-xs font-bold uppercase py-1.5 px-3 rounded-full mb-4 inline-block self-start">
          Recommended
        </div>
      )}
      {bestValue && (
        <div className="bg-green-500 text-white text-xs font-bold uppercase py-1.5 px-3 rounded-full mb-4 inline-block self-start">
          Best Value
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-5xl font-bold">{price.split('/')[0]}</span>
        <span className="text-gray-500 ml-2">/month</span>
      </div>
      <ul className="mb-8 flex-grow space-y-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="flex items-center"
          >
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>
      <motion.a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 mt-auto"
      >
        Get Started
      </motion.a>
    </motion.div>
  );
};

const FeatureComparison: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-white rounded-2xl shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-center">Self-Serve</th>
              <th className="p-4 text-center">Done-for-You</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Review Management",
              "AI Reply Automation",
              "Video Reviews",
              "Citation Optimization",
              "Google Posting",
              "Authority Building",
              "Dedicated Account Manager",
              "Detailed Reporting"
            ].map((feature, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="border-b border-gray-100"
              >
                <td className="p-4">{feature}</td>
                <td className="p-4 text-center">
                  {['Review Management', 'AI Reply Automation', 'Video Reviews'].includes(feature) ? 
                    <CheckCircle className="h-5 w-5 text-green-500 inline" /> : 
                    <X className="h-5 w-5 text-red-500 inline" />
                  }
                </td>
                <td className="p-4 text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 inline" />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to enhance your online presence and manage your Google reviews effectively.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingTier
            title="Self-Serve Platform"
            price="$99/month"
            features={[
              "One location",
              "All integrations",
              "Review landing page",
              "Video reviews",
              "AI reply automation",
              "Unlimited text messaging",
              "Unlimited emails",
              "Unlimited WhatsApp messages"
            ]}
            ctaLink="https://checkout.stripe.com/c/pay/cs_live_b14WoVNZs3NvTN7oBWKoWH5T2PTRqxYsKaLG2PLqrpK5707NyKJDcrl3S7#fidkdWxOYHwnPyd1blppbHNgWjA0SGQxc3xPbkMxfDVBbnxjckp2Q19xRHJSaGdxY0lqQmZ%2FUVJXTEpjMjE1XzZcZ2BLaVdGXGJBVUxVZ0c1RGpTcjNDSmk9RkJtNVx3NG9uNDF8Q2Yzd3FcNTVDUUlcTmlkQCcpJ3ZwZ3Zmd2x1cWxqa1BrbHRwYGtgdnZAa2RnaWBhJz9jZGl2YHgl"
            bestValue={true}
            delay={0.2}
          />
          <PricingTier
            title="Done-for-You Service"
            price="$599/month"
            features={[
              "Full Google review management",
              "Citation optimization",
              "Google posting",
              "Authority building",
              "Image uploads",
              "Answering Q&As",
              "Detailed reporting",
              "Dedicated account manager"
            ]}
            ctaLink="https://buy.stripe.com/9AQ00Q6lfgRf7Pq8x7"
            recommended={true}
            delay={0.4}
          />
        </div>
        <FeatureComparison />
      </div>
    </section>
  );
};

export default Services;