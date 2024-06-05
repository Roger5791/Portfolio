import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall, WavesIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="xl:pb-96 pb-14">
      <div className="mx-6 xl:mx-16">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Looking forward to hear from you. Please drop a line below.
            </p>
          </div>

          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>

          <div className="grid xl:grid-cols-2 mt-12 xl:mb32 w-full">

          <div className=" flex flex-col jus gap-y-4 xl:gap-y-10 mb-6 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>sauravantony2002@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Ernakulam, Kerala, India</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 9744753160</div>
            </div>
          </div>

      

          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
