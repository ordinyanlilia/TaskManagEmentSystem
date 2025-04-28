import { useState } from 'react'
import './App.css'
import Column from './components/Column'
import { initialTasks } from './data/initialTasks'
import Board from './components/Board'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
   <Board />
  )
}

export default App
