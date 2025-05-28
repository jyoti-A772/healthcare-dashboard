import React from "react";
import { healthIndicators } from "../data/healthData";

const AnatomySection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
      <h3 className="text-xl font-semibold mb-4">Body Health Indicators</h3>
      <div className="flex items-start gap-8">
        <div className="relative w-[300px]">
          <img 
            src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg"
            alt="Human Anatomy"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <ul className="space-y-3 flex-1">
          {healthIndicators.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-700">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnatomySection;