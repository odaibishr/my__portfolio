import React from 'react'
import MainButton from '../mainButton'

const ProjectHeader = ({ title, liveUrl, githubUrl }: { title: string, liveUrl: string, githubUrl: string }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <p className="text-xl md:text-2xl font-bold">{title}</p>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
                {liveUrl && (
                    <MainButton text="View Project" href={liveUrl} />
                )}
                {githubUrl && (
                    <MainButton text="Source Code" href={githubUrl} />
                )}
            </div>
        </div>
    )
}

export default ProjectHeader