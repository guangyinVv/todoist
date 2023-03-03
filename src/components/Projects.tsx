import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import IndividualProject from './individualProject'
const Projects = ({ activeId = null }: { activeId: string | null }) => {
  // active表示当前激活的projectId，（似乎只能有一个）
  const [active, setActive] = useState(activeId)
  const projects = useSelector((state: RootState) => state.todoist.projects)
  console.log(projects)

  return (
    <>
      {projects.map(project => (
        <li
          key={project.projectId}
          className={
            active === project.projectId
              ? 'active sidebar__project'
              : 'sidebar__project'
          }
          onClick={() => {
            // 点击的时候将激活的project更改一下
            setActive(project.projectId)
          }}
        >
          <IndividualProject project={project} />
        </li>
      ))}
    </>
  )
}
export default Projects
