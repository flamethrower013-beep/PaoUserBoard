"use client";

import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    fetch("/data/privacy-policy.json")
      .then((res) => res.json())
      .then((data) => setPolicy(data))
      .catch((err) => console.error("Failed to load privacy policy:", err));
  }, []);

  if (!policy) {
    return <div className="text-center text-white py-10">Loading Privacy Policy...</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-raisin-black-3 text-white rounded-lg shadow-lg my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{policy.title}</h1>

      {policy.sections.map((section, idx) => (
        <section key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          {section.content && <p>{section.content}</p>}

          {section.contentList && (
            <ul className="list-disc list-inside space-y-1">
              {section.contentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
