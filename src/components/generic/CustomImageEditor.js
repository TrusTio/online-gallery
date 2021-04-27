import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

export const CustomImageEditor = ({ image }) => {
  return (
    <ImageEditor
      includeUI={{
        loadImage: {
          path: image?.url.replace("http://localhost:8080/", ""),
          name: "image?.name",
        },
        menu: [
          "shape",
          "filter",
          "text",
          "mask",
          "icon",
          "draw",
          "crop",
          "flip",
          "rotate",
        ],
        initMenu: "filter",
        uiSize: {
          width: "100%",
          height: "100%",
        },
        menuBarPosition: "bottom",
      }}
      cssMaxHeight={500}
      cssMaxWidth={700}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
      usageStatistics={true}
    />
  );
};
