import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import IndividualProject from './IndividualProject'
import { SelectedProjectContext, SelectedProjectContextType } from '../context'
const Projects = () => {
  // active表示当前激活的projectId，（似乎只能有一个）
  const [active, setActive] = useState<string | null>(null)
  const projects = useSelector((state: RootState) => state.todoist.projects)
  const { setSelectedProject } = useContext(
    SelectedProjectContext
  ) as SelectedProjectContextType

  return (
    <>
      {projects.length === 0 ? (
        <li>你还没有项目奥</li>
      ) : (
        projects.map(project => (
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
              setSelectedProject(project.projectId)
            }}
          >
            <IndividualProject project={project} />
          </li>
        ))
      )}
    </>
  )
}
export default Projects
