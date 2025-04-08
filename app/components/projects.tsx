"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./projects-card";
import { useRef } from "react";

const projects = [
  {
    title: "San Francisco Neighborhoods Crime Analysis",
    description:
      "Developed an interactive dashboard analyzing 850,000+ crime incidents (2018–2024), featuring geospatial maps of 10 police districts and revealing 60% of crimes in 3 key areas. Built a robust ETL pipeline with NumPy and Pandas, processing 1M+ data points and reducing 30+ dimensions for optimized resource allocation.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Plotly",
      "Altair",
      "Streamlit",
    ],
    projectUrl: "https://preppalbot.onrender.com/",
  },
  {
    title: "Prep Pal - AI Interview Copilot",
    description:
      "A RAG application built using Python, LangChain, and GPT. PrepPal is an AI interview preparation assistant fine-tuned on extensive real-world interview data.  It gives authentic, reliable answers using frameworks like STAR and CARL to structure your responses. The assistant handles behavioral, situational, technical questions and many more, using golden rules. For non-resume questions, it gathers specific details to customize answers that align with job requirements. It also provides summary of the resume",
    technologies: ["Python", "LangChain", "RAG", "FastAPI", "Pinecone"],
    projectUrl: "https://preppalbot.onrender.com/",
  },
  {
    title: "My Career Champ",
    description:
      "AI resume builder using React.js and Python, serving 100+ university students at SF State. It takes minimal input from the users to build ATS friendly resumea, analyzes resumes for factors like keywords, formatting, and content, providing feedback and suggestions for improvement. It aims to increase the chances of a resume getting noticed by employers and ultimately securing interviews.",
    technologies: [
      "React",
      "Python",
      "Flask",
      "PostgreSQL",
      "OpenAI API",
      "Google Cloud",
    ],
    projectUrl: "  https://www.mycareerchamp.org/sign-up",
  },
  {
    title: "Picture Perfect",
    description:
      "An image-sharing and marketplace platform built with React and Django, enabling users to edit, share, and sell images efficiently. Features include cropping, resizing, filters, advanced search, and content moderation. Leveraged AWS (EC2, S3) for image processing with 99.9% uptime, MySQL for data management, and Docker for scalability, ensuring a seamless user experience.",
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "Django",
      "MySQL",
      "AWS",
      "Docker",
    ],
    projectUrl: "https://github.com/hackerdud3/Picture-Perfect",
  },
  {
    title: "Pulse Events",
    description:
      "Built a full-stack event management platform with Next.js, Spring Boot, and PostgreSQL, featuring secure JWT authentication and role-based access. Integrated Google Maps and Places API for location services, enabling event creation, management, and discovery with advanced filters. Delivered a responsive interface for seamless user and admin experiences.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Redis",
    ],
    projectUrl: "https://github.com/hackerdud3/PulseEvents",
  },
  {
    title: "Prayan",
    description:
      "AI travel planner app using React Native, integrating Google Places and Maps APIs for personalized itineraries, flight details, hotel recommendations, and location-based search.",
    technologies: [
      "React Native",
      "TypeScript",
      "Google Cloud",
      "Expo",
      "Google Gemini API",
    ],
    projectUrl: "https://github.com/hackerdud3/Prayan",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section id="projects" className="lg:py-20 py-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="h-full" // Add this
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
