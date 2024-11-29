import React from "react";
import Variety from "./Variety";

function Header() {
    return (
      <div className="px-0.5 md:h-[663px] bg-[#F2F0F1]">
        <div className="hidden md:block mx-[100px] pt-[24px]">
            <nav class="flex items-center justify-between  h-12">
                <div className="flex items-center space-x-6">
                    <span className="text-l font-navbar" >SHOP.CO</span>

                    <button 
                      class="flex items-center justify-between py-2 text-sm nav-satoshi bg-[#F2F0F1] focus:outline-none"
                      id="dropdownButton"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      Shop
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="w-5 h-5 ml-2 text-gray-500" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fill-rule="evenodd" 
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" 
                          clip-rule="evenodd" 
                        />
                      </svg>
                    </button>

                    <a href="#" className="nav-satoshi">On sale</a>
                    <a href="#" className="nav-satoshi">New arrivals</a>
                    <a href="#" className="nav-satoshi">Brands</a>
                    <div className="flex">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                      </a>
                      <input
                      type="text"
                      placeholder="Search for products..."
                      class=" text-sm bg-[#F2F0F1] rounded focus:outline-none nav-satoshi"
                      />
                    </div>
                </div>
                <div class="text-gray-600 hover:text-gray-900">
                  <div className="flex">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
            </nav>
        </div>
        <div className="block md:hidden bg-white">
            <nav class="flex items-center justify-between mx-4 h-16">
                <div className="flex items-center space-x-6">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                    <span className="text-l font-navbar" >SHOP.CO</span>
                </div>
                <div class="text-gray-600 hover:text-gray-900">
                  <div className="flex">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
            </nav>
        </div>
            
        <div className="hidden md:flex">
          <div className="flex-1 ml-[100px]">
            <p className="font-integral mt-[127px] h-[173px] w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <p className="mt-[32px] w-[545px] h-[33px]] font-satoshi">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-full w-[210px] mt-8 h-[52px]">
              Shop Now
            </button>
            <div className="flex items-stretch space-x-4 w-[596px] mt-12 h-[74px]">
              <Variety
                number="200"
                text="International Brands"
              />
              <div className="border-l-2 border-[#0000001A]"></div>

              <Variety
                number="2,000"
                text="High-Quality Products"
              />

              <div className="border-l-2 border-[#0000001A]"></div>

              <Variety 
                number="30,000"
                text="Happy Customers"  
              />
            </div>
          </div>
          <div className="flex-1 relative h-[591px] w-full overflow-hidden">
            <img src="../images/react.png" alt="" className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"/>
          </div>
        </div>

        <div className="flex md:hidden flex-col">
          <p className="font-integral mt-10 mx-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className="mt-6 mx-4 font-satoshi">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full mt-6 h-[52px] mx-4">
              Shop Now
          </button>
          <div class="flex justify-between h-[52px] mt-6 mx-14">
            <Variety
              number="200"
              text="International Brands"
            />
            <div className="border-l-2 border-[#0000001A]"></div>
            <Variety
              number="2,000"
              text="High-Quality Products"
            />
          </div>
          <div className="flex items-center justify-center mt-3">
            <Variety 
              number="30,000"
              text="Happy Customers"  
            />
          </div>
          <div className="relative h-[448px] w-full">
            <img src="../images/react.png" alt="" className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"/>
          </div>
        </div>
        
      </div>
    )
}

export default Header