import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Zap, Award } from 'lucide-react';
import Spline from "./Spline";



const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: 2, label: 'Years Experience', icon: Zap },
    { number: 25, label: 'Projects Completed', icon: Code },
    { number: 2, label: 'Hackathons', icon: Cpu },
    { number: 4, label: 'Certifications', icon: Award }
  ];

  useEffect(() => {
    if (inView && statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll('.stat-number');
      
      statNumbers.forEach((stat, index) => {
        const target = parseInt(stat.textContent || '0');
        gsap.fromTo(stat, 
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            delay: index * 0.2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              stat.textContent = Math.ceil(this.targets()[0].textContent);
            }
          }
        );
      });
    }
  }, [inView]);

return (
  <section id="about" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-gray-900/50"></div>

    <div ref={ref} className="relative z-10 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: 3D Spline Embed */}
        {/* Left: Spline Scene */}
        <div className="rounded-3xl overflow-hidden border border-gray-700/50 h-[350px]">
          <Spline scene="https://prod.spline.design/BRfm9QH5ySMU6mBm/scene.splinecode" />
        </div>


          {/* Right: Profile & Stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm an Electronics and Communication Engineer with a passion for pushing the boundaries 
                  of technology. My journey spans from designing intricate PCB layouts and FPGA implementations 
                  to developing sophisticated machine learning models.
                </p>
                <p>
                  Currently focused on the intersection of hardware acceleration and AI, I specialize in 
                  embedded systems, VLSI design, RF engineering, and deep learning architectures. My goal is to contribute to the development of next-generation computing platforms that drive innovation in intelligent hardware and system design.
                </p>
                <p>
                  When I'm not optimizing neural networks or debugging embedded code, you'll find me 
                  exploring the latest in quantum computing, participating in hackathons, or contributing 
                  to open-source hardware projects.
                </p>
              </div>
            </div>

            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                      <Icon className="w-8 h-8 text-cyan-400 mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">
                        <span className="stat-number">{stat.number}</span>+
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;