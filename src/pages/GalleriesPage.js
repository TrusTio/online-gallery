import React, { useState, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { getGalleries } from "components/api/gallery/users";
import { GalleryFolder } from "components/generic/GalleryFolder";
import styled from "styled-components";

export const GalleriesPage = () => {
  const [galleries, setGalleries] = useState(null);
  const { user } = useAuth();

  const getUserGalleries = async () => {
    const response = await getGalleries(user?.id);
    setGalleries(response);
  };

  useEffect(() => {
    getUserGalleries();
  }, []);

  if (galleries === null) {
    return <div>Loading...</div>;
  } else if (galleries?.length === 0) {
    return <div>No galleries present</div>;
  } else {
    return galleries.map((gallery) => {
      return (
        <FoldersContainer>
          <GalleryFolder key={gallery?.id} gallery={gallery}></GalleryFolder>
        </FoldersContainer>
      );
    });
  }
};

const FoldersContainer = styled.div`
  float: left;
`;
