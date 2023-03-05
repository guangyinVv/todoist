import { createSlice } from '@reduxjs/toolkit'
export interface ProjectType {
  name: string
  projectId: string
  userId: string
}
export interface TaskType {
  taskId: string
  // 档案
  archived: boolean
  date: string
  projectId: string
  task: string
  userId: string
}
interface UserType {
  userId: string
  firstName: string
  lastName: string
  twitter: string
}
const initialState: { projects: ProjectType[]; tasks: TaskType[]; users: UserType[] } = {
  projects: [
    {
      projectId: '1',
      name: '♫ Music',
      userId: '1'
    },
    {
      projectId: '2',
      name: '♫ Music',
      userId: '1'
    }
  ],
  tasks: [
    {
      taskId: '1',
      archived: true,
      date: '2000-01-01',
      projectId: '1',
      task: '我要玩游戏',
      userId: '1'
    },
    {
      taskId: '2',
      archived: true,
      date: '2000-01-01',
      projectId: '1',
      task: '我要玩游戏',
      userId: '1'
    }
  ],
  users: [
    {
      userId: '1',
      firstName: 'guang',
      lastName: 'yin',
      twitter: '111111'
    }
  ]
}
const todoistSlice = createSlice({
  name: 'todoist',
  initialState: initialState,
  reducers: {
    // 根据Id删除Project
    deleteProject(
      state,
      action: {
        payload: string
        type: string
      }
    ) {
      const index = state.projects.findIndex((project) => project.projectId === action.payload)
      state.projects.splice(index, 1)
    },
    // 添加Project
    addProject(state, { payload }: { payload: ProjectType }) {
      // 判断id是否相同，如果相同，则取消添加
      let flag: any = state.projects.find((project) => project.projectId === payload.projectId)
      if (flag) {
        throw new Error('id重复')
      }
      // 再判断userId
      flag = state.users.find((user) => user.userId === payload.userId)
      if (!flag) {
        throw new Error('用户id不存在')
      }
      state.projects.push(payload)
    },
    // 添加task
    addTask(state, { payload }: { payload: TaskType }) {
      // 判断id是否相同，如果相同，则取消添加
      let flag: any = state.tasks.find((task) => task.taskId === payload.taskId)
      if (flag) {
        throw new Error('id重复')
      }
      flag = state.users.find((user) => user.userId === payload.userId)
      if (!flag) {
        throw new Error('用户id不存在')
      }
      state.tasks.push(payload)
    }
  }
})
export default todoistSlice.reducer
export const { deleteProject, addProject } = todoistSlice.actions
