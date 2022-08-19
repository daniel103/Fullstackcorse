import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ShowCard from "./ShowCard";

const ShowList = ({ shows }) => {
    
  return (
    <Box className='show-list-warpper' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {shows.map((show, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="show-card-grid-warpper"></div>
            <ShowCard key={i} show={show}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowList;
