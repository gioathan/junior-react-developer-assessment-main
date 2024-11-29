import React from "react";
import "./App.css"
import Header from './components/Header'
import Items from "./components/Items";
import Categories from "./components/Categories";
import Footer from "./components/Footer"
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <SignUp />
      <Header />
      <Items
        margin="md:mt-[101px] mt-16"
        title="NEW ARRIVALS"
      />
      <hr class="border-t-2 border-gray-200 md:my-16 my-10 md:mx-[100px] mx-4" />
      <Items 
        margin=""
        title="TOP SELLING"
      />
      <Categories />
      <Footer />
    </div>



  )
}

export default App
