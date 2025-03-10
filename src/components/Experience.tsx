import Image from "next/image";
import Link from "next/link";

import { CalendarDays, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Backend Development Intern (Python)",
        company: "Udevs · Internship",
        logo: "/u-devs.jpg",
        duration: "Mar 2025 - Present · 1 mo",
        location: "Lahore, Punjab, Pakistan - Remote",
        description:
            "Working on backend development tasks, improving API performance, and collaborating on remote projects.",
        link: "https://www.linkedin.com/company/udevs-software-house/",
        images: [],
        extraInfo: "LinkedIn helped to get this job",
    },
    {
        role: "Founder & Leader | Goldendevs",
        company: "Goldendevs · Self-employed",
        logo: "/golden-devs.jpg",
        duration: "Mar 2025 - Present · 1 mo",
        location: "Kokand, Fergana region, Uzbekistan - On-site",
        description:
            "Founded and lead Goldendevs, a volunteer-driven developer community that builds and launches MVP SaaS solutions. Empowering developers through hands-on projects and collaboration.",
        skills: "Community building, Technical Leadership + 7 skills",
        link: "https://www.linkedin.com/company/goldendevs/",
        images: [],
        logotwo: "/devuzcommnunity.jpg",
        extraContent: {
            title: "Signup for Goldendevs community",
            link: "https://www.linkedin.com/company/goldendevs/jobs/",
            description:
                "Join Goldendevs, a volunteer-driven developer community focused on launching MVP SaaS solutions and hands-on collaborations. Sign up now to join our community journey.",
        },
    },
];

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href={j.link}
                                        target="_blank"
                                    >
                                        <Image
                                            src={j.logo}
                                            alt={j.company}
                                            width={40}
                                            height={40}
                                            className="rounded-md border shadow-md object-cover"
                                        />
                                    </Link>
                                    <div>
                                        <h3 className="font-semibold">{j.role}</h3>
                                        <p className="text-sm text-muted-foreground">{j.company}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2" />
                                    {j.duration}
                                </p>
                                {j.location && <p className="text-xs text-muted-foreground mt-1">{j.location}</p>}
                                {j.extraInfo && (
                                    <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                        <Linkedin className="size-3 mr-2" /> {j.extraInfo}
                                    </p>
                                )}
                                <p className="text-sm mt-2">{j.description}</p>
                                {j.skills && <p className="text-xs text-muted-foreground mt-1">{j.skills}</p>}
                                {/* Job Images */}
                                <JobImages role={j.role} link={j.link} images={j.images} duration={j.duration} />

                                {/* Extra Content for Goldendevs */}
                                {j.extraContent && (
                                    <div className="mt-4 flex items-center space-x-4">
                                        {j.logotwo && (
                                            <Link
                                                href={j.link}
                                                target="_blank"
                                            >
                                                <Image
                                                    src={j.logotwo}
                                                    alt="Community"
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border shadow-md object-cover"
                                                />
                                            </Link>
                                        )}
                                        <div>
                                            {j.extraContent.title && (
                                                <Link href={j.extraContent.link ?? "#"} target="_blank">
                                                    <h4 className="font-bold text-black dark:text-white">
                                                        {j.extraContent.title}
                                                    </h4>
                                                </Link>
                                            )}
                                            {j.extraContent.description && (
                                                <p className="text-sm text-muted-foreground">
                                                    {j.extraContent.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    );
};
