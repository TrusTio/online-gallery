import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { getImagesByName } from "components/api/gallery";
import { GalleryImage } from "components/generic/GalleryImage";
import styled from "styled-components";
export const SearchResultsPage = () => {
  const location = useLocation();
  const [searchContents, setSearchContents] = React.useState(null);
  const { user } = useAuth();

  const getSearchResults = async () => {
    try {
      const res = await getImagesByName(user.id, location.state.pictureName);
      setSearchContents(res);
      console.log(res);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  useEffect(() => {
    getSearchResults();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (searchContents === null) {
    return <div></div>;
  } else {
    return (
      <div>
        <Container>
          {searchContents?.length === 0 ? (
            <div> No images containing {location.state.pictureName} found.</div>
          ) : null}

          <div>
            {searchContents.map((image) => {
              return (
                <GalleryImage
                  key={image?.id}
                  image={image}
                  updateContents={() => {
                    getSearchResults();
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
const Container = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
`;
