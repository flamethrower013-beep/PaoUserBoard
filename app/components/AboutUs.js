"use client";

import { useEffect, useState } from "react";

export default function AboutUs() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("/data/about-us.json")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Failed to load About Us content:", err));
  }, []);

  if (!about) {
    return <div className="text-center text-white py-10">Loading About Us...</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-raisin-black-3 text-white rounded-lg shadow-lg my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{about.title}</h1>

      {about.sections.map((section, idx) => (
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
