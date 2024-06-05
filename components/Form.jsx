'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const form = useRef();

  const notify = () => {
    toast.success('Submitted', {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
      });
  }

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tx4i3rn', 'template_end63rj', form.current, {
        publicKey: '_-LJzA5YHNuES96kg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    sendEmail(event)
    notify()
    event.target.reset();
  };


  return (
    <form ref={form} onSubmit={handleSubmit} className=" flex flex-col gap-y-4">
        <div className="relative flex items-center mt-12">
            <Input type='name' name='name' id='name' placeholder='Name' required />
            <User className=" absolute right-6" size={20} />
        </div>

        <div className="relative flex items-center mt-3">
            <Input type='email' name='email' id='email' placeholder='Email' required />
            <MailIcon className=" absolute right-6" size={20} />
        </div>

        <div className="relative flex items-center mt-3">
        
            <Textarea type='message' name='message' id='message' placeholder='Type your Message here.' required />
            <MessageSquare className=" absolute top-4 right-6" size={20} />
        </div>

        <Button type="submit" value="Send" className='flex items-center gap-x-2 max-w-[166px]'>Let' Talk <ArrowRightIcon /></Button>
        <ToastContainer />
        </form>
  )
}

export default Form