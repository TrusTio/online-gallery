import * as yup from "yup";

export const galleryNameValidationSchema = yup.object({
  galleryName: yup.string().required("Gallery name is required!"),
});
