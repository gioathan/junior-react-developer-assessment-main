import React from "react";
import FooterElement from "./FooterElement"

function Footer() {
    return (
        <div className="relative mt-14 ">
            <div className="bg-black relative z-10 md:mx-[100px] mx-4 md:h-[180px] h-[293px] rounded-[20px] flex md:justify-between items-center md:flex-row flex-col">
                <div class="md:w-[551px] mt-8 md:mb-8 sm:w-[500px] w-[297px] h-[90px] md:ml-16 text-left flex white-capitals">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </div>
                <div class="md:w-[349px] sm:w-[500px] w-[297px] h-[108px] md:mr-16 my-9 flex flex-col items-center justify-center">
                    <input
                    type="text"
                    placeholder="Enter your email address"
                    class=" text-sm bg-[#FFFFFF] h-12 rounded-[62px] mb-4 focus:outline-none w-full pl-[52px]"
                    />
                    <button className="bg-[#FFFFFF] text-black font-bold py-2 px-6 rounded-[62px] w-full h-12">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
            <div className="bg-[#F0F0F0] md:h-[499px] h-[800px] flex flex-col w-full md:-translate-y-[90px] -translate-y-[150px] z-0 ">
                <div className="md:mx-[100px] mx-4 md:h-[193px] h-[500px] md:mt-[140px] mt-[170px] flex ">
                    <div class="grid md:grid-cols-5 grid-cols-1 md:gap-10 w-full">
                        <div class="text-left relative">
                            <p className="footer-shop">SHOP.CO</p>
                            <p className="md:mt-[25px] mt-2 mb-3 footer-typo">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className="md:bottom-0 absolute grid grid-cols-4 gap-2">
                                <img src="../images/twitter.png" alt="" />
                                <img src="../images/facebook.png" alt="" />
                                <img src="../images/instagram.png" alt="" />
                                <img src="../images/github.png" alt="" />
                            </div>
                        </div>
                        <div class="flex sm:col-span-2 gap-10">
                            <FooterElement
                                title="COMPANY"
                                line1="About"
                                line2="Features"
                                line3="Works"
                                line4="Career"
                            />
                            <FooterElement
                                title="HELP"
                                line1="Customer Support"
                                line2="Delivery Details"
                                line3="Ters & Conditions"
                                line4="Privacy Policy"
                            />
                        </div>
                        <div class="flex sm:col-span-2 gap-10">
                            <FooterElement
                                title="FAQ"
                                line1="Account"
                                line2="Manage Deliveries"
                                line3="Orders"
                                line4="Payments"
                            />
                            <FooterElement
                                title="RESOURCES"
                                line1="Free eBooks"
                                line2="Development Tutorial"
                                line3="How to - Blog"
                                line4="Youtube Playlist"
                            />
                        </div>
                     </div>
                </div>
                <hr class="border-t-1 border-[#0000001A] md:mt-[80px] mb-6 md:mx-[100px] mx-4" />
                <div className="md:flex-row flex flex-col md:justify-between justify-center items-center md:mx-[100px] mx-4">
                    <p className="footer-typo text-center pb-5">Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="grid grid-cols-5 gap-3 pb-5 items-center">
                        <div className="bg-white w-12 h-8 rounded-md flex items-center justify-center">
                            <img src="../images/Visa.png" alt="" />
                        </div>
                        <div className="bg-white w-12 h-8 rounded-md flex items-center justify-center">
                            <img src="../images/Mastercard.png" alt="" />
                        </div>
                        <div className="bg-white w-12 h-8 rounded-md flex items-center justify-center">
                            <img src="../images/Paypal.png" alt="" />
                        </div>
                        <div className="bg-white w-12 h-8 rounded-md flex items-center justify-center">
                            <img src="../images/aPay.png" alt="" />
                        </div>
                        <div className="bg-white w-12 h-8 rounded-md flex items-center justify-center">
                            <img src="../images/gPay.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Footer

