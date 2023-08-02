import LargeHeader from "@/components/LargeHeader";
import Drawer from "@/components/Drawer"
import BackgroundImageOverlay from "@/components/BackgroundVideo";
import DropdownMenu from "@/components/DropDownMenu";


export default function Location() {

    return (
        <main className="relative h-screen flex flex-col items-center justify-center overflow-x-hidden">
            <BackgroundImageOverlay imageUrl={'/yamero.jpg'} />

        </main>
    )
}
