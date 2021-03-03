import React from "react";

export const GalleryImage = ({ image }) => {
  return (
    <div>
      <div>Name: {image?.name}</div>
      <img src={image?.thumbnail} alt="not available"></img>
    </div>
  );
};
