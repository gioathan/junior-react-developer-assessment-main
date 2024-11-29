import React from "react";

function Variety(props) {
    return (
        <div>
            <p className="font-bold md:text-[40px] text-[24px]">{props.number}+</p>
            <p className="font-satoshi">{props.text}</p>
        </div>
        
    )
}

export default Variety