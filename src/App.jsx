import { useState } from 'react'
import './App.css'
import ProjectName from './components/ProjectName'
import Image from './components/Image'
import Description from './components/Description'
import Price from './components/Price'

function App() {
  const [count, setCount] = useState(0);

  const firstName = "Opeyemi";

  return (
    <>
    <div>
    <div className="card align-middle" style={{width: "18rem", justifyContent: "center"}}>
        <Image />
          <div className="card-body">
            <h5 className="card-title"> <ProjectName /> </h5>
            <h5 className="card-title"> <Price /> </h5>
            <p className="card-text"> <Description /> </p>
          </div>
      </div>
      <h2>Hello, there! {firstName}</h2>
    </div>
      
    </>
  )
}

export default App