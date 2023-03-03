// 自定义函数
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { TaskType } from '../features/todoist/todoistSlice'
// 这个钩子是根据task 的 Id 来获取task的
export const useTasks = (projectId: string) => {
  const [tasks, setTasks] = useState([] as TaskType[] | null)
  const allTasks = useSelector((state: RootState) => state.todoist.tasks)
  const selectedTasks = allTasks?.filter((task) => task.projectId === projectId)
  useEffect(() => {
    if (selectedTasks) {
      setTasks(selectedTasks)
    } else {
      setTasks(null)
    }
  }, [])

  return { tasks }
}
