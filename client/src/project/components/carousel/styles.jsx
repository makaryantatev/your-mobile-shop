import styled from "styled-components";

export let BuyBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 21%;
    padding: 5px 20px;
    text-align: center;
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
    color: black;
    transition: 0.5s all;
    &:hover{
        transform: scale(1.1);
    }
`