'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Scene3D from '@/components/Scene3D';
import Image from 'next/image';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#E10600] selection:text-white relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="/images/ironman-1.png" alt="Iron Man Background" fill className="object-cover object-center" priority />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
        </div>
        
        <div className="absolute inset-0 z-10 hidden md:block">
          <Scene3D />
        </div>

        <div className="relative z-20 container mx-auto px-6 pt-20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:w-3/4"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 tracking-tighter">
              <span className="text-white glow-text-cyan">D DARSHAN</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-display tracking-widest text-[#E10600] mb-2 glow-text-red">
              INFORMATION SCIENCE & ENGINEERING STUDENT
            </h2>
            <p className="text-sm md:text-base tracking-[0.3em] text-[#00E5FF] mb-8">
              AI/ML • GENERATIVE AI • FULL STACK DEVELOPER
            </p>
            <p className="max-w-2xl mx-auto md:mx-0 text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
              Building intelligent systems, AI-powered applications and real-world technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
              <a href="#about" className="px-8 py-4 bg-transparent border border-[#00E5FF] text-[#00E5FF] font-display hover:bg-[#00E5FF] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] rounded-sm">
                [ EXPLORE MY SYSTEM ]
              </a>
              <a href="/resume.pdf" download className="px-8 py-4 bg-[#E10600] text-white font-display hover:bg-transparent hover:border hover:border-[#E10600] hover:text-[#E10600] transition-all duration-300 shadow-[0_0_15px_rgba(225,6,0,0.3)] hover:shadow-[0_0_30px_rgba(225,6,0,0.8)] rounded-sm">
                [ DOWNLOAD RESUME ]
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:w-1/4 flex justify-center mt-10 md:mt-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              <Image src="/images/profile.png" alt="D Darshan Profile" fill className="object-cover" />
              {/* Overlay scanning line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] z-10"
              />
            </div>
          </motion.div>
        </div>


      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative z-10 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-[2px] w-12 bg-[#E10600]"></div>
             <h2 className="text-3xl md:text-5xl font-display font-bold glow-text-red">ABOUT THE ENGINEER</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-sm overflow-hidden border border-[#00E5FF]/30 p-2"
            >
              <div className="absolute inset-0 bg-[#00E5FF]/10 animate-pulse"></div>
              <Image src="/images/ironman-2.png" alt="Profile Tech" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              
              {/* Overlay scanning line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] z-10"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-panel p-8 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#E10600]"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#00E5FF]"></div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  "Information Science Engineering student with an 8+ CGPA, passionate about building AI/ML and Generative AI applications that solve real-world problems. Experienced in hackathons, full-stack development, and Python-based machine learning, with strong foundations in Data Structures, Algorithms, and problem-solving."
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-[#333] p-4 bg-[#050505]">
                    <div className="text-[#00E5FF] font-display text-3xl font-bold glow-text-cyan mb-2">8+</div>
                    <div className="text-xs tracking-widest text-gray-400">CGPA</div>
                  </div>
                  <div className="border border-[#333] p-4 bg-[#050505]">
                    <div className="text-[#E10600] font-display text-3xl font-bold glow-text-red mb-2">4+</div>
                    <div className="text-xs tracking-widest text-gray-400">HACKATHONS</div>
                  </div>
                  <div className="border border-[#333] p-4 bg-[#050505]">
                    <div className="text-[#A8A8A8] font-display text-3xl font-bold mb-2">2029</div>
                    <div className="text-xs tracking-widest text-gray-400">GRADUATION</div>
                  </div>
                  <div className="border border-[#333] p-4 bg-[#050505]">
                    <div className="text-[#00E5FF] font-display text-xl font-bold mb-2 pt-2">AI + GEN AI</div>
                    <div className="text-xs tracking-widest text-gray-400">CORE FOCUS</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-end gap-4 mb-16">
             <h2 className="text-3xl md:text-5xl font-display font-bold glow-text-cyan text-right">TECHNOLOGY ARSENAL</h2>
             <div className="h-[2px] w-12 bg-[#00E5FF]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { title: 'PROGRAMMING', skills: ['Python', 'C++', 'JavaScript', 'TypeScript'] },
              { title: 'AI / ML', skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face'] },
              { title: 'GENERATIVE AI', skills: ['RAG', 'Vector Databases'] },
              { title: 'WEB', skills: ['Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
              { title: 'BACKEND & DB', skills: ['Supabase', 'PostgreSQL'] },
              { title: 'CORE CS', skills: ['Data Structures & Algorithms', 'OOP', 'STL'] },
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-6 border border-[#333] hover:border-[#00E5FF]/50 transition-colors group"
              >
                <div className="font-display text-[#E10600] mb-4 tracking-wider text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E10600] group-hover:bg-[#00E5FF] transition-colors"></div>
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-[#111] border border-[#222] text-xs font-mono text-gray-300 group-hover:border-[#00E5FF]/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 relative z-10 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-[2px] w-12 bg-[#E10600]"></div>
             <h2 className="text-3xl md:text-5xl font-display font-bold glow-text-red">ENGINEERING PROJECTS</h2>
          </div>
          
          <div className="space-y-16">
            {/* Featured Project */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm overflow-hidden border border-[#E10600]/30 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <Image src="/images/ironman-1.png" alt="Project BG" fill className="object-cover" />
              </div>
              
              <div className="relative z-20 p-8 lg:p-16 max-w-3xl">
                <div className="text-[#E10600] font-mono text-xs mb-4 flex items-center gap-2">
                  <span className="w-10 h-[1px] bg-[#E10600]"></span> FEATURED MISSION
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 glow-text-cyan text-white">NEXORA</h3>
                <p className="text-xl text-[#00E5FF] mb-6 font-display tracking-wide">AI & RAG-Based Criminal Network Analysis System</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Engineered a full stack AI platform using Next.js and Tailwind CSS to visualise complex and unstructured data. Enabled faster identification of key network nodes for investigative decision-making.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js', 'Python', 'RAG', 'Hugging Face', 'Vector Database'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="px-6 py-3 border border-[#E10600] text-[#E10600] hover:bg-[#E10600] hover:text-white transition-all font-display text-sm tracking-widest">
                  [ VIEW DETAILS ]
                </button>
              </div>
            </motion.div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Based Physiotherapy',
                  desc: 'Architected a real-time responsive web interface that handles live camera streams for computer vision tracking. Deployed OpenCV and PyTorch models on the client side to minimize server latency and deliver instant feedback.',
                  tech: ['Python', 'OpenCV', 'PyTorch', 'Scikit-learn']
                },
                {
                  title: 'EcoZone AI',
                  desc: 'Developed a full stack carbon footprint engine combining an ML scoring backend with a Supabase database layer. Enabled organizations to track and improve ESG performance through data-backed analytics.',
                  tech: ['Python', 'Scikit-learn', 'JavaScript', 'Supabase']
                },
                {
                  title: 'DNA Processing with AI',
                  desc: 'Engineered a machine learning pipeline for genomic pattern detection and sequence classification. Implemented large-scale sequence analysis.',
                  tech: ['Python', 'Scikit-learn', 'PyTorch']
                }
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel border border-[#333] hover:border-[#00E5FF]/50 p-8 flex flex-col group transition-all"
                >
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-4">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-[#111] text-gray-300 text-[10px] font-mono border border-[#333]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & EXP SECTION */}
      <section id="education" className="py-24 relative z-10 bg-[#050505]">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-12">
               <div className="h-[2px] w-12 bg-[#00E5FF]"></div>
               <h2 className="text-2xl md:text-3xl font-display font-bold glow-text-cyan">EDUCATION PROTOCOL</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00E5FF] before:to-[#E10600]">
              {[
                { 
                  year: '2029', 
                  title: 'B.E. – Information Science & Engineering', 
                  org: 'CMR Institute of Technology, Bengaluru', 
                  detail: 'CGPA: 8+' 
                },
                { 
                  year: 'PUC', 
                  title: 'Pre-University Course', 
                  org: 'S.G.T PU College, Ballari', 
                  detail: 'Result: 80%' 
                },
                { 
                  year: '10th', 
                  title: 'Secondary Education', 
                  org: 'Balabharathi Kendriya Vidyalaya, Ballari', 
                  detail: 'CBSE | Result: 84.8%' 
                }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#050505] bg-[#00E5FF] group-hover:bg-[#E10600] group-hover:scale-125 transition-all shadow-[0_0_10px_#00E5FF] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-9px] md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4 glass-panel border border-[#333] hover:border-[#00E5FF]/30 transition-all rounded-sm ml-4 md:ml-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display font-bold text-white text-lg">{item.title}</h4>
                      <span className="font-mono text-xs text-[#E10600]">{item.year}</span>
                    </div>
                    <p className="text-sm text-[#00E5FF] mb-2">{item.org}</p>
                    <p className="text-xs text-gray-400 font-mono">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-4 mb-12">
               <div className="h-[2px] w-12 bg-[#E10600]"></div>
               <h2 className="text-2xl md:text-3xl font-display font-bold glow-text-red">MISSION LOG</h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 border border-[#E10600]/30 hover:border-[#E10600] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#E10600]/20 -rotate-45 translate-x-4 -translate-y-4"></div>
                <h4 className="font-display font-bold text-xl mb-1">Technical Head</h4>
                <h5 className="text-[#00E5FF] text-sm mb-4">Developers Student Club | CMRIT</h5>
                <p className="text-sm text-gray-400">Leading developers, empowering innovators, and building the future together.</p>
              </div>
              
              <div className="glass-panel p-6 border border-[#333] hover:border-[#00E5FF]/50 transition-colors">
                <h4 className="font-display font-bold text-xl mb-1">Hackathons</h4>
                <p className="text-sm text-gray-400 mt-2">Participated in 4+ hackathons, reaching finalist rounds in multiple competitions while taking leadership roles in team coordination and project execution.</p>
              </div>
              
              <div className="mt-12">
                <h3 className="font-display font-bold text-xl mb-6 text-[#A8A8A8]">CREDENTIALS</h3>
                <div className="glass-panel p-6 border border-[#D6B36A]/50 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-white">Oracle Cloud Infrastructure (OCI)</h4>
                    <p className="text-sm text-[#D6B36A]">AI Foundations Associate</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#D6B36A] flex items-center justify-center glow-text-gold">
                    ORACLE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative z-10 bg-[#080808] border-t border-[#333]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 glow-text-cyan">ESTABLISH CONNECTION</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Systems are online and ready for transmission. Connect via secure channels.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { label: 'EMAIL', value: 'darshanreddy5041@gmail.com', href: 'mailto:darshanreddy5041@gmail.com' },
              { label: 'LINKEDIN', value: 'D Darshan Reddy', href: 'https://www.linkedin.com/in/d-darshan-reddy-247199385/' },
              { label: 'GITHUB', value: 'ddarshanreddy', href: 'https://github.com/ddarshanreddy' },
              { label: 'LOCATION', value: 'Bengaluru, India', href: '#' },
            ].map(contact => (
              <a 
                key={contact.label} 
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                className="glass-panel p-6 border border-[#333] hover:border-[#E10600] transition-colors flex flex-col items-center justify-center group"
              >
                <div className="text-xs font-mono text-[#E10600] mb-2">{contact.label}</div>
                <div className="font-display text-sm truncate w-full text-center text-white group-hover:text-[#00E5FF] transition-colors">{contact.value}</div>
              </a>
            ))}
          </div>
          
          <div className="max-w-xl mx-auto glass-panel p-8 border border-[#00E5FF]/30 text-left relative">
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"></div>
             <h3 className="font-display text-xl mb-6 text-white border-b border-[#333] pb-4">TRANSMIT MESSAGE</h3>
             
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("TRANSMISSION INITIATED. MESSAGE ENCRYPTED."); }}>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="text-xs font-mono text-gray-400 block mb-1">NAME</label>
                   <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors" required />
                 </div>
                 <div>
                   <label className="text-xs font-mono text-gray-400 block mb-1">EMAIL</label>
                   <input type="email" className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors" required />
                 </div>
               </div>
               <div>
                 <label className="text-xs font-mono text-gray-400 block mb-1">SUBJECT</label>
                 <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors" required />
               </div>
               <div>
                 <label className="text-xs font-mono text-gray-400 block mb-1">MESSAGE</label>
                 <textarea rows={4} className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors resize-none" required></textarea>
               </div>
               
               <button type="submit" className="w-full py-4 bg-[#E10600]/10 border border-[#E10600] text-[#E10600] font-display hover:bg-[#E10600] hover:text-white transition-all tracking-widest mt-4">
                 [ TRANSMIT ]
               </button>
             </form>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#050505] py-8 border-t border-[#111] text-center">
        <p className="font-mono text-xs text-gray-500">© 2026 D DARSHAN // STARK SYSTEMS PORTFOLIO V1.0</p>
      </footer>
    </main>
  );
}
