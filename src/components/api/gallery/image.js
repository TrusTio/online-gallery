import axios from "axios";

export const uploadImage = async ({ file, galleryId }) => {
  const formData = new FormData();
  formData.append("imageFile", file, file.name);
  formData.append("galleryId", galleryId);

  const res = await axios.post("/api/v1/image", formData);
  return res.data;
};
