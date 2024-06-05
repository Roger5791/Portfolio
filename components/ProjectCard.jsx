import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from "./ui/card"
import { Github, Link2Icon, EyeIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import { useRef, useState } from "react"


const ProjectCard = ({project, showModal, setShowModal, setActivePop}) => {

  const showModalHandle = (image, name, desc, tools) =>{
    setShowModal(true)
    setActivePop(image, name, desc, tools)
  }
 

  return (
  
    <Card className='group overflow-hidden relative:'>
        <CardHeader className='p-0'>
        <div className="relative w-full h-[280px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
            <Image className="absolute top-12 shadow-2xl" src={project.image[0]} width={257} height={230} alt="" priority />

            <div className="flex gap-x-4">
               <a onClick={() => showModalHandle([project.image, project.name, project.description, project.tools])} className="bg-secondary hover:bg-primary cursor-pointer w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"><EyeIcon className="text-white" />
                </a>
                <Link href={project.link} className="bg-secondary hover:bg-primary w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"><Link2Icon className="text-white" />
                </Link>
                <Link href={project.github} target="blank" className="bg-secondary hover:bg-primary w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"><Github className="text-white" />
                </Link>
            </div>
            <Badge className='uppercase text-sm font-medium mb-2 absolute top-3 left-3'>{project.category}</Badge>
        </div>     

        </CardHeader>
        <div className="h-full px-8 py-4">
        
            <h4 className="h4 mb-1">{project.name}</h4>
            <p className="text-muted-foreground mb-2 text-sm">{project.description}</p>

            {project.tools.map((tool, index) => {
              return (
                
                <Badge key={index} variant={'secondary'}  className='uppercase font-normal mr-3'>{tool}</Badge>
             
              )
            })}
            
        </div>
    </Card>

  
  )
}

export default ProjectCard