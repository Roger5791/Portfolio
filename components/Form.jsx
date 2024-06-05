'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"

const Form = () => {
  return (
    <form className=" flex flex-col gap-y-4">
        <div className="relative flex items-center mt-12">
            <Input type='name' id='name' placeholder='Name' />
            <User className=" absolute right-6" size={20} />
        </div>

        <div className="relative flex items-center mt-3">
            <Input type='email' id='email' placeholder='Email' />
            <MailIcon className=" absolute right-6" size={20} />
        </div>

        <div className="relative flex items-center mt-3">
            <Textarea placeholder='Type your Message here.' />
            <MessageSquare className=" absolute top-4 right-6" size={20} />
        </div>

        <Button className='flex items-center gap-x-2 max-w-[166px]'>Let' Talk <ArrowRightIcon /></Button>
    </form>
  )
}

export default Form