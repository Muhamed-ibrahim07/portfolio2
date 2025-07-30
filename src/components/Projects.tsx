import React, { useState } from 'react';
import { ExternalLink, Github, Play, Filter } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('hardware');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = {
    hardware: [
      {
  id: 1,
  title: 'Proximity Sensor',
  description: 'Designed a proximity sensor using infrared (IR) technology and op-amp based signal conditioning to detect nearby objects accurately.',
  image: 'https://images.pexels.com/photos/845261/pexels-photo-845261.jpeg?auto=compress&cs=tinysrgb&w=600', // A relevant placeholder image
  tags: ['IR Sensor', 'Op-Amp', 'Electronics', 'Analog Circuits'],
  github: 'https://github.com/yourusername/proximity-sensor-ir-opamp',
  demo: 'https://drive.google.com/drive/folders/1BOFupGI64_Bt7HtkGXeLhg27ex_1ASTm?usp=sharing',
  category: 'electronics'
},

      {
        id: 2,
        title: 'IoT Environmental Monitoring System',
        description: 'Multi-sensor PCB with wireless connectivity for real-time environmental data',
        image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=600',
        tags: ['PCB', 'IoT', 'Sensors', 'LoRa'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        category: 'iot'
      },
      {
        id: 3,
        title: 'RF Signal Analyzer',
        description: 'Software-defined radio platform for spectrum analysis and signal processing',
        image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
        tags: ['RF', 'SDR', 'DSP', 'GNU Radio'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        category: 'rf'
      }
    ],
    ml: [
      {
        id: 4,
        title: 'Edge AI Object Detection',
        description: 'Optimized YOLO model deployment on edge devices with TensorRT acceleration',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
        tags: ['PyTorch', 'TensorRT', 'YOLO', 'Edge AI'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        category: 'computer-vision'
      },
      {
        id: 5,
        title: 'Neural Network Compression',
        description: 'Model quantization and pruning techniques for mobile deployment',
        image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600',
        tags: ['TensorFlow', 'Quantization', 'Mobile', 'Optimization'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        category: 'optimization'
      },
      {
        id: 6,
        title: 'Predictive Maintenance AI',
        description: 'Machine learning system for industrial equipment failure prediction',
        image: 'https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=600',
        tags: ['Scikit-learn', 'Time Series', 'Industrial IoT', 'Python'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        category: 'predictive'
      }
    ]
  };

  const filters = {
    hardware: ['all', 'fpga', 'iot', 'rf', 'pcb'],
    ml: ['all', 'computer-vision', 'optimization', 'predictive', 'nlp']
  };

  const currentProjects = projects[activeTab as keyof typeof projects];
  const filteredProjects = selectedFilter === 'all' 
    ? currentProjects 
    : currentProjects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-gray-900"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bridging hardware innovation with intelligent software solutions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-2xl p-2 border border-gray-700/50">
            {Object.keys(projects).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedFilter('all');
                }}
                className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 interactive ${
                  activeTab === tab
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-violet-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'hardware' ? 'Hardware Projects' : 'Machine Learning Projects'}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 backdrop-blur-sm bg-gray-800/20 rounded-xl p-3 border border-gray-700/30">
            <Filter className="w-5 h-5 text-cyan-400 mr-2" />
            {filters[activeTab as keyof typeof filters].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 interactive ${
                  selectedFilter === filter
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 3D Flip Card Effect */}
              <div className="relative min-h-[32rem] preserve-3d group-hover:rotate-y-180 transition-transform duration-700">
  <div className="absolute inset-0 backface-hidden">
  <div className="h-full flex flex-col backdrop-blur-sm bg-gray-800/30 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500">

      
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
  <div>
    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
    <p className="text-gray-400 text-base mb-6">{project.description}</p>
  </div>

  <div>
    <a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="group/btn w-full py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500 hover:to-violet-500 border border-cyan-400/30 hover:border-transparent rounded-xl text-cyan-400 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 interactive"
>
  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
  View Certificate
</a>

    <div className="flex flex-wrap gap-2 mt-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs border border-cyan-400/30"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
</div>
</div>
</div>

{/* Back Face */}
{/* <div className="absolute inset-0 backface-hidden rotate-y-180">
  <div className="h-full backdrop-blur-sm bg-gray-800/30 rounded-2xl border border-violet-400/50 p-6 flex flex-col justify-center items-center text-center">
    <Play className="w-16 h-16 text-violet-400 mb-6" />
    <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
    <p className="text-gray-300 mb-6">{project.description}</p>
    
    <div className="flex gap-4">
      <a
        href={project.github}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 interactive"
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      <a
        href={project.demo}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-violet-500 hover:to-magenta-500 rounded-lg transition-all duration-300 interactive"
      >
        <ExternalLink className="w-4 h-4" />
        Demo
      </a>
    </div>
  </div>
</div> */}
</div>

))}
</div>
</div>
</section>
);
};

export default Projects;
