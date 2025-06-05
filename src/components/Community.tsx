
import React from 'react';

const Community = () => {
  const activities = [
    {
      title: "Mentor-Together NGO",
      description: "Mentored under-resourced students through academic and personal development programs",
      icon: "🤝"
    },
    {
      title: "Blossoms CSR Program",
      description: "Participated in Amdocs' community-driven outreach and education initiatives",
      icon: "🌸"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Community Contributions</h2>
          <div className="w-24 h-1 bg-steel-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-maroon"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{activity.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 font-poppins">{activity.title}</h3>
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
