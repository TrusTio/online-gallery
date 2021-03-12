import axios from "axios";

export const uploadImage = async ({ file, galleryId }) => {
  const formData = new FormData();
  formData.append("imageFile", file, file.name);
  formData.append("galleryId", galleryId);

  const res = await axios.post("/api/v1/image", formData);
  return res.data;
};

export const deleteImage = async (imageUrl) => {
  const fixedUrl = imageUrl.replace("http://localhost:8080", "");
  const res = await axios.delete(fixedUrl);
  return res.data;
};
