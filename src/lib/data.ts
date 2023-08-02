import React from "react";

import hb from '@/publichb.jpg'
import bould from '@/publicbould.png'
import lead from '@/publiclead.png'


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
] as const;
// export const experiencesData = [
//     {
//         title: "Graduated bootcamp",
//         location: "Miami, FL",
//         description:
//             "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//         icon: React.createElement(),
//         date: "2019",
//     },
//     {
//         title: "Front-End Developer",
//         location: "Orlando, FL",
//         description:
//             "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//         icon: React.createElement(CgWorkAlt),
//         date: "2019 - 2021",
//     },
//     {
//         title: "Full-Stack Developer",
//         location: "Houston, TX",
//         description:
//             "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//         icon: React.createElement(FaReact),
//         date: "2021 - present",
//     },
// ] as const;


export const projectsData = [
    {
        title: "Top Rope",
        description:
            `I worked as a full-stack developer on this startup project for 2 years.
            Users can give public feedback to companies Click On the photo !.`,
        imageUrl: bould,


    },
    {
        title: "Bouldering",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !.",
        imageUrl: bould,
    },
    {
        title: "Lead Climb",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !..",
        imageUrl: bould,
    },
] as const;

export const amensData = [
    {
        title: "Top Rope",
        description:
            `I worked as a full-stack developer on this startup project for 2 years.
            Users can give public feedback to companies Click On the photo !.`,
        imageUrl: bould,
    },
    {
        title: "Bouldering",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !.",
        imageUrl: bould,
    },
    {
        title: "Lead",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !..",
        imageUrl: bould,
    },
    {
        title: "Pee",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !..",
        imageUrl: bould,
    },
    {
        title: "Yoga",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !..",
        imageUrl: bould,
    },
    {
        title: "Gym",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo !..",
        imageUrl: bould,
    },

] as const;

export const skillsData = [
    `HTML`,
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;