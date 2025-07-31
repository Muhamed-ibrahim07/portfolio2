import React, { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'The Complete Python Pro Bootcamp',
      issuer: 'Udemy - Angela Yu',
      date: '2024',
      category: 'Python',
      image: 'https://static.ybox.vn/2023/4/6/1680971339748-FPg8IHhWUAE0Zyz.jpg',
      description: 'Flask, Beautiful Soup, Selenium, API integrations and much more',
      skills: ['Flask', 'Python', 'Numpy', 'Pandas', 'Games'],
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-5598b306-dd12-47b9-83af-89771b4ca0b5.pdf'
    },
    {
      id: 2,
      title: 'Season of AI : Best of AI at Ignite',
      issuer: 'Microsoft',
      date: '2025',
      category: 'AI',
      image: 'https://th.bing.com/th/id/OIP.RArxaPjk_kZRdLKfXqPaOwHaEK?w=282&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      description: ' Copilots, AI agents, customizing AI for business needs, and selecting the right AI solutions for various use cases.',
      skills: ['Copilots', 'Prompting AI', 'Azure AI'],
      link: 'https://media.licdn.com/dms/image/v2/D5622AQEAcDGUqH8Lkw/feedshare-shrink_800/B56ZTfw9zeGUAk-/0/1738920943576?e=1756944000&v=beta&t=Bzp-Z8kntHnc3uY9XCCJpVDgBQ9G-ik9WNy0LjMSziw'
    },
    {
  id: 3,
  title: 'Developing Ethical Hacking Tools with Python',
  issuer: 'Cybrary via LinkedIn Learning',
  date: '2025',
  category: 'cybersecurity',
  image: 'https://th.bing.com/th/id/OIP.ddq8Arq7IECCcJ4B99jO0QHaEK?w=320&h=180&c=7&r=0&o=5&pid=1.7',
  description: 'Covered core techniques of ethical hacking with Python including scanning, enumeration, and exploitation tools.',
  skills: ['Python', 'Ethical Hacking', 'Cybersecurity'],
  link: 'https://www.linkedin.com/learning/certificates/52577e9ec4b031b444a5e9880609829ea677c78478b69564c2ff0185a27f43d7?trk=share_certificate'
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
<a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group/btn relative z-10 w-full mt-4 py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500 hover:to-violet-500 border border-cyan-400/30 hover:border-transparent rounded-xl text-cyan-400 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
>
  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
  View Certificate
</a>

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