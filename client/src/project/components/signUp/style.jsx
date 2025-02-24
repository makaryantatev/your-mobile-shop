import styled from "styled-components";

export const MainDiv = styled.div`
    position: relative;
    margin-top: 80px;
    width: 100%;
    height: 80vh;
    padding: 50px 0;
    background: linear-gradient(120deg, #f4f4f4, #e2e2e2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px !important;
`
export const Form = styled.div`
    width: 35%;
    height: auto;
    background: linear-gradient(120deg, #f0fbff, #f4f4f4);
    margin: auto;
    padding: 50px 30px 100px 30px;
    border-radius: 20px;
    transform: translateY(50px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
`
export let Input = styled.input`
    width: 100%;
    padding: 7px 40px 7px 10px; 
    border: 1px solid #818181;
    border-radius: 5px;
    background: linear-gradient(120deg, #f4f4f4, #f1fcff);

    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    margin: 5px 0;

    &:focus {
        border: 1px solid #ffc400;
        outline: 1px solid #ffc400;
    }
`
export const H1 = styled.h1`
    font-size: 30px;
    text-align: center;
    color: #252525;
    font-weight: 900;
`

export const Button = styled.button`
    width: 20%;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #d6f1ff;
    float: right;
    font-weight: 900;
    border: none;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
        transform: scale(1.1);
    }
`