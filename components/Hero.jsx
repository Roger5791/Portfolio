import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";

import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-24 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Developer
            </div>
            <h1 className="h1">Hello, my name is Saurav Antony</h1>
            <p className=" max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium doloribus assumenda eum exercitationem sit ratione
              ipsa consectetur! Quisquam accusantium, error repellat, laborum
              eum debitis quasi tempore temporibus necessitatibus officiis
              veniam.
            </p>
            {/*=====Buttons=====*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 mt-6">
              <Link href={'/contact'}>
                <Button className='gap-x-2'>
                Contact Me <Send size={18} />
                </Button>
              </Link>

              <Button variant='secondary' className='gap-x-2'>
                Download CV <Download size={18} />
                </Button>
            </div>

            {/*======Socials=======*/}

            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />

          </div>

          <div className="hidden xl:flex relative">
          <Badge containerStyles='absolute top-[20%] -left-[37rem]' icon={<RiBriefcase4Fill />} endCountNum={3} badgeText={'Years of Experience'} />

          <Badge containerStyles='absolute top-[70%] -left-[35rem]' icon={<RiTodoFill />} endCountNum={3} badgeText={'Years of Experience'} />

          <Badge containerStyles='absolute top-[60%] -left-[11rem]' icon={<RiTeamFill />} endCountNum={3} badgeText={'Years of Experience'} />
            <div className="absolute bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat top-1 right-2"><DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc='/hero/developer.png' /></div>
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
