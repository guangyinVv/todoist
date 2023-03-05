import { useState } from 'react'
import { generatePushId } from '../helpers'
import { addProject as addReduxProject } from '../features/todoist/todoistSlice'
import { useDispatch } from 'react-redux'

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow)
  const [projectName, setProjectName] = useState('')
  const dispatch = useDispatch()
  const addProject = () => {
    // 先判断projectName是否为空
    if (!projectName.trim()) {
      setProjectName('')
      setShow(false)
      return
    }
    // 获取随机id
    const projectId = generatePushId()
    // 添加Project
    dispatch(
      addReduxProject({
        name: projectName,
        projectId,
        userId: '1'
      })
    )
    setProjectName('')
    setShow(false)
  }
  return (
    <div className='add-project'>
      {show && (
        <div className='add-project__input'>
          <input
            className='add-project__name'
            value={projectName}
            placeholder='Name your project'
            onChange={e => {
              setProjectName(e.target.value)
            }}
            type='text'
          />
          <button className='add-project__submit' onClick={addProject}>
            Add Project
          </button>
          <span
            className='add-project__cancel'
            onClick={() => {
              setShow(false)
              setProjectName('')
            }}
          >
            Cancel
          </span>
        </div>
      )}
      <span className='add-project__plus'>+</span>
      <span className='add-project__text' onClick={() => setShow(!show)}>
        Add Project
      </span>
    </div>
  )
}
export default AddProject
