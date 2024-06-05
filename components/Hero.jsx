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
    <section className="py-8 mb-12 lg:mb-0 xl:py-24 xl:pt-6 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="xl:px-20 px-6">
        <div className="flex justify-between gap-x-8">
          <div className="flex xl:max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Developer
            </div>
            <h1 className="h1 pb-6">Hello, my name is Saurav Antony</h1>
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
              <Link href={'https://drive.google.com/file/d/1cdjrce6LVaTvni95nmOp6Qkd44OFI7jO/view?usp=drive_link'} className="flex items-center gap-x-2" target="blank" >
                Download CV <Download size={18} />
                </Link>
                </Button>
            </div>

            {/*======Socials=======*/}

            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />

          </div>

          <div className="hidden xl:flex relative">
          <Badge containerStyles='absolute top-[20%] -left-[37rem]' icon={<RiBriefcase4Fill />} endCountNum={2} badgeText={'Years of Learning'} />

          <Badge containerStyles='absolute top-[70%] -left-[35rem]' icon={<RiTodoFill />} endCountNum={15} badgeText={'+ Projects'} />

          <Badge containerStyles='absolute top-[60%] -left-[11rem]' icon={<RiTeamFill />} endCountNum={3} badgeText={'Clients'} />
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
