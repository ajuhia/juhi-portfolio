
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Linkedin, Send, Phone } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(162,60,60,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(106,155,189,0.15),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-poppins">Let's Connect</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon to-steel-blue mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Ready to collaborate on your next data-driven project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, and interesting projects. 
                Feel free to reach out if you'd like to connect!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-xl flex items-center justify-center group-hover:from-maroon/20 group-hover:to-maroon/10 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Chicago, IL</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-steel-blue/10 to-steel-blue/5 rounded-xl flex items-center justify-center group-hover:from-steel-blue/20 group-hover:to-steel-blue/10 transition-all duration-300">
                    <Mail className="h-6 w-6 text-steel-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:ajuhi31@gmail.com" className="text-steel-blue hover:text-steel-blue/80 transition-colors">
                      ajuhi31@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-xl flex items-center justify-center group-hover:from-maroon/20 group-hover:to-maroon/10 transition-all duration-300">
                    <Linkedin className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/juhianand" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel-blue hover:text-steel-blue/80 transition-colors"
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
                className="w-full bg-gradient-to-r from-maroon to-maroon/90 hover:from-maroon/90 hover:to-maroon text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="mr-3 h-5 w-5" />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/juhianand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-steel-blue to-steel-blue/90 hover:from-steel-blue/90 hover:to-steel-blue text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 animate-fade-in bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-900 font-poppins flex items-center">
                  <Send className="mr-3 h-6 w-6 text-maroon" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-maroon focus:ring-maroon/20 bg-white/50 backdrop-blur-sm rounded-xl"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-maroon focus:ring-maroon/20 bg-white/50 backdrop-blur-sm rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="border-gray-300 focus:border-maroon focus:ring-maroon/20 bg-white/50 backdrop-blur-sm rounded-xl resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-maroon to-maroon/90 hover:from-maroon/90 hover:to-maroon text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
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
