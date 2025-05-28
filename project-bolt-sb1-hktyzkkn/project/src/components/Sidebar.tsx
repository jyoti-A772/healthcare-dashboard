import navigationLinks from "../data/navigationLinks";

const Sidebar = () => {
  return (
    <div className="w-48 bg-blue-900 text-white h-screen p-4">
      <h1 className="text-xl font-bold mb-6">HealthCare</h1>
      <ul className="space-y-3">
        {navigationLinks.map((link, idx) => (
          <li
            key={idx}
            className="hover:bg-blue-700 px-3 py-2 rounded cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
