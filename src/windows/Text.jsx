import WindowWrapper from "@/hoc/WindowWrapper.jsx";
import { WindowControls } from "@/components/index.js";
import useWindowStore from "@/store/window.js";

export const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const title = data.name ?? "Untitled.txt";
  const subtitle = data.subtitle ?? data.subTitle ?? data.subtitel;
  const image = data.image ?? data.imageUrl;
  const description = Array.isArray(data.description) ? data.description : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{title}</h2>
      </div>

      <div className="p-6 space-y-4">
        {subtitle ? <p className="text-sm text-gray-500">{subtitle}</p> : null}
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg object-contain"
          />
        ) : null}
        {description.map((paragraph, index) => (
          <p key={index} className="text-sm text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
