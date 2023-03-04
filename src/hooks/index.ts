// 自定义函数
import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { SelectedProjectContext } from '../context'
import { TaskType } from '../features/todoist/todoistSlice'
// 这个钩子是根据project 的 Id 来获取task的
export const useTasks = (projectId: string | undefined) => {
  const selectedProject = useContext(SelectedProjectContext)
  const [tasks, setTasks] = useState([] as TaskType[] | null)
  const allTasks = useSelector((state: RootState) => state.todoist.tasks)

  const selectedTasks = allTasks?.filter((task) => task.projectId === projectId)
  useEffect(() => {
    if (selectedTasks) {
      setTasks(selectedTasks)
    } else {
      setTasks(null)
    }
  }, [selectedProject])

  return tasks
}
