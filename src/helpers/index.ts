import { collatedTasks } from '../constants'
import { ProjectType } from '../features/todoist/todoistSlice'
import { v4 as uuidV4 } from 'uuid'

// 根据projectId获取project的标题
export const getTitle = (projects: ProjectType[], projectId: string) => {
  const gotProject = projects.find((item) => item.projectId === projectId)
  return gotProject?.name
}
// 根据分类的key来获取INBOX这类的标题
export const getCollatedTitle = (key: string) => {
  const gotProject = collatedTasks.find((project) => project.key === key)
  return gotProject?.name
}
// 判断这个key是否在三兄弟里面
export const collatedTasksExist = (key: string) => {
  return collatedTasks.find((task) => task.key === key)
}
// 获取随机id
export const generatePushId = () => {
  return uuidV4()
}
