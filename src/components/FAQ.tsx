import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does RevAttitude help improve my Google reviews?",
      answer: "RevAttitude provides tools to automate review requests, manage responses, and optimize your Google My Business profile, leading to more positive reviews and improved local SEO."
    },
    {
      question: "Is RevAttitude suitable for all types of businesses?",
      answer: "Yes, RevAttitude is designed to help businesses of all sizes and industries improve their online reputation and local search rankings."
    },
    {
      question: "How long does it take to see results?",
      answer: "While results can vary, many of our clients see a significant increase in reviews and improved rankings within the first 30-60 days of using RevAttitude."
    },
    {
      question: "Can I use RevAttitude for multiple business locations?",
      answer: "Absolutely! Our platform is designed to handle multiple locations, making it perfect for businesses with several branches or franchises."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;