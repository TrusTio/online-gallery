import * as yup from "yup";

export const imageNameValidationSchema = yup.object({
  newImageName: yup.string().required("Image name is required!"),
});
