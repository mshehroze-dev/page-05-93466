import React from "react";
interface Plan {
  name: string;
  price: string;
  features: string[];
  cta?: string;
}
interface PricingSectionProps {
  plans: Plan[];
}
export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Choose the Plan That's Right for You</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">Simple, transparent pricing for teams of all sizes.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`border rounded-lg p-8 flex flex-col ${plan.name === 'Pro' ? 'border-[#8247FF] border-2 relative' : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"}`}>
              {plan.name === 'Pro' && <span className="absolute top-0 -translate-y-1/2 bg-[#8247FF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase left-1/2 -translate-x-1/2">Most Popular</span>}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.name !== 'Basic' && plan.name !== 'Enterprise' && <span className="text-gray-500 dark:text-gray-400">/ month</span>}
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`w-full text-center font-semibold py-3 px-6 rounded-md transition-colors ${plan.name === 'Pro' ? 'bg-[#8247FF] text-white hover:bg-opacity-90' : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
