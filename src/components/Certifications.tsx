
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      icon: "☁️"
    },
    {
      title: "Data Engineering Nanodegree",
      issuer: "Udacity",
      date: "2023",
      icon: "📚"
    },
    {
      title: "Productivity Challenge Award",
      issuer: "Amdocs",
      date: "2017",
      icon: "🏆"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon-900 to-steel-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-maroon-900 transition-colors duration-300 font-poppins">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-steel-blue-900 font-medium mb-2">{cert.issuer}</p>
                <span className="text-gray-600">{cert.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
