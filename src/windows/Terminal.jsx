// Packages
import React from "react";
import {Check, Flag} from "lucide-react";

// Components
import {WindowControls} from "@/components/index.js";

// HOC
import WindowWrapper from "@/hoc/WindowWrapper.jsx";

// Constants
import {techStack} from "@/constants/index.js";

export const Terminal = () => {
    return (
        <>
            <div id="window-header">
               <WindowControls target = "terminal"/>
                <h2> Tech Stack</h2>
            </div>
            <div className="tech-stack">
                <p className="label">
                    <span className="font-bold"> @ali %</span> show tech stack
                </p>

                <div className="table-header">
                    <span>Category</span>
                    <span>Technologies</span>
                </div>

                <ul className="content">
                    {techStack.map(({category, items}) => (
                        <li key={category} className="flex items-center ">
                            <Check className="check"/>
                            <h3>{category}:</h3>
                            <span className="technologies">{items.join(", ")}</span>
                        </li>

                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check className="check" size={20}/>
                        {techStack.length} of {techStack.length} stacks loaded successfully
                        (100%)
                    </p>
                    <p className="text-black">
                        <Flag size={15} fill="black"/>
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
