import BackgroundImageOverlay from "@/components/BackgroundVideo";
import LargeHeader from "@/components/LargeHeader";

export default function Membership() {

    return (
        <main className="relative h-screen flex flex-col items-center justify-center overflow-x-hidden">
            <BackgroundImageOverlay  imageUrl="/yamero.jpg">
            <LargeHeader size='lg'>
                Memberships
            </LargeHeader>
            </BackgroundImageOverlay>
        </main>
    )
}
