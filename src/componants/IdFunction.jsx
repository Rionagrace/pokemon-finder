import { useState } from 'react'
import IdButtons from './IdButtons'
import IdResults from './IdResults'


function IdFunction (){
  const [newId, setNewId] = useState("1")
  
return (
  <>
  <IdButtons setNewId={setNewId} />
  <IdResults newId={newId} />
  </>
)
}

export default IdFunction