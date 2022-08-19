import React, { useEffect, useState } from "react";

const DogImage = () => {
  const [image, setImage] = useState();

  const fetchDogImage = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="dog-image-wrapper">
      <img className="dog-image" src={image} alt="dogImage" />
    </div>
  );
};

export default DogImage;
