"use client";

import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "San Francisco State University",
    period: "May 2023 - May 2024",
    description: [
      "• Developed an AI resume builder with React.js, Flask, and OpenAI API, automating 70% of the resume creation process ",
      "• Architected modular frontend with 20+ reusable React components, reducing development time for new features by 60% and ensuring consistent UI/UX across the platform.",
      "• Engineered custom React hooks and Context API, reducing global state management overhead by 35% ",
      "• Devised an NLP-based evaluation system, boosting resume scores by over 20% with automated feedback and suggestions.",
      "• Improved data retrieval by 40% by optimizing PostgreSQL schemas for JSON storage, enabling dynamic resume customization. ",
    ],
    technologies: ["React", "JavaScript", "Python", "Flask", "PostgreSQL"],
  },

  {
    title: "Teaching Assistant",
    company: "SFSU Department of Computer Science ",
    period: "Sept 2023 – Dec 2023 ",
    description: [
      "• Mentored 30+ students in programming fundamentals, Object-Oriented Programming (OOP), and Microservices, fostering critical problem-solving skills and improving their coding proficiency in Java.",
      "• Conducted code reviews and provided debugging support on group projects, leading to a 35% improvement in grades. ",
    ],
    technologies: ["Java", "Communication", "Mentoring", "Code Review"],
  },
  {
    title: "Software Developer",
    company: "Zenbyt",
    period: "Jan 2022 - Dec 2022",
    description: [
      "•	Migrated a legacy PHP application to Node.js and Express, boosting development by 50% and increasing user retention by 25%.",
      "•	Implemented RESTful APIs with Redis caching, supporting 100K+ daily requests at 99.9% uptime and sub-100ms response time.",
      "•	Achieved 40% improved query performance by revamping PostgreSQL models with Sequelize ORM for client’s SaaS platform.",
      "•	Created responsive frontend using React.js and Redux, achieving 45% faster page loads and 30% increase in user engagement.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Haar-Cascade Classifiers",
      "Dlib",
      "Raspberry Pi",
    ],
  },
  // {
  //   title: "Machine Learning Intern",
  //   company: "Ram Innovative Infotech",
  //   period: "Jan 2022 - June 2022",
  //   description: [
  //     "• Developed a Computer Vision system for Drowsiness Detection using Haar Classifiers, OpenCV, achieving 95% accuracy.",
  //     "• Implemented a facial landmark detection algorithm to calculate eye aspect ratio (EAR), monitoring and analyzing eye closure patterns and triggering alerts for prolonged closures.",
  //     "• Integrated webcam and sensors to process video streams, cutting costs by 40% for a portable automotive safety system.",
  //   ],
  //   technologies: [
  //     "Python",
  //     "Machine Learning",
  //     "Haar-Cascade Classifiers",
  //     "Dlib",
  //     "Raspberry Pi",
  //   ],
  // },
  // {
  //   title: "Software Developer",
  //   company: "Zenbyt",
  //   period: "Jan 2022 - Dec 2022",
  //   description: [
  //     "• Migrated a legacy PHP application to Node.js and Express, boosting development by 50% and increasing user retention by 25%.",
  //     "• Implemented RESTful APIs with Redis caching, supporting 100K+ daily requests at 99.9% uptime and sub-100ms response time.",
  //     "• Achieved 40% improved query performance by optimizing PostgreSQL models with Sequelize ORM for client’s SaaS platform.",
  //     "• Built responsive frontend using React.js and Redux, achieving 45% faster page loads and 30% increase in user engagement.",
  //   ],
  //   technologies: [
  //     "ReactJs",
  //     "Node.js",
  //     "Express",
  //     "Redux",
  //     "PostrgeSQL",
  //     "Sequelize",
  //   ],
  // },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="lg:py-20 py-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                <Card className="bg-background/40 backdrop-blur-md border border-white/10">
                  <CardHeader className="flex flex-col sm:flex-row justify-between px-6">
                    <div className=" flex justify-center items-center md:items-start flex-col">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary text-nowrap">{exp.company}</p>
                    </div>
                    <p className="text-default-500">{exp.period}</p>
                  </CardHeader>
                  <Divider />
                  <CardBody className="px-6">
                    {exp.description.map((desc) => (
                      <p key={desc} className="text-default-500 mb-2">
                        {desc}
                      </p>
                    ))}
                    <div className="flex gap-2 flex-wrap mt-2">
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          color="primary"
                          classNames={{
                            content: "text-white font-medium",
                            base: "bg-primary/80 hover:bg-primary/90 transition-colors",
                          }}
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
