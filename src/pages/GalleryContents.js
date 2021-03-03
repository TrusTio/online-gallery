import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { getGalleryImages } from "components/api/gallery/users";
import { GalleryImage } from "components/generic/GalleryImage";

export const GalleryContents = () => {
  const location = useLocation();
  const [galleryContents, setGalleryContents] = React.useState(null);
  const { user } = useAuth();

  const getGalleryContents = async () => {
    const response = await getGalleryImages(user?.id, location.state.id);
    setGalleryContents(response);
    console.log(response);
  };
  useEffect(() => {
    getGalleryContents();
  }, []);

  if (galleryContents === null) {
    return <div>No gallery contents present.</div>;
  } else {
    return galleryContents.map((image) => {
      return <GalleryImage key={image?.id} image={image}></GalleryImage>;
    });
  }
};
