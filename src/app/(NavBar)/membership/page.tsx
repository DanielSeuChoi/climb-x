
import Divider from "@/components/Divider";
import LocationsContext from "@/components/locations/LocationsContext";
import MembershipCards from "@/components/memberships/MembershipCards";
import GearCards from "@/components/memberships/GearCards";



export default function Membership() {

    return (
        <main className="flex flex-col justify-center items-center overflow-x-hidden">
            <div className='mt-32'>
                <MembershipCards />
            </div>
            <LocationsContext />
            <GearCards />
            <Divider color="#FFFFFF" thickness={3} />
        </main>
    )
}
