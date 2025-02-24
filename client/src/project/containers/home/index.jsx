import React from "react";
import { MyCarousel } from "../../components";
import { PartsDiv } from "../../components/parts";
import { MyProduct } from "../../components/phones/products";

export let MyHomePage = () => {
    return(
        <>
           <MyCarousel />
           <PartsDiv/>
           <MyProduct/>
        </>
    )
} 