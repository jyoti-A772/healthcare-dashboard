import React from "react";

const ActivityFeed = () => {
  const bars = [60, 90, 50, 70, 100, 80, 40]; // heights for each day

  return (
    <div style={{ marginTop: "30px" }}>
      <h3 style={{ marginBottom: "8px" }}>Activity</h3>
      <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
        3 appointments on this week
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "12px",
          height: "120px",
        }}
      >
        {bars.map((height, index) => (
          <div
            key={index}
            style={{
              width: "12px",
              height: `${height}px`,
              backgroundColor: "#4A90E2",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
