import React from "react";
interface FAQItem {
  q: string;
  a: string;
}
interface FAQSectionProps {
  items: FAQItem[];
}
export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Have questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <details key={index} className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 dark:text-white list-none">
                  <span>{item.q}</span>
                  <svg className="h-6 w-6 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
