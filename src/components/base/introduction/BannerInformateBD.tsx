"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface BannerIntroductionProps{
  data :{
    link?: string 
    text?: string 
  }  | undefined

}
export default function BannerIntroduction({data}: BannerIntroductionProps) {
  return (
    <div className="flex w-full gap-8 h-96 2xl:h-[30rem] bg-bdpurple my-24 flex-row items-center justify-center">
      <Image
        className="w-60 h-60 2xl:w-96 2xl:h-96"
        //@ts-ignore
        src={data?.link}
        alt="BD Squares"
        height={100}
        width={100}
      />
      <p className="w-[45%] text-[#FFF] text-xl 2xl:text-2xl text-left">
        {data?.text}
      </p>
    </div>
  )
}