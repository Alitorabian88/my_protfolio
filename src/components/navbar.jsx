
import dayjs from "dayjs";
import {navIcons, navLinks} from "@/constants";


function Navbar() {
    return (
        <nav>
            <div>

                <img src="/images/logo.svg" alt="MLogo"/>
                <p className="font-bold">Ali's Portfolio</p>

                <ul>
                    {navLinks.map(({id, name}) => (<li key={id}>{name}</li>
                    ))}
                </ul>

            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) =>
                        (
                            <li key={id} className="icon-hover">
                                <img src={img} alt={`icon-${id}`}/>
                            </li>
                        ))}
                </ul>
                <time>{dayjs().format('ddd MMM D H:mm')}</time>
            </div>
        </nav>
    )
}

export default Navbar
