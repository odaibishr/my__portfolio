import React from 'react'

const TechList = ({ skills }: { skills: any }) => {
    return (
        <div className="mt-4 items-baseline">
            <h2 className="text-lg font-bold">Technologies:</h2>
            <ul className="flex flex-col gap-2 mt-2 ml-4">
                {skills?.map((skill: any) => (
                    <li key={skill._key} className="list-disc list-inside">
                        <span className="font-semibold">
                            {skill?.title}:{" "}
                        </span>
                        {skill.description && (
                            <span className="text-muted-foreground"> {skill?.description.slice(skill?.title.length)}</span>
                        )}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TechList