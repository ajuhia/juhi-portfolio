
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

        <div className="flex justify-center">
          <div className="animate-fade-in max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-slate-700 leading-relaxed font-poppins">
                Hi! I'm a tech enthusiast who believes in the power of technology to drive meaningful change and solve real-world problems.
                <br /><br />
                My journey into tech has always been guided by curiosity—curiosity about how systems interact, how data can inform better decisions, and how thoughtful design can transform technical solutions into meaningful impact. Whether it's building scalable infrastructure, uncovering insights from complex data, or applying technology to everyday challenges, I find purpose in creating systems that are both intelligent and human-centered.
                <br /><br />
                Currently, I'm pursuing my <span className="font-semibold text-steel-blue-600">Master's in Business Analytics at the University of Illinois Chicago</span>, where I'm exploring everything from data science and machine learning to cloud technologies and artificial intelligence. Every project I take on is a chance to learn, collaborate, and build something useful.
                <br /><br />
                Outside of academics and work, I'm passionate about mentoring and community engagement. I've supported student growth through Mentor-Together and contributed to Corporate Social Responsibility programs—because I believe meaningful innovation starts with empathy and inclusion.
                <br /><br />
                Right now, I'm diving deeper into the world of AI—curious, excited, and always learning. If you're passionate about <span className="font-semibold text-maroon-700">analytics, responsible tech, or building tools that make a difference</span>, let's connect. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
