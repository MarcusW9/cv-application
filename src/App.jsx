import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import PracticalExperience from './components/PracticalExperience'

function App() {
  return (
    <main>
      <h1>CV Template</h1>
      <GeneralInfo />
      <EducationInfo />
      <PracticalExperience />
    </main>
  )
}

export default App
