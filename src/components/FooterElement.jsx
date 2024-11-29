import React from "react";

function FooterElement(props) {
    return(
        <div class="mt-2 w-full">
            <p className="footer-title">{props.title}</p>
            <div className="grid grid-rows-4 gap-3.5 md:mt-[45px] mt-4">
                <a href="#" className="footer-typo">{props.line1}</a>
                <a href="#" className="footer-typo">{props.line2}</a>
                <a href="#" className="footer-typo">{props.line3}</a>
                <a href="#" className="footer-typo">{props.line4}</a>
            </div>
        </div>
    )
}

export default FooterElement