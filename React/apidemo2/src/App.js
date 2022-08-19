import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import ShowList from "./Components/ShowList";

function App() {
  const [shows, setShows] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  let fetchShowFromApi = async () => {
    try {
      let url = `${process.env.REACT_APP_SHOW_API}${searchVal}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setShows(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar
        fetchShowFromApi={fetchShowFromApi}
        setSearchVal={setSearchVal}
        searchVal={searchVal}
      />
      <ShowList shows={shows} />
    </div>
  );
}

export default App;
