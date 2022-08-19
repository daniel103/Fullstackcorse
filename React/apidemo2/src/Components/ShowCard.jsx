import React from "react";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography"

const ShowCard = ({ show }) => {
  console.log(show);

  return (
  <Card className='card-warpper'>
    <img
    src={show?.show?.image?.original}
    alt="show-img"
    className='card-img'
    />
    <div>
    <div className="card-content">
      <Typography>
        <b>name:</b> {show?.show?.name}
       </Typography>
       <Typography veriant="button">
        <b>Languge:</b> {show?.show?.language}
       </Typography>
      <div className="genre-wrapper">
        <p>Genres:</p>
        <ul className="genre-list">
          {show?.show?.genres.map((g) => (
            <li>{g}</li>
          ))}
        </ul>
      </div>
        </div>
    </div>
  </Card>
  )
};

export default ShowCard;
