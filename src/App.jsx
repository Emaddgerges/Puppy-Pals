import { useState } from 'react'
import {puppyList} from './data.js'
import './app.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  //console.log(puppies.id)
  console.log("puppyList: ", puppyList);
  //console.log(featPupId);
  //console.log(puppyList)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <>
      <div className="App">{
        puppies.map((puppy) => {
        return (
        <p className="click" onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        )} 
         )
        } <br></br>
                <p>{ featPupId && (
                  <div>
                    <h2 className="puppy">
                      {featuredPup.name}
                    </h2>
                    <ul className="puppyInfo">
                      <li>Age: {featuredPup.age}</li>
                      <li>Email: {featuredPup.email}</li>
                    </ul>
                  </div>)}
                
                </p>
                 <p className="puppyId">{ featPupId }</p>
      </div>
      
      
    </>
  )
}

export default App


