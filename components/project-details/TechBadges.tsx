import React from 'react'

const TechBadges = ({techs}: {techs: any}) => {
  return (
      <div className="mt-4">
          {/* <p className="mt-4 text-lg font-semibold">Technologies</p> */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
              {techs?.map((tech: any) => (
                  <div key={tech._key} className="flex items-center gap-2 bg-accent py-1 px-4 rounded-full">
                      <p className="text-sm font-semibold">{tech.title}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default TechBadges