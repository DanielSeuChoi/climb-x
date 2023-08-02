import Amens from "@/components/Amens";
import BackgroundVideo from "@/components/BackgroundVideo";
import Climbs from "@/components/Climbs";
import Directions from "@/components/Directions";
import HomePhoto from "@/components/home/HomePhoto";
import IntroContent from "@/components/home/IntroContent";
import Intro from "@/home/Intro";
import Image from "next/image";
export default function Home() {

  return (
    <main className=" flex flex-col justify-center items-center ">
      < Intro />
      <IntroContent />
      <Climbs />
      <Amens />
      <Directions />
    </main >
  )
}
