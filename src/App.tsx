/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  Code2, 
  Cpu, 
  ExternalLink, 
  GraduationCap, 
  Languages, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  User, 
  Zap, 
  ChevronRight,
  Globe,
  Award
} from "lucide-react";
import { motion } from "motion/react";

// --- Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-blue-600 font-medium mt-2"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
  </div>
);

interface SkillCardProps {
  name: string;
  icon: any;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
  >
    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
      <Icon size={20} />
    </div>
    <span className="font-medium text-slate-700">{name}</span>
  </motion.div>
);

const ExperienceCard = () => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-900">Web Developer & Web Maintenance</h3>
        <p className="text-lg text-blue-600 font-semibold">TechyPark Technologies, Inc.</p>
      </div>
      <div className="mt-2 md:mt-0 text-slate-500 font-mono text-sm bg-slate-50 px-3 py-1 rounded-full">
        2023 - Present
      </div>
    </div>
    <ul className="space-y-4">
      {[
        "Built and maintained responsive websites using WordPress, HTML, CSS, and JavaScript.",
        "Handled site updates, security, backups, and performance optimization.",
        "Created custom features and improved user experience.",
        "Fixed bugs and ensured smooth website operation."
      ].map((resp, idx) => (
        <li key={idx} className="flex items-start">
          <div className="mt-1.5 mr-3 p-1 bg-blue-100 rounded-full text-blue-600">
            <ChevronRight size={14} />
          </div>
          <span className="text-slate-600 leading-relaxed">{resp}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const InfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start space-x-4">
    <div className="p-2 bg-slate-100 rounded-lg text-slate-500 mt-1">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">{label}</p>
      <p className="text-slate-700 font-medium">{value}</p>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const expertise = [
    { name: "WordPress Development", icon: Globe },
    { name: "Website Maintenance", icon: ShieldCheck },
    { name: "Speed Optimization", icon: Zap },
    { name: "Technical Troubleshooting", icon: Cpu },
    { name: "eCommerce Setup", icon: Briefcase },
    { name: "Security & Backups", icon: ShieldCheck },
  ];

  const education = [
    {
      year: "2014",
      degree: "Diploma In Computer Technology",
      institution: "Barishal Polytechnic Institute"
    },
    {
      year: "2013",
      degree: "Secondary School Certificate",
      institution: "Khansama Pilot Model High School"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              P
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Pritom</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Experience", "Skills", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        
        {/* Hero Section */}
        <section id="about" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-3/5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <span>Available for New Projects</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                    Pritom Guho <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      UI/UX & Web Developer
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-light">
                    I build clean, fast, and user-friendly websites. I also provide ongoing maintenance, 
                    security, and performance support to keep your digital presence 
                    <span className="text-slate-900 font-medium"> running smoothly</span>.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact" 
                      className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center"
                    >
                      Contact Me
                      <ChevronRight className="ml-2" size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#experience" 
                      className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
                    >
                      View Experience
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-2/5 relative"
              >
                {/* Image Container with decorative frame */}
                <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border-4 border-white">
                  <img 
                    src="/src/assets/profile.jpg" 
                    alt="Pritom Guho - UI/UX & Web Developer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Decorative blob backgrounds for the image */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl -z-10" />
                
                {/* Floating Experience Badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -right-4 bottom-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 z-20 hidden sm:flex"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Experience</p>
                    <p className="text-slate-900 font-bold">2+ Years</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full overflow-hidden opacity-10">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="Professional Journey">Work Experience</SectionTitle>
            <div className="max-w-4xl">
              <ExperienceCard />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="skills" className="py-24">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="What I Do Best">Expertise & Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((skill, idx) => (
                <SkillCard key={idx} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Info Section */}
        <section className="py-24 bg-slate-900 text-white rounded-t-[3rem]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Education */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-2">Education</h2>
                  <div className="h-1 w-20 bg-blue-500 rounded-full" />
                </div>
                <div className="space-y-12">
                  {education.map((edu, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="relative pl-8 border-l border-slate-700"
                    >
                      <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">{edu.year}</span>
                      <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
                      <p className="text-slate-400 mt-1">{edu.institution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Personal Details & Languages */}
              <div className="space-y-12">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Capabilities</h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800">
                      <div className="flex items-center space-x-3 mb-4 text-blue-400">
                        <Languages size={24} />
                        <h3 className="text-xl font-bold">Languages</h3>
                      </div>
                      <div className="space-y-2 text-slate-300">
                        <p className="flex justify-between"><span>English</span> <span className="text-slate-500 text-sm italic">Professional</span></p>
                        <p className="flex justify-between"><span>Bangla</span> <span className="text-slate-500 text-sm italic">Native</span></p>
                        <p className="flex justify-between"><span>Hindi</span> <span className="text-slate-500 text-sm italic">Conversational</span></p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800">
                      <div className="flex items-center space-x-3 mb-4 text-blue-400">
                        <User size={24} />
                        <h3 className="text-xl font-bold">Expertise</h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Strong foundation in modern web architecture and UI principles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-2xl shadow-blue-900/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award size={24} />
                    <h3 className="text-2xl font-bold">Client Reference</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold">Mosiur R Imran</p>
                    <p className="text-blue-100">Chief Experience Officer / CEO</p>
                    <div className="pt-4 space-y-3">
                      <a href="tel:+12132900720" className="flex items-center space-x-3 hover:text-blue-100 transition-colors">
                        <Phone size={18} className="opacity-70" />
                        <span>+1 (213) 290-0720</span>
                      </a>
                      <a href="mailto:mosiur@techypark.com" className="flex items-center space-x-3 hover:text-blue-100 transition-colors">
                        <Mail size={18} className="opacity-70" />
                        <span>mosiur@techypark.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
              <div className="lg:w-1/2">
                <SectionTitle subtitle="Get In Touch">Let's Work Together</SectionTitle>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                <div className="space-y-8">
                  <InfoItem icon={Phone} label="Call Me" value="+8801 73-6008385" />
                  <InfoItem icon={Mail} label="Email Me" value="pritom.guho@icloud.com" />
                  <InfoItem icon={MapPin} label="Present Address" value="Dhamrai Bazar, Savar, Dhaka" />
                  <InfoItem icon={MapPin} label="Permanent Address" value="Munshipara, Gobindapur, Khansama, Dinajpur" />
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Name</label>
                        <input className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email</label>
                        <input className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Subject</label>
                      <input className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Interested in project" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Message</label>
                      <textarea rows={4} className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="How can I help you?"></textarea>
                    </div>
                    <button className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-blue-200/50">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Pritom Guho. Built with Precision.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-all uppercase tracking-widest text-[10px]">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition-all uppercase tracking-widest text-[10px]">GitHub</a>
            <a href="#" className="hover:text-blue-600 transition-all uppercase tracking-widest text-[10px]">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

