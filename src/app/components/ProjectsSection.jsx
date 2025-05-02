"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 9,
        title: "Stock Analyzer",
        description: "Want to see how much a stock is worth based on your key assumptions? Want to conduct this analysis using real-time market data? I developed a stock analyzing tool where one can easily calculate the fair value of a stock.",
        tags: ["All", "Personal"],
        paperUrl: "",
        previewUrl: "https://stock-analyzer-iota.vercel.app/",
        codeUrl: "https://github.com/dyk010518/stock_analyzer",
    },
    {
        id: 8,
        title: "MIT Masters: Single-Cell ATAC-Seq",
        description: "I got my Masters degree from MIT in February of 2024. I worked on the thesis called \"Leveraging Single-Cell ATAC-Seq for Genomic Language Models and Multimodal Foundation Models\".",
        tags: ["All", "Academic"],
        paperUrl: "/files/kim-dyk0518-meng-eecs-2025-thesis.pdf",
        previewUrl: "https://dspace.mit.edu/handle/1721.1/159110",
        codeUrl: "",
    },
    {
        id: 7,
        title: "Musical Genre Classification",
        description: "For the MIT class \"Advances in Computer Vision\" (6.8300), our group developed a state-of-the-art musical genre classifier that employs CNN + BiGRU architecture.",
        tags: ["All", "Academic"],
        paperUrl: "/files/Musical_Genre_Classification.pdf",
        previewUrl: "",
        codeUrl: "",
    },
    {
        id: 6,
        title: "LyricsBERT: Musical Recommendation",
        description: "For the MIT class \"Quantitative Methods for NLP\" (6.8611), we developed LyricsBERT, a transformer-based model that recommends music based on lyrics.",
        tags: ["All", "Academic"],
        paperUrl: "/files/6_8611_final_report.pdf",
        previewUrl: "/files/6_8611_final_poster.pdf",
        codeUrl: "",
    },
    {
        id: 5,
        title: "EfficientVIT for Retail",
        description: "For the MIT class \"TinyML and Efficient Deep Learning Computing\" (6.5940), our group applied the state of the art EfficientVIT segmentation model to classification of retail items as a downstream task.",
        tags: ["All", "Academic"],
        paperUrl: "/files/6_5940_Final_Project_Paper.pdf",
        previewUrl: "",
        codeUrl: "",
    },
    {
        id: 4,
        title: "Fairness in Computer Vision",
        description: "Working with MIT Decentralized Information Group (DIG), I leverage Label Free Concept Bottleneck Model (LF-CBM) and LLMs to improve fairness in modern image classification models.",
        tags: ["All", "Academic"],
        paperUrl: "/files/SuperUROP_Final_Paper.pdf",
        previewUrl: "https://www.csail.mit.edu/research/faircv",
        codeUrl: "",
    },
    {
        id: 3,
        title: "Detect DeepFakes",
        description: "Working with MIT Affective Computing group, I created 20+, 720p deepfake videos that were used to analyze visual and auditory perceptions by which AI models and humans use to detect deepfakes.",
        tags: ["All", "Academic"],
        paperUrl: "https://arxiv.org/abs/2202.12883",
        previewUrl: "https://www.media.mit.edu/projects/detect-fakes/overview/",
        codeUrl: "",
    },
    {
        id: 2,
        title: "2023 MIT GTL x Amal Blogs",
        description: "As part of the 2023 MIT GTL Program in Israel where my team led an entrepreneurship workshop in local Amal Networks schools, we created a website encapturing our experiences in a blog format.",
        tags: ["All", "Personal"],
        paperUrl: "",
        previewUrl: "https://gtlisrael2023.weebly.com/",
        codeUrl: "",
    },
    {
        id: 1,
        title: "Personal Website",
        description: "The website you see right here was coded by me using Next, Express, and Node. The website is easily customizable with different functional components and custom inputs.",
        tags: ["All", "Personal"],
        paperUrl: "",
        previewUrl: "/",
        codeUrl: "https://github.com/dyk010518/portfolio",
    },
].map(project => ({
    ...project,
    image: `/images/projects/project_${project.id}.png`
}));

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    final: { y: 0, opacity: 1},
  };

  return (
    <section id="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Personal" 
                isSelected={tag === "Personal"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Academic" 
                isSelected={tag === "Academic"}
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    whileInView="final"
                    transition={{ duration: 0.5, delay: 0.5 + (index % 3) * 0.5 }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title}
                        description={project.description} 
                        imgUrl={project.image}
                        paperUrl={project.paperUrl}
                        codeUrl={project.codeUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection