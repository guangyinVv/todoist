import { useSelector } from 'react-redux'
import { useTasks } from '../hooks'
import { RootState } from '../app/store'
import Checkbox from './Checkbox'
import { useContext, useEffect } from 'react'
import { SelectedProjectContext, SelectedProjectContextType } from '../context'
import { collatedTasksExist, getCollatedTitle, getTitle } from '../helpers'
function Task () {
  // 获取所有的projects
  const projects = useSelector((state: RootState) => state.todoist.projects)
  const { selectedProject } = useContext(
    SelectedProjectContext
  ) as SelectedProjectContextType
  // 获取的是选中的project下的tasks
  const tasks = useTasks(selectedProject)

  let projectName = ''
  if (collatedTasksExist(selectedProject)) {
    projectName = getCollatedTitle(selectedProject) as string
  } else if (
    !collatedTasksExist(selectedProject) &&
    selectedProject &&
    projects.length > 0
  ) {
    projectName = getTitle(projects, selectedProject) as string
  }
  useEffect(() => {
    if (projectName) document.title = `${projectName} Todoist`
    else document.title = 'Todoist'
  })

  return (
    <div className='tasks'>
      <h2>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks?.map(item => (
          <li key={item.taskId}>
            <Checkbox id={item.taskId} />
            <span>{item.task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Task
