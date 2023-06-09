import { FaPizzaSlice } from 'react-icons/fa'
export const Header = () => {
  return (
    <header className='header'>
      <nav>
        <div className='logo'></div>
        <div className='settings'>
          <ul>
            <li className='settings__add'>+</li>
            <li className='settings__darkmode'>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
