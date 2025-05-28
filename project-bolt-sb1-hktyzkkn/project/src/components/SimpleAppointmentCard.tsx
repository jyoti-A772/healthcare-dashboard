import React from "react";

interface CardProps {
  title: string;
  time: string;
}

const SimpleAppointmentCard: React.FC<CardProps> = ({ title, time }) => {
  return (
    <div style={{
      padding: "10px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      width: "180px"
    }}>
      <h4 style={{ fontSize: "14px", marginBottom: "5px" }}>{title}</h4>
      <p style={{ fontSize: "12px", color: "#777" }}>{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
