
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      date: "Sep 2022",
      icon: "☁️",
      color: "from-maroon/10 to-maroon/5"
    },
    {
      title: "Data Engineering Nanodegree – Udacity",
      date: "Apr 2023",
      icon: "📚",
      color: "from-steel-blue/10 to-steel-blue/5"
    },
    {
      title: "Productivity Recognition – Amdocs",
      date: "Feb 2017",
      icon: "🏆",
      color: "from-maroon/10 to-maroon/5"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Certifications</h2>
          <div className="w-24 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color} rounded-t-lg`}></div>
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-maroon transition-colors duration-300 font-poppins">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <span className="text-steel-blue font-medium">{cert.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
