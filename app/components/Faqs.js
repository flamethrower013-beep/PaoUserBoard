"use client";

import { useEffect, useState } from "react";

export default function Faqs() {
  const [faqsData, setFaqsData] = useState(null);

  useEffect(() => {
    fetch("/data/faqs.json")
      .then((res) => res.json())
      .then((data) => setFaqsData(data))
      .catch((err) => console.error("Failed to load FAQs:", err));
  }, []);

  if (!faqsData) {
    return <div className="text-center text-white py-10">Loading FAQs...</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-raisin-black-3 text-white rounded-lg shadow-lg my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{faqsData.title}</h1>
      <div className="space-y-4">
        {faqsData.faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-600 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
