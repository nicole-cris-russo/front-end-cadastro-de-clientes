import { useState } from 'react'
import "./styles/global.css"
import { UserProvider } from './contexts/UserContext'
import { ClientProvider } from './contexts/ClientContext'
import { RoutesMain } from './routes/routesMain'


function App() {
  return (
    <div className="w-screen h-screen flex flex-row bg-pink-500">
      <UserProvider>
        <ClientProvider>
        <RoutesMain/>
        </ClientProvider>
      </UserProvider>
    </div>
  )
}

export default App
