import WindowWrapper from "@/hoc/WindowWrapper.jsx";
import { WindowControls } from "@/components/index.js";
import useWindowStore from "@/store/window.js";

export const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const title = data.name ?? "Untitled";
  const imageUrl = data.imageUrl ?? data.image;

  if (!imageUrl) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{title}</h2>
      </div>

      <div className="preview">
        <img src={imageUrl} alt={title} />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
