import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteProject, ProjectType } from '../features/todoist/todoistSlice'

const IndividualProject = ({ project }: { project: ProjectType }) => {
  const dispatch = useDispatch()
  // 是否弹出警告框
  const [showConfirm, setShowConfirm] = useState(false)
  return (
    <>
      <span className='sidebar__dot'>・</span>
      <span className='sidebar__project-name'>{project.name}</span>
      <span
        className='sidebar__project-delete'
        onClick={() => {
          // 删除这个项目
          setShowConfirm(!showConfirm)
        }}
      >
        <FaTrashAlt />
        {showConfirm && (
          // 弹出层
          <div className='project-delete-modal'>
            <div className='project-delete-model__inner'>
              {/* 确认删除 */}
              <p>你确定要删除该项目吗？</p>
              <button
                onClick={() => {
                  dispatch(deleteProject(project.projectId))
                }}
              >
                Delete
                <span
                  onClick={() => {
                    // 取消删除
                    setShowConfirm(!showConfirm)
                  }}
                >
                  Cancel
                </span>
              </button>
            </div>
          </div>
        )}
      </span>
    </>
  )
}
export default IndividualProject
