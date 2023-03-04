import { useContext, useState } from 'react'
import {
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaChevronDown
} from 'react-icons/fa'
import {
  SelectedProjectContext,
  SelectedProjectContextType
} from '../../context'
import Projects from '../Projects'
const Sidebar = () => {
  const { selectedProject, setSelectedProject } = useContext(
    SelectedProjectContext
  ) as SelectedProjectContextType
  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)
  return (
    <div className='sidebar'>
      <ul className='sidebar__generic'>
        <li
          className={active === 'inbox' ? 'active' : ''}
          onClick={() => {
            setActive('inbox')
            setSelectedProject('INBOX')
          }}
        >
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li
          className={active === 'today' ? 'active' : ''}
          onClick={() => {
            setActive('today')
            setSelectedProject('TODAY')
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li
          className={active === 'today' ? 'next_7' : ''}
          onClick={() => {
            setActive('next_7')
            setSelectedProject('NEXT_7')
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          Next 7 days
        </li>
      </ul>
      <div
        className='sidebar__middle'
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown className={!showProjects ? 'hidden-projects' : ''} />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className='sidebar__projects'>{showProjects && <Projects />}</ul>
      Add project Components here
    </div>
  )
}
export default Sidebar
