import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from '../../../public/image/github-icon.svg';
import LinkedinIcon from '../../../public/image/linkedin-icon.svg';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ew4qw4y', 'template_x7jqq7j', form.current, {
        publicKey: 'zVfOp56-H8QQ9CYwR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div id='contact' className="bg-zinc-950 md:px-44 px-4 md:py-16">
            <h2 className='md:text-6xl text-4xl font-bold text-white md:mb-16 text-center'>Contacts</h2>
            <section className='grid md:grid-cols-2 py-8 md:py-12 gap-5' id='Contact'>
            <div className='pb-8'>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try best to get back you!</p>
                <div className='social flex flex-row gap-2'>
                    <Link to='https://github.com/Alavykhan' target='blank'><img src={GithubIcon} alt='github icon'/></Link>
                    <Link to='https://www.linkedin.com/in/alavykhan/' target='blank'><img src={LinkedinIcon} alt='linkedin icon'/> </Link>
                </div>
            </div>
            <div>

                <form ref={form} className='flex flex-col'onSubmit={sendEmail}>
                <label htmlFor='email'  className='text-white block text-sm font-medium mb-2'>Your Name</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' type="text" name="user_name" id='email' placeholder='Your Email' required />
                <label htmlFor='email'  className='text-white block text-sm font-medium mb-2'>Your eEmail</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' type="email" name="user_email" id='email' placeholder='Your Email' required />

                <label htmlFor='subject'  className='text-white block text-sm font-medium mb-2'>Subject</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' name='user_subject' type="text" id='subject' placeholder='Project Name' required />

                <label htmlFor='message'  className='text-white block text-sm font-medium mb-2'>Message</label>
                <textarea className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' name="message" id="message" cols="20" rows="5" placeholder='Your Message'></textarea>

                {/* <button className='bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ' type='submit'>Send Message</button> */}
                <input className='bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ' type="submit" value="Send" />
                </form>
            </div>
        </section>
        </div>
    );
};

export default Contact;