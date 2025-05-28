import calendarData from '../data/calendarAppointments';

const CalendarView = () => {
  const { month, daysWithAppointments, appointmentCards } = calendarData;

  const renderDays = () => {
    const days = [];

    for (let i = 1; i <= 31; i++) {
      const appointments = daysWithAppointments[i] || [];

      days.push(
        <div key={i} style={{ border: "1px solid #ccc", padding: "10px", minHeight: "60px" }}>
          <strong>{i}</strong>
          <div>
            {appointments.map((time, idx) => (
              <div key={idx} style={{ fontSize: "12px", color: "#3498db" }}>{time}</div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{month}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
          marginBottom: "20px"
        }}
      >
        {renderDays()}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {appointmentCards.map((card, idx) => (
          <div key={idx} style={{
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            flex: 1,
            textAlign: "center"
          }}>
            <h4>{card.type}</h4>
            <p>{card.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;