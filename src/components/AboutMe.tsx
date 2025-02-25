'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (    

    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>About Me</CardTitle>
            {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {/* Write 1-2 sentences about yourself */}
                I make and maintain high-performance web applications, sometimes telegram bots and projects of other directions using Python, SQL, Django and DRF. I have done several custom projects for various purposes, as well as implemented some of my own ideas that are still in progress. I enjoy solving complex problems and delivering quality solutions that meet the needs and expectations of the users.
            </p>
        </CardContent>
    </Card>
    )
}