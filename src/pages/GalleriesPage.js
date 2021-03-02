import React, { useState, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { getGalleries } from "components/api/gallery/users";
import { GalleryFolder } from "components/generic/GalleryFolder";


export const GalleriesPage = () => {
  const [galleries, setGalleries] = useState(null);
  const { user } = useAuth();

  const getUserGalleries = async () => {
    const response = await getGalleries(user?.id);
    setGalleries(response);
  }

  useEffect(() => {
    getUserGalleries();
  }, []);

  if (galleries === null) {
    return <div></div>;
  } else{
    return galleries.map((gallery) => {
      return (
        <GalleryFolder key={gallery?.id} gallery={gallery}></GalleryFolder>
      );
    });
  }
};
