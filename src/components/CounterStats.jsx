import React, { useState, useEffect, useRef } from "react";

const CounterStats = () => {
  const stats = [
    { value: 15, label: "Years of Experience", suffix: "+" },
    { value: 30, label: "Expert Teachers", suffix: "+" },
    { value: 300, label: "Students", suffix: "+" },
    { value: 20, label: "Learning Programs", suffix: "+" },
  ];

  const [count, setCount] = useState(stats.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (visible) {
      const intervals = stats.map((stat, i) =>
        setInterval(() => {
          setCount((prev) => {
            const updated = [...prev];
            if (updated[i] < stat.value) updated[i] += 1;
            return updated;
          });
        }, 30)
      );
      return () => intervals.forEach(clearInterval);
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-200 py-8"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2"
          >
            <h2 className="text-5xl font-extrabold text-[#052d69]">
              {count[index]}
              {stat.suffix}
            </h2>
            <p className="mt-2 text-[#031114] text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterStats;
