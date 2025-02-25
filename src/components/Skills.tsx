import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = ["Python", "SQL", "Django", "DRF", "Docker", "Linux"];

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}