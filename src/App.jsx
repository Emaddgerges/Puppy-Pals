import { useState } from 'react'
import {puppyList} from './data.js'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies.id)
  console.log("puppyList: ", puppyList);
  console.log(featPupId);


  return (
    <>
      <div className="App">{
        puppies.map((puppy) => {
        return (
        <p key={puppy.id}>{puppy.name}</p>

        )
         })
        
        }
        
      </div>
      
      
    </>
  )
}

export default App


