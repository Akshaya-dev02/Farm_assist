import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import WeatherWidget from "../components/WeatherWidget";

const quickActions = [
  { icon: "🌾", label: "Crop Recommendation", color: "bg-green-50 hover:bg-green-100", path: "/crop-recommendation" },
  { icon: "🔬", label: "Disease Detection", color: "bg-red-50 hover:bg-red-100", path: "/disease-detection" },
  { icon: "📈", label: "Market Prices", color: "bg-blue-50 hover:bg-blue-100", path: "/market-prices" },
  { icon: "🛒", label: "Marketplace", color: "bg-yellow-50 hover:bg-yellow-100", path: "/marketplace" },
  { icon: "🤖", label: "AI Assistant", color: "bg-purple-50 hover:bg-purple-100", path: "/ai-assistant" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user") || '{"name":"Farmer","state":"","district":""}'));
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [draftLocation, setDraftLocation] = useState({
    state: user.state || "",
    district: user.district || "",
  });

  const handleLocationSave = () => {
    const updatedUser = {
      ...user,
      state: draftLocation.state.trim(),
      district: draftLocation.district.trim(),
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditingLocation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* Welcome */}
        <div className="mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Welcome, {user.name}! 🌱
          </h2>
          <p className="text-gray-500 text-sm">
            Here's your personalized farming dashboard
          </p>
        </div>

        {/* Location Card */}
        {isEditingLocation ? (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-5 space-y-3">
            <p className="text-xs text-gray-400 mb-1">📍 Update Your Location</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                value={draftLocation.state}
                onChange={(e) => setDraftLocation((prev) => ({ ...prev, state: e.target.value }))}
                placeholder="State"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              />
              <input
                value={draftLocation.district}
                onChange={(e) => setDraftLocation((prev) => ({ ...prev, district: e.target.value }))}
                placeholder="District"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditingLocation(false)}
                className="text-sm text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleLocationSave}
                className="text-sm text-white bg-green-600 px-3 py-1.5 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-1">📍 Your Location</p>
              <div className="flex gap-2 flex-wrap">
                {user.state ? (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                    {user.state}
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">Add state</span>
                )}
                {user.district && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                    {user.district}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setDraftLocation({ state: user.state || "", district: user.district || "" });
                setIsEditingLocation(true);
              }}
              className="text-sm text-green-600 border border-green-300 px-3 py-1 rounded-lg hover:bg-green-50"
            >
              Update
            </button>
          </div>
        )}

        {/* Weather Widget */}
        <WeatherWidget locationOverride={{ state: user.state, district: user.district }} />

        {/* Quick Actions */}
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {quickActions.map((item) => (
            <button key={item.label} onClick={() => navigate(item.path)}
              className={`${item.color} rounded-xl p-4 text-center transition`}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm font-medium text-gray-700">{item.label}</p>
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-green-600">70+</p>
            <p className="text-xs text-gray-500">Crops</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600">7000+</p>
            <p className="text-xs text-gray-500">Mandis</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-purple-600">12</p>
            <p className="text-xs text-gray-500">Languages</p>
          </div>
        </div>

        {/* Need Help */}
        <div className="bg-green-600 rounded-xl p-4 text-white flex items-center justify-between">
          <div>
            <p className="font-semibold">Need Help? 🤖</p>
            <p className="text-sm opacity-80">Ask our AI farming assistant</p>
          </div>
          <button onClick={() => navigate("/ai-assistant")}
            className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 whitespace-nowrap">
            Chat with AI
          </button>
        </div>

      </div>
    </div>
  );
}