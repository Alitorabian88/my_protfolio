import React from 'react'
import WindowWrapper from "@/hoc/WindowWrapper.jsx";
import {socials} from "@/constants/index.js";
import {WindowControls} from "@/components/index.js";

function Contact() {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/adrian.jpg"
                    alt="Ali"
                    className="w-20 rounded-full"/>
                <h3>Let's Connect </h3>

                <p>Some Text</p>{/*Todo write something here*/}
                <p>ali.torabian88@gmail.com</p>
                <ul>
                    {socials.map(({id, bg, icon, link, text}) => (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>

                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
