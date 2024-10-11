import GeneralInfo from './components/GeneralInfo'
import Edu from './components/Edu';
import Experience from './components/Experience';
import './styles/App.css'

function App() {
  return (
  <>
    <div className="formSections">
      <GeneralInfo></GeneralInfo>
      <Edu></Edu>
      <Experience></Experience>
    </div>
    <div className="Resume">

    </div>
  </>
  );
}

export default App
