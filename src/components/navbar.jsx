// Packages
import dayjs from "dayjs";

// Store
import useWindowStore from "@/store/window.js";

// Component
import {navIcons, navLinks} from "@/constants";


function Navbar() {

    const {openWindow} = useWindowStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="MLogo"/>
                <p className="font-bold">Ali's Portfolio</p>

                <ul>
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>{name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id} className="icon-hover">
                            <img src={img} alt={`icon-${id}`}/>
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd MMM D H:mm")}</time>
            </div>
        </nav>
    );
}

export default Navbar;
