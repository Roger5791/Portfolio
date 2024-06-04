import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Saurav Antony",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9744753160",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sauravantony2002@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 24 Aug, 2002",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kerala, India",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        institute: "S - Technologies",
        course: "C++ Comprehensive Course",
      },
      {
        institute: "Udemy + Freecodecamp",
        course: "Python Advanced Bootcamp",
      },
      {
        institute: "Udemy",
        course: "React + Redux + NodeJS Course",
      },
    ],
  },
  {
    title: "schooling",
    data: [
      {
        institute: "Bhrathiar University",
        course: "Bachelor of Commerce (B.Com)",
      },
      {
        institute: "Saraswathi Vidyanikethan",
        course: "Commerce",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        skill: "Languages: ",
        course: "C++, Python",
      },
      {
        skill: "Frontend: ",
        course:
          "React, NextJS, HTML5, CSS, JavaScript, Bootstrap, Tailwind, PhP",
      },
      {
        skill: "Backend: ",
        course: "NodeJS, ExpressJS",
      },
      {
        skill: "Other: ",
        course: "Tkinter, Git",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-12 xl:py-20">
      <div className=" px-6 xl:px-20">
        <h2 className="section-title mb-8 xl:mb-12 text-center mx-auto">
          {" "}
          About me
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[400px] h-[400px] bg-cover bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>

          {/*=========Tabs========*/}

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px]  xl:border dark:border-none">
                <TabsTrigger className="w-[162px]  xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/*=========Tab Contents========*/}

              <div className="text-lg mt-12 xl:mt-8">
                {/*======Personal========*/}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmaijaio aufauifh afhuiahf afuhauiofha fiahf afia
                    </h3>
                    <p className="text-base text-gray-alt mb-8 max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Enim rerum veniam quas repellat vero vel, quia molestiae
                      deleniti nulla quaerat! Ipsam quod corporis debitis quis
                      distinctio doloremque blanditiis veritatis ipsum.
                    </p>

                    {/*=========Personal info==========*/}

                    <div className="grid xl:grid-cols-2 gap-4 mb-8">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="text-base">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/*===========Languages==========*/}

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>

                      <div className="border-b border-border"></div>

                      <div className="text-base">English, German, Malayalam, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                {/*======Qualifiacations========*/}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                  </div>

                  {/*=========Education========*/}

                  <div className="grid md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col items-center gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationsData, "education").title}
                        </h4>
                      </div>

                      <div className="flex flex-col">
                        {getData(qualificationsData, "education").data.map(
                          (item, index) => {
                            const { institute, course } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-base leading-none mb-2">
                                    {institute}
                                  </div>
                                  <div className="text-sm leading-none text-muted-foreground mb-4">
                                    {course}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-y-6">
                      <div className="flex gap-x-4 items-center text-[20px] text-primary ">
                        <GraduationCap size={30} />
                        <h4 className="capitalize font-medium ">
                          {getData(qualificationsData, "schooling").title}
                        </h4>
                      </div>

                      <div className="flex flex-col it">
                        {getData(qualificationsData, "schooling").data.map(
                          (item, index) => {
                            const { institute, course } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-base leading-none mb-2">
                                    {institute}
                                  </div>
                                  <div className="text-sm leading-none text-muted-foreground mb-4">
                                    {course}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/*======Skills========*/}
                <TabsContent value="skills">

                  <div>
                    <h4 className="text-xl text-primary font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4"></div>

                    <div>
                      {getData(skillsData, 'skills').data.map((item, index) => {
                        const { name } = item;
                        return (
                          <div
                            className="w-full flex gap-x-4 items-start text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="font-medium text-base pb-4">{item.skill}</div>
                            <div className="text-right w-full text-base text-gray-alt">{item.course}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                      <h4 className="text-xl text-primary font-semibold mt-4 mb-2 xl:text-left">Tools</h4>

                      <div className="border-b border-border mb-4"></div>

                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, 'tools').data.map((item, index) => {
                            const { imgPath } = item;
                            return (
                                <div key={index}>
                                    <Image src={imgPath} width={35} height={35} alt="" priority />
                                </div>
                            )
                        })}
                      </div>

                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
