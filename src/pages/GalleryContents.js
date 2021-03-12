import React, { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { getGalleryImages, uploadImage } from "components/api/gallery";
import { GalleryImage } from "components/generic/GalleryImage";
import { ActionBar } from "components/generic/styled";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

export const GalleryContents = () => {
  const location = useLocation();
  const [galleryContents, setGalleryContents] = React.useState(null);
  const { user } = useAuth();
  const inputFile = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    const galleryId = location.state.id;
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        uploadFile(file, galleryId);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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

        <ActionBar>
          <button onClick={onButtonClick}>Upload</button>
        </ActionBar>
        <Container {...getRootProps({ refKey: "innerRef" })}>
          <div {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here</p>
          )}
          {galleryContents?.length === 0 ? (
            <div> No gallery contents present</div>
          ) : null}

          <div>
            {galleryContents.map((image) => {
              return (
                <GalleryImage
                  key={image?.id}
                  image={image}
                  updateContents={() => {
                    getGalleryContents();
                  }}
                ></GalleryImage>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
};
const Container = styled.div``;
