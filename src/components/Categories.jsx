import React, { useEffect, useState} from "react";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function Categories() {

const [categoriesData, setCategoriesData] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/categories`).then(
          response => response.json()
        ).then(
          data => {
            setCategoriesData(data)
          }
        )
      }, [])


    return (
        <div className="bg-[#F0F0F0] md:mx-[100px] mx-4 md:mt-16 mt-10 md:h-[875px] h-[1010px] md:rounded-[40px] rounded-[20px]">
            <p className="items-title md:py-20 pt-10 pb-3 text-center">BROWSE BY ITEM CATEGORIES</p>
            <div className="flex flex-col justify-center items-center md:mx-16 mx-5">
                <div className="md:flex w-full md:mb-[20px] ">
                    <div className="md:w-2/5 w-full md:h-72 h-[190px] md:mr-[20px] rounded-[20px] electronics">
                        <p className="category h-[49px] mt-[25px] md:ml-9 ml-6">
                            {categoriesData[0] ? capitalizeFirstLetter(categoriesData[0]) : "Loading..."}
                        </p>   
                    </div>
                    <div className="md:w-3/ w-full md:h-72 h-[190px] rounded-[20px] jewelery">
                        <p className="category h-[49px] mt-[25px] md:ml-9 ml-6">
                            {categoriesData[1] ? capitalizeFirstLetter(categoriesData[1]) : "Loading..."}
                        </p>  
                    </div>
                </div>
                <div className="md:flex w-full mb-20 h-72">
                    <div className="md:w-3/5 w-full md:h-72 h-[190px] md:mr-[20px] rounded-[20px] men">
                        <p className="category h-[49px] mt-[25px] md:ml-9 ml-6">
                            {categoriesData[2] ? capitalizeFirstLetter(categoriesData[2]) : "Loading..."}
                        </p>  
                    </div>
                    <div className="md:w-2/5 w-full md:h-72 h-[190px] rounded-[20px] women">
                        <p className="category h-[49px] mt-[25px] md:ml-9 ml-6">
                            {categoriesData[3] ? capitalizeFirstLetter(categoriesData[3]) : "Loading..."}   
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories