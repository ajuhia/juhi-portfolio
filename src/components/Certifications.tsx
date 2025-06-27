
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      title: "Data Engineering Nanodegree",
      issuer: "Udacity",
      date: "2023",
      icon: "/lovable-uploads/846e3336-656b-4181-8a16-f5500d905110.png"
    },
    {
      title: "Productivity Challenge Award",
      issuer: "Amdocs",
      date: "2017",
      icon: "🏆"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Certifications</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  {cert.icon.startsWith('http') || cert.icon.startsWith('/') ? (
                    <img 
                      src={cert.icon} 
                      alt={cert.issuer}
                      className="h-12 w-12 object-contain"
                      onError={(e) => {
                        console.log(`Failed to load image: ${cert.icon}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="text-4xl">{cert.icon}</div>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-maroon-700 transition-colors duration-300 font-poppins">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-steel-blue-600 font-medium mb-2">{cert.issuer}</p>
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
