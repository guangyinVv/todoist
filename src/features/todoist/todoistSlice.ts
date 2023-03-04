import { createSlice } from '@reduxjs/toolkit'
export interface ProjectType {
  name: string
  projectId: string
  userId: string
}
export interface TaskType {
  id: string
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
      id: '1',
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
    // 根据Id删除项目
    deleteProject(
      state,
      action: {
        payload: string
        type: string
      }
    ) {
      const index = state.projects.findIndex((project) => project.projectId === action.payload)
      state.projects.splice(index, 1)
    }
  }
})
export default todoistSlice.reducer
export const deleteProject = todoistSlice.actions.deleteProject
