import { useEffect, useState } from "react";
import Project from "./Project";


const Projects = () => {
    const [projects, setProjects]= useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[]);

    return (
        <div className="bg-zinc-950 md:px-44 px-4 md:py-16 py-8">
            <h2 id="projects" className='md:text-6xl text-4xl font-bold text-white mb-16 text-center'>Projects</h2>
        
          <div className="grid md:grid-cols-3 gap-10 my-10">
          {
                projects.map(project=><Project
                key={project.id}
                project={project}></Project>)
            }
          </div>
        </div>
    );
};

export default Projects;