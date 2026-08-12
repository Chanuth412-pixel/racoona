import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What environments do you support?",
    answer: "We support major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform (GCP), hybrid-cloud setups, and dedicated AWS GovCloud environments for regulated workloads."
  },
  {
    question: "Do you provide 24/7 monitoring?",
    answer: "Yes, our engineering team provides 24/7 continuous telemetry, real-time observability monitoring, and SLA-backed incident management to ensure maximum uptime."
  },
  {
    question: "Can you work with our existing IT team?",
    answer: "Absolutely. We seamlessly integrate with your in-house IT and DevOps teams, acting as specialized force multipliers for architecture, migration, and compliance initiatives."
  },
  {
    question: "Do you support government contractors?",
    answer: "Yes. We engineer FedRAMP, NIST 800-53, CMMC, and HIPAA-compliant cloud architectures tailored for defense contractors and highly regulated enterprises."
  },
  {
    question: "How does an infrastructure assessment work?",
    answer: "We perform a comprehensive audit of your active cloud workloads, network security policies, cost metrics, and deployment pipelines, producing a prioritized modernization roadmap."
  },
  {
    question: "How long does a typical migration take?",
    answer: "Depending on system complexity, a typical migration ranges from 4 to 12 weeks, executed using zero-downtime staging and automated migration scripts."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-200 shadow-sm"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-sans font-bold text-base text-slate-900 pr-4">
                {item.question}
              </span>
              <span className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-slate-600 text-sm font-sans leading-relaxed border-t border-slate-100 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
