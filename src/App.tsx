import React from 'react'
// 引入antd样式
import 'antd/dist/reset.css'
import { Header } from './components/layout/Header'
import Content from './components/layout/Content'
import './App.scss'

function App () {
  return (
    <div className='App'>
      <Header />
      <Content />
    </div>
  )
}

export default App
