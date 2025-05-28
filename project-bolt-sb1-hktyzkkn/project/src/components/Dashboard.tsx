import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6 bg-gray-100 min-h-screen">
      <div className="flex space-x-4">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className="flex space-x-4">
        <CalendarView />
        <ActivityFeed />
      </div>
      <UpcomingSchedule />
    </div>
  );
};

export default Dashboard;
