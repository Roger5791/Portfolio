import DevImg from "./DevImg"
import Image from "next/image"
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import { User2, MailIcon, HomeIcon, PhoneCall, Calendar, Briefcase } from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Saurav Antony',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91 9744753160',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'sauravantony2002@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 24 Aug, 2002',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Kerala, India',
    },
]

const qualificationsData = [
    {
        title:'education',
        data: [
            {
                institute: 'S - Technologies',
                course: 'C++ Comprehensive Course',
            },
            {
                institute: 'Udemy + Freecodecamp',
                course: 'Python Advanced Bootcamp',
            },
            {
                institute: 'Udemy',
                course: 'React + Redux + NodeJS Course',
            },
        ],
    },
]

const skillsData = [
    {
        title:'skills',
        data: [
            {
                skill: 'Languages: ',
                course: 'C++, Python',
            },
            {
                institute: 'Frontend: ',
                course: 'React, NextJS, HTML5, CSS, JavaScript, Bootstrap, Tailwind, PhP',
            },
            {
                institute: 'Backend: ',
                course: 'NodeJS, ExpressJS',
            },
            {
                institute: 'Other: ',
                course: 'Tkinter, Git',
            },
        ],
    },
    {
        title:'tools',
        data: [
            {
                imgPath: '/about/vscode.svg: ',
            },
            {
                imgPath: '/about/figma.svg: ',
            },
            {
                imgPath: '/about/notion.svg: ',
            },
            {
                imgPath: '/about/wordpress.svg: ',
            },
        ]
    }
]


const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

  return (
    <section className="container mx-auto">
        <h2 className="section-title"> About me</h2>
    </section>
  )
}

export default About