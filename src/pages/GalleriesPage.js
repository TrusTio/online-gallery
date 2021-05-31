import React, { useEffect, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import { getGalleries } from "components/api/gallery/users";
import { GalleryFolder } from "components/generic/GalleryFolder";
import { ActionBar, NormalButton } from "components/generic/styled";
import { CreateGalleryModal } from "components/generic/Modals/CreateGalleryModal";

export const GalleriesPage = () => {
  const [galleries, setGalleries] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { user } = useAuth();

  const getUserGalleries = async () => {
    const response = await getGalleries(user?.id);
    setGalleries(response);
  };

  useEffect(() => {
    getUserGalleries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (galleries === null) {
    return <div></div>;
  } else {
    return (
      <div>
        <ActionBar>
          <NormalButton
            onClick={() => {
              setShowCreateModal(true);
            }}
          >
            Create
          </NormalButton>
        </ActionBar>

        <CreateGalleryModal
          show={showCreateModal}
          onHide={() => {
            setShowCreateModal(false);
          }}
          userId={user.id}
          getUserGalleries={getUserGalleries}
          setShowCreateModal={setShowCreateModal}
        />

        {galleries?.length === 0 ? (
          <div> No gallery contents present</div>
        ) : null}

        <div>
          {galleries.map((gallery) => {
            return (
              <GalleryFolder
                key={gallery?.id}
                gallery={gallery}
                userId={user.id}
                updateContents={() => {
                  getUserGalleries();
                }}
              ></GalleryFolder>
            );
          })}
        </div>
      </div>
    );
  }
};
