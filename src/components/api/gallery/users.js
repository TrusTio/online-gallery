import axios from "axios";

export const getMe = async () => {
  const res = await axios.get("/api/v1/users/me");
  return res.data;
};

export const getGalleries = async (id) => {
  const res = await axios.get(`api/v1/users/${id}/galleries`);
  return res.data;
};

export const getGalleryImages = async (userId, galleryId) => {
  const res = await axios.get(`api/v1/users/${userId}/galleries/${galleryId}`);
  return res.data;
};
