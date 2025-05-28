import upcomingAppointments from '../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3 style={{ marginBottom: "15px" }}>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4 style={{ marginBottom: "10px", color: "#555" }}>{group.day}</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {group.appointments.map((appointment, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={appointment.title}
                time={appointment.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;