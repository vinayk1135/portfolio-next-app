"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import LinkedInBadge from "./linkedin-badge";

const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript"],
  "Web Technologies and Libraries": [
    "React.js",
    "HTML",
    "CSS",
    "REST APIs",
    "JSON",
    "Plotly",
    "Altair",
  ],
  Frameworks: ["Django", "Flask", "FastAPI", "Node.js", "Express"],
  "Data and Databases": [
    "SQL (MySQL, PostgreSQL)",
    "NoSQL (MongoDB)",
    "Redis",
    "Kafka",
    "Apache Spark",
  ],
  "AI and Machine Learning": [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "LangChain",
    "RAG",
    "OpenCV",
    "Natural Language Processing",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],
  "Testing & Tools": ["Jest", "Git", "Linux", "Postman"],
};

export function About() {
  return (
    <section id="about" className="lg:py-20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="transform-gpu">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
            <Card className="bg-background/40 backdrop-blur-md border border-white/10">
              <CardBody className="gap-8">
                <p className="text-lg text-default-500">
                  Full Stack Engineer with extensive experience in architecting
                  and delivering high-performance solutions. My expertise spans
                  designing dynamic user experiences with React, Next.js and
                  TypeScript to engineering resilient, scalable server
                  architectures using Node.js, Python (Django), and the Java
                  Spring ecosystem. I excel in end-to-end application
                  development, from developing intuitive user interfaces to
                  implementing robust back-end systems on AWS and GCP. With a
                  passion for performance optimization and deep technical
                  interests in distributed systems, Linux internals, and network
                  observability, I thrive on solving complex challenges and
                  driving innovation in production environments.
                </p>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="space-y-6 flex-grow">
                    {Object.entries(skills).map(
                      ([category, skillList], index) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                          }}
                        >
                          <h3 className="text-xl font-semibold mb-3">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill) => (
                              <Chip
                                key={skill}
                                color="primary"
                                classNames={{
                                  content: "text-white font-medium",
                                  base: "bg-primary/80 hover:bg-primary/90 transition-colors",
                                }}
                              >
                                {skill}
                              </Chip>
                            ))}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                  <div className="w-full lg:w-auto flex justify-center items-start">
                    <motion.div
                      className="w-[300px] sm:w-[350px] lg:w-[300px] flex"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <LinkedInBadge />
                    </motion.div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
