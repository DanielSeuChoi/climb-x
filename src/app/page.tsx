import Carousel from "@/components/Carousel";
import Climbs from "@/components/Climbs";
import Directions from "@/components/Directions";
import Divider from "@/components/Divider";
import Intro from "@/home/Intro";
import { photoGallery } from "@/lib/data";

export default function Home() {

  return (
    <main className=" flex flex-col justify-center items-center overflow-x-hidden">
      <Intro />
      <Directions />
      <Climbs />
      <Directions />
      <Divider color="#FFFFFF" thickness={3}/>
    </main >
  )
}