// Packages
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

// Components
import { Dock, Navbar, Welcome } from "./components";
import { Finder, Resume, Safari, Terminal, Text, Image } from "@/windows";

// Styles
import "./App.css";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
    </main>
  );
}

export default App;
