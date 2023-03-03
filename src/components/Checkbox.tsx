import React from 'react'
import styles from './.module.css'
function Checkbox ({ id }: { id: string }) {
  // 存档任务
  const archiveTask = () => {
    console.log(1)
  }
  return (
    <div className='checkbox-holder'>
      <span className='checkbox'></span>
    </div>
  )
}
export default Checkbox
