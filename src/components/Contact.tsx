import React, { useState, useRef, useEffect } from 'react';
import { Send, MapPin, Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const circuitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate circuit lines
    if (circuitRef.current) {
      const lines = circuitRef.current.querySelectorAll('.circuit-line');
      gsap.fromTo(lines,
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: 2, 
          stagger: 0.3, 
          ease: "power2.out",
          repeat: -1,
          repeatDelay: 3
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formDataToSend = new FormData();
  formDataToSend.append("access_key", "80e9d5b5-de89-43ad-a655-9e347517be13"); // ✅ Replace this
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("subject", formData.subject);
  formDataToSend.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert("Failed to send: " + data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }

  setIsSubmitting(false);
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>
      
      {/* Animated Circuit Background */}
      <div ref={circuitRef} className="absolute inset-0 opacity-20">
        {/* Horizontal Circuit Lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="circuit-line absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '10%',
              width: '80%',
              transformOrigin: 'left center'
            }}
          ></div>
        ))}
        
        {/* Vertical Circuit Lines */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="circuit-line absolute w-0.5 bg-gradient-to-b from-transparent via-violet-400 to-transparent"
            style={{
              left: `${25 + i * 16}%`,
              top: '20%',
              height: '60%',
              transformOrigin: 'center top'
            }}
          ></div>
        ))}
        
        {/* Circuit Nodes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${25 + Math.floor(i / 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on the next breakthrough in hardware-software integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-3xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full p-4 bg-gray-900/50 border-2 border-gray-700/50 focus:border-cyan-400 rounded-xl text-white placeholder-gray-400 transition-all duration-300 outline-none"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-violet-400/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full p-4 bg-gray-900/50 border-2 border-gray-700/50 focus:border-cyan-400 rounded-xl text-white placeholder-gray-400 transition-all duration-300 outline-none"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-violet-400/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full p-4 bg-gray-900/50 border-2 border-gray-700/50 focus:border-cyan-400 rounded-xl text-white placeholder-gray-400 transition-all duration-300 outline-none"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-violet-400/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full p-4 bg-gray-900/50 border-2 border-gray-700/50 focus:border-cyan-400 rounded-xl text-white placeholder-gray-400 transition-all duration-300 outline-none resize-none"
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-violet-400/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-violet-500 hover:to-magenta-500 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden interactive"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:rotate-45'} transition-transform duration-300`} />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </div>
                  
                  {/* Paper plane animation trail */}
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer"></div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-magenta-400/10 rounded-3xl blur-3xl"></div>
              
              <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-3xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-violet-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-semibold">mmohdibi@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-magenta-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-semibold">+91 9629294552</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-magenta-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-semibold">Chennai</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/Muhamed-ibrahim07" className="group w-12 h-12 bg-gray-700/50 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-violet-400 rounded-xl flex items-center justify-center transition-all duration-300 interactive">
                      <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </a>
                    <a href="https://linkedin.com/in/mmohdibrahim" className="group w-12 h-12 bg-gray-700/50 hover:bg-gradient-to-br hover:from-violet-400 hover:to-magenta-400 rounded-xl flex items-center justify-center transition-all duration-300 interactive">
                      <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;