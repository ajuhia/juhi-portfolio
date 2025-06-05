
import React from 'react';

const Community = () => {
  const activities = [
    {
      title: "Mentor-Together NGO",
      description: "Mentored youth through educational guidance and career development programs",
      icon: "🤝",
      type: "Mentorship"
    },
    {
      title: "Blossoms at Amdocs",
      description: "Participated in CSR initiative focused on community development and social impact",
      icon: "🌸",
      type: "CSR Initiative"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Community</h2>
          <div className="w-24 h-1 bg-steel-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-maroon"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{activity.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-poppins">{activity.title}</h3>
                  <span className="text-sm font-medium text-steel-blue bg-steel-blue/10 px-3 py-1 rounded-full">
                    {activity.type}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
