
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import type { Project, CareerItem, Testimonial } from './types';
import { 
    NAV_LINKS, EXPERIENCE_CARDS, PROJECTS, VIDEO_PROJECTS, DAILY_SKILLS, OTHER_SKILLS, 
    PROFESSIONAL_CAREER, ACADEMIC_CAREER, TESTIMONIALS, SECTION_TAGS,
    CodeIcon, BuildingIcon, PenRulerIcon, ReactIcon, JSIcon, TSIcon, NextJSIcon, 
    FigmaIcon, TailwindIcon, GithubIcon, LinkedinIcon 
} from './constants';

// --- Reusable Section Wrapper ---
interface SectionProps {
  children: ReactNode;
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
}

const Section = ({ children, id, tag, title, subtitle }: SectionProps) => (
  <section id={id} className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#1E1E33] text-[#8257E6] px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-white/10">{tag}</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

// --- Header Component ---
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b1e]/80 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-white">
            <span className="text-[#8257E6]">H</span>S
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-300 hover:text-[#8257E6] transition-colors duration-300">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

// --- Hero Component ---
const Hero = () => (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b1e] via-[#0b0b1e] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        <div className="relative z-20">
            <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-[#8257E6] rounded-full blur-2xl opacity-40"></div>
                <img src="https://i.pravatar.cc/150?u=mahabub" alt="Mahabub Tamim" className="relative w-40 h-40 rounded-full border-4 border-[#1E1E33] shadow-lg" />
                <div className="absolute top-0 left-0 w-full h-full rounded-full ring-4 ring-[#8257E6]/30 animate-pulse"></div>

                <div className="absolute -top-2 -left-4 bg-[#1E1E33] p-2 rounded-full shadow-lg"><ReactIcon className="w-8 h-8 text-[#61DAFB]" /></div>
                <div className="absolute -bottom-4 -right-4 bg-[#1E1E33] p-2 rounded-full shadow-lg"><TSIcon className="w-8 h-8" /></div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-8 bg-[#1E1E33] p-2 rounded-full shadow-lg"><NextJSIcon className="w-8 h-8 text-white" /></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
                Mahabub Tamim
            </h1>
            <p className="text-xl text-gray-400 mb-12">App developer &bull; Content Creator</p>

            <div className="flex justify-center space-x-4 mb-16">
                <a href="#" className="p-3 bg-[#1E1E33] rounded-full hover:bg-[#8257E6] transition-colors duration-300 border border-white/10"><LinkedinIcon /></a>
                <a href="#" className="p-3 bg-[#1E1E33] rounded-full hover:bg-[#8257E6] transition-colors duration-300 border border-white/10"><GithubIcon /></a>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {EXPERIENCE_CARDS.map(card => (
                    <div key={card.title} className="bg-[#18182a]/50 p-6 rounded-2xl border border-white/10 text-left backdrop-blur-sm shadow-lg">
                        <div className="flex items-center space-x-4">
                            <div className="text-[#8257E6]">{React.cloneElement(card.icon, { className: 'w-8 h-8'})}</div>
                            <div>
                                <p className="text-gray-400">{card.title}</p>
                                <h3 className="text-white font-bold text-lg">{card.subtitle}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// --- About Me Component ---
const AboutMe = () => (
    <Section id="about" tag={SECTION_TAGS.about} title="Washington Henrique Fernandes de Sousa">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-shrink-0">
                <img src="https://picsum.photos/seed/washington/250/250" alt="Washington Henrique" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-[#2a2a41]" />
            </div>
            <div className="text-left space-y-4 text-gray-300">
                <p>👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de Henrique. Prazer!</p>
                <p>🚀 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript.</p>
                <p>🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos.</p>
                <p>💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.</p>
                <p>📈 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
            </div>
        </div>
    </Section>
);

// --- Portfolio Component ---
const PortfolioCard = ({ project }: { project: Project }) => (
    <div className="bg-[#18182a] rounded-2xl overflow-hidden border border-white/10 group transition-all duration-300 hover:shadow-2xl hover:shadow-[#8257E6]/20 hover:-translate-y-2">
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 h-12">{project.description}</p>
            <div className="flex space-x-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#2a2a41] text-xs rounded-full text-gray-300">{tag}</span>
                ))}
            </div>
        </div>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    </div>
);

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'UI Design', 'Design'];
    const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

    return (
        <Section id="portfolio" tag={SECTION_TAGS.portfolio} title="Trabalhos e projetos">
            <div className="flex justify-center space-x-4 mb-12">
                {categories.map(cat => (
                    <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${filter === cat ? 'bg-[#8257E6] text-white' : 'bg-[#1E1E33] text-gray-300 hover:bg-[#2a2a41] border border-white/10'}`}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(p => <PortfolioCard key={p.title} project={p} />)}
            </div>
             <Section id="videoprojects" tag="Portfolio" title="Projetos em vídeos" subtitle="Sempre é bom saber um pouquinho de edição">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {VIDEO_PROJECTS.map((vp, index) => (
                         <div key={index} className="bg-[#18182a] rounded-2xl overflow-hidden border border-white/10 group transition-all duration-300 hover:shadow-2xl hover:shadow-[#8257E6]/20 hover:-translate-y-2">
                             <img src={vp.image} alt={vp.title} className="w-full h-56 object-cover" />
                             <div className="p-6">
                                 <h3 className="text-xl font-bold text-white">{vp.title}</h3>
                                 <p className="text-gray-400 mb-4">{vp.subtitle}</p>
                                 <div className="flex items-center justify-between">
                                     <div className="flex space-x-2">
                                         {vp.tags.map((tag, i) => (
                                             <span key={i} className="px-3 py-1 bg-[#2a2a41] text-xs rounded-full text-gray-300">{tag}</span>
                                         ))}
                                     </div>
                                     <a href="#" className="text-[#8257E6] font-semibold flex items-center space-x-1">
                                         <span>Assistir</span>
                                         <span>&rarr;</span>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </Section>
        </Section>
    );
};

// --- Skills Component ---
const Skills = () => (
    <Section id="skills" tag={`${SECTION_TAGS.skills} & Experiências`} title="Tecnologias e habilidades">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-white text-center mb-4">Techs que uso no dia a dia</h3>
            <div className="flex justify-center items-center flex-wrap gap-6 mb-12">
                {DAILY_SKILLS.map(skill => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 p-4 bg-[#1E1E33] rounded-lg border border-white/10 hover:bg-[#2a2a41] transition-colors duration-300">
                        {React.cloneElement(skill.icon, { className: 'w-10 h-10 text-[#8257E6]' })}
                        <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-4">Outras techs com que já realizei projetos</h3>
            <div className="flex justify-center items-center flex-wrap gap-4">
                {OTHER_SKILLS.map(skill => (
                    <div key={skill.name} className="p-3 bg-[#1E1E33] rounded-full border border-white/10 hover:bg-[#2a2a41] transition-colors duration-300">
                        {React.cloneElement(skill.icon, { className: 'w-8 h-8 text-gray-400' })}
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

// --- Career Component ---
const CareerCard = ({ item }: { item: CareerItem }) => (
    <div className="bg-[#18182a] p-6 rounded-2xl border border-white/10 h-full">
        <h4 className="text-lg font-bold text-white mb-2">{item.role}</h4>
        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
            <span className="bg-[#2a2a41] px-3 py-1 rounded-full text-[#8257E6]">{item.duration}</span>
            <span>{item.period}</span>
        </div>
    </div>
);

const Career = () => (
    <Section id="career" tag={SECTION_TAGS.career} title="Trajetória até aqui">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Área profissional</h3>
                <p className="text-center text-gray-500 mb-8">2016 - Atualmente</p>
                <div className="space-y-8">
                    {PROFESSIONAL_CAREER.map(item => <CareerCard key={item.role} item={item} />)}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Acadêmica</h3>
                <p className="text-center text-gray-500 mb-8">2014 - Atualmente</p>
                <div className="space-y-8">
                    {ACADEMIC_CAREER.map(item => <CareerCard key={item.role} item={item} />)}
                </div>
            </div>
        </div>
    </Section>
);

// --- Testimonials Component ---
const TestimonialCard = ({ item }: { item: Testimonial }) => (
    <div className="bg-[#18182a] p-8 rounded-2xl border border-white/10 relative">
        <div className="absolute top-4 left-4 text-6xl text-[#8257E6]/20 font-serif">&ldquo;</div>
        <p className="relative z-10 text-gray-300 mb-6">{item.quote}</p>
        <div className="flex items-center">
            <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mr-4 border-2 border-[#8257E6]" />
            <div>
                <h5 className="font-bold text-white">{item.name}</h5>
                <p className="text-sm text-gray-400">{item.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => (
    <Section id="testimonials" tag={SECTION_TAGS.testimonials} title="Em depoimento">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, index) => <TestimonialCard key={index} item={item} />)}
        </div>
    </Section>
);

// --- Contact and Footer ---
const ContactFooter = () => (
    <footer id="contact" className="bg-[#10101d] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block bg-[#1E1E33] text-[#8257E6] px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-white/10">{SECTION_TAGS.contact}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Vamos conversar!</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                <a href="#" className="inline-block bg-[#8257E6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300">Vamos conversar</a>
                <div>
                    <p className="text-gray-400">E-mail:</p>
                    <a href="mailto:henriquesousa.dev@gmail.com" className="text-white font-semibold hover:text-[#8257E6] transition-colors">henriquesousa.dev@gmail.com</a>
                </div>
            </div>
            <a href="#root" className="inline-block text-gray-400 hover:text-white mb-12">Voltar ao topo &uarr;</a>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">Copyright &copy; Henrique Sousa - 2022</p>
                 <div className="flex justify-center space-x-4">
                    <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors duration-300"><LinkedinIcon /></a>
                    <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors duration-300"><GithubIcon /></a>
                </div>
            </div>
        </div>
    </footer>
);


// --- Main App Component ---
function App() {
  return (
    <div className="bg-[#0b0b1e] font-sans">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Career />
        <Testimonials />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
