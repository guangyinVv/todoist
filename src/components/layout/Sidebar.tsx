import {
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaChevronDown
} from 'react-icons/fa'
import Projects from '../Projects'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__generic'>
        <li className='inbox'>
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          Next 7 days
        </li>
      </ul>
      <div className='sidebar__middle'>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className='sidebar__projects'>
        <Projects activeId='1' />
      </ul>
      Add project Components here
    </div>
  )
}
export default Sidebar
