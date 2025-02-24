import styled from "styled-components";


export let Footer = styled.div`
    width: 100%;
    height: auto;
    padding: 30px 30px 10px 30px;
    box-sizing: border-box;
    background: linear-gradient(120deg, #f4f4f4, #e2e2e2);
`

export let BoldP = styled.p`
    font-size: 18px; 
    color: #000000;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-family: Candara;
    font-weight: 900;
    display: inline-block;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0%;
        height: 2px;
        background-color: #ffc400; 
        transform: translateX(-50%);
        opacity: 0,3;
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        opacity: 1;
        width: 90%; 
    }
`;

export let Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;
    gap: 30px;
`;

export let Section = styled.div`
    text-align: center;
    flex: 1; 
    min-width: 220px;
`;

export let Icons = styled.span`
    color: #111111;
    font-size: 23px;
    transition: 0.3s all;
    margin: 5px;
    cursor: pointer;
    &:hover{
        color: #ffc400;
        transform: scale(1.2);
    }
`

export let InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px; 
`;

export let Input = styled.input`
    width: 100%;
    padding: 7px 40px 7px 10px; 
    border: 1px solid #6a6a6a;
    background-color: #f5f5f5;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;

    &:focus {
        border: 1px solid #ffc400;
        outline: 1px solid #ffc400;
    }
`;

export let InputIcon = styled.span`
    position: absolute;
    top: 40%;
    right: 10px; 
    transform: translateY(-50%);
    font-size: 20px;
    color: #111111;
    transition: 0.3s all;
    cursor: pointer;

    &:hover {
        color: #ffc400;
    }
`;

export let ShabatP = styled.p`
    font-size: 16px; 
    margin-bottom: 5px;
    color: #141414;
    font-weight: 500; 
    transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
    font-family: Candara;
    cursor: pointer;    
    font-weight: 700;
    display: inline-block;

    &:hover {
        color: #ffb700;
        transform: translateX(3px);
    }
`;

export let Cp = styled.p`
    text-align: center;
    font-size: 13px;
    color: #4c4c4c;
    font-family: sans-serif; 
`