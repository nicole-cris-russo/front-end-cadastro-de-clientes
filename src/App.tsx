import { useState } from 'react'
import "./styles/global.css"
import { UserProvider } from './contexts/UserContext'
import { RoutesMain } from './routes'


function App() {
  return (
    <div className="w-screen h-screen flex flex-row bg-pink-500">
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </div>
  )
}

export default App
