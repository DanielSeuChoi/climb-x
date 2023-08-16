import Climbs from "@/components/Climbs";
import Directions from "@/components/Directions";
import Divider from "@/components/Divider";
import Mission from "@/components/home/Mission";
import Intro from "@/home/Intro";

export default function Home() {

  return (
    <main className=" flex flex-col justify-center items-center overflow-x-hidden">
      <Intro />
      <Mission />
      <Climbs />
      {/* <Directions /> */}
      <Divider color="#FFFFFF" thickness={3} />
    </main >
  )
}