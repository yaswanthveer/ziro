import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <Dashboard />
      </main>

      {/* Background Gradients for Premium Feel */}
      <div className="gradient-bg gradient-1"></div>
      <div className="gradient-bg gradient-2"></div>

      <style>{`
        .app-container {
          position: relative;
          min-height: 100vh;
        }

        .gradient-bg {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          opacity: 0.15;
        }

        .gradient-1 {
          top: -100px;
          right: -100px;
          background: var(--accent-blue);
        }

        .gradient-2 {
          bottom: -100px;
          left: -100px;
          background: var(--accent-purple);
        }
      `}</style>
    </div>
  )
}

export default App
