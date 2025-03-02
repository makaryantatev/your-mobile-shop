import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 30px;
    text-align: center;
    color: #252525;
    font-weight: 900;
`

export const IsSignUp = styled.p`
    margin: 10px 0 0 5px;
    font-size: 14px;
    color: #1a1a60;
    text-align: left;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;
    text-decoration: 1px #1a1a60 underline;
    &:hover{
        text-decoration: 1.5px #1a1a60 underline;
    }
`

export const MainDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; 
    background: linear-gradient(120deg, #f4f4f4, #e2e2e2);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;
`;

export const Form = styled.div`
    width: 100%;
    max-width: 430px;
    background: linear-gradient(120deg, #f0fbff, #f4f4f4);
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
    text-align: center;
`;

export let Input = styled.input`
    width: 100%;
    padding: 7px 40px 7px 12px; 
    border: 1px solid #818181;
    border-radius: 5px;
    background: linear-gradient(120deg, #f4f4f4, #f1fcff);
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    margin: 10px 0;
    transition: 0.3s ease-in-out;

    &:focus {
        border: 1px solid #ffc400;
        outline: none;
        box-shadow: 0px 0px 8px rgba(255, 196, 0, 0.5);
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #ffc400;
    font-size: 16px;
    font-weight: bold;
    color: #252525;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #e6a700;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }
`;

export const InputDiv = styled.div`
    position: relative;
    width: 100%;
`;

export const InputSpan = styled.span`
    position: absolute;
    right: 10px;
    top: 45%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #555;
    transition: 0.3s;

    &:hover {
        color: #000;
    }
`;
