import axios from "axios";

export const deleteGallery = async (userId, galleryId) => {
  const res = await axios.delete(`/api/v1/galleries/${userId}/${galleryId}`);
  return res.data;
};
