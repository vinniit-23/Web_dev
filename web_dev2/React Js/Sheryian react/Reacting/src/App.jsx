import React, { useState } from "react";
import MusicCard from "./Component/MusicCard";
import { Navbar } from "./Component/Navbar";

function App() {
  const data = [
    { name: "One Love", artist: "Shubh ", image: " ", favourite: false },
    { name: "Mexico", artist: "Karan Aujla ", image: " ", favourite: false },
    { name: "Azul", artist: "Guru Randhawa ", image: " ", favourite: false },
    { name: "Lover", artist: "Diljit Doshan ", image: " ", favourite: false },
    { name: "Millionaire", artist: "Honey Singh ", image: " ", favourite: false },
    { name: "Excuses", artist: "Ap Dillion ", image: " ", favourite: false },
  ];

  const [songData, setSongData] = useState(data);
  

  const handleEvent = (songIndex) => {
    setSongData(songData.map((song, index) => {
      if (index === songIndex) return { ...song, favourite: !song.favourite };
      return song;
    }))
  }

  return (
    <div className="bg-zinc-200 w-full h-screen">
      <Navbar songData={songData} />
      <div className="flex flex-wrap gap-10 px-40 mt-10 ">
        {songData.map((song, index) => {
          return <MusicCard value={song} index={index} key={index} handleEvent={handleEvent} />
        })}
      </div>
    </div>
  );
}

export default App;
