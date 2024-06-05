import { Button } from "./ui/button"
import Link from "next/link"

const Cta = () => {
  return (
   <section className="py-20 xl:py-14 bg-tertiary dark:bg-secondary/40">
    <div className="mx-6 xl:mx-16">
        <div className="flex flex-col items-center">
            <h2 className="mb-8 h2 max-w-xl text-center">Prepared to turn your ideas into reality? I'm here to help</h2>

            <Link href='/contact'>
                <Button>Contact Me</Button>
            </Link>
        </div>
    </div>
   </section>
  )
}

export default Cta