import moment from 'moment'
import { useContext, useState } from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { SelectedProjectContext, SelectedProjectContextType } from '../context'
// showQuickAddTask:右上角有个快速创建task的加号按钮
function AddTask ({
  showAddTaskMain = true,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask
}: {
  showAddTaskMain: boolean
  shouldShowMain: boolean
  showQuickAddTask: boolean
  setShowQuickAddTask: () => void
}) {
  const [task, setTask] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [project, setProject] = useState('')
  const [showMain, setShowMain] = useState(shouldShowMain)
  const [showProjectOverlay, setShowProjectOverlay] = useState(false)
  const [showTaskDate, setShowTaskDate] = useState(false)

  const { selectedProject } = useContext(
    SelectedProjectContext
  ) as SelectedProjectContextType

  const addTask = () => {
    const projectId = project || selectedProject
    let collatedDate = ''
    if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY')
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY')
    }
  }

  return <div></div>
}
export default AddTask
