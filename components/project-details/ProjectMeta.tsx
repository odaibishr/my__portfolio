import React from 'react'

const ProjectMeta = ({role, client}: {role: string, client: string}) => {
  return (
    <div>
        <div className="mt-4 flex items-baseline gap-2">
            <h2 className="text-lg font-bold">Role:</h2>
            <p className="text-muted-foreground">{role || ""}</p>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
            <h2 className="text-lg font-bold">Client:</h2>
            <p className="text-muted-foreground">{client || ""}</p>
        </div>
    </div>
  )
}

export default ProjectMeta