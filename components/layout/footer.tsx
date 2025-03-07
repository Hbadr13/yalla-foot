"use client"
import SvgIcons from '@/utils/svgIcons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Footer = () => {
  const socialMedia = [
    {
      iconName: 'facebook',
      slug: 'https://www.facebook.com/yalla.Foot'
    },
    {
      iconName: 'instagram',
      slug: 'https://www.instagram.com/yallaFootapp'
    },
    {
      iconName: 'twitter',
      slug: 'https://x.com/YallaFootApps'
    },
    {
      iconName: 'youtube',
      slug: 'https://www.youtube.com/@YallaFootApps'
    },
  ]


  return (
    <div className='space-y-20'>

      <div className="flex  rtl:space-x-reverse space-x-24">
        <div className="w-1/2 space-y-10">
          <Link
            className=" hidden w-0 phone-md:flex justify-start space-x-reverse space-x-2 items-center phone-md:w-[250px] "
            href={'/ar/home'}
          >
            <Image className=' opacity-80 h-[46px] w-[46px]  rounded-md overflow-hidden  object-cover' alt='logo' src={`/android-chrome-512x512.png`} width={1000} height={1000} />
            <div className="font-semibold text-lg leading-5 ">
              Yalla Foot
            </div>
          </Link>
          <p className="text-xs">
            يختص طاقم موقع وتطبيق يلا فوت  بمتابعة لحظية ودقيقة للأحداث الرياضية بخبرات تمتد لعشرات السنين، قمنا خلال تلك السنوات بخدمة الملايين من المستخدمين حول العالم، نقدم لكم النسخة الجديدة كلياً من يلا فوت  بإمكانيات كبيرة تلبي ما ترغبون بمعرفته وأكثر!
          </p>
          <div className="flex rtl:space-x-reverse space-x-4">
            <Link href={'/'} className="bg-bs-gray-dark-v2 rounded-xl p-3 flex justify-center items-center">
              <Image className='h-[30px] w-[130px] object-contain  ' alt='logo' src={`https://www.ysscores.com/images/app-store.svg`} width={1000} height={1000} />
            </Link>
            <Link href={'/'} className="bg-bs-gray-dark-v2 rounded-xl p-3 flex justify-center items-center">
              <Image className='h-[36px] w-[140px] object-contain' alt='logo' src={`https://www.ysscores.com/images/google-play.svg`} width={1000} height={1000} />
            </Link>

          </div>
        </div>

        <div className="w-1/2 space-y-10">
          <div className="text-bs-cyan-v2 font-semibold">روابط</div>
          <p className="text-xs">
            تحميل تطبيق يلا فوت
          </p>
        </div>
      </div>


      <div className={`rounded-xl p-3 flex justify-between bg-bs-gray-dark-v2`}>
        <div className="text-md font-semibold text-bs-cyan-v2">CopyRight For Yalla Foot © 2024</div>
        <div className="font-semibold text-white">
          Hamzabadrbus@gmail.com :@
        </div>
        <div className="flex items-center rtl:space-x-reverse space-x-10">
          {socialMedia.map((item, index) =>
            <Link href={item.slug} target='_blank' rel="noopener noreferrer">
              <SvgIcons key={index} iconName={item.iconName} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer