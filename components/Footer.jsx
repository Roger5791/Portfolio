import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary">
      <div className="mx-6 xl:mx-16">
        <div className="flex flex-col items-center justify-between">
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all' />

          <div className="text-muted-foreground">
            Copyright &copy; Saurav Antony. All rights reserved.
          </div>

        </div>
      </div>  
    </footer>
  )
}

export default Footer