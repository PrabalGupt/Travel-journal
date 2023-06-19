import data from './data.js';
import Landmark from './components/landmark.js'

function App() {
  const LandmarkDetails= data.map(landmarkdetails => {
    return(
      <Landmark locationimage="./images/location.jpg" landmarkdetails={landmarkdetails}/>
    )
  })
  return (
    <div className="App">
      {LandmarkDetails}
    </div>
  )
}

export default App;