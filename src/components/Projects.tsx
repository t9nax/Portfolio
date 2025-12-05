import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  
  {
    id: 3,
    title: "Crop Photo",
    description: "With different size guidelines for different marketplaces, resizing product images can be a headache. Our content-aware smart resizer leverages AI to ensure your image is the perfect size, the right aspect ratio, and that your product is never accidentally cropped out.",
    image: "/lovable-uploads/crop.png",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://www.crop.photo/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 4,
    title: "SuperMind Bot",
    description: "Revolutionizing AI development, SuperMind serves as the foundational operating system for AI assistants. Join us in shaping the future of AI development, where SuperMind becomes synonymous with AI assistants worldwide.",
    image: "/lovable-uploads/super-mind.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://supermind.bot/", // Replace with actual live link if available
    githubUrl: "https://github.com/kalpsenghani/crypto-analytics-dashboard"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A robust e-commerce platform built with Java Spring Boot, featuring microservices architecture and real-time inventory management. The system implements secure payment processing, order tracking, and customer analytics. Key features include Docker containerization for easy deployment, Kafka for event streaming and real-time notifications, and Swagger for comprehensive API documentation. The platform ensures high availability and scalability through distributed architecture.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Java", "Spring Boot", "Docker", "Kafka", "Swagger", "Microservices"],
    demoUrl: "https://tinybuddha.com",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
