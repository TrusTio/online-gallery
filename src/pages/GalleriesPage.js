import React, { useEffect, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import { getGalleries } from "components/api/gallery/users";
import { GalleryFolder } from "components/generic/GalleryFolder";
import {
  ActionBar,
  ThemedModal,
  ThemedModalBody,
  ThemedModalHeader,
} from "components/generic/styled";
import { Alert, Button } from "react-bootstrap";
import { Form, Formik } from "formik";
import { createGallery } from "components/api/gallery/gallery";
import { TextInputField } from "components/generic/TextInput/TextInputField";
import { galleryNameValidationSchema } from "validations/schemas/galleryName";

export const GalleriesPage = () => {
  const [galleries, setGalleries] = React.useState(null);
  const [showCreateModal, setShowCreateModal] = React.useState(null);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const getUserGalleries = async () => {
    const response = await getGalleries(user?.id);
    setGalleries(response);
  };

  useEffect(() => {
    getUserGalleries();
  }, []);

  if (galleries === null) {
    return <div></div>;
  } else {
    return (
      <div>
        <ActionBar>
          <Button
            onClick={() => {
              setShowCreateModal(true);
            }}
          >
            Create{" "}
          </Button>
        </ActionBar>

        <ThemedModal
          show={showCreateModal}
          onHide={() => {
            setShowCreateModal(false);
          }}
          backdrop="static"
          keyboard={false}
          centered
        >
          <ThemedModalHeader closeButton />
          <ThemedModalBody>
            <Formik
              initialValues={{ name: "", userId: user.id }}
              onSubmit={(values) => {
                values.name = values?.galleryName;
                const response = createGallery(values);
                response
                  .then(function (res) {
                    if (res.status === 201) {
                      getUserGalleries();
                      setShowCreateModal(false);
                    } else {
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    setError(err?.response?.data?.message);
                  });
              }}
              validationSchema={galleryNameValidationSchema}
            >
              <Form>
                {error && <Alert variant="danger">{error}</Alert>}
                <TextInputField name="galleryName" label="Gallery Name" />
                <Button type="submit">Create</Button>
              </Form>
            </Formik>
          </ThemedModalBody>
        </ThemedModal>
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
