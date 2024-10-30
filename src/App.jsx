import { useState } from 'react'
import Header from './componants/header'
import SearchFunction from './componants/searchFunction'
import 'bootstrap/dist/css/bootstrap.min.css';
import IdFunction from './componants/IdFunction';

const App = () => {

  const [showSearch, setShowSearch] = useState(true)

  function toggleContent () {
    setShowSearch((currShowSearch) => {
      return !currShowSearch
    })
  }
  return <>
  <section className="header">
    <Header/>
    {/* <label className="buttonText"for="toggle">{showSearch ? "Generations" : "Search"}</label> */}
    <button id="toggle" className="headerButton" onClick={toggleContent}>{showSearch ? "Generations" : "Search"}</button>
  </section>
  <section className="body">
  <section className="searchFunction" hidden={showSearch ? false : true}>
    <SearchFunction/>
  </section>
  <section hidden={showSearch ? true : false}>
    <IdFunction/>
  </section>
  </section>
  </>
}


export default App
