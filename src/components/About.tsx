
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-200/20 to-steel-blue-200/20 rounded-full blur-3xl transform"></div>
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-full shadow-2xl overflow-hidden border-4 border-white">
                <div className="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-white to-slate-50">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-maroon-100 to-steel-blue-100 rounded-full flex items-center justify-center">
                      <div className="text-6xl opacity-80">👤</div>
                    </div>
                    <p className="text-xl font-semibold text-slate-700">Juhi Anand</p>
                    <p className="text-sm text-slate-500 mt-2">Data Engineer & Analytics Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-slate-700 leading-relaxed font-poppins">
                Hey there! 👋 I'm <span className="font-semibold text-maroon-700">Juhi</span>, and I'm absolutely fascinated by the magic that happens when data meets creativity. You know that feeling when you discover a hidden pattern in seemingly random numbers? That's my daily dose of excitement!
                <br /><br />
                Currently, I'm diving deep into my <span className="font-semibold text-steel-blue-600">Master's in Business Analytics</span> at UIC, where every day feels like solving a new puzzle. I love building systems that don't just process data, but tell compelling stories and drive real decisions.
                <br /><br />
                When I'm not elbow-deep in code or wrestling with APIs, you'll find me mentoring fellow tech enthusiasts and actively participating in community building initiatives. I'm passionate about fostering inclusive tech communities and regularly contribute to open-source projects that make technology more accessible to everyone.
                <br /><br />
                Fun fact: I once spent an entire weekend debugging a data pipeline just because I was curious about why it was behaving oddly. That's probably not normal, but hey, that's what makes this field so thrilling for me! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
