"use client";
import React, { useState, useEffect } from "react";

interface Stat {
  value: string;
  label: string;
}

const AnimatedCounter = ({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^\d]/g, ""));
    const suffix = value.replace(/[\d]/g, "");
    let start = 0;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  const suffix = value.replace(/[\d]/g, "");
  return `${count}${suffix}`;
};

const STATS_DATA: Stat[] = [
  { value: "300+", label: "Participantes" },
  { value: "6", label: "Palestrantes" },
  { value: "8h", label: "De conteúdo" },
];

export default function SimpleStatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="group">
              <h3 className="text-3xl md:text-5xl font-bold mb-2 text-blue-600 transition-colors">
                {isVisible ? <AnimatedCounter value={stat.value} /> : "0"}
              </h3>
              <p className="text-gray-600 text-sm md:text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
