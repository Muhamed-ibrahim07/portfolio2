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
  image: 'https://tse3.mm.bing.net/th/id/OIP.Ihviyqi4GRK-zvxlgbddfQHaHu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', // A relevant placeholder image
  tags: ['IR Sensor', 'Op-Amp', 'Electronics', 'Analog Circuits'],
  github: 'https://github.com/yourusername/proximity-sensor-ir-opamp',
  demo: 'https://drive.google.com/drive/folders/1BOFupGI64_Bt7HtkGXeLhg27ex_1ASTm?usp=sharing',
  category: 'electronics'
},

     {
  id: 2,
  title: 'Sun Tracking Panel using 8051 Assembly Language & Servo',
  description: 'A solar tracking system using an 8051 microcontroller programmed in assembly language, controlling servo motors to follow the sun for optimal energy capture.',
  image: 'data:image/webp;base64,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', // placeholder image
  tags: ['8051', 'Assembly', 'Servo', 'Embedded', 'Solar'],
  github: 'https://github.com', // replace with actual repo if available
  demo: 'https://drive.google.com/drive/folders/1A9ZtyPinjpvNHgCTxXU7qPEShsjv01GE?usp=sharing',     // replace with actual video or write-up if available
  category: 'embedded'
},

      {
  id: 3,
  title: 'Python-Based Audio Noise Reduction System',
  description: 'An audio preprocessing tool using Python and signal processing libraries to remove background noise from WAV files. Implements noisereduce, scipy, and matplotlib for visualization and output refinement.',
  image: 'https://t3.ftcdn.net/jpg/00/85/61/98/360_F_85619893_qcV9Vr8GQGGToKKozmKZlon9M1rNwWNd.jpg',
  tags: ['Python', 'Audio', 'Noise Reduction', 'Signal Processing', 'noisereduce', 'scipy'],
  github: 'https://github.com', // Replace with actual repo if available
  demo: 'https://colab.research.google.com/drive/1NDUGdXKnlxEMYbqB9AayC6iKpJoYJVU3?usp=sharing',
  category: 'audio'
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
                {tab === 'hardware' ? 'Hardware and Software (ECE domain)' : 'Machine Learning Projects'}
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
  View Project
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
