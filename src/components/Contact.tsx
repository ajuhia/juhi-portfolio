
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';

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
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(128,0,32,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(70,130,180,0.15),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Let's Connect & Collaborate</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
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
                  <div className="w-14 h-14 bg-gradient-to-br from-maroon-100 to-maroon-200 rounded-xl flex items-center justify-center group-hover:from-maroon-200 group-hover:to-maroon-300 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-maroon-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600">Chicago, IL</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <a href="mailto:ajuhi31@gmail.com" className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-steel-blue-100 to-steel-blue-200 rounded-xl flex items-center justify-center group-hover:from-steel-blue-200 group-hover:to-steel-blue-300 transition-all duration-300">
                      <Mail className="h-6 w-6 text-steel-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-maroon-600 hover:text-maroon-500 transition-colors">
                        ajuhi31@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                <div className="flex items-center space-x-4 group">
                  <a 
                    href="https://linkedin.com/in/juhianand" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-maroon-100 to-maroon-200 rounded-xl flex items-center justify-center group-hover:from-maroon-200 group-hover:to-maroon-300 transition-all duration-300">
                      <Linkedin className="h-6 w-6 text-maroon-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">LinkedIn</h4>
                      <p className="text-steel-blue-600 hover:text-steel-blue-500 transition-colors">
                        Connect with me
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 animate-fade-in bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-slate-50/70"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-slate-900 font-poppins flex items-center">
                  <Send className="mr-3 h-6 w-6 text-maroon-600" />
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
                        className="border-slate-300 focus:border-maroon-500 focus:ring-maroon-200 bg-white/70 backdrop-blur-sm rounded-xl"
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
                        className="border-slate-300 focus:border-maroon-500 focus:ring-maroon-200 bg-white/70 backdrop-blur-sm rounded-xl"
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
                      className="border-slate-300 focus:border-maroon-500 focus:ring-maroon-200 bg-white/70 backdrop-blur-sm rounded-xl resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-maroon-600 to-maroon-500 hover:from-maroon-700 hover:to-maroon-600 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
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
