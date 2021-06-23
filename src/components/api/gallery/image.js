import axios from "axios";

export const uploadImage = async ({ file, galleryId }) => {
  const formData = new FormData();
  formData.append("imageFile", file, file.name);
  formData.append("galleryId", galleryId);

  const res = await axios.post("/api/v1/image", formData);
  return res.data;
};

export const deleteImage = async (imageUrl) => {
  const res = await axios.delete(imageUrl);
  return res;
};

export const renameImage = async (imageUrl, newImageName) => {
  const res = await axios.patch(
    imageUrl,
    {},
    {
      params: {
        newImageName,
      },
    }
  );
  return res;
};
