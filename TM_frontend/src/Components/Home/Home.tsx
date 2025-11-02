import { useNavigate } from "react-router-dom";
import { LuCalendar, LuTarget } from "react-icons/lu";
import { FaTasks, FaRocket, FaCheckCircle, FaChartBar } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaTasks className="text-4xl text-blue-500" />,
      title: "Task Management",
      description: "Organize and manage all your tasks in one place with ease.",
    },
    {
      icon: <LuCalendar className="text-4xl text-green-500" />,
      title: "Due Date Tracking",
      description: "Never miss a deadline with our smart date tracking system.",
    },
    {
      icon: <FaChartBar className="text-4xl text-purple-500" />,
      title: "Priority System",
      description:
        "Focus on what matters most with high, medium, and low priorities.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-orange-500" />,
      title: "Status Tracking",
      description:
        "Track your progress from pending to in-progress to completed.",
    },
  ];

  return (
    <div className="w-full  min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="w-full bg-[#101828] min-h-screen allcenter flex-col px-4 py-20">
        <div className="max-w-6xl w-full allcenter flex-col gap-8 text-center">
          {/* Main Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="tighter text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Task Manager
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Organize your life, boost your productivity. Manage tasks
              efficiently with our powerful task management system.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap  gap-4 justify-center mt-6">
            <button
              onClick={() => navigate("/get-started")}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaRocket className="text-xl" />
              Get Started
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Dashboard
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">Productivity Boost</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 mt-2">Always Available</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-purple-600">Easy</div>
              <div className="text-gray-600 mt-2">To Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-[#101828]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="tighter text-white text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Everything you need to stay organized and productive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-[#101828]">
        <div className="max-w-4xl mx-auto text-center">
          <LuTarget className="text-6xl text-white mx-auto mb-6" />
          <h2 className="tighter text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their tasks more
            efficiently.
          </p>
          <button
            onClick={() => navigate("/get-started")}
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Start Managing Tasks Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
