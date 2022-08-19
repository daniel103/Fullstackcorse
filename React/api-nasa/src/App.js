import './App.css';
import { useState, useEffect } from 'react';
import Title from './Components/Title';
import NasaPhoto from './Components/NasaPhoto';
import Explanation from './Components/Explanation';
import Copyright from './Components/Copyright';
import DateNasa from './Components/DateNasa';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const apikey = process.env.REACT_APP_NASA_KEY;

function App() {
  const [ photoData, setPhotoData ] = useState(null);
  const [date, setDate] = useState()

  
  async function fetchPhoto () {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`
    );
    const data = await res.json()
    setPhotoData(data);
    console.log(data);
  }
  useEffect(() => {
    fetchPhoto();
  }, [])

  async  function Change (e) {
    const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}` + e.target.value)
    setDate(await result.json())
  } 

  
  console.log("Date", date)

  if (!photoData) return <div />;


  return (
    <div className="App">
          <div className="title">
        <div className="icon">
        <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" alt="nasa"  />
        </div> 
      <div>
        <h1 className="title-warpper">NASA API</h1>
        <h4 className="title-warpper">enter Date from the past</h4><br />
        {/* <input type="date" onChange={Change}/> */}
        <Stack component="form" noValidate spacing={3} className="date">
      <TextField
        id="date"
        label="Nasa Date"
        type="date"
        defaultValue=""
        onChange={Change}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Stack><br />
    </div>
    </div>
        <div className="Component">
      <div className="flex">
        <NasaPhoto
        photoData={date? date.url : photoData.url}
        photoTitle={date? date.title : photoData.title} 
        photoMedia={date? date.media_type : photoData.media_type} 
        />
      </div>
      <div className="Components">
        {/* <h1>{photoData.title}</h1> */}
        <Title photoData={date? date.title : photoData.title}/>
        {/* <p>{photoData.Copyright}</p> */}
        <Copyright photoData={date? date.Copyright : photoData.Copyright} />
        {/* <p>{photoData.date}</p> */}
        <DateNasa photoData={date? date.date : photoData.date}/>
        {/* <p>{photoData.explanation}</p> */}
        <Explanation photoData={date?  date.explanation : photoData.explanation} />
      </div>
      </div>
    </div>
  );
}


export default App;
