import React from 'react'

const NasaPhoto = ({photoData, photoTitle, photoMedia}) => {
  return (
    <div>  {photoMedia === "image" ? (
      <img src={photoData} alt={photoTitle} className="photo" />
    ) : (
      <iframe 
      title="space-video"
      src={photoData}
      frameBorder="20"
      gesture="media"
      allow="encrypted-media"
      className="photo"
      />
    )}</div>
  )
}

export default NasaPhoto