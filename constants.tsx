
import React from 'react';
import type { Project, CareerItem, Testimonial, Skill, ExperienceCard, VideoProject } from './types';

// Icons
export const CodeIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" /></svg>;
export const BuildingIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375M9 17.25h6.375" /></svg>;
export const PenRulerIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>;
export const ReactIcon = ({ className = "w-8 h-8" }: { className?: string }) => <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>;
export const JSIcon = ({ className = "w-8 h-8" }: { className?: string }) => <svg className={className} viewBox="0 0 128 128"><rect width="128" height="128" fill="#f7df1e"></rect><path d="M60.38,103.17a15.4,15.4,0,0,1-11.43-4.41,12.83,12.83,0,0,1-4-9.33L50,86.27H62.77s.28,3.42,2.6,5.17c3,2.2,7.26.56,7.26.56s3.88-2,3.88-6.17c0-6.17-9.56-5.89-9.56-16.17,0-7.89,6.42-13.33,14.7-13.33a14.23,14.23,0,0,1,10.29,3.85,10.6,10.6,0,0,1,3.44,8l-4.71,3.16H88.24s-.21-2.6-2.13-4c-2.48-1.8-5.32-2.12-5.32-2.12s-3.44.28-3.44,4.41c0,5.32,9.56,4.71,9.56,16.17,0,8.44-5.6,14.17-15.56,14.17A16.29,16.29,0,0,1,60.38,103.17Z"></path></svg>;
export const TSIcon = ({ className = "w-8 h-8" }: { className?: string }) => <svg className={className} viewBox="0 0 128 128"><rect width="128" height="128" fill="#3178c6"></rect><path fill="#fff" d="M99.18,48.24H79.43V98.1H66.1V48.24H46.36V37.33H99.18Z"></path><path fill="#fff" d="M46.36,37.33h52.82v10.91H46.36z"></path></svg>;
export const NextJSIcon = ({ className = "w-8 h-8" }: { className?: string }) => <svg className={className} fill="currentColor" viewBox="0 0 180 180"><path d="M90,0a90,90,0,1,0,90,90A90,90,0,0,0,90,0ZM50.31,135V45h17.25V119.25l45-74.25H129.69L70.12,135Z"/></svg>;
export const FigmaIcon = ({ className = "w-8 h-8" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="#f24e1e" d="M12 24a6 6 0 0 1-6-6v-6h6v6a6 6 0 0 1-6 6z"/><path fill="#ff7262" d="M12 18H6a6 6 0 0 1 0-12h6v12z"/><path fill="#a259ff" d="M12 12H6a6 6 0 0 1 6-6v6z"/><path fill="#1abcfe" d="M12 6H6a6 6 0 0 1 6-6v6z"/><path fill="#0acf83" d="M12 6a6 6 0 1 1 6 6h-6V6z"/></svg>;
export const TailwindIcon = ({ className = "w-8 h-8" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 12C19.6569 12 21 10.6569 21 9C21 7.34315 19.6569 6 18 6C16.3431 6 15 7.34315 15 9C15 10.6569 16.3431 12 18 12Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12C7.65685 12 9 10.6569 9 9C9 7.34315 7.65685 6 6 6C4.34315 6 3 7.34315 3 9C3 10.6569 4.34315 12 6 12Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg className={className} viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>;
export const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;

export const SECTION_TAGS = {
  about: "Sobre mim",
  portfolio: "Portfólio",
  skills: "Skills",
  career: "Carreira",
  testimonials: "Recomendações",
  contact: "Contato"
};

export const NAV_LINKS = [
  { name: "Sobre mim", href: "#about" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Carreira", href: "#career" },
  { name: "Recomendações", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  { title: "3 anos como", subtitle: "Programador", icon: <CodeIcon /> },
  { title: "7 anos de", subtitle: "Trabalhos", icon: <BuildingIcon /> },
  { title: "4 anos como", subtitle: "Designer", icon: <PenRulerIcon /> },
];

export const PROJECTS: Project[] = [
  { title: "Move.it", description: "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.", tags: ["Online", "Typescript"], image: "https://picsum.photos/seed/moveit1/400/250", category: "UI Design" },
  { title: "VisGeo", description: "Sistema web ETL no qual dados georreferenciados são extraídos de shapefiles.", tags: ["React JS", "Typescript"], image: "https://picsum.photos/seed/visgeo1/400/250", category: "Design" },
  { title: "DashGo", description: "Dashboard de usuário com Chakra UI. Autenticação e funcionalidades de visualização de dados.", tags: ["React JS", "Typescript"], image: "https://picsum.photos/seed/dashgo/400/250", category: "UI Design" },
  { title: "WorldTrip", description: "Interface de agência de viagens com informações de continentes e cidades. Feito em Next.js.", tags: ["Next.js", "Typescript"], image: "https://picsum.photos/seed/worldtrip/400/250", category: "UI Design" },
  { title: "Portfolio 2021", description: "Meu portfólio anterior, desenvolvido para mostrar meus projetos e habilidades.", tags: ["React JS", "Sass"], image: "https://picsum.photos/seed/portfolio/400/250", category: "Design" },
  { title: "Letmeask", description: "Plataforma de perguntas e respostas em tempo real, utilizando React e Firebase.", tags: ["React JS", "Firebase"], image: "https://picsum.photos/seed/letmeask/400/250", category: "Design" },
];

export const VIDEO_PROJECTS: VideoProject[] = [
    { title: "VisGeo", subtitle: "Move.it", image: "https://picsum.photos/seed/video1/400/300", tags: ["React JS", "React JS"] },
    { title: "Move.it", subtitle: "Move.it", image: "https://picsum.photos/seed/video2/400/300", tags: ["React JS", "React JS"] },
    { title: "Next Level", subtitle: "Move.it", image: "https://picsum.photos/seed/video3/400/300", tags: ["React JS", "React JS"] },
];

export const DAILY_SKILLS: Skill[] = [
  { name: "React", icon: <ReactIcon /> },
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "Next.js", icon: <NextJSIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
];

export const OTHER_SKILLS: Skill[] = [
  { name: "React", icon: <ReactIcon /> },
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "Next.js", icon: <NextJSIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Github", icon: <GithubIcon className="w-8 h-8"/> },
];

export const PROFESSIONAL_CAREER: CareerItem[] = [
  { role: "Desenvolvedor Front-end na Ensinio", description: "Desenvolvimento de features na aplicação principal e site, com React Js e Typescript, além do auxílio de outras tecnologias como Next, Styled Components e padrões de arquitetura.", duration: "1 ano e 7 meses", period: "Abril/2021 - Atualmente" },
  { role: "Designer na Viralizzi", description: "Disponibilizando serviços para mídias digitais na Viralizzi como Designer.", duration: "3 meses", period: "Janeiro/2021 - Abril/2021" },
  { role: "Instrutor de programação na SuperGeeks", description: "Como instrutor de programação, ciência da computação e desenvolvimento de jogos com crianças e adolescentes. Além do suporte para criação de conteúdos e mídias digitais.", duration: "1 ano e 11 meses", period: "Fevereiro/2019 - Janeiro/2021" },
];

export const ACADEMIC_CAREER: CareerItem[] = [
    { role: "Superior, Análise e Desenvolvimento de Sistemas", description: "Recém graduado pela FATEC de São José dos Campos no curso de Análise e Desenvolvimento de Sistemas.", duration: "3 anos", period: "Agosto/2019 - Agosto/2022" },
    { role: "Técnico, Redes de Computadores", description: "Desenvolvimento de features na aplicação principal e site, com React Js e Typescript, além do auxílio de outras tecnologias como Next, Styled Components e padrões de arquitetura.", duration: "1 ano e 6 meses", period: "Fevereiro/2018 - Junho/2019" },
    { role: "Inglês - Conversação avançada", description: "No segundo semestre de 2018 pude aprimorar meu nível de inglês (Hoje: Avançado) com 6 meses de conversação avançada pelo Instituto Federal de Jacareí (IFSP).", duration: "6 meses", period: "Julho/2018 - Dezembro/2018" },
];


export const TESTIMONIALS: Testimonial[] = [
  { quote: "O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!", name: "Romário Lima", title: "Engenheiro da Computação", avatar: "https://picsum.photos/seed/avatar1/100/100" },
  { quote: "Trabalhar com o Henrique é uma experiência incrível. Profissional dedicado, com uma visão de design apurada e código de altíssima qualidade. Recomendo fortemente.", name: "Maria Silva", title: "Product Manager", avatar: "https://picsum.photos/seed/avatar2/100/100" },
  { quote: "Um desenvolvedor excepcional que une habilidade técnica com um ótimo senso de UX. Entregou o projeto antes do prazo e superou todas as expectativas.", name: "Carlos Souza", title: "CEO na TechCorp", avatar: "https://picsum.photos/seed/avatar3/100/100" },
];
