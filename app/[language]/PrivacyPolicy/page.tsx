'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=" hidden phone-md:block rounded-2xl bg-bs-gray-dark-v2 p-6 space-y-3">
      <div className="font-bold text-2xl text-bs-cyan-v2">سياسة الخصوصية</div>
      <div className="flex items-center rtl:space-x-reverse  space-x-2  text-sm">
        <Link href={'/ar/home'} className="text-bs-gray hover:text-bs-cyan-v2">
          الرئيسية
        </Link>
        <div className="text-bs-gray">
          /
        </div>
        <div className="">
          سياسة الخصوصية
        </div>
      </div>
    </div>
  )
}
const Index = () => {
  return (
    <div>
      <Header />
      <div className="  p-2 phone-md:p-7 text-sm whitespace-pre-line">

        {`
Yalla Group ("us", "we", or "our") operates the`} <span className='text-bs-blue'> <Link href={'/ar/home'}> yallaFoot.com </Link></span>{` website and the  Yalla Foot - Live Scores App mobile application (the "Service").

This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
When you use the Service, you are consenting to the collection, transfer, manipulation, storage, disclosure and other uses of your information as described in this Privacy Policy.
Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.

Definitions
Service

Service means `} <span className='text-bs-blue'> <Link href={'/ar/home'}> yallaFoot.com </Link></span>{` website and the Yalla Foot - Live Scores App mobile application operated by us

Personal Data

`}
      </div>
    </div>
  )
}

export default Index