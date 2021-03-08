import React from "react";
import { useHistory } from "react-router-dom";

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
      <div>Name: {gallery?.name}</div>
    </div>
  );
};
