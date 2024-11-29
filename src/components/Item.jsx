import React, { useEffect, useState} from "react";


function Item(props) {

    const [itemData, setItemData] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${props.number}`).then(
          response => response.json()
        ).then(
          data => {
            setItemData(data)
          }
        )
      }, [])

      return (
        <div className="md:w-[295px] w-[198px] md:mr-[20px] mr-4">
            <div className="w-full md:h-[298px] h-[200px] bg-[#F0EEED] relative rounded-[14px]">
                <img src={itemData.image ? itemData.image : null} alt="" className="absolute top-[10%] left-[10%] w-[80%] h-[80%] object-cover"/>
            </div>
            <p className="item-title md:mt-4 mt-3 md:h-[110px] h-[130px]">{itemData.title ? itemData.title : null}</p>
            <p className="h-[19px] font-satoshi">
              Rating: {itemData?.rating?.rate ? itemData.rating.rate : "-"}/5
            </p>
            <p className="font-bold md:h-8 h-6 md:text-3xl text-xl mt-2">{itemData.price ? itemData.price : null}$</p>
            <button className="bg-black text-white py-2 px-6 rounded-full w-full mt-[10px] h-12">
              Apply
            </button>
        </div>
        
      )
}

export default Item