import React, { useState } from 'react';
import { Download, Eye, Palette, FileText } from 'lucide-react';

const Resume = () => {
  const [resumeTheme, setResumeTheme] = useState<'dark' | 'light'>('dark');
  const [isDownloading, setIsDownloading] = useState(false);
// =================== ADD THIS NEW FUNCTION IN ITS PLACE ===================
const handleDownload = async (theme: 'dark' | 'light') => {
  setIsDownloading(true);
  try {
    // Ensure the path to your PDF is correct. It should be in the `public` folder.
    const response = await fetch('/Mohd-Ibrahim-resume.pdf');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const fileName = theme === 'dark' ? 'resume-dark.pdf' : 'resume-light.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    
    // Clean up after the download has been initiated
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    console.log(`Downloading ${theme} resume...`);
  } catch (error) {
    console.error('Error downloading the resume:', error);
    // Optionally, show an error message to the user
    alert('Sorry, the resume could not be downloaded.');
  } finally {
    // Using a short timeout to give the download time to start before the UI updates
    setTimeout(() => {
        setIsDownloading(false);
    }, 1000);
  }
};
// ===========================================================================


  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-gray-900"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download my comprehensive professional profile
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Theme Toggle */}
          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-2 border border-gray-700/50">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-cyan-400" />
                <button
                  onClick={() => setResumeTheme('dark')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 interactive ${
                    resumeTheme === 'dark'
                      ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Dark Theme
                </button>
                <button
                  onClick={() => setResumeTheme('light')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 interactive ${
                    resumeTheme === 'light'
                      ? 'bg-gradient-to-r from-gray-200 to-gray-100 text-gray-900'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Light Theme
                </button>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Resume Viewer */}
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 rounded-3xl blur-3xl"></div>
              
              <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-3xl border border-gray-700/50 p-8">
                <div className="text-center mb-8">
                  <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Resume Preview</h3>
                  <p className="text-gray-400">Interactive PDF Viewer</p>
                </div>

                {/* Mock PDF Viewer */}
                <div className={`relative min-h-96 rounded-2xl border-2 ${
                  resumeTheme === 'dark' 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-white border-gray-300'
                } overflow-hidden`}>
                  
                  {/* PDF Toolbar */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className={`text-sm ${resumeTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                     Muhamed_Ibrahim-resume.pdf
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-700/50 rounded interactive">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Resume Content Preview */}
                  <div className="p-8 space-y-6">
                    <div className="text-center">
                      <h1 className={`text-3xl font-bold ${resumeTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Muhamed Ibrahim
                      </h1>
                      <p className={`text-lg ${resumeTheme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
                        Electronics & Communication Engineer | AI/ML Specialist
                      </p>
                      <p className={`${resumeTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        mmohdibi@gmail.com | +91 9629294552 | LinkedIn | GitHub
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h2 className={`text-xl font-bold mb-3 ${resumeTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          Experience
                        </h2>
                        <div className="space-y-3">
                          <div>
                            <h3 className={`font-semibold ${resumeTheme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
                              Machine Learning Intern
                            </h3>
                            <p className={`text-sm ${resumeTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              Future Interns • 2025
                            </p>
                          </div>
                          <div>
                            <h3 className={`font-semibold ${resumeTheme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
                              Competetive Programming associate
                            </h3>
                            <p className={`text-sm ${resumeTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              Microsoft Innovations Club • 2024 - 2025
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className={`text-xl font-bold mb-3 ${resumeTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          Skills
                        </h2>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {['FPGA', 'PCB Design', 'Python', 'TensorFlow'].map((skill) => (
                              <span
                                key={skill}
                                className={`px-2 py-1 text-xs rounded ${
                                  resumeTheme === 'dark' 
                                    ? 'bg-cyan-400/20 text-cyan-400' 
                                    : 'bg-blue-100 text-blue-600'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Actions */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 rounded-2xl blur-2xl"></div>
                
                <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-2xl border border-gray-700/50 p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Download Options</h3>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => handleDownload('dark')}
                      disabled={isDownloading}
                      className="group w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-violet-500 hover:to-magenta-500 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed interactive"
                    >
                      <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : 'group-hover:animate-pulse'}`} />
                      {isDownloading ? 'Downloading...' : 'Dark Theme Resume'}
                    </button>

                    <button
                      onClick={() => handleDownload('light')}
                      disabled={isDownloading}
                      className="group w-full py-4 px-6 border-2 border-cyan-400/50 hover:bg-cyan-400/10 rounded-xl font-semibold text-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed interactive"
                    >
                      <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : 'group-hover:animate-pulse'}`} />
                      {isDownloading ? 'Downloading...' : 'Light Theme Resume'}
                    </button>
                  </div>

                  {isDownloading && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full animate-progress"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-magenta-400/10 rounded-2xl blur-2xl"></div>
                
                <div className="relative backdrop-blur-sm bg-gray-800/30 rounded-2xl border border-gray-700/50 p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Quick Stats</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Format</span>
                      <span className="text-white font-semibold">PDF</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Size</span>
                      <span className="text-white font-semibold">2.4 MB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Pages</span>
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Last Updated</span>
                      <span className="text-white font-semibold">Jan 2024</span>
                    </div>
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

export default Resume;