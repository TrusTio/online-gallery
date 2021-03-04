import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { getGalleryImages, uploadImage } from "components/api/gallery";
import { GalleryImage } from "components/generic/GalleryImage";

export const GalleryContents = () => {
  const location = useLocation();
  const [galleryContents, setGalleryContents] = React.useState(null);
  const { user } = useAuth();
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };
  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();

    var file = event.target.files[0];
    const galleryId = location.state.id;

    uploadFile(file, galleryId);
  };

  const uploadFile = async (file, galleryId) => {
    const response = await uploadImage({ file, galleryId });
    console.log(response);
    getGalleryContents();
  };

  const getGalleryContents = async () => {
    const response = await getGalleryImages(user?.id, location.state.id);
    setGalleryContents(response);
    console.log(response);
  };
  useEffect(() => {
    getGalleryContents();
  }, []);

  if (galleryContents === null) {
    return <div></div>;
  } else {
    return (
      <div>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={onChangeFile.bind(this)}
        />
        <button onClick={onButtonClick}>Upload</button>
        {galleryContents?.length === 0 ? (
          <div> No gallery contents present</div>
        ) : null}
        {galleryContents.map((image) => {
          return <GalleryImage key={image?.id} image={image}></GalleryImage>;
        })}
      </div>
    );
  }
};
