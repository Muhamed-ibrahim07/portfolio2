import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './styles/animations.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorDot) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(cursorDot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full border border-cyan-400 rounded-full opacity-50"></div>
      </div>
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-cyan-400 pointer-events-none z-50 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.3) 1px, transparent 0)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;