"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: [
      "/work/cartopia-1.png",
      "/work/cartopia-2.png",
      "/work/cartopia-3.png",
      "/work/cartopia-4.png",
      "/work/cartopia-5.png",
      "/work/cartopia-6.png",
      "/work/cartopia-7.png",
    ],
    category: "React",
    name: "Cartopia E-Commerce Website",
    tools: ["React", "Express", "MongoDB", "Stripe","Tailwind"],
    description:
      "A Fullstack E-Commerce website made in React with Express, MongoDB, Social Login, Cloudinary & Stripe payment integration.",
    link: "/projects",
    github: "https://github.com/Roger5791/cartopia-frontend",
  },
  {
    image: [
      "/work/cart-vend-1.png",
      "/work/cart-vend-2.png",
      "/work/cart-vend-3.png",
      "/work/cart-vend-4.png",
      "/work/cart-vend-5.png",
      "/work/cart-vend-6.png",
      "/work/cart-vend-7.png",
      "/work/cart-vend-9.png",
    ],
    category: "React",
    name: "Cartopia Admin Dashboard",
    tools: ["React", "Express", "MongoDB","Tailwind"],
    description:
      "A Comprehensive Dashboard made in React with Express, MongoDB, Cloudinary & Social Login with amazing features and Live Chat.",
    link: "/projects",
    github: "https://github.com/Roger5791/cartopia-vendor-dashboard",
  },
  {
    image: [
      "/work/cart-admin-1.png",
      "/work/cart-admin-2.png",
      "/work/cart-admin-3.png",
      "/work/cart-admin-4.png",
      "/work/cart-admin-5.png",
      "/work/cart-admin-6.png",
      "/work/cart-admin-7.png",
    ],
    category: "React",
    name: "Cartopia Vendor Dashboard",
    tools: ["React", "Express", "MongoDB","Tailwind"],
    description:
      "A Comprehensive Dashboard made in React with Express, MongoDB, Cloudinary & Social Login with amazing features and Live Chat.",
    link: "/projects",
    github: "https://github.com/Roger5791/cartopia-admin-dashboard",
  },
  {
    image: [
      "/work/s-store-1.png",
      "/work/s-store-2.png",
      "/work/s-store-3.png",
      "/work/s-store-4.png",
    ],
    category: "React",
    name: "S-Store E-Commerce Website",
    tools: ["React", "Node.Js", "Clerk", "Stripe"],
    description:
      "A Fullstack E-Commerce website made in React with Clerk & Stripe payment integration.",
    link: "/projects",
    github: "https://github.com/Roger5791/S-Store",
  },
  {
    image: [
      "/work/facebook-1.png",
      "/work/facebook-2.png",
      "/work/facebook-3.png",
      "/work/facebook-4.png",
      "/work/facebook-5.png",
      "/work/facebook-6.png",
    ],
    category: "HTML",
    name: "Facebook Comprehensive Clone",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "A Comprehensive Clone of Facebook with Menu functionalties & more.",
    link: "/projects",
    github: "https://github.com/Roger5791/Facebook-Comprehensive-Clone",
  },
  {
    image: [
      "/work/movio-1.png",
      "/work/movio-2.png",
      "/work/movio-3.png",
      "/work/movio-4.png",
      "/work/movio-5.png",
      "/work/movio-6.png",
    ],
    category: "React",
    name: "Movio Movie/TV Show Website",
    tools: ["React", "CSS", "SCSS", "Node.Js"],
    description:
      "A Comprehensive and Exciting Movie/TV Show website made with React using TMDB API",
    link: "/projects",
    github: "https://github.com/Roger5791/Movio---React-Movie-TV-Show-Website",
  },
  {
    image: [
      "/work/apex-autos-1.png",
      "/work/apex-autos-2.png",
      "/work/apex-autos-3.png",
      "/work/apex-autos-4.png",
      "/work/apex-autos-5.png",
      "/work/apex-autos-6.png",
      "/work/apex-autos-8.png",
    ],
    category: "HTML",
    name: "Apex Autos Automobile Website",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "An E-Commerce Template for a Automobile Retailer made using pure HTML, CSS & JavaScript.",
    link: "/projects",
    github: "https://github.com/Roger5791/Apex-Autos---E-Commerce",
  },
  {
    image: [
      "/work/youtube-1.png",
      "/work/youtube-2.png",
      "/work/youtube-3.png",
      "/work/youtube-4.png",
      "/work/youtube-1.png",
      "/work/youtube-2.png",
    ],
    category: "React",
    name: "YouTube API Clone",
    tools: ["React", "CSS", "Tailwind", "Node.Js"],
    description:
      "An amazing Clone of  YouTube using Rapidgator API, complete with Search & Filter functionality.",
    link: "/projects",
    github: "https://github.com/Roger5791/YouTube-Clone",
  },
  {
    image: [
      "/work/pexel-1.png",
      "/work/pexel-2.png",
      "/work/pexel-3.png",
      "/work/pexel-4.png",
      "/work/pexel-5.png",
      "/work/pexel-6.png",
      "/work/pexel-7.png",
      "/work/pexel-8.png",
    ],
    category: "HTML",
    name: "Pexelio Image/Video API Website",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "An Image and Video search website with functional variable made using HTML & JavaScript",
    link: "/projects",
    github: "https://github.com/Roger5791/Pexelio---Image-Video-Search-Website",
  },
  {
    image: [
      "/work/books-1.png",
      "/work/books-2.png",
      "/work/books-3.png",
      "/work/books-4.png",
      "/work/books-5.png",
      "/work/books-1.png",
    ],
    category: "React",
    name: "S-Books E-Commerce Website",
    tools: ["React", "CSS", "Firebase", "Node.Js"],
    description:
      "A E-Commerce Platform for Books with Cart, Search & Filter functionality & with Firebase authentication",
    link: "/projects",
    github: "https://github.com/Roger5791/S-Books-E-Commerce-Website",
  },
  {
    image: [
      "/work/student-1.png",
      "/work/student-2.png",
      "/work/student-3.png",
      "/work/student-4.png",
      "/work/student-5.png",
      "/work/student-1.png",
    ],
    category: "Python",
    name: "Student Database Management System",
    tools: ["Python", "Tkinter", "MySQL"],
    description:
      "A Student Database Management System made using Pthon and Tkinter",
    link: "/projects",
    github:
      "https://github.com/Roger5791/Student-Management-System---Python---Tkinter",
  },
  {
    image: [
      "/work/cookbook-1.png",
      "/work/cookbook-2.png",
      "/work/cookbook-3.png",
      "/work/cookbook-4.png",
      "/work/cookbook-5.png",
      "/work/cookbook-6.png",
    ],
    category: "HTML",
    name: "CookBook Recipes API",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "A Comprehensive Recipe search website made using Edamam API with amazing Filters.",
    link: "/projects",
    github: "https://github.com/Roger5791/CookBook---Recipe-Search-Website",
  },
  {
    image: [
      "/work/weather-1.png",
      "/work/weather-2.png",
      "/work/weather-1.png",
      "/work/weather-2.png",
      "/work/weather-1.png",
      "/work/weather-2.png",
    ],
    category: "HTML",
    name: "WeatherBug Weather API",
    tools: ["HTML", "CSS", "JavaScript"],
    description: "A Comprehensive Weather website made using OpenWeather API.",
    link: "/projects",
    github: "https://github.com/Roger5791/WeatherBug---Weather-API-Website",
  },
  {
    image: [
      "/work/movix-1.png",
      "/work/movix-2.png",
      "/work/movix-3.png",
      "/work/movix-4.png",
      "/work/movix-5.png",
      "/work/movix-6.png",
    ],
    category: "HTML",
    name: "Movio Movie/TV Show Website",
    tools: ["HTML", "CSS", "JavaScript"],
    description: "A Comprehensive Movie/TV Show website made using TMDB API.",
    link: "/projects",
    github: "https://github.com/Roger5791/Movio---Movies-TV-Shows-Website",
  },
  {
    image: [
      "/work/notes-1.png",
      "/work/notes-2.png",
      "/work/notes-3.png",
      "/work/notes-4.png",
      "/work/notes-5.png",
      "/work/notes-1.png",
    ],
    category: "HTML",
    name: "NoteKeeper JavaScript App",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "A Comprehensive Website made using JavaScript to Add, Edit & Store notes.",
    link: "/projects",
    github: "https://github.com/Roger5791/NoteKeeper-JavaScript-App",
  },
  {
    image: [
      "/work/calc-1.png",
      "/work/calc-2.png",
      "/work/calc-3.png",
      "/work/calc-1.png",
      "/work/calc-2.png",
      "/work/calc-3.png",
    ],
    category: "Python",
    name: "Simple GUI Calculator",
    tools: ["Python", "Tkinter"],
    description: "A Simple GUI Calculator made using Python & Tkinter",
    link: "/projects",
    github: "https://github.com/Roger5791/Simple-Calculator---Python---Tkinter",
  },
  {
    image: [
      "/work/premium-1.png",
      "/work/premium-2.png",
      "/work/premium-3.png",
      "/work/premium-4.png",
      "/work/premium-5.png",
      "/work/premium-6.png",
    ],
    category: "HTML",
    name: "Premium Autos",
    tools: ["HTML", "CSS", "JavaScript"],
    description: "A Template Website for an Automobile Buy/Sell Platform",
    link: "/projects",
    github: "https://github.com/Roger5791/Premium--Autos---HTML",
  },
];

const Work = () => {
  return (
    <section className="relative mt-28 mb-16 xl:mb-36">
      <div className="xl:mx-16 mx-6">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="mb-4 section-title">Latest Projects</h2>
          <p className="mb-8 subtitle">
            See what I've been working on recently.
          </p>

          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] xl:h-[485px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
