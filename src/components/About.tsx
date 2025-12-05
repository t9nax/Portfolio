import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "Aug. 2023 – Aug. 2028",
    title: " Integrated AI/ML-powered features into enterprise web platforms using Python, TensorFlow, scikit-learn, and OpenAI APIs., NashTech Vietnam, Ho Chi Minh City",
    description: ` Developed and maintained end-to-end web applications using React.js, Node.js, Express, MongoDB, and PostgreSQL. Collaborated with data scientists to build AI microservices (e.g., recommendation engines, chatbots, predictive analytics) and integrated them into production web apps via REST APIs. Built intuitive user interfaces for AI-powered dashboards and visualization tools using D3.js and Chart.js. Deployed scalable AI-enabled solutions on cloud platforms like AWS and Azure, utilizing services such as Lambda, S3, SageMaker, and Azure ML Studio.  Worked with LangChain, LLMs, and vector databases (e.g., Pinecone, FAISS) to create intelligent search features and RAG (Retrieval-Augmented Generation) pipelines. Actively participated in code reviews, sprint planning, and architecture discussions with Agile teams.`,
    type: "experience"
  },
  {
    id: 2,
    year: "July. 2021 - July. 2023",
    title: "covering sprint planning, daily standups, and iterative delivery—while working atplus-Software JSC, Ho Chi Minh City",
    description: " Developed and maintained end-to-end web applications using React.js, Node.js, Express,MongoDB, and PostgreSQL.Integrated AI/ML-powered features into enterprise web platforms using Python, TensorFlow,scikit-learn, and OpenAI APIs.AI microservices (recommendation engines, chatbots, predictive analytics) and integrated theminto production web apps via REST APIs.Deployed scalable AI-enabled solutions on cloud platforms like AWS and Azure, utilizing servicessuch as Lambda, S3, SageMaker, and Azure ML Studio.Used Git, Docker, Kubernetes, and CI/CD pipelines for smooth development, testing, anddeployment workflows.",
    type: "experience"
  },
  {
    id: 3,
    year: "July. 2017 - June. 2020",
    title: "Participated in Agile development cycles, including sprint planning and standups, VTM Vietnam JSC, Ho Chi Minh City",
    description: " Built and maintained front-end features using HTML, CSS, JavaScript, and basic PHP. Worked with UI/UX designers to turn wireframes into clean, responsive interfaces. Helped integrate APIs and connect front-end components to back-end systems (MySQL/PHP).Debugged and tested websites to ensure cross-browser and mobile compatibility.Wrote internal documentation for features, workflows, and reusable code snippets.",
    type: "experience"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">full stack web developer</span> with 5 years of experience delivering high-perfomance, end-to-end web solutions at Splus-Software JSC and VTM Vietnam
                JSC, combining deep expertise in modern frameworks(React, Node.js, Django) with advanced proficiency in AI technologies, including Large Language Models and TensorFlow.
              </p>
              <p className="text-muted-foreground mb-4">
                With expertise spanning both <span className="font-semibold text-blue-400">frontend and backend development</span>, I focus on creating seamless user experiences backed by robust, scalable architectures.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm exploring the potential of <span className="font-semibold text-blue-400">AI agents</span> to automate workflows and enhance software capabilities.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Education</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="SST.png" alt="Google Data Analytics" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-xs text-blue-400">BACHELOR OF COMPUTER SCIENCE</div>
                    <div className="text-xs text-muted-foreground">Saigon Technology University</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
