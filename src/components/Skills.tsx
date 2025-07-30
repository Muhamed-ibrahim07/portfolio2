import React, { useState } from 'react';
import { Cpu, Brain } from 'lucide-react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillCategories = {
    electronics: {
      title: 'Core Electronics',
      icon: Cpu,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'FPGA Design', level: 80, description: 'Verilog, VHDL,' },
        { name: 'PCB Design', level: 85, description: 'Altium Designer, KiCad, Eagle' },
        { name: 'Embedded Systems', level: 92, description: 'ARM, AVR, PIC, FreeRTOS' },
        { name: 'VLSI Design', level: 88, description: 'Cadence, Synopsis, Layout' },
        { name: 'RF Engineering', level: 82, description: 'Antenna Design, Microwave' },
        { name: 'Signal Processing', level: 86, description: 'MATLAB, DSP, Filters' }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-violet-400 to-magenta-500',
      skills: [
        { name: 'Deep Learning', level: 88, description: 'TensorFlow, PyTorch, Keras' },
        { name: 'Computer Vision', level: 85, description: 'OpenCV, CNNs, Object Detection' },
        { name: 'CNN', level: 80, description: 'Transformers, BERT, GPT' },
        { name: 'Python', level: 95, description: 'NumPy, Pandas, Scikit-learn' },
        { name: 'Edge AI', level: 86, description: 'TensorRT, ONNX, Optimization' },
        { name: 'API Integration', level: 91, description: 'Perplexility, Chatgpt, AI Studio' }
      ]
    }
  };

  const tools = [
    {
      name: 'MATLAB',
      image: 'matlab-seeklogo.png',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Python',
      image: 'python-1d15.png',
      color: 'from-violet-400 to-magenta-500'
    },
    {
      name: 'Cadence',
      image: 'cadence-seeklogo.png',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'TensorFlow',
      image: 'tensorflow-seeklogo.png',
      color: 'from-violet-400 to-magenta-500'
    },
    {
      name: 'Kicad',
      image: 'kicad_logo_icon_247911.png',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'PyTorch',
      image: 'pytorch-symbol-a390.png',
      color: 'from-violet-400 to-magenta-500'
    }
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Skills Galaxy
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the universe of technology across hardware and software domains
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <div key={key} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-3xl blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="group/skill cursor-pointer"
                        onMouseEnter={() => setActiveSkill(`${key}-${skill.name}`)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-cyan-400 text-sm">{skill.level}%</span>
                        </div>

                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.2}s`
                            }}
                          ></div>
                        </div>

                        {activeSkill === `${key}-${skill.name}` && (
                          <div className="mt-2 text-gray-400 text-sm animate-fade-in">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Tool Cubes with Images */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Favorite Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group relative cursor-pointer interactive"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-300`}></div>

                <div className="relative w-20 h-20 backdrop-blur-sm bg-gray-800/40 rounded-2xl border border-gray-700/50 group-hover:border-cyan-400/50 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="mt-2 text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
