import React from "react";
import { useHistory } from "react-router-dom";
import folderIcon from "icons/folder-icon.png";
import "components/generic/GalleryFolder.css";

export const GalleryFolder = ({ gallery }) => {
  const history = useHistory();
  const goContentsPage = () =>
    history.push({
      pathname: `gallery`,
      state: {
        id: gallery?.id,
      },
    });

  return (
    <div onClick={goContentsPage}>
      <img src={folderIcon} className="folderIcon" alt="icon" />
      <div>Name: {gallery?.name}</div>
    </div>
  );
};
