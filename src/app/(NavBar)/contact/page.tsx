import Divider from "@/components/Divider";
import BackgroundImageOverlay from "@/components/contact/BackgroundOverlay";
import ContactSection from "@/components/contact/ContactSection";

export default function Gear() {

    return (
        <main className="relative h-full  flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
            <BackgroundImageOverlay title="Contact Us" imageUrl="/stocklead.jpg" >
                <ContactSection />
            </BackgroundImageOverlay>
            <br />
            <Divider color="#000000" thickness={3} />
        </main>
    )
}
