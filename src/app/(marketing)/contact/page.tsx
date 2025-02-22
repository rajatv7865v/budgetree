"use client";
import React, { useState } from "react";
import AnimationContainer from "@/components/global/animation-container";
import axios from "axios";
import { m } from "framer-motion";
import { toast } from "sonner";
const EnterprisePage = () => {
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });

  const onSubmitHandler = async (e: any) => {
    try {
      e.preventDefault();
      console.log(data);
      const response = await axios.post("http://54.162.124.39:3000/mail", {
        reciepents: "support@budgetree.in",
        subject: data.subject + " from " + data.name,
        msg: data.message + " from " + data.email,
      });
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setData({
        email: "",
        subject: "",
        message: "",
        name: "",
      });
    }
  };
  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <AnimationContainer delay={0.1}>
        <section className='bg-white dark:bg-gray-900'>
          <div className='py-8 lg:py-6 px-4 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
              Contact Us
            </h2>
            <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action='#' className='space-y-8' onSubmit={onSubmitHandler}>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@budgetree.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@budgetree.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  value={data.subject}
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Let us know how we can help you'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Your message
                </label>
                <textarea
                  id='message'
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  rows={6}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Leave a comment...'
                ></textarea>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  type='submit'
                  className='py-3 px-5 border-black border-2 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Send messages
                </button>
              </div>
            </form>
          </div>
        </section>
      </AnimationContainer>
    </div>
  );
};

export default EnterprisePage;
