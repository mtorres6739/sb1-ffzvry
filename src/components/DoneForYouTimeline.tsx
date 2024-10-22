import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem: React.FC<{ day: string; title: string; description: string; duration: string }> = ({ day, title, description, duration }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-8 sm:pl-32 py-6 group"
  >
    <div className="font-bold text-2xl text-blue-600 mb-1 sm:mb-0">{day}</div>
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gradient-to-b before:from-blue-300 before:to-blue-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 hover:after:scale-150 after:transition-transform">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">{duration}</time>
      <div className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">{title}</div>
    </div>
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-slate-500 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      {description}
    </motion.div>
  </motion.div>
);

const DoneForYouTimeline: React.FC = () => {
  const timelineItems = [
    {
      day: "Day 1",
      title: "Client Onboarding",
      description: "You've completed the onboarding form, and we've immediately assigned an SEO expert to dive into the details of your business and website, ensuring we identify the most effective keywords and strategy for your success.",
      duration: "1 day"
    },
    {
      day: "Day 5",
      title: "Initial Setup",
      description: "With your keyword strategy finalized, we'll begin building your master citation in our Listings platform, along with setting up your review request tools to get you started on the right foot.",
      duration: "4 days"
    },
    {
      day: "Day 20",
      title: "Citations Optimization",
      description: "We've started syncing, updating, and creating new citations for your business across all major search directories and location-based apps. These updates will continue regularly to strengthen your online authority.",
      duration: "15 days"
    },
    {
      day: "Day 30",
      title: "Review Management",
      description: "We're now actively managing your Google reviews, starting with responses to any reviews up to 90 days old. Moving forward, we'll be engaging with new reviews approximately every two business days to ensure your customers feel heard.",
      duration: "10 days"
    },
    {
      day: "Day 45",
      title: "Google Posts",
      description: "Our team has already crafted SEO-optimized business updates tailored to your strategy, and we've designed custom graphics to match. We'll begin posting these updates to your Google Business profile on a weekly basis.",
      duration: "15 days"
    },
    {
      day: "Day 55",
      title: "Service Descriptions",
      description: "We've optimized the service descriptions within your Google Business Profile to ensure they are perfectly aligned with your keywords, boosting your visibility.",
      duration: "10 days"
    },
    {
      day: "Day 56+",
      title: "Ongoing Optimization",
      description: "We continue to enhance your online presence through regular updates, monitoring, and optimization of all aspects of your Google Business Profile and online presence.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Done-for-You Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we transform your online presence and improve your Google reviews over time with our comprehensive management service.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              day={item.day}
              title={item.title}
              description={item.description}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoneForYouTimeline;