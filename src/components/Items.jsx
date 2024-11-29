import React from "react";
import Item from "./Item";

function Items(props){

    const number1 = Math.floor(Math.random() * 20) + 1;
    const number2 = Math.floor(Math.random() * 20) + 1;
    const number3 = Math.floor(Math.random() * 20) + 1;
    const number4 = Math.floor(Math.random() * 20) + 1;
    
    return (
        <div className={`${props.margin} md:mx-[100px] mx-4 flex flex-col justify-center items-center`}>
            <div className="items-title md:h-[58px] h-[38px] items-center">
                <p>{props.title}</p>
            </div>
            <div className="hidden [@media(min-width:1440px)]:flex w-full justify-between md:mt-14 mt-8">
                <Item number={number1}/>
                <Item number={number2}/>
                <Item number={number3}/>
                <Item number={number4}/>
            </div>

            <div className="flex [@media(min-width:1440px)]:hidden md:mt-14 mt-8 w-full">
                <div className="flex flex-row">
                    <Item number={number1}/>
                    <Item number={number2}/>
                    <Item number={number3}/>
                    <Item number={number4}/>
                </div>
            </div>
            <button className="bg-white text-black py-2 px-6 rounded-full md:w-[218px] w-full md:mt-16 mt-10 h-[52px] border-2 border-grey-600">
                View All
            </button>
        </div>
        

    )
}

export default Items