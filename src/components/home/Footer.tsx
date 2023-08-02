import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className="bg-blue-200 mb-10 mt-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; 2030 Ricardo. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    )
}

export default Footer