import React from "react";
import { MyCarousel } from "../../components";
import { PartsDiv } from "../../components/parts";
import { MyProduct } from "../../components/phones/products";
import { Reviews } from "../../components/reviews";

export let MyHomePage = () => {
    return(
        <>
           <MyCarousel />
           <PartsDiv/>
           <MyProduct/>
           <Reviews/>
        </>
    )
} 