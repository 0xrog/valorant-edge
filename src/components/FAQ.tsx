import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Are your cheats undetected?",
      answer: "Yes, our cheats use advanced technology to remain undetected by Valorant's anti-cheat system. We regularly update our software to stay ahead of detection methods."
    },
    {
      question: "How do I install the cheats?",
      answer: "After purchase, you'll receive detailed installation instructions. The process is simple and typically takes less than 5 minutes. Our support team is available 24/7 if you need assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and various cryptocurrencies including Bitcoin, Ethereum, and Litecoin for enhanced privacy."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 24-hour money-back guarantee if our products don't work as described. Please contact our support team for assistance with any issues before requesting a refund."
    },
    {
      question: "How often do you update your cheats?",
      answer: "We update our cheats regularly to ensure they remain undetected and compatible with the latest game updates. Premium subscribers receive priority access to all updates."
    },
    {
      question: "Can I use the cheats on multiple computers?",
      answer: "Each license is tied to one computer. If you need to use the cheats on multiple devices, you'll need to purchase additional licenses or contact our support team for special arrangements."
    },
    {
      question: "Is there a risk of getting banned?",
      answer: "While we use advanced technology to minimize detection risk, no cheat is 100% undetectable forever. We recommend using our products with reasonable settings to reduce the risk of reports from other players."
    },
    {
      question: "Do you offer custom features?",
      answer: "Yes, for VIP customers we offer custom feature development. Contact our support team to discuss your specific requirements and pricing."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 rounded-lg overflow-hidden border ${
                  openIndex === index ? 'border-purple-500/50' : 'border-gray-800'
                } transition-colors duration-300`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fadeIn">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Still have questions? Contact our support team
          </p>
          <a 
            href="#" 
            className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;