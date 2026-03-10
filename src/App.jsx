// Packages
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";

// Components
import {Dock, Navbar, Welcome} from './components'
import {Safari, Terminal} from "@/windows";

// Styles
import './App.css'

gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari/>
        </main>
    )
}

export default App
