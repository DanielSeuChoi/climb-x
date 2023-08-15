import BackgroundImageOverlay from "@/components/BackgroundImage";

import Divider from "@/components/Divider";
import LargeHeader from "@/components/LargeHeader";

export default function Gear() {

    return (
        <main className="relative h-screen flex flex-col items-center justify-center overflow-x-hidden">
            <BackgroundImageOverlay imageUrl="/stocklead.jpg">
                Contact
            </BackgroundImageOverlay>
            <div>
                <LargeHeader size='lg'>
                    
                </LargeHeader>
            </div>
            <Divider color="#FFFFFF" thickness={3}/>
        </main>
    )
}


// import axios from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { query } = req.query;
//     const apiKey = 'YOUR_MAPBOX_API_KEY';
//     const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${apiKey}`;

//     const response = await axios.get(apiUrl);
//     const data = response.data;

//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Error fetching data' });
//   }
// }
