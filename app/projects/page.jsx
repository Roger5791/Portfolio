'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'
import { TabsContent } from '@radix-ui/react-tabs';
import Modal from '@/components/Modal';


const projectData = [
  {
    image: ["/work/s-store-1.png", "/work/s-store-2.png", "/work/s-store-3.png", "/work/s-store-4.png",],
    category: "React",
    name: "S-Store E-Commerce Website",
    tools: [
      "React", "Node.Js", "Clerk", "Stripe",
    ],
    description:
      "A Fullstack E-Commerce website made in React with Clerk & Stripe payment integration.",
    link: "",
    github: "https://github.com/Roger5791/S-Store",
  },
  {
    image: ["/work/facebook-1.png", "/work/facebook-2.png", "/work/facebook-3.png", "/work/facebook-4.png", "/work/facebook-5.png", "/work/facebook-6.png"],
    category: "HTML",
    name: "Facebook Comprehensive Clone",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "A Comprehensive Clone of Facebook with Menu functionalties & more.",
    link: "",
    github: "https://github.com/Roger5791/Facebook-Comprehensive-Clone",
  },
  {
    image: ["/work/movio-1.png", "/work/movio-2.png", "/work/movio-3.png", "/work/movio-4.png", "/work/movio-5.png", "/work/movio-6.png"],
    category: "React",
    name: "Movio Movie/TV Show Website",
    tools: [
      "React", "CSS", "SCSS", "Node.Js",
    ],
    description:
      "A Comprehensive and Exciting Movie/TV Show website made with React using TMDB API",
    link: "",
    github: "https://github.com/Roger5791/Movio---React-Movie-TV-Show-Website",
  },
  {
    image: ["/work/apex-autos-1.png", "/work/apex-autos-2.png", "/work/apex-autos-3.png", "/work/apex-autos-4.png", "/work/apex-autos-5.png", "/work/apex-autos-6.png","/work/apex-autos-8.png",],
    category: "HTML",
    name: "Apex Autos Automobile Website",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "An E-Commerce Template for a Automobile Retailer made using pure HTML, CSS & JavaScript.",
    link: "",
    github: "https://github.com/Roger5791/Apex-Autos---E-Commerce",
  },
  {
    image: ["/work/youtube-1.png", "/work/youtube-2.png", "/work/youtube-3.png", "/work/youtube-4.png", "/work/youtube-1.png", "/work/youtube-2.png",],
    category: "React",
    name: "YouTube API Clone",
    tools: [
      "React", "CSS", "Tailwind", "Node.Js",
    ],
    description:
      "An amazing Clone of  YouTube using Rapidgator API, complete with Search & Filter functionality.",
    link: "",
    github: "https://github.com/Roger5791/YouTube-Clone",
  },
  {
    image: ["/work/pexel-1.png", "/work/pexel-2.png", "/work/pexel-3.png", "/work/pexel-4.png", "/work/pexel-5.png", "/work/pexel-6.png", "/work/pexel-7.png", "/work/pexel-8.png",],
    category: "HTML",
    name: "Pexelio Image/Video API Website",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "An Image and Video search website with functional variable made using HTML & JavaScript",
    link: "",
    github: "https://github.com/Roger5791/Pexelio---Image-Video-Search-Website",
  },
  {
    image: ["/work/books-1.png", "/work/books-2.png", "/work/books-3.png", "/work/books-4.png", "/work/books-5.png", "/work/books-1.png"],
    category: "React",
    name: "S-Books E-Commerce Website",
    tools: [
      "React", "CSS", "Firebase", "Node.Js",
    ],
    description:
      "A E-Commerce Platform for Books with Cart, Search & Filter functionality & with Firebase authentication",
    link: "",
    github: "https://github.com/Roger5791/S-Books-E-Commerce-Website",
  },
  {
    image: ["/work/student-1.png", "/work/student-2.png", "/work/student-3.png", "/work/student-4.png", "/work/student-5.png", "/work/student-1.png"],
    category: "Python",
    name: "Student Database Management System",
    tools: [
      "Python", "Tkinter", "MySQL",
    ],
    description:
      "A Student Database Management System made using Pthon and Tkinter",
    link: "",
    github: "https://github.com/Roger5791/Student-Management-System---Python---Tkinter",
  },
  {
    image: ["/work/cookbook-1.png", "/work/cookbook-2.png", "/work/cookbook-3.png", "/work/cookbook-4.png", "/work/cookbook-5.png", "/work/cookbook-6.png"],
    category: "HTML",
    name: "CookBook Recipes API",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "A Comprehensive Recipe search website made using Edamam API with amazing Filters.",
    link: "",
    github: "https://github.com/Roger5791/CookBook---Recipe-Search-Website",
  },
  {
    image: ["/work/weather-1.png", "/work/weather-2.png", "/work/weather-1.png", "/work/weather-2.png", "/work/weather-1.png", "/work/weather-2.png"],
    category: "HTML",
    name: "WeatherBug Weather API",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "A Comprehensive Weather website made using OpenWeather API.",
    link: "",
    github: "https://github.com/Roger5791/WeatherBug---Weather-API-Website",
  },
  {
    image: ["/work/movix-1.png", "/work/movix-2.png", "/work/movix-3.png", "/work/movix-4.png", "/work/movix-5.png", "/work/movix-6.png"],
    category: "HTML",
    name: "Movio Movie/TV Show Website",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "A Comprehensive Movie/TV Show website made using TMDB API.",
    link: "",
    github: "https://github.com/Roger5791/Movio---Movies-TV-Shows-Website",
  },
  {
    image: ["/work/notes-1.png", "/work/notes-2.png", "/work/notes-3.png", "/work/notes-4.png", "/work/notes-5.png", "/work/notes-1.png"],
    category: "HTML",
    name: "NoteKeeper JavaScript App",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "A Comprehensive Website made using JavaScript to Add, Edit & Store notes.",
    link: "",
    github: "https://github.com/Roger5791/NoteKeeper-JavaScript-App",
  },
  {
    image: ["/work/calc-1.png", "/work/calc-2.png", "/work/calc-3.png", "/work/calc-1.png", "/work/calc-2.png", "/work/calc-3.png"],
    category: "Python",
    name: "Simple GUI Calculator",
    tools: [
      "Python", "Tkinter",
    ],
    description:
      "A Simple GUI Calculator made using Python & Tkinter",
    link: "",
    github: "https://github.com/Roger5791/Simple-Calculator---Python---Tkinter",
  },
  {
    image: ["/work/premium-1.png", "/work/premium-2.png", "/work/premium-3.png", "/work/premium-4.png", "/work/premium-5.png", "/work/premium-6.png"],
    category: "HTML",
    name: "Premium Autos",
    tools: [
      "HTML", "CSS", "JavaScript",
    ],
    description:
      "A Template Website for an Automobile Buy/Sell Platform",
    link: "",
    github: "https://github.com/Roger5791/Premium--Autos---HTML",
  },
];

 const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
 ]


const Projects = () => {
  
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')


  const [showModal, setShowModal] = useState(false)
  const [activePop, setActivePop] = useState([])

  const showModalHandle = (image, name) =>{
    setShowModal(true)
    setActivePop(image, name)
  }

  console.log(activePop)




  const filteredProjects = projectData.filter((project) =>{
    return category === 'all projects'
    ? project
    : project.category === category;
  })


  return (
    <section className='min-h-screen pt-12'>
      <div className="mx-6 xl:mx-16">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>

        <Tabs defaultValue={category} className='mb-24 xl:mb-40'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger className='capitalize w-[162px] md:w-auto' onClick={() => setCategory(category)} value={category} key={index}>{category}</TabsTrigger>
              )
            })}
          </TabsList>

          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} showModal={showModal} setActivePop={setActivePop} setShowModal={setShowModal} />
                </TabsContent>
              )
            })}
          </div>

        </Tabs>

      </div>


      <div>
    {showModal && <Modal setShowModal={setShowModal} activePop={activePop} />}
    </div>
    

    </section>
  )
}

export default Projects