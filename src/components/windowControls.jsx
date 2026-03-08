// Packages
import React from 'react'

// Store
import useWindowStore from "@/store/window.js";

export const WindowControls = ({target}) => {

    const {closeWindow} = useWindowStore();


    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)}/>
            <div className="minimize" />
            <div className="maximize" />
        </div>
    )
}
