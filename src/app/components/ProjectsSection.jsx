"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Stock Analyzer",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tags: ["All", "Personal"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Fairness in Computer Vision",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tags: ["All", "Academic"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "2023 MIT GTL x Amal Blogs",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        tags: ["All", "Personal"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <>
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
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </>
  )
}

export default ProjectsSection