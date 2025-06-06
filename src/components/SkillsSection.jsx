import { Code2, Database, FileCode, GitBranch, Figma, Terminal, Globe, Layers, Zap, Palette, Settings, MonitorSpeaker } from "lucide-react";

const skills=[
        // Core Languages
        { name: "Python", level: 80, category: "core", icon: Code2 },
        { name: "C", level: 70, category: "core", icon: Terminal },
       
        //Frontend
        { name: "HTML/CSS", level: 95, category: "frontend", icon: Globe },
        { name: "JavaScript", level: 80, category: "frontend", icon: FileCode },
        { name: "Angular", level: 80, category: "frontend", icon: Zap },
        { name: "React", level: 60, category: "frontend", icon: Layers },
        { name: "TypeScript", level: 85, category: "frontend", icon: Code2 },
        { name: "Tailwind CSS", level: 60, category: "frontend", icon: Palette },

        // Backend
        
        { name: "MySql", level: 60, category: "backend", icon: Database },
        { name: "MongoDB", level: 70, category: "backend", icon: Database },

        // Tools
        { name: "Git/GitHub", level: 70, category: "tools", icon: GitBranch },
        { name: "Figma", level: 60, category: "tools", icon: Figma },
        { name: "VS Code", level: 90, category: "tools", icon: MonitorSpeaker },
        
    ];


const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black-500 to-violet-500 text-white">
        <div className='container mx-auto px-4'>
            <h2 className="text-3xl md:4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">Skills
                <span className="text-violet-500"> & Technologies</span>
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
                {skills.map((skill, key) => {
                    const IconComponent = skill.icon;
                    return (
                <div key={key}
                     className="dark:bg-gray-900 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                        
                        <div className="flex items-center gap-3 mb-3">
                            <IconComponent className="w-5 h-5 text-violet-500" />
                            <h3 className="font-semibold text-base">{skill.name}</h3>
                        </div>
                       <div className="w-full mb-1">
                            <div className="w-full bg-gray-700 h-1.5 rounded-full dark:bg-gray-600 overflow-hidden">
                                <div className="bg-violet-500 h-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>

                </div>    
                    )
                })}
            </div>

        </div>

    </section>    
)
}

export default SkillsSection