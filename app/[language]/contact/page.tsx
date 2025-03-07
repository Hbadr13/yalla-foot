'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

const Header = () => {
  return (
    <div className="hidden phone-md:block rounded-2xl bg-bs-gray-dark-v2 p-6 space-y-3">
      <div className="font-bold text-2xl text-bs-cyan-v2">اتصل بنا</div>
      <div className="flex items-center rtl:space-x-reverse  space-x-2  text-sm">
        <Link href={'/ar/home'} className="text-bs-gray hover:text-bs-cyan-v2">
          الرئيسية
        </Link>
        <div className="text-bs-gray">
          /
        </div>
        <div className="">
          اتصل بنا
        </div>
      </div>
    </div>
  )
}

const Index = () => {

  return (
    <div>
      <Header />
      <div className=" mt-20 p-2 phone-md:p-7 flex   flex-col phone-md:flex-row justify-normal phone-md:justify-around rtl:space-x-reverse space-x-0 phone-md:space-x-36 space-y-20 phone-md:space-y-0">
        <div className=" w-full phone-md:w-1/2">
          <form id="contactForm" name="contactForm" className="text-black font-medium">
            <div className="space-y-2 flex flex-col">
              <div className="w-full">
                <div className="form-group">
                  <input type="text" className="w-full rounded-md p-1.5" name="name" id="name" placeholder="الاسم" />
                </div>
              </div>
              <div className="w-full">
                <div className="form-group">
                  <input type="text" className="w-full rounded-md p-1.5" name="email" id="email" placeholder="البريد الالكتروني" />
                </div>
              </div>
              <div className="w-full">
                <div className="form-group">
                  <input type="text" className="w-full rounded-md p-1.5" name="mobile" id="mobile" placeholder="رقم المحمول" />
                </div>
              </div>
              <div className="w-full">
                <div className="form-group">
                  <input type="text" className="w-full rounded-md p-1.5" name="subject" id="subject" placeholder="العنوان" />
                </div>
              </div>
              <div className="w-full">
                <div className="form-group">
                  <textarea name="message" className="w-full rounded-md p-1.5" id="message" cols={30} rows={6} placeholder="Message"></textarea>
                </div>
              </div>
              <div className="w-full">
                <Button className='text-white bg-bs-blue font-medium'>
                  ارسال الرسالة
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="space-y-3  w-full phone-md:w-1/2">
          <h1 className='text-3xl'>معلومات تواصل عبر</h1>
          <div className="">
            <span>البريد الالكتروني</span>
            <span className='text-bs-blue'> hamzabadrbus@gmail.com</span>
          </div>
          <div className="">
            <span>Website</span>
            <Link target='_blank' href={'https://hamzabadr.vercel.app'} className='text-bs-blue active:opacity-50'>  https://hamzabadr.vercel.app</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index