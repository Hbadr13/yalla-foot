'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    if (router)
      router.replace('/ar/home')
  }, [router])



  return (
    <main className="w-full h-[1000px] pt-4 flex justify-center" >
    </main >
  );
}
export default Home