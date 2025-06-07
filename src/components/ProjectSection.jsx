import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id:1,
        title: "Portfolio Website",
        image: "/projects/Portfolio.png",   
        description:"Personal portfolio website showcasing my skills and projects using react.",
        tags: ["React", "Tailwind CSS", "JavaScript","Gsap","Spline"],
        demoUrl:"https://portfolio-aug9b50u5-gourab86888s-projects.vercel.app/",
        githubUrl:"https://github.com/gourab86888/Portfolio"
    },
    {
        id:2,
        title: "Ecommerce Website",
        image: "/projects/p2.png",   
        description:"E-commerce website built with Angular and Firebase, featuring product listings, shopping cart functionality, and user authentication.",
        tags: ["Angular", "Css", "Typescript","Firebase"],
        demoUrl:"https://shoes-hub-three.vercel.app/",
        githubUrl:"https://github.com/gourab86888/Shoes-Hub"
    },
    {
        id:3,
        title: "Todo Website",
        image: "/projects/Todo.png",   
        description:"A simple todo application built with Angular, TypeScript and CSS 5, allowing users to add, edit, and delete tasks.",
        tags: ["Angular", "Css", "Typescript",],
        demoUrl:"https://todo-ang-iota.vercel.app/",
        githubUrl:"https://github.com/gourab86888/Todo-ang"
    },
]

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl" >
            <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
                {""}
                Featured <span className="text-violet-500">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that I have worked on. Each project showcases my skills and creativity in web development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="bg-card rounded-lg overflow-hidden shadow-xs card:hover group">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags && project.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-violet-800 font-semibold text-gray px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}

                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">

                                    <a href="{project.demoUrl}"
                                    className="text-gray-500 hover:text-violet-800 transition-colors duration-300"target="_blank">
                                        <ExternalLink size={20}/>
                                    </a>

                                    <a className="text-gray-500 hover:text-violet-800 transition-colors duration-300"target="_blank">
                                        <Github size={20}/>
                                    </a>

                                </div>

                            </div>
                            
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </section>
  )
}
export default ProjectSection;