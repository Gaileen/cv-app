import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo'
import Edu from './components/Edu';
import Experience from './components/Experience';
import DisplayCV from './components/DisplayCV';
import './styles/App.css'

function App() {
  const [genInfo, setGenInfo] = useState([
    {
        name: "",
        email: "",
        phone: "",
        entryId: crypto.randomUUID(),
    },
  ]);

  const [eduInfo, setEduInfo] = useState([
    {
        school: "",
        study: "",
        date: "",
        entryId: crypto.randomUUID(),
    },
  ]);

  const [expInfo, setExpInfo] = useState([
    {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
        entryId: crypto.randomUUID(),
    },
  ]);

  return (
  <>
    <div className="formSections">
      <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo} />
      <Edu eduInfo={eduInfo} setEduInfo={setEduInfo} />
      <Experience expInfo={expInfo} setExpInfo={setExpInfo} />
    </div>
    <div className="Resume">
      <DisplayCV genInfo={genInfo} eduInfo={eduInfo} expInfo={expInfo} />
    </div>
  </>
  );
}

export default App
