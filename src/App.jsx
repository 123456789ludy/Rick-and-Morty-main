import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import CharItems from './components/CharItems'
import topImg from './img/rick.jpg'
import Pagination from './components/Pagination'

function App() {

  const [locations, setLocations] = useState([])
  const [select, setSelect] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [postPage, setPostPage] = useState(8);
  const randomLocation = Math.floor(Math.random() * 126)


  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setLocations(res.data))
  }, [])

  const searchType = (() => {
    if (select >= 126) {
      alert("sobrepaso limite")
    }
    if (select <= 0) {
      alert("Debe ingresar numeros mayor a 0")
    }
    axios.get(`https://rickandmortyapi.com/api/location/${select}`)
      .then(res => setLocations(res.data))
  })

  //console.log(locations?.residents?.length)
  //console.log(postPage)
  const lastPostIndex =currentPage * postPage
  const firstPostIndex = lastPostIndex - postPage
  const currentpost = locations?.residents?.slice(firstPostIndex, lastPostIndex)
  return (
    <div className="App">
     <div className='container'> 
      
     </div>
      <div className='background-top'>
      </div>
      <div className='top-input'>
        <h1>{locations.name}</h1>
        <input type="text" value={select} onChange={e => setSelect(e.target.value)} />
        <button onClick={searchType}>Search</button>
      </div>
      <ul className='list-character'>
        {currentpost?.map((char) => (
          <CharItems url={char} key={char}/>
        ))}
        <h2>{location?.name}</h2>
<p className="information">
  <span>
    <b>Type: </b>
    {location?.type}
  </span>
  <span>
    <b>Dimension: </b>
    {location?.dimension}
  </span>
  <span>
    <b>Population: </b>
    {location.residents?.length}
  </span>
</p>
       
      </ul>
      <Pagination totalPosts={locations?.residents?.length} 
      postPage={postPage}  
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}/>

    </div>
    
  )
}
/** <Locations locations={currentpost}/> */
export default App
