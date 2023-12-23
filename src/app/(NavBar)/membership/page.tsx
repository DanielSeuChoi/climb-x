
import Divider from "@/components/Divider";
import LocationsContext from "@/components/locations/LocationsContext";
import MembershipCards from "@/components/memberships/MembershipCards";
import GearCards from "@/components/memberships/GearCards";
import BackgroundImageOverlay from "@/components/contact/BackgroundOverlay";



export default function Membership() {

    return (
        <main className="relative h-full flex flex-col items-center justify-center overflow-y-hidden overflow-x-hidden">
            <BackgroundImageOverlay title="Memberships & Pricing" imageUrl="/boulderstock.jpg">
                <div className="mt-14">
                    <MembershipCards />
                </div>
            </BackgroundImageOverlay>
            <div className="mt-[30rem] md:mt-12">
                <LocationsContext />
            </div>
            <div className="mt-[3rem] md:mt-6">
                <GearCards />
            </div>
            <Divider color="#000000" thickness={3} />
        </main>
    )
}
