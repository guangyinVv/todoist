import { useTasks } from '../hooks'
import Checkbox from './Checkbox'
function Task () {
  const { tasks } = useTasks('1')
  // console.log(tasks)

  let projectName = '嘤嘤嘤'
  return (
    <div className='tasks'>
      <h2>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks?.map(item => (
          <li key={item.id}>
            <Checkbox id={item.id} />
            <span>{item.task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Task
