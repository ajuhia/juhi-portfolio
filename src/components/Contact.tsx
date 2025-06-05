
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Linkedin, Send, Heart, Code, Database } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(71,85,105,0.15),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Connect Section Content */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Let's Connect & Collaborate</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-slate-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-white/60 rounded-2xl shadow-lg border border-emerald-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-poppins text-center">
                  Passionate about solving real-world problems with data pipelines, AI, and intelligent systems.
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/60 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-slate-600" />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-poppins text-center">
                  Skilled in Python, SQL, R, and cloud-native development with AWS.
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/60 rounded-2xl shadow-lg border border-emerald-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-poppins text-center">
                  I build robust, maintainable backends and analytical frameworks that scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">Get in Touch</h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborations, and interesting projects. 
                Whether you have a crazy data challenge or just want to chat about the latest in AI, I'd love to connect!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600">Chicago, IL</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                    <Mail className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <a href="mailto:ajuhi31@gmail.com" className="text-emerald-600 hover:text-emerald-500 transition-colors">
                      ajuhi31@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                    <Linkedin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/juhianand" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-500 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a 
                href="mailto:ajuhi31@gmail.com"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="mr-3 h-5 w-5" />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/juhianand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-700 hover:to-slate-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 animate-fade-in bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-slate-50/70"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-slate-900 font-poppins flex items-center">
                  <Send className="mr-3 h-6 w-6 text-emerald-600" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-200 bg-white/70 backdrop-blur-sm rounded-xl"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-200 bg-white/70 backdrop-blur-sm rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, ask a question, or just say hello..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-200 bg-white/70 backdrop-blur-sm rounded-xl resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
