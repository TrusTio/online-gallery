import axios from "axios";

export const deleteGallery = async (userId, galleryId) => {
  const res = await axios.delete(`/api/v1/galleries/${userId}/${galleryId}`);
  return res;
};

export const renameGallery = async (userId, galleryId, gallery) => {
  const res = await axios.patch(
    `/api/v1/galleries/${userId}/${galleryId}`,
    gallery
  );
  return res;
};

export const createGallery = async (gallery) => {
  const res = await axios.post("api/v1/galleries", gallery);
  return res;
};
