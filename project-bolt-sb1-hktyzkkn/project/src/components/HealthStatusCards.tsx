// src/components/HealthStatusCards.tsx
import React from "react";
import { healthCards } from "../data/healthData";

const HealthStatusCards = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {healthCards.map((card, idx) => (
        <div
          key={idx}
          style={{
            flex: 1,
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h4 style={{ marginBottom: "8px" }}>{card.title}</h4>
          <p style={{ margin: "4px 0", color: "#888" }}>{card.date}</p>
          <p style={{ margin: "4px 0", fontWeight: "bold", color: card.status === "Alert" ? "red" : "green" }}>
            {card.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
