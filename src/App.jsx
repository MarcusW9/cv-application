import './styles/App.css'
import './styles/Form.css'
import './styles/Display.css'

import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import PracticalExperience from './components/PracticalExperience'
import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  function handleDarkModeClick() {
    setDarkMode(!darkMode)
  }

  return (
    <main>
      <div className="theme-toggle">
        <label className="switch">
          <input
            id="dark-mode"
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeClick}
          />
          <span className="slider"></span>
        </label>
        <label htmlFor="dark-mode">🌙 Dark mode</label>
      </div>
      <h1>CV Template</h1>
      <GeneralInfo />
      <EducationInfo />
      <PracticalExperience />
    </main>
  )
}

export default App
