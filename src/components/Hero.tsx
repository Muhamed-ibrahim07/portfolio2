import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const circuitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate hero elements on load
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Floating animation for circuit board
    gsap.to(circuitRef.current, {
      y: -20,
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: scrollY * 0.5,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div ref={heroRef} className="relative z-10 container mx-auto px-6 text-center">
        {/* 3D Circuit Board Visualization */}
        <div ref={circuitRef} className="relative mx-auto mb-12 w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-400/20 rounded-full blur-3xl"></div>
          <div className="relative w-full h-full border-2 border-cyan-400/30 rounded-2xl backdrop-blur-sm bg-gray-800/20 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2 p-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 opacity-70 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div ref={textRef} className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">I'm Muhamed Ibrahim</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-magenta-400 bg-clip-text text-transparent">
              Engineering Intelligence
            </span>
            <span className="block text-white text-3xl md:text-4xl mt-4 font-light">
              at the Edge
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white overflow-hidden interactive">
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-magenta-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-400/50 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 interactive">
              <span className="flex items-center gap-2">
                Download Resume
              </span>
            </button>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bridging Hardware & AI | Embedded Systems | VLSI | ML-Powered Solutions
          </p>
          
        

          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;