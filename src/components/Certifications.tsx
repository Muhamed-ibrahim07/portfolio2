import React, { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'Deep Learning Specialization',
      issuer: 'Coursera - Andrew Ng',
      date: '2024',
      category: 'ml',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive deep learning curriculum covering neural networks, CNN, RNN, and more',
      skills: ['TensorFlow', 'Python', 'Neural Networks', 'CNN', 'RNN'],
      link: 'https://coursera.org'
    },
    {
      id: 2,
      title: 'FPGA Design Certification',
      issuer: 'Xilinx',
      date: '2023',
      category: 'hardware',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced FPGA design techniques and implementation strategies',
      skills: ['Verilog', 'FPGA', 'Xilinx Tools', 'DSP'],
      link: 'https://xilinx.com'
    },
    {
      id: 3,
      title: 'Machine Learning Engineering',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'ml',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Production ML systems, MLOps, and scalable ML infrastructure',
      skills: ['MLOps', 'TensorFlow', 'Kubernetes', 'Docker'],
      link: 'https://cloud.google.com'
    },
    {
      id: 4,
      title: 'PCB Design Professional',
      issuer: 'Altium',
      date: '2023',
      category: 'hardware',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced PCB design principles and professional layout techniques',
      skills: ['Altium Designer', 'PCB Layout', 'Signal Integrity', 'EMC'],
      link: 'https://altium.com'
    },
    {
      id: 5,
      title: 'AI Ethics and Governance',
      issuer: 'MIT Professional Education',
      date: '2024',
      category: 'ml',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ethical AI development, bias detection, and responsible AI practices',
      skills: ['Ethics', 'AI Governance', 'Bias Detection', 'Responsible AI'],
      link: 'https://mit.edu'
    },
    {
      id: 6,
      title: 'RF & Microwave Engineering',
      issuer: 'IEEE',
      date: '2023',
      category: 'hardware',
      image: 'https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced RF circuit design and microwave engineering principles',
      skills: ['RF Design', 'Microwave', 'Antenna Design', 'S-Parameters'],
      link: 'https://ieee.org'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications' },
    { id: 'ml', name: 'Machine Learning & AI' },
    { id: 'hardware', name: 'Core Electronics' },
    { id: 'bootcamp', name: 'Bootcamps & Events' }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Milestones Along the Way
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 backdrop-blur-sm bg-gray-800/30 rounded-2xl p-3 border border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 interactive ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Carousel/Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 rounded-3xl blur-xl group-hover:from-cyan-400/20 group-hover:to-violet-400/20 transition-all duration-500"></div>
              
              {/* Certificate Card */}
              <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-3xl border border-gray-700/50 group-hover:border-cyan-400/50 overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  
                  {/* Floating Award Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Title and Issuer */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{cert.issuer}</p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-violet-400/20 text-violet-400 rounded-full text-xs border border-violet-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <button className="group/btn w-full mt-4 py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500 hover:to-violet-500 border border-cyan-400/30 hover:border-transparent rounded-xl text-cyan-400 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 interactive">
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    View Certificate
                  </button>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;