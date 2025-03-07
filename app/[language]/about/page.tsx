'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="hidden phone-md:block rounded-2xl bg-bs-gray-dark-v2 p-6 space-y-3">
      <div className="font-bold text-2xl text-bs-cyan-v2">من نحن</div>
      <div className="flex items-center rtl:space-x-reverse  space-x-2  text-sm">
        <Link href={'/ar/home'} className="text-bs-gray hover:text-bs-cyan-v2">
          الرئيسية
        </Link>
        <div className="text-bs-gray">
          /
        </div>
        <div className="">
          من نحن
        </div>
      </div>
    </div>
  )
}
const Index = () => {
  return (
    <div>
      <Header />
      <div className=" p-2 phone-md:p-7 text-sm">
        يختص طاقم موقع وتطبيق يلا شووت بمتابعة لحظية ودقيقة للأحداث الرياضية بخبرات تمتد لعشرات السنين، قمنا خلال تلك السنوات بخدمة الملايين من المستخدمين حول العالم، نقدم لكم النسخة الجديدة كلياً من يلا شووت بإمكانيات كبيرة تلبي ما ترغبون بمعرفته وأكثر!
      </div>
    </div>
  )
}

export default Index