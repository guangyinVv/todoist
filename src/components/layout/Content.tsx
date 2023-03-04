import Tasks from '../Tasks'
import Sidebar from './Sidebar'

const Content = () => {
  return (
    <section className='content'>
      <Sidebar />
      <Tasks />
    </section>
  )
}
export default Content
